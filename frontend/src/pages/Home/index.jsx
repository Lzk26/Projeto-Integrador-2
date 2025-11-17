// src/pages/Home/index.jsx
import { useEffect, useState } from "react";
import { getGames } from "../../services/api";
import GameCard from "../../components/GameCard";
import "./Home.css";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function loadGames() {
      const data = await getGames();
      setGames(data);
    }
    loadGames();
  }, []);

  return (
    <div className="page-container">
      {/* ========== BANNER PRINCIPAL ========== */}
      <div className="banner">
        <div className="banner-img-container">
          <img
            src="/BannerCupons.png"
            alt="Promoção TrapDoor"
            className="banner-img"
          />
        </div>
      </div>

      {/* ========== TÍTULO ========== */}
      <h2 className="title-large">Jogos em destaque</h2>
      <p className="subtitle">Explore os jogos disponíveis na plataforma</p>

      {/* ========== GRID DE JOGOS ========== */}
      <section>
        <div className="card-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* ========== SEGUNDO BANNER ========== */}
      <div className="banner">
        <div className="banner-img-container">
          <img
            src="/BannerDescontoEpico.png"
            alt="Muitos Cupons"
            className="banner-img"
          />
        </div>
      </div>
    </div>
  );
}
