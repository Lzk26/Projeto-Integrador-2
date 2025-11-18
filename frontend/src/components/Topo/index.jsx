import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "/Logo.png";
import {
  FaHome,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

export default function Topo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Lê token + dados do usuário (nome/foto) do localStorage
  useEffect(() => {
    const token = localStorage.getItem("trapdoor_token");
    const storedUser = localStorage.getItem("trapdoor_user");

    if (token && storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser({ name: "Usuário" });
      }
    } else if (token) {
      setUser({ name: "Usuário" });
    } else {
      setUser(null);
    }

    setMenuOpen(false);
  }, [location.pathname]);

  function handleLogout() {
    localStorage.removeItem("trapdoor_token");
    localStorage.removeItem("trapdoor_user");
    setUser(null);
    setMenuOpen(false);
    navigate("/signin");
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    // Futuro: navegar para página de busca, ex:
    // navigate(`/buscar?query=${encodeURIComponent(searchTerm)}`);
    console.log("Buscar por:", searchTerm);
  }

  return (
    <header className="topo">
      {/* LOGO */}
      <Link to="/" className="logo-area">
        <img src={logo} alt="Trapdoor Logo" className="logo" />
        <h1 className="logo-text">Trapdoor</h1>
      </Link>

      {/* CENTRO: MENU + BUSCA */}
      <div className="topo-center">
        <nav className="topo-nav">
          <Link to="/" className="topo-nav-link">
            <FaHome className="topo-nav-icon" />
            <span>Início</span>
          </Link>

          <Link to="/carrinho" className="topo-nav-link">
            <FaShoppingCart className="topo-nav-icon" />
            <span>Carrinho</span>
          </Link>
        </nav>

        <form className="topo-search" onSubmit={handleSearchSubmit}>
          <FaSearch className="topo-search-icon" />
          <input
            type="text"
            placeholder="Buscar jogos..."
            className="topo-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      {/* DIREITA: LOGIN / USUÁRIO */}
      <div className="topo-right">
        {!user && (
          <button
            className="topo-login-btn"
            onClick={() => navigate("/login")}
          >
            Entrar
          </button>
        )}

        {user && (
          <div className="topo-user-area">
            <p className="topo-welcome">
              Seja bem-vindo, <span>{user.name || "Usuário"}</span>
            </p>

            <button
              className="topo-avatar-btn"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <img
                src={
                  user.photoURL ||
                  "/UserDefault.png"
                }
                alt={user.name || "Usuário"}
                className="topo-avatar"
              />
            </button>

            {menuOpen && (
              <div className="topo-user-menu">
                <button
                  className="topo-user-menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/usuario");
                  }}
                >
                  Perfil
                </button>

                <button
                  className="topo-user-menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/pedidos");
                  }}
                >
                  Minhas compras
                </button>

                <button
                  className="topo-user-menu-item topo-user-logout"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
