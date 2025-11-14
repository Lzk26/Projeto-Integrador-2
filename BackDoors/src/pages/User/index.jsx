import { useEffect, useState } from "react";
import { getMe } from "../../services/user";
import { Link } from "react-router-dom";
import "./Usuario.css"; // Vamos estilizar depois

export default function Usuario() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getMe();
      setUser(data);
    }
    load();
  }, []);

  if (!user) {
    return (
      <div className="user-page">
        <h1>Carregando perfil...</h1>
      </div>
    );
  }

  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    return d.toLocaleDateString("pt-BR");
  };

  return (
    <div className="user-page">

      <div className="user-card">
        <h1 className="title">Olá, {user.username}! 👋</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Conta criada em:</strong> {formatDate(user.createdAt)}</p>

        <Link to="/carrinho" className="orders-btn">
          Ver meus pedidos
        </Link>

        <Link to="/" className="back-btn">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
