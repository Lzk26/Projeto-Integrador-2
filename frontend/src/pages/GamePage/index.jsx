import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { getGameById } from "../../services/api";
import { addToCart } from "../../services/cart";

import "./GamePage.css";

export default function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [zoom, setZoom] = useState(null);

  const navigate = useNavigate();

  // ================================
  // Adicionar ao carrinho
  // ================================
  async function handleAddToCart() {
    if (!game) return;

    const res = await addToCart(game.id);

    if (res.error) {
      alert(res.error);
      return;
    }

    alert("Jogo adicionado ao carrinho!");
    navigate("/carrinho");
  }

  // ================================
  // Carregar jogo
  // ================================
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
        <h1 className="text-2xl font-bold">Carregando jogo...</h1>
      </div>
    );
  }

  const thumbnails = game.thumbnails?.length
    ? game.thumbnails.map((t) => t.url)
    : [game.cover];

  return (
    <div className="game-page">
      <div className="game-wrapper">

        {/* ================== VÍDEO + INFO ================== */}
        <div className="game-container">

          {/* Trailer */}
          <div className="game-video">
            <iframe
              className="w-full h-full rounded-2xl"
              src={game.video}
              title={`${game.title} Trailer`}
              allowFullScreen
            ></iframe>
          </div>

          {/* Informações principais */}
          <div className="game-info">
            <img src={game.cover} alt={game.title} className="game-cover" />

            <h1 className="text-3xl font-bold mb-3">{game.title}</h1>

            <p className="game-description">{game.description}</p>

            <p className="game-price">R$ {Number(game.price).toFixed(2)}</p>

            {/* ================== BOTÕES DE COMPRA ================== */}
            <div className="flex items-center gap-3 mt-3 w-full">
              <div className="flex items-center justify-between w-full gap-3">

                {/* Comprar → vai para pagamento */}
                <button
                  onClick={() => navigate("/pagamento")}
                  className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-md text-sm font-medium transition"
                >
                  Comprar
                </button>

                {/* Adicionar ao carrinho */}
                <button
                  title="Adicionar ao carrinho"
                  onClick={handleAddToCart}
                  className="gp-cart-btn"
                >
                  <FaShoppingCart className="gp-cart-icon" />
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* ================== MINIATURAS ================== */}
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {thumbnails.map((img, i) => (
            <button key={i} onClick={() => setZoom(img)} className="thumb-btn">
              <img src={img} className="thumb-img" />
            </button>
          ))}
        </div>

        {/* ================== ZOOM ================== */}
        {zoom && (
          <div className="zoom-modal" onClick={() => setZoom(null)}>
            <img src={zoom} className="zoom-img" />
          </div>
        )}

        {/* ================== DETALHES ================== */}
        <div className="details-section">

          {/* LADO ESQUERDO — IDIOMAS */}
          <div className="details-left">
            <h3 className="text-lg font-bold mb-3">Idiomas</h3>

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

          {/* LADO DIREITO — INFOS E TAGS */}
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

        {/* ================== REQUISITOS ================== */}
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
