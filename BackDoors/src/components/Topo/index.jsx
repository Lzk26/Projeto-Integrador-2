// src/components/Header.jsx
export default function Topo() {
  return (
    <header>
      <div className="header-container">
        
        {/* Espaço reservado para logo */}
        <div className="header-logo">
          <img src="Logo.png" alt="Logo" />
        </div>

        {/* Menu de navegação */}
        <nav className="header-nav">
          <ul>
            <li><a href="#">Destaques</a></li>
            <li><a href="#">PC</a></li>
            <li><a href="#">Promoções</a></li>
            <li></li>
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
