import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Signin.css";
import trapdoorBanner from "/src/assets/trapdoorbanner.png";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (username.length < 3) {
      return setError("Nome de usuário muito curto.");
    }

    if (senha.length < 4) {
      return setError("Senha muito curta.");
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("trapdoor_token", "logado123");

      navigate("/usuario");
    }, 800);
  };

  return (
    <div className="signin-wrapper">

      <div className="signin-left">
        <div className="signin-box">

          <img src="/Logo.png" className="signin-logo" alt="Trapdoor Logo" />

          <h2 className="signin-title">Fazer login</h2>

          <form onSubmit={handleLogin} className="signin-form">

            <input
              type="text"
              placeholder="Nome de usuário"
              className={`input-box ${error && username.length < 3 ? "input-error" : ""}`}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              className={`input-box ${error && senha.length < 4 ? "input-error" : ""}`}
              onChange={(e) => setSenha(e.target.value)}
            />

            {error && <p className="error-message">{error}</p>}

            <button type="button" className="social facebook">
              <FaFacebookF />
              <span>Facebook</span>
            </button>

            <button type="button" className="social google">
              <FcGoogle className="google-icon" />
              <span>Google</span>
            </button>

            <button type="button" className="social apple">
              <FaApple />
              <span>Apple</span>
            </button>

            <div className="remember-area">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Manter login</label>
            </div>

            <button type="submit" className="btn-continue" disabled={loading}>
              {loading ? "Carregando..." : "AVANÇAR →"}
            </button>

          </form>

          <div className="signin-links">
            <p className="help-link">NÃO CONSEGUE FAZER LOGIN?</p>

            <Link to="/signup" className="create-account-link">
              CRIAR CONTA
            </Link>
          </div>

        </div>
      </div>

      <div className="signin-right">
        <img src={trapdoorBanner} className="signin-banner" />
      </div>

    </div>
  );
}
