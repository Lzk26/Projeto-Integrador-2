const API_URL = 'http://localhost:3333';

export async function getGames() {
    const res = await fetch(`${API_URL}/games`);
    return await res.json();
}

export async function getGameById(id) {
    const res = await fetch(`${API_URL}/games/${id}`);
    return await res.json();
}