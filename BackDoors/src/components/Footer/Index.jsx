import './Footer.css';
import { FaInstagram, FaTiktok, FaDiscord, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
import logo from '/public/Logo.png';

export default function Footer() {
  return (
    <footer className="footer footer-root">
      <div className="footer-grid">
        {/* Redes Sociais */}
        <div>
          <h3 className="footer-heading">Seguir a Trapdoor</h3>
          <div className="socials">
            <a aria-label="Instagram" href="#" className="link-hover"><FaInstagram /></a>
            <a aria-label="TikTok" href="#" className="link-hover"><FaTiktok /></a>
            <a aria-label="Discord" href="#" className="link-hover"><FaDiscord /></a>
            <a aria-label="YouTube" href="#" className="link-hover"><FaYoutube /></a>
            <a aria-label="Twitter/X" href="#" className="link-hover"><FaTwitter /></a>
            <a aria-label="Facebook" href="#" className="link-hover"><FaFacebook /></a>
          </div>
        </div>

        {/* Institucional */}
        <div>
          <h3 className="footer-heading">Institucional</h3>
          <ul className="footer-list">
            <li><a href="#" className="link-hover">Sobre</a></li>
            <li><a href="#" className="link-hover">Seu jogo na Trapdoor</a></li>
            <li><a href="#" className="link-hover">Segurança</a></li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h3 className="footer-heading">Ajuda</h3>
          <ul className="footer-list">
            <li><a href="#" className="link-hover">Suporte</a></li>
            <li><a href="#" className="link-hover">Termos de Uso</a></li>
            <li><a href="#" className="link-hover">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Logo + idioma */}
        <div className="locale">
          <div className="locale-select">
            <span className="locale-item">🌐 Português</span>
            <span className="locale-item">🇧🇷 Brasil</span>
          </div>

          {/* Quadrado branco atrás da logo (Vite: se o arquivo estiver em /public, use /Logo.png) */}
          <div className="logo-box">
            <img src={logo} alt="Trapdoor Logo" className="logo-img"/>
          </div>

          <p className="text-gray-300">© 2024 - 2025 Trapdoor Ltda.</p>
          <p className="text-gray-400 leading-snug text-xs">
            Rua Rodrigo, nº 10 sala A204 - Caraguatatuba, São Paulo - SP<br />
            CNPJ 11.111.111/0000-00
          </p>
        </div>
      </div>

      {/* Linha final */}
      <div className="footer-bottom">
        Desenvolvido por <span className="author">LUIZ GUSTAVO</span>
      </div>
    </footer>
  );
}
