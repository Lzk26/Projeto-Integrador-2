import { useParams } from "react-router-dom";
import { gamesData } from "../../gamesData";

export default function GamePage() {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="game-page">
        <h1 className="text-2xl font-bold mt-20">Jogo não encontrado 😢</h1>
      </div>
    );
  }

  return (
    <div className="game-page">
      {/* 🔲 GRANDE BOX PRINCIPAL */}
      <div className="game-wrapper">
        
        {/* TOPO: VÍDEO + INFO */}
        <div className="game-container">
          <div className="game-video">
            {game.video ? (
              <video controls src={game.video}></video>
            ) : (
              <p className="game-video-placeholder">[ Coloque aqui o vídeo do jogo ]</p>
            )}
          </div>

          <div className="game-info">
            <img src={game.cover} alt={game.title} className="game-cover" />
            <h1 className="game-title">{game.title}</h1>
            <p className="game-description">{game.description}</p>
            <p className="game-price">R$ {game.price}</p>
            <button className="buy-button">Comprar</button>
          </div>
        </div>

        {/* MINIATURAS */}
        <div className="thumbnail-list">
          <div className="thumbnail-item"><img src="" alt="thumb 1" /></div>
          <div className="thumbnail-item"><img src="" alt="thumb 2" /></div>
          <div className="thumbnail-item"><img src="" alt="thumb 3" /></div>
        </div>

        {/* INFORMAÇÕES EXTRAS */}
        <div className="details-section">
          <div className="info-left">
            <h3 className="details-title">Informações</h3>
            <p>Lançamento: 2022</p>
            <p>Desenvolvedor: Kojima Productions</p>
            <p>Distribuidor: 505 Games</p>
          </div>

          <div className="info-right">
            <h3 className="details-title">Categoria/Gênero</h3>
            <div className="tag-list">
              <span className="tag">Ação</span>
              <span className="tag">Aventura</span>
              <span className="tag">Ficção Científica</span>
            </div>
            <div className="rating-box">
              <span className="rating-number">16</span>
              <p>Não recomendado para menores de 16 anos</p>
            </div>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className="requirements-section">
          <h2 className="requirements-title">Requisitos de Sistema</h2>
          <div className="requirements-grid">
            <div>
              <h3 className="requirements-subtitle">Mínimos</h3>
              {game.requisitos.minimos.map((req, i) => (
                <p key={i}>{req}</p>
              ))}
            </div>
            <div>
              <h3 className="requirements-subtitle">Recomendados</h3>
              {game.requisitos.recomendados.map((req, i) => (
                <p key={i}>{req}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
