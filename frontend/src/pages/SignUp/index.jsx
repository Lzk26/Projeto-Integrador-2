// src/pages/SignUp/index.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setErro("");

    const res = await fetch("http://localhost:3333/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password: senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErro(data.error);
      return;
    }

    alert("Conta criada com sucesso!");
    navigate("/signin");
  }

  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <Link to="/" className="LoginExit flex items-center gap-2">
          <FaArrowLeft /> Voltar
        </Link>

        <form onSubmit={handleRegister}>
          <h2 className="LoginTitle">Criar Conta</h2>

          {erro && <p className="LoginErrorGlobal">{erro}</p>}

          <label className="LoginLabel">Usuário</label>
          <input
            type="text"
            className="LoginInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label className="LoginLabel">Email</label>
          <input
            type="email"
            className="LoginInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="LoginLabel mt-2">Senha</label>
          <input
            type="password"
            className="LoginInput"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button className="LoginButton" type="submit">
            Criar conta
          </button>

          <p className="text-sm text-center mt-6 text-gray-500">
            Já possui conta?
            <Link
              to="/signin"
              className="text-purple-600 ml-1 hover:underline"
            >
              Entrar
            </Link>
          </p>
        </form>
      </div>

      <div
        className="LoginArte"
        style={{
          backgroundImage: "url('/src/assets/trapdoorbanner.png')",
        }}
      />
    </div>
  );
}
