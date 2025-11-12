import { useParams, Link } from "react-router-dom";
import { gamesData } from "../../gamesData";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function GamePage() {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  // Miniaturas do jogo
  const thumbs =
    game?.thumbnails?.length > 0
      ? game.thumbnails
      : [
          "/src/assets/oblivion1.jpg",
          "/src/assets/oblivion2.jpg",
          "/src/assets/oblivion3.jpg",
        ];

  const [zoomSrc, setZoomSrc] = useState(null);

  // Fecha o zoom com ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setZoomSrc(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!game) {
    return (
      <div className="game-page">
        <h1 className="text-2xl font-bold mt-20">Jogo não encontrado 😢</h1>
      </div>
    );
  }

  return (
    <div className="game-page">
      <div className="game-wrapper">
        {/* TOPO: VÍDEO + INFO */}
        <div className="game-container">
          {/* VÍDEO PRINCIPAL */}
          <div className="game-video">
            <iframe
              className="w-full h-full rounded-2xl"
              src={game.video || "https://www.youtube.com/embed/wFJ3PZuAjK4"}
              title={`${game.title} Trailer`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* INFO DO JOGO */}
          <div className="game-info">
            <img src={game.cover} alt={game.title} className="game-cover" />
            <h1 className="game-title">{game.title}</h1>
            <p className="game-description">{game.description}</p>
            <p className="game-price">R$ {game.price}</p>

            {/* BOTÕES */}
            <div className="flex items-center gap-3 mt-3 w-full">
              <div className="flex items-center justify-between w-full gap-3">
                <Link to="/pagamento" className="flex-1">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-md text-sm font-medium transition">
                    Comprar
                  </button>
                </Link>
                <Link to="/carrinho" title="Ir para o carrinho">
                  <FaShoppingCart className="text-purple-600 hover:text-purple-700 text-3xl transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MINIATURAS ABAIXO DO VÍDEO */}
        <div className="flex justify-center gap-5 mt-5 flex-wrap">
          {thumbs.map((src, index) => (
            <button
              key={index}
              onClick={() => setZoomSrc(src)}
              className="w-40 h-24 rounded-md overflow-hidden border-2 border-transparent hover:border-purple-600 transition"
            >
              <img
                src={src}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>

        {/* LIGHTBOX DO ZOOM */}
        {zoomSrc && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setZoomSrc(null)}
          >
            <img
              src={zoomSrc}
              alt="Zoom"
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm"
              onClick={() => setZoomSrc(null)}
            >
              Fechar (Esc)
            </button>
          </div>
        )}

        {/* RESTANTE IGUAL */}
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
              <div className="language-row">
                <span className="language-name">Français</span>
                <span className="language-item">✔ Interface</span>
                <span className="language-item">✖ Áudio</span>
                <span className="language-item">✔ Legendas</span>
              </div>
            </div>
          </div>

          <div className="details-right">
            <div className="tags-section">
              <h3 className="details-title">Categoria / Gênero</h3>
              <div className="tag-list">
                <span className="tag">Ação</span>
                <span className="tag">Aventura</span>
                <span className="tag">Ficção Científica</span>
              </div>
            </div>

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
        <section className="requirements-section">
          <h2 className="requirements-title">Requisitos de Sistema</h2>
          <div className="os-tag">
            <span className="os-icon">💻</span>
            <span>Windows</span>
          </div>
          <div className="requirements-grid">
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
