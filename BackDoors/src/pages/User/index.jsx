import './User.css';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { FaEnvelope, FaFlag, FaGamepad } from 'react-icons/fa6';

export default function User() {
  return (
    <div className="user-page">
      {/* Bloco principal do perfil */}
      <section className="user-profile">
        <div className="user-header">
          <div className="avatar-container">
            <img
              src="/src/assets/profile-placeholder.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="user-info">
            <h2 className="user-greeting">Olá!</h2>
            <p className="username">Marquinhos rabiola</p>
            <div className="user-email">
              <FaEnvelope className="icon" /> marquinhosrabiola@gmail.com
            </div>
            <div className="user-status">
              <span className="status-online">🟢 Conectado</span>
              <FaFlag className="icon ml-3" /> BR
            </div>
          </div>
        </div>

        {/* Conexões sociais */}
        <div className="social-buttons">
          <button className="social google"><FaGoogle /> Conectado</button>
          <button className="social facebook"><FaFacebookF /></button>
          <button className="social apple"><FaApple /></button>
        </div>

        {/* Abas de navegação */}
        <div className="tabs">
          <button className="tab tab-active">Meus jogos</button>
          <button className="tab tab-inactive">Meus pedidos</button>
          <button className="tab tab-inactive">Minha conta</button>
        </div>
      </section>

      {/* Seção de jogos recentes */}
      <section className="user-section">
        <h3 className="section-title">Recentes</h3>
        <div className="recent-games">
          <div className="game-thumb group">
            <img src="/src/assets/lego-avengers.jpg" alt="Lego Avengers" />
            <button className="view-button">Ver jogo</button>
          </div>
          <div className="game-thumb group">
            <img src="/src/assets/lego-movie.jpg" alt="Lego Movie" />
            <button className="view-button">Ver jogo</button>
          </div>
        </div>
      </section>
    </div>
  );
}
