const API_URL = "http://localhost:3333";

function getToken() {
  return localStorage.getItem("trapdoor_token");
}

// ==========================================
// PEGAR DADOS DO USUÁRIO AUTENTICADO
// ==========================================
export async function getMe() {
  const res = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
}
