import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";

export default function Signin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setErro("");

    const res = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErro(data.error);
      return;
    }

    localStorage.setItem("trapdoor_token", data.token);
    navigate("/usuario");
  }

  return (
    <div className="signin-container">
      <div className="signin-card">

        <img 
          src="/src/assets/trapdoorbanner.png"
          alt="Trapdoor"
          className="signin-banner"
        />

        <h2>Entrar</h2>
        <p>Acesse sua conta</p>

        {erro && <p className="error">{erro}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button className="btn-login" type="submit">
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
