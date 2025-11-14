import { useParams, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getGameById } from "../../api";
import { addToCart } from "../../../backend/src/services/cart";


export default function GamePage() {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [zoomSrc, setZoomSrc] = useState(null);

  async function handleAddToCart() {
  const res = await addToCart(game.id);
  alert(res.message);
}


  // 🔹 Carrega o jogo
  useEffect(() => {
    async function load() {
      const data = await getGameById(id);
      setGame(data);
    }
    load();
  }, [id]);

  // 🔹 Fecha o zoom com ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setZoomSrc(null);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // 🔹 Tela de carregamento
  if (!game) {
    return (
      <div className="game-page">
        <h1 className="text-2xl font-bold mt-20">Carregando...</h1>
      </div>
    );
  }

  // 🔹 Miniaturas
  const thumbs =
    game?.thumbnails?.length > 0
      ? game.thumbnails
      : [
          "/src/assets/oblivion1.jpg",
          "/src/assets/oblivion2.jpg",
          "/src/assets/oblivion3.jpg",
        ];

  return (
    <div className="game-page">
      <div className="game-wrapper">
        {/* TOPO: VÍDEO + INFO */}
        <div className="game-container">
          <div className="game-video">
            <iframe
              className="w-full h-full rounded-2xl"
              src={game.video}
              title={`${game.title} Trailer`}
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

            <div className="flex items-center gap-3 mt-3 w-full">
              <div className="flex items-center justify-between w-full gap-3">
                <Link to="/pagamento" className="flex-1">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white w-full py-2 rounded-md text-sm font-medium transition">
                    Comprar
                  </button>
                </Link>

                <Link to="/carrinho" title="Ir para o carrinho">
                  <FaShoppingCart 
                  className="text-purple-600 text-3xl hover:text-purple-700 transition"
                  onClick={handleAddToCart} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* MINIATURAS */}
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

        {/* ZOOM */}
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
          </div>
        )}

        {/* RESTANTE DA PÁGINA */}
        {/** ... todo o resto permanece igual ... */}
      </div>
    </div>
  );
}
