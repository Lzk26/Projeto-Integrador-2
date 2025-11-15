import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getGameById } from "../../services/api";
import "./GamePage.css";

export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    async function loadGame() {
      const data = await getGameById(id);
      setGame(data);
    }
    loadGame();
  }, [id]);

  if (!game) {
    return (
      <div className="game-page">
        <h1>Carregando jogo...</h1>
      </div>
    );
  }

  const thumbnails = game.thumbnails?.length
    ? game.thumbnails.map((t) => t.url)
    : [game.cover];

  return (
    <div className="game-page">

      <div className="game-wrapper">

        {/* ========== VÍDEO + INFO ========== */}
        <div className="game-container">

          {/* Vídeo */}
          <div className="game-video">
            <iframe
              className="w-full h-full rounded-2xl"
              src={game.video}
              title={`${game.title} Trailer`}
              allowFullScreen
            ></iframe>
          </div>

          {/* Informações */}
          <div className="game-info">
            <img src={game.cover} alt={game.title} className="game-cover" />

            <h1 className="text-3xl font-bold mb-3">{game.title}</h1>

            <p className="game-description">{game.description}</p>

            <p className="game-price">R$ {Number(game.price).toFixed(2)}</p>

            <Link to="/pagamento">
              <button className="buy-button">Comprar</button>
            </Link>
          </div>
        </div>

        {/* MINIATURAS */}
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {thumbnails.map((img, index) => (
            <button
              key={index}
              onClick={() => setZoom(img)}
              className="thumb-btn"
            >
              <img src={img} className="thumb-img" />
            </button>
          ))}
        </div>

        {/* ZOOM */}
        {zoom && (
          <div className="zoom-modal" onClick={() => setZoom(null)}>
            <img src={zoom} className="zoom-img" />
          </div>
        )}

        {/* ========== SEÇÃO DE DETALHES ========== */}
        <div className="details-section">
          <div className="details-left">
            <h3 className="details-title">Idiomas</h3>

            <div className="languages-grid">
              <div className="language-row">
                <span className="language-name">English</span>
                <span className="language-item">✔ Interface</span>
                <span className="language-item">✔ Áudio</span>
                <span className="language-item">✔ Legendas</span>
              </div>

              <div className="language-row">
                <span className="language-name">Português (Brasil)</span>
                <span className="language-item">✔ Interface</span>
                <span className="language-item">✖ Áudio</span>
                <span className="language-item">✔ Legendas</span>
              </div>
            </div>
          </div>

          <div className="details-right">
            <div className="tag-list">
              <span className="tag">Ação</span>
              <span className="tag">Aventura</span>
              <span className="tag">Single-player</span>
            </div>

            <div className="info-section mt-6">
              <p><strong>Lançamento:</strong> {game.year}</p>
              <p><strong>Desenvolvedor:</strong> {game.developer}</p>
              <p><strong>Distribuidor:</strong> {game.publisher}</p>

              <div className="rating-box mt-4">
                <span className="rating-number">16</span>
                <p>Não recomendado para menores de 16 anos</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== REQUISITOS ========== */}
        <section className="requirements-section">
          <h2 className="requirements-title">Requisitos de Sistema</h2>

          <div className="os-tag">
            <span className="os-icon">💻</span> Windows
          </div>

          <div className="requirements-grid">
            <div>
              <h3 className="requirements-subtitle">Mínimos</h3>
              <p><strong>Processador:</strong> i5 / Ryzen 3</p>
              <p><strong>Memória:</strong> 8 GB</p>
              <p><strong>Placa de vídeo:</strong> GTX 1050 / RX 560</p>
            </div>

            <div>
              <h3 className="requirements-subtitle">Recomendados</h3>
              <p><strong>Processador:</strong> i7 / Ryzen 5</p>
              <p><strong>Memória:</strong> 16 GB</p>
              <p><strong>Placa de vídeo:</strong> GTX 1060 / RX 590</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
