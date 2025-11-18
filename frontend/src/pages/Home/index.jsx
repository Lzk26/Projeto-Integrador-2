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

  // Divide os jogos em 2 blocos de 8 itens
  const firstBatch = games.slice(0, 8);
  const secondBatch = games.slice(8, 16);

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

      {/* ========== PRIMEIRA GRID (8 jogos) ========== */}
      <section>
        <div className="card-grid">
          {firstBatch.map((game) => (
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

      {/* ========== SEGUNDA GRID (8 jogos seguintes) ========== */}
      <section>
        <div className="card-grid">
          {secondBatch.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

    </div>
  );
}
