import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

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
    <div className="signin-container">
      <div className="signin-card">

        <img 
          src="/src/assets/trapdoorbanner.png"
          alt="Trapdoor"
          className="signin-banner"
        />

        <h2>Criar Conta</h2>
        <p>Preencha os dados para continuar</p>

        {erro && <p className="error">{erro}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Criar Conta
          </button>
        </form>

        <span className="register-text">
          Já possui uma conta?{" "}
          <Link to="/signin" className="link-hover">
            Entrar
          </Link>
        </span>
      </div>
    </div>
  );
}
