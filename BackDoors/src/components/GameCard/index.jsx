import './GameCard.css';

function GameCard({ image, title, price, discount }) {
  return (
    <div className="game-card">
      <div className="game-image">
        <img src={image} alt={title} />
      </div>

      <div className="game-info">
        <h3>{title}</h3>
        <div className="price-box">
          <span className="discount">-{discount}%</span>
          <span className="price">R$ {price}</span>
        </div>

        <div className="buttons">
          <button className="favorite-btn">♥</button>
          <button className="buy-btn">Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
