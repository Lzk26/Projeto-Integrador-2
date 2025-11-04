import { FaWindows, FaClock, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

export default function GameCard({ title, price, discount, image }) {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="game-card">
      {/* Topo */}
      <div className="game-card-header">
        <span className="platform">Steam</span>
      </div>

      {/* Imagem */}
      <div className="image-container">
        <img src={image} alt={title} className="game-card-image" />

        {/* Botão de favoritar*/}
        <button
          className={`favorite-btn ${favorited ? 'favorited' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setFavorited(!favorited);
          }}
        >
          <FaHeart />
        </button>
      </div>

      {/* Conteúdo */}
      <div className="game-card-content">
        <h3 className="game-card-title">{title}</h3>

        <div className="game-card-platform">
          <FaWindows className="icon" />
          <span>Windows</span>
        </div>

        <div className="game-card-timer">
          <FaClock className="icon" />
          <span>02d 01:15:12</span>
        </div>

        <div className="game-card-bottom">
          <span className="discount-badge">-{discount}%</span>

          {/* Caixa de preço ampliada */}
          <div className="price-box">
            <FaShoppingCart className="cart-icon" />
            <span className="game-card-price">R$ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
