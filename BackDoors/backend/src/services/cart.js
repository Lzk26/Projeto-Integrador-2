const API_URL = "http://localhost:3333";

// Lê o token JWT salvo no navegador
function getToken() {
  return localStorage.getItem("trapdoor_token");
}

// GET /cart — obter carrinho
export async function getCart() {
  const res = await fetch(`${API_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
}

// POST /cart/add — adicionar item
export async function addToCart(gameId) {
  const res = await fetch(`${API_URL}/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ gameId }),
  });
  return res.json();
}

// POST /cart/remove — remover item
export async function removeFromCart(gameId) {
  const res = await fetch(`${API_URL}/cart/remove`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ gameId }),
  });
  return res.json();
}

// POST /cart/clear — limpar carrinho
export async function clearCart() {
  const res = await fetch(`${API_URL}/cart/clear`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  return res.json();
}
