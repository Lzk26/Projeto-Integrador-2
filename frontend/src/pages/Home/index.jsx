import { useEffect, useState } from "react";
import { getGames } from "../../services/api";
import { Link } from "react-router-dom";
import './Home.css'

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
            src="/src/assets/mainbanner.png"
            alt="Promoção TrapDoor"
            className="banner-img"
          />
        </div>
      </div>

      {/* ========== TÍTULO ========== */}
      <h2 className="title-large">Jogos em destaque</h2>
      <p className="subtitle">Explore os jogos disponíveis na plataforma</p>

      {/* ========== GRID DE JOGOS DINÂMICA ========== */}
      <section>
        <div className="card-grid">
          {games.map((game) => (
            <Link to={`/jogo/${game.id}`} key={game.id} className="game-card group">

              {/* Cabeçalho com “Steam” */}
              <div className="game-card-header">
                <div className="platform">Steam</div>
              </div>

              {/* Imagem */}
              <div className="image-container">
                <img src={game.cover} alt={game.title} className="game-card-image" />
              </div>

              {/* Conteúdo */}
              <div className="game-card-content">
                <h3 className="game-card-title">{game.title}</h3>

                <div className="game-card-bottom">
                  <span className="price-box">R$ {Number(game.price).toFixed(2)}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

      {/* ========== SEGUNDO BANNER ========== */}
      <div className="banner">
        <div className="banner-img-container">
          <img
            src="/src/assets/banner2.png"
            alt="Muitos Cupons"
            className="banner-img"
          />
        </div>
      </div>

    </div>
  );
}
