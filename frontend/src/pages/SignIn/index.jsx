import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import trapdoorBanner from "/src/assets/trapdoorbanner.png";
import { FaArrowLeft, FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./Singin.css";

export default function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    localStorage.setItem("trapdoor_token", data.token);

    navigate("/usuario");
  }

  return (
    <div className="auth-wrapper">

      {/* Botão voltar */}
      <Link to="/" className="auth-back-btn">
        <FaArrowLeft />
        Voltar
      </Link>

      {/* Lado esquerdo */}
      <div className="auth-left">
        <div className="auth-card">

          <img src="/Logo.png" className="auth-logo" alt="Trapdoor" />

          <h2 className="auth-title">Fazer login</h2>

          <form onSubmit={handleLogin} className="auth-form">

            <input
              type="text"
              placeholder="Nome de usuário"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              className="auth-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            {error && <p className="auth-error">{error}</p>}

            {/* Botões sociais */}
            <button type="button" className="auth-social-btn auth-social-facebook">
              <FaFacebookF /> <span>Facebook</span>
            </button>

            <button type="button" className="auth-social-btn auth-social-google">
              <FcGoogle /> <span>Google</span>
            </button>

            <button type="button" className="auth-social-btn auth-social-apple">
              <FaApple /> <span>Apple</span>
            </button>

            <div className="auth-remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Manter login</label>
            </div>

            <button type="submit" className="auth-submit">
              Entrar →
            </button>
          </form>

          <div className="auth-links">
            <p className="auth-link-secondary">Não consegue fazer login?</p>

            <Link to="/cadastrar" className="auth-link-primary">
              Criar conta
            </Link>
          </div>

        </div>
      </div>

      {/* Banner */}
      <div className="auth-right">
        <img src={trapdoorBanner} className="auth-banner" />
      </div>

    </div>
  );
}
