// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        
        {/* Espaço reservado para logo */}
        <div className="header-logo">
          {/* Coloque sua logo aqui */}
        </div>

        {/* Menu de navegação */}
        <nav className="header-nav">
          <ul>
            <li><Link to="/">Destaque</Link></li>
            <li><Link to="/promocoes">Promoções</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>

        {/* Espaço reservado para ações (ex: carrinho, login) */}
        <div className="header-actions">
          {/* Coloque os botões/ícones que precisar */}
        </div>

      </div>
    </header>
  );
}
