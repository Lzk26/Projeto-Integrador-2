import './Topo.css';
export default function Topo() {
  return (
    <header>
      {/* LOGO */}
      <div className="logo">
        <img src="/Logo.png" alt="BackDoorsLogo" />
      </div>

      {/* MENU */}
      <nav>
        <a href="#">Destaques</a>
        <a href="#">PC</a>
        <a href="#">Promoções</a>
      </nav>

      {/* BARRA DE PESQUISA */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
        <img src="/src/assets/search.png" alt="Buscar" className="icon" />
      </div>

      {/* BOTÕES À DIREITA */}
      <div className="header-right">
        <button className="cart-btn">
          <img src="/src/assets/Cart.png" alt="Carrinho" className="icon" />
          0
        </button>
        <button className="login-btn">
          <img src="/src/assets/User.png" alt="Usuário" className="icon" />
          Entrar
        </button>
      </div>
    </header>
  );
}
