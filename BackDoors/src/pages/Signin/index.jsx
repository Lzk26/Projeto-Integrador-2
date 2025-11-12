import { Link } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Entrar</h2>
        <p>Acesse sua conta para continuar</p>

        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>

        <span className="register-text">
          Não tem conta?{" "}
          <Link to="/cadastrar" className="link-hover">
            Criar conta
          </Link>
        </span>
      </div>
    </div>
  );
}
