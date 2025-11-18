import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import trapdoorBanner from "/src/assets/trapdoorbanner.png";
import { FaArrowLeft, FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const navigate = useNavigate();

  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (senha !== confirmar) return setError("As senhas não coincidem.");

    const res = await fetch("http://localhost:3333/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password: senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error);
      return;
    }

    navigate("/login");
  }

  return (
    <div className="auth-wrapper">

      {/* Botão voltar */}
      <Link to="/" className="auth-back-btn">
        <FaArrowLeft /> Voltar
      </Link>

      <div className="auth-left">
        <div className="auth-card">

          <img src="/Logo.png" className="auth-logo" />

          <h2 className="auth-title">Criar conta</h2>

          <form onSubmit={handleRegister}>

            <input
              type="email"
              placeholder="E-mail"
              className="auth-input"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Nome de usuário"
              className="auth-input"
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              className="auth-input"
              onChange={(e) => setSenha(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              className="auth-input"
              onChange={(e) => setConfirmar(e.target.value)}
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
              <input type="checkbox" id="save" />
              <label htmlFor="save">Salvar dados</label>
            </div>

            <button type="submit" className="auth-submit">
              Cadastrar →
            </button>

          </form>

          <div className="auth-links">
            <p className="auth-link-secondary">Já tem uma conta?</p>

            <Link to="/login" className="auth-link-primary">
              Entrar
            </Link>
          </div>

        </div>
      </div>

      <div className="auth-right">
        <img src={trapdoorBanner} className="auth-banner" />
      </div>

    </div>
  );
}
