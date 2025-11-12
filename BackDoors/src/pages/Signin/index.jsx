import { Link } from "react-router-dom";
import "./Signin.css";
import trapdoorBanner from "/src/assets/trapdoorbanner.png";

export default function Signin() {
  return (
    <div className="signin-wrapper">
      {/* Lado esquerdo: formulário */}
      <div className="signin-left">
        <div className="signin-content">
          <img
            src="/src/assets/logo.png"
            alt="Trapdoor Logo"
            className="signin-logo"
          />
          <h2 className="signin-title">Fazer login</h2>

          <form className="signin-form">
            <input type="text" placeholder="Nome de usuário" required />
            <input type="password" placeholder="Senha" required />

            <div className="social-login">
              <button className="btn-facebook">f</button>
              <button className="btn-google">G</button>
              <button className="btn-apple"></button>
            </div>

            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Manter login</label>
            </div>

            <button type="submit" className="btn-continue">
              Avançar →
            </button>

            <div className="login-links">
              <p>
                Não consegue fazer login? <Link to="/ajuda">Ajuda</Link>
              </p>
              <p>
                <Link to="/cadastro">Criar conta</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Lado direito: banner */}
      <div className="signin-right">
        <img src={trapdoorBanner} alt="Trapdoor Banner" className="signin-banner" />
      </div>
    </div>
  );
}
