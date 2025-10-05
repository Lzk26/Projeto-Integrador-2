import './GameCard.css'

const GameCard = ({ title, price, image }) => {
  return (
    <div className="game-card">
      <div className="game-card-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span>[imagem]</span>
        )}
      </div>
      <div className="game-card-info">
        <h3>{title || "Título do jogo"}</h3>
        <p className="price">{price || "R$ 0,00"}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default GameCard;
