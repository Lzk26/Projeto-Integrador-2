import { Link } from "react-router-dom";
import logo from "/Logo.png"; // serve da pasta public
import search from "../../assets/search.png";
import cart from "../../assets/Cart.png";
import user from "../../assets/User.png";
import { FaSignInAlt } from "react-icons/fa"; // novo ícone de login
import { useState } from "react";

export default function Topo() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="topo">
      {/* 🔹 Logo */}
      <Link to="/" className="logo-area">
        <img src={logo} alt="Trapdoor Logo" className="logo" />
        <h1 className="logo-text">Trapdoor</h1>
      </Link>

      {/* 🔹 Navegação */}
      <nav className="menu">
        <Link to="/" className="menu-link">
          Início
        </Link>
        <Link to="/carrinho" className="menu-link">
          Carrinho
        </Link>
        <Link to="/usuario" className="menu-link">
          Usuário
        </Link>
        <Link to="/signin" className="menu-link">
          Login
        </Link>
      </nav>

      {/* 🔹 Ícones */}
      <div className="icons">
        {/* Busca */}
        <img
          src={search}
          alt="Buscar"
          className="icon"
          onClick={() => setShowSearch(!showSearch)}
        />
        {showSearch && (
          <input
            type="text"
            placeholder="Buscar jogos..."
            className="search-input"
          />
        )}

        {/* Carrinho */}
        <Link to="/carrinho">
          <img src={cart} alt="Carrinho" className="icon" />
        </Link>

        {/* Usuário */}
        <Link to="/usuario">
          <img src={user} alt="Usuário" className="icon" />
        </Link>

        {/* Login com ícone diferente */}
        <Link to="/signin">
          <FaSignInAlt className="icon text-white text-xl opacity-90 hover:opacity-100 transition" />
        </Link>
      </div>
    </header>
  );
}
