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
  <iframe
    className="w-full h-full rounded-2xl"
    src="https://www.youtube.com/embed/hsE2MmN4wtw"
    title="Death Stranding Director’s Cut Trailer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
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
  {/* COLUNA ESQUERDA — Idiomas */}
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
      <div className="language-row">
        <span className="language-name">Français</span>
        <span className="language-item">✔ Interface</span>
        <span className="language-item">✖ Áudio</span>
        <span className="language-item">✔ Legendas</span>
      </div>
    </div>
  </div>

  {/* COLUNA DIREITA — Tags e Informações */}
  <div className="details-right">
    {/* TOPO DIREITO: Tags */}
    <div className="tags-section">
      <h3 className="details-title">Categoria / Gênero</h3>
      <div className="tag-list">
        <span className="tag">Ação</span>
        <span className="tag">Aventura</span>
        <span className="tag">Ficção Científica</span>
      </div>
    </div>

    {/* BASE DIREITA: Informações */}
    <div className="info-section">
      <h3 className="details-title mt-4">Informações</h3>
      <p><strong>Lançamento:</strong> 2022</p>
      <p><strong>Desenvolvedor:</strong> Kojima Productions</p>
      <p><strong>Distribuidor:</strong> 505 Games</p>
      <div className="rating-box mt-3">
        <span className="rating-number">16</span>
        <p>Não recomendado para menores de 16 anos</p>
      </div>
    </div>
  </div>
</div>


        {/* REQUISITOS */}
        {/* REQUISITOS DO SISTEMA */}
<section className="requirements-section">
  <h2 className="requirements-title">Requisitos de Sistema</h2>

  {/* Ícone do Windows */}
  <div className="os-tag">
    <span className="os-icon">💻</span>
    <span>Windows</span>
  </div>

  {/* Grade de requisitos */}
  <div className="requirements-grid">
    {/* Coluna: Mínimos */}
    <div>
      <h3 className="requirements-subtitle">MÍNIMOS</h3>
      <p><strong>SO:</strong> Windows® 10</p>
      <p><strong>Armazenamento:</strong> 80 GB</p>
      <p><strong>Processador:</strong> Intel® Core™ i5-3470 / AMD Ryzen™ 3 1200</p>
      <p><strong>Memória:</strong> 8 GB RAM</p>
      <p><strong>Placa de vídeo:</strong> GeForce GTX 1050 4 GB / AMD Radeon™ RX 560 4 GB</p>
      <p><strong>Placa de som:</strong> DirectX compatível</p>
      <p><strong>DirectX:</strong> 12</p>
    </div>

    {/* Coluna: Recomendados */}
    <div>
      <h3 className="requirements-subtitle">RECOMENDADOS</h3>
      <p><strong>SO:</strong> Windows® 10</p>
      <p><strong>Armazenamento:</strong> 80 GB</p>
      <p><strong>Processador:</strong> Intel® Core™ i7-3770 / AMD Ryzen™ 5 1600</p>
      <p><strong>Memória:</strong> 16 GB RAM</p>
      <p><strong>Placa de vídeo:</strong> GeForce GTX 1060 6 GB / AMD Radeon™ RX 590</p>
      <p><strong>Placa de som:</strong> DirectX compatível</p>
      <p><strong>DirectX:</strong> 12</p>
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
