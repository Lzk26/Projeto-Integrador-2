import { useEffect, useState } from "react";
import { getMe } from "../../services/user.js";
import { getOrders } from "../../services/orders.js";
import { Link } from "react-router-dom";
import "./UserPage.css";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function load() {
      const u = await getMe();
      setUser(u);

      const o = await getOrders();
      setOrders(o);
    }
    load();
  }, []);

  if (!user) {
    return (
      <div className="user-page flex items-center justify-center">
        <h1 className="text-white text-xl">Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="user-page">

      {/* 🔵 TOPO */}
      <div className="user-topbar">
        <div className="top-left">
          <div className="user-identity">
            <img
              src="/src/assets/userdefault.png"
              className="user-avatar"
            />
            <div>
              <h2 className="user-name">{user.username}</h2>
              <p className="user-info-text">{user.email}</p>
              <p className="status-online">● Online</p>
            </div>
          </div>
        </div>

        <div className="top-right">
          <Link to="/carrinho" className="icon-btn">
            🛒
          </Link>

          <Link to="/pedidos" className="icon-btn">
            📦
          </Link>

          <Link to="/" className="icon-btn">
            ⬅
          </Link>
        </div>
      </div>

      {/* 🔵 MAIN LAYOUT */}
      <div className="user-layout">

        {/* 📘 Biblioteca do Usuário */}
        <div className="user-library">
          <div className="library-header">
            <h2 className="library-title">Minha Biblioteca</h2>
            <button className="stats-toggle">Estatísticas</button>
          </div>

          <div className="library-grid">
            {orders.length === 0 && (
              <p className="text-gray-300 text-sm">Nenhum jogo comprado ainda.</p>
            )}

            {orders.map((order) =>
              order.items.map((item) => (
                <div key={item.id} className="game-card group">
                  <img src={item.game.cover} className="game-img" />
                  <div className="game-overlay">
                    <h3 className="game-title">{item.game.title}</h3>
                    <button className="play-btn">Instalar</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 📊 SIDEBAR */}
        <div className="user-sidebar">
          <h3 className="library-title mb-3">Estatísticas</h3>

          <div className="stat-list">

            <div className="stat-item">
              <span className="stat-icon">🎮</span>
              <span>{orders.length} pedidos realizados</span>
            </div>

            <div className="stat-item">
              <span className="stat-icon">📚</span>
              <span>
                {orders.reduce((sum, o) => sum + o.items.length, 0)} jogos adquiridos
              </span>
            </div>

            <div className="stat-item">
              <span className="stat-icon">💰</span>
              <span>
                Total gasto: R$
                {orders
                  .reduce((sum, o) => sum + Number(o.total), 0)
                  .toFixed(2)}
              </span>
            </div>

            <Link to="/pedidos" className="stat-item">
              <span className="stat-icon">📦</span>
              <span>Ver meus pedidos</span>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}
