import { FaWindows, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

export default function GameCard({ game }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <Link to={`/jogo/${game.id}`} className="game-card group">

      {/* Topo */}
      <div className="game-card-header">
        <span className="platform">Steam</span>
      </div>

      {/* Imagem */}
      <div className="image-container">
        <img src={game.cover} alt={game.title} className="game-card-image" />

        {/* Botão de favoritar */}
        <button
          className={`favorite-btn ${favorited ? "favorited" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setFavorited(!favorited);
          }}
        >
          <FaHeart />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="game-card-content bg-gradient-to-r from-[#5E17EB] to-[#350D85]">

        {/* Título */}
        <h3 className="game-card-title">{game.title}</h3>

        {/* Plataforma */}
        <div className="game-card-platform">
          <FaWindows className="icon" />
          <span>Windows</span>
        </div>

        {/* Timer fake (igual ao original) */}
        <div className="game-card-timer">
          <span className="icon">⏱</span>
          <span>02d 01:15:12</span>
        </div>

        <div className="game-card-bottom">

          {/* Badge de desconto (se existir) */}
          {game.discount ? (
            <span className="discount-badge">-{game.discount}%</span>
          ) : (
            <span className="discount-badge">-20%</span>
          )}

          {/* Caixa de preço */}
          <div className="price-box">
            <FaShoppingCart className="cart-icon" />
            <span className="game-card-price">
              R$ {Number(game.price).toFixed(2)}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}
