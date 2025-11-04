import { useState } from "react";
import { Link } from "react-router-dom";
import cart from '../../assets/Cart.png';
import {
  FaArrowLeft,
  FaShoppingCart,
  FaCog,
  FaChevronRight,
  FaStar,
  FaTrophy,
  FaGamepad,
  FaClock,
} from "react-icons/fa";

export default function UserPage() {
  const [showStats, setShowStats] = useState(true);

  return (
    <div className="user-page">
      {/* ===== TOPO ===== */}
      <header className="user-topbar">
        <div className="top-left">
          <button
            className="top-btn"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft />
          </button>

          <div className="user-identity">
            <img
              src="/src/assets/placeholder_avatar.jpg"
              alt="avatar"
              className="user-avatar"
            />
            <div>
              <h2 className="user-name">oKuroo</h2>
              <p className="user-info-text">
                Membro desde 2024 | <span className="status-online">Online</span>
              </p>
            </div>
          </div>
        </div>

      <Link to="/carrinho">
          <div className="top-right">
            <button className="icon-btn">
              <img src={cart} alt="Carrinho" className="icon" />
            </button>
            <button className="icon-btn">
            <FaCog />
          </button>
          </div>

          
      </Link>

      </header> 
      
        
      {/* ===== CONTEÚDO ===== */}
      <div className="user-layout">
        {/* ===== CONTEÚDO PRINCIPAL ===== */}
        <main
          className={`user-library transition-all duration-500 ${
            showStats ? "lg:w-[78%]" : "w-full"
          }`}
        >
          <div className="library-header">
            <h2 className="library-title">Biblioteca recente</h2>

            {/* Botão de Estatísticas */}
            <button
              className="stats-toggle"
              onClick={() => setShowStats(!showStats)}
            >
              Estatísticas{" "}
              <FaChevronRight
                className={`transition-transform duration-300 ${
                  showStats ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          <div className="library-grid">
            <div className="game-card group">
              <img
                src="/src/assets/oblivion_remastered_capa.jpg"
                alt="Oblivion Remastered"
                className="game-img"
              />
              <div className="game-overlay">
                <p className="game-title">Oblivion Remastered</p>
                <span className="play-btn">Detalhes</span>
              </div>
            </div>

            <div className="game-card group">
              <img
                src="/src/assets/death-stranding-capa.jpg"
                alt="Death Stranding"
                className="game-img"
              />
              <div className="game-overlay">
                <p className="game-title">Death Stranding</p>
                <span className="play-btn">Detalhes</span>
              </div>
            </div>

            <div className="game-card group">
              <img
                src="/src/assets/Doom_Eternal_capa.png"
                alt="Doom Eternal"
                className="game-img"
              />
              <div className="game-overlay">
                <p className="game-title">Doom Eternal</p>
                <span className="play-btn">Detalhes</span>
              </div>
            </div>
          </div>
        </main>

        {/* ===== LATERAL DE ESTATÍSTICAS ===== */}
        <aside
          className={`user-sidebar transition-all duration-500 ease-in-out ${
            showStats
              ? "translate-x-0 opacity-100 visible"
              : "translate-x-full opacity-0 invisible"
          }`}
        >
          <div className="stat-list">
            <div className="stat-item">
              <FaStar className="stat-icon text-yellow-400" />
              <span>Nível: 24</span>
            </div>
            <div className="stat-item">
              <FaTrophy className="stat-icon text-orange-400" />
              <span>Conquistas: 47</span>
            </div>
            <div className="stat-item">
              <FaGamepad className="stat-icon text-green-400" />
              <span>Jogos: 12</span>
            </div>
            <div className="stat-item">
              <FaClock className="stat-icon text-blue-400" />
              <span>Horas jogadas: 326h</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
