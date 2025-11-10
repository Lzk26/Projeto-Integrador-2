import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SignInPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    global: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const onChangeField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onToggleRemember = (e) => {
    setForm((prev) => ({ ...prev, remember: e.target.checked }));
  };

  const validate = () => {
    const next = { username: "", password: "", global: "" };

    if (!form.username.trim()) next.username = "Informe o nome de usuário.";
    else if (form.username.trim().length < 3)
      next.username = "Mínimo de 3 caracteres.";

    if (!form.password) next.password = "Informe a senha.";
    else if (form.password.length < 6)
      next.password = "Senha deve ter ao menos 6 caracteres.";

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validate();
    const hasError = nextErrors.username || nextErrors.password;

    if (hasError) {
      setErrors(nextErrors);
      if (nextErrors.username) document.getElementById("username")?.focus();
      else if (nextErrors.password) document.getElementById("password")?.focus();
      return;
    }

    setSubmitting(true);
    setErrors((prev) => ({ ...prev, global: "" }));

    try {
      await new Promise((r) => setTimeout(r, 1000));

      if (form.remember) localStorage.setItem("rememberUser", form.username);
      else localStorage.removeItem("rememberUser");

      navigate("/usuario");
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        global: "Usuário ou senha inválidos.",
      }));
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("rememberUser");
    if (saved) {
      setForm((prev) => ({ ...prev, username: saved, remember: true }));
    }
  }, []);

  return (
    <div className="LoginPage">
      {/* Lado esquerdo - Formulário */}
      <div className="LoginForm">
        {/* Botão de fechar */}
        <Link to="/" aria-label="Fechar" className="LoginExit">
          X
        </Link>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <h1 className="LoginTitle">Fazer login</h1>

          {/* Campo Usuário */}
          <label htmlFor="username" className="LoginLabel">
            Nome de usuário
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={onChangeField}
            autoComplete="username"
            className={`LoginInput ${errors.username ? "LoginInput--error" : ""
              }`}
          />
          {errors.username && (
            <p className="LoginError">{errors.username}</p>
          )}

          {/* Campo Senha */}
          <label htmlFor="password" className="LoginLabel">
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={onChangeField}
            autoComplete="current-password"
            className={`LoginInput ${errors.password ? "LoginInput--error" : ""
              }`}
          />
          {errors.password && (
            <p className="LoginError">{errors.password}</p>
          )}

          {/* Checkbox */}
          <label className="LoginRemember">
            <input
              id="remember"
              type="checkbox"
              checked={form.remember}
              onChange={onToggleRemember}
            />
            Manter login
          </label>

          {/* Erro global */}
          {errors.global && (
            <div className="LoginErrorGlobal">{errors.global}</div>
          )}

          {/* Botão de envio */}
          <button
            type="submit"
            disabled={submitting}
            className={`LoginButton ${submitting ? "LoginButton--disabled" : ""
              }`}
          >
            {submitting ? "Entrando..." : "Avançar"}
          </button>
        </form>
      </div>

      {/* Lado direito - Arte */}
      <div
        className="LoginArte"
        style={{
          backgroundImage: "url('/src/assets/LogImg.png')",
        }}
      />
    </div>
  );
}
