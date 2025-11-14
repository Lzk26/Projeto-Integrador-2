const API_URL = "http://localhost:3333";

function getToken() {
  return localStorage.getItem("trapdoor_token");
}

export async function finalizeOrder() {
  const res = await fetch(`${API_URL}/checkout`, {
    method: "POST",
    headers: { 
      Authorization: `Bearer ${getToken()}` 
    }
  });

  return res.json();
}
