const API_URL = "http://localhost:3333";

function getToken() {
  return localStorage.getItem("trapdoor_token");
}

// LISTAR PEDIDOS DO USUÁRIO
export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}

// DETALHES DE UM PEDIDO ESPECÍFICO
export async function getOrderById(id) {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}
