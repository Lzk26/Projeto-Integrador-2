import { FaWindows, FaClock, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, price, discount, image }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="game-card relative group">
      {/* 🔹 Steam centralizado */}
      <div className="game-card-steam">
        <span>STEAM</span>
      </div>

      {/* 🔹 Imagem */}
      <div className="image-container">
        <img src={image} alt={title} className="game-card-image" />

        {/* Favoritar */}
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

      {/* 🔹 Conteúdo */}
      <div className="game-card-content">
        <h3 className="game-card-title">{title}</h3>

        <div className="game-card-info">
          <div className="info-item">
            <FaWindows className="icon" />
            <span>Windows</span>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <span>02d 01:15:12</span>
          </div>
        </div>

        {/* 🔹 Parte inferior */}
        <div className="game-card-footer">
          <span className="discount-badge">-{discount}%</span>
          <div className="action-buttons">
            <Link to="/pagamento" className="btn-buy">
              Comprar
            </Link>
            <Link to="/carrinho" className="btn-cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
