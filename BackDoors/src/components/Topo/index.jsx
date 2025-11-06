import { Link } from 'react-router-dom';
import logo from '/public/Logo.png';
import search from '../../assets/search.png';
import cart from '../../assets/Cart.png';
import user from '../../assets/User.png';

export default function Topo() {
  return (
    <header className="topo">
      {/* Logo */}
      <Link to="/" className="logo-area">
        <img src={logo} alt="Trapdoor Logo" className="logo" />
        <h1 className="logo-text">Trapdoor</h1>
      </Link>

      {/* Navegação */}
      <nav className="menu">
        <Link to="/" className="menu-link">Início</Link>
        <Link to="/carrinho" className="menu-link">Carrinho</Link>
        <Link to="/usuario" className="menu-link">Usuário</Link>
      </nav>

      {/* Barra de pesquisa */}
    
        <input
            type="Text"
            placeholder="Pesquisar..."
            className='SearchBar'
            />
   


      {/* Ícones */}
      <div className="icons">
        <Link to="/carrinho">
          <img src={cart} alt="Carrinho" className="icon" />
        </Link>
        <Link to="/usuario">
          <img src={user} alt="Usuário" className="icon" />
        </Link>
      </div>
    </header>
  );
}
