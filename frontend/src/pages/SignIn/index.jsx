// src/pages/SignIn/index.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function SignIn() {
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
    <div className="LoginPage">
      {/* LADO ESQUERDO */}
      <div className="LoginForm">
        <Link to="/" className="LoginExit flex items-center gap-2">
          <FaArrowLeft /> Voltar
        </Link>

        <form onSubmit={handleLogin}>
          <h2 className="LoginTitle">Entrar</h2>

          {erro && <p className="LoginErrorGlobal">{erro}</p>}

          <label className="LoginLabel">Usuário</label>
          <input
            type="text"
            className="LoginInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="LoginLabel mt-2">Senha</label>
          <input
            type="password"
            className="LoginInput"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="LoginButton" type="submit">
            Entrar
          </button>

          <p className="text-sm text-center mt-6 text-gray-500">
            Não tem conta?
            <Link
              to="/cadastrar"
              className="text-purple-600 ml-1 hover:underline"
            >
              Criar conta
            </Link>
          </p>
        </form>
      </div>

      {/* LADO DIREITO */}
      <div
        className="LoginArte"
        style={{
          backgroundImage: "url('/src/assets/trapdoorbanner.png')",
        }}
      />
    </div>
  );
}
