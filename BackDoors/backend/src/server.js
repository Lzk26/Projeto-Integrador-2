import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = auth.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // agora req.user.id é o id do usuário logado
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token inválido" });
  }
}


dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ==========================
// ROTA PRINCIPAL
// ==========================
app.get("/", (req, res) => {
  res.json({ message: "API Trapdoor funcionando 🚀" });
});

// ==========================
// LISTAR TODOS OS JOGOS
// ==========================
app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      thumbnails: true,
    },
  });

  res.json(games);
});

// ==========================
// JOGO POR ID
// ==========================
app.get("/games/:id", async (req, res) => {
  const { id } = req.params;

  const game = await prisma.game.findUnique({
    where: { id },
    include: {
      thumbnails: true,
    },
  });

  if (!game) {
    return res.status(404).json({ error: "Jogo não encontrado" });
  }

  res.json(game);
});

// ==========================
// CADASTRAR USUÁRIO
// ==========================
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = "trapdoor_secret_key";

// CADASTRAR
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  const existing = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { username }],
    },
  });

  if (existing) {
    return res.status(400).json({ error: "Usuário ou email já existe" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { username, email, password: hashed },
  });

  res.json({ message: "Usuário criado com sucesso!" });
});

// LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) return res.status(400).json({ error: "Usuário não encontrado" });

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) return res.status(400).json({ error: "Senha incorreta" });

  const token = jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ message: "Logado com sucesso!", token });
});

// ==========================
// INICIAR SERVIDOR
// ==========================
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});



// ==========================
// OBTER CARRINHO DO USUÁRIO
// ==========================
app.get("/cart", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: { game: true }
      }
    },
  });

  // Se o usuário ainda não tem carrinho, cria agora
  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
      include: { items: true },
    });
  }

  res.json(cart);
});

// ==========================
// ADICIONAR ITEM AO CARRINHO
// ==========================
app.post("/cart/add", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;

  let cart = await prisma.cart.findUnique({
    where: { userId },
  });

  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } });
  }

  // Verifica se o jogo já existe no carrinho
  const existing = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, gameId },
  });

  if (existing) {
    return res.json({ message: "Jogo já está no carrinho" });
  }

  await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      gameId,
    },
  });

  res.json({ message: "Jogo adicionado ao carrinho!" });
});

// ==========================
// REMOVER ITEM DO CARRINHO
// ==========================
app.post("/cart/remove", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;

  const cart = await prisma.cart.findUnique({
    where: { userId },
  });

  if (!cart) {
    return res.status(400).json({ error: "Carrinho não encontrado" });
  }

  await prisma.cartItem.deleteMany({
    where: {
      cartId: cart.id,
      gameId,
    },
  });

  res.json({ message: "Item removido do carrinho" });
});

// ==========================
// LIMPAR CARRINHO
// ==========================
app.post("/cart/clear", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  const cart = await prisma.cart.findUnique({
    where: { userId },
  });

  if (!cart) {
    return res.status(400).json({ error: "Carrinho não encontrado" });
  }

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id },
  });

  res.json({ message: "Carrinho limpo" });
});



// ==========================
// FINALIZAR COMPRA
// ==========================
app.post("/checkout", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  // Carrega o carrinho do usuário
  const cart = await prisma.cart.findUnique({
    where: { userId },
    include: {
      items: {
        include: { game: true }
      }
    }
  });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ error: "Carrinho está vazio" });
  }

  // Cálculo do total
  const total = cart.items.reduce(
    (sum, item) => sum + Number(item.game.price),
    0
  );

  // Criar pedido
  const order = await prisma.order.create({
    data: {
      userId,
      total,
      items: {
        create: cart.items.map((item) => ({
          gameId: item.gameId,
          price: item.game.price
        }))
      }
    },
    include: { items: true }
  });

  // Limpar carrinho
  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id }
  });

  res.json({
    message: "Compra finalizada com sucesso!",
    order
  });
});
