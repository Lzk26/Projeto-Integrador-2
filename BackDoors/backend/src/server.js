// ==========================
// IMPORTS
// ==========================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const JWT_SECRET = "trapdoor_secret_key";

// ==========================
// MIDDLEWARE: AUTENTICAÇÃO
// ==========================
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

// ==========================
// CONFIGURAÇÕES
// ==========================
app.use(cors());
app.use(express.json());

// ==========================
// ROTA PRINCIPAL
// ==========================
app.get("/", (req, res) => {
  res.json({ message: "API Trapdoor funcionando 🚀" });
});

// ==========================
// JOGOS
// ==========================
app.get("/games", async (req, res) => {
  const games = await prisma.game.findMany({
    include: { thumbnails: true },
  });

  res.json(games);
});

app.get("/games/:id", async (req, res) => {
  const { id } = req.params;

  const game = await prisma.game.findUnique({
    where: { id },
    include: { thumbnails: true },
  });

  if (!game) {
    return res.status(404).json({ error: "Jogo não encontrado" });
  }

  res.json(game);
});

// ==========================
// AUTENTICAÇÃO: REGISTRO
// ==========================
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

// ==========================
// AUTENTICAÇÃO: LOGIN
// ==========================
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
// USER: DADOS DO PERFIL
// ==========================
app.get("/me", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });

  res.json(user);
});

// ==========================
// PEDIDOS: LISTAR TODOS
// ==========================
app.get("/orders", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  const orders = await prisma.order.findMany({
    where: { userId },
    include: {
      items: { include: { game: true } },
    },
    orderBy: { createdAt: "desc" },
  });

  res.json(orders);
});

// ==========================
// PEDIDOS: DETALHE DO PEDIDO
// ==========================
app.get("/orders/:id", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const orderId = Number(req.params.id);

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: { include: { game: true } },
    },
  });

  if (!order || order.userId !== userId) {
    return res.status(404).json({ error: "Pedido não encontrado" });
  }

  res.json(order);
});

// ==========================
// CARRINHO: OBTER CARRINHO
// ==========================
app.get("/cart", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  let cart = await prisma.cart.findUnique({
    where: { userId },
    include: { items: { include: { game: true } } },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
      include: { items: true },
    });
  }

  res.json(cart);
});

// ==========================
// CARRINHO: ADICIONAR ITEM
// ==========================
app.post("/cart/add", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;

  let cart = await prisma.cart.findUnique({ where: { userId } });

  if (!cart) {
    cart = await prisma.cart.create({ data: { userId } });
  }

  const existing = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, gameId },
  });

  if (existing) {
    return res.json({ message: "Jogo já está no carrinho" });
  }

  await prisma.cartItem.create({
    data: { cartId: cart.id, gameId },
  });

  res.json({ message: "Jogo adicionado ao carrinho!" });
});

// ==========================
// CARRINHO: REMOVER ITEM
// ==========================
app.post("/cart/remove", authMiddleware, async (req, res) => {
  const userId = req.user.id;
  const { gameId } = req.body;

  const cart = await prisma.cart.findUnique({ where: { userId } });

  if (!cart) {
    return res.status(400).json({ error: "Carrinho não encontrado" });
  }

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id, gameId },
  });

  res.json({ message: "Item removido do carrinho" });
});

// ==========================
// CARRINHO: LIMPAR
// ==========================
app.post("/cart/clear", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  const cart = await prisma.cart.findUnique({ where: { userId } });

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

  const cart = await prisma.cart.findUnique({
    where: { userId },
    include: { items: { include: { game: true } } },
  });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ error: "Carrinho está vazio" });
  }

  const total = cart.items.reduce(
    (sum, item) => sum + Number(item.game.price),
    0
  );

  const order = await prisma.order.create({
    data: {
      userId,
      total,
      items: {
        create: cart.items.map((item) => ({
          gameId: item.gameId,
          price: item.game.price,
        })),
      },
    },
    include: { items: true },
  });

  await prisma.cartItem.deleteMany({
    where: { cartId: cart.id },
  });

  res.json({ message: "Compra finalizada com sucesso!", order });
});

// ==========================
// INICIAR SERVIDOR
// ==========================
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
