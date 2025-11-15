import { useEffect, useState } from "react";
import { getOrders } from "../../services/orders.js";
import { Link } from "react-router-dom";

export default function Pedidos() {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getOrders();
      setOrders(data);
    }
    load();
  }, []);

  if (!orders) {
    return (
      <div style={{ paddingTop: "80px", color: "white", textAlign: "center" }}>
        <h1>Carregando pedidos...</h1>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div style={{ paddingTop: "80px", color: "white", textAlign: "center" }}>
        <h1>Meus pedidos</h1>
        <p>Você ainda não realizou nenhuma compra.</p>
        <Link to="/" style={{ color: "#5E17EB", textDecoration: "underline" }}>
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "80px", color: "white", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Meus pedidos</h1>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "16px",
              background: "#111",
            }}
          >
            <p><strong>Pedido #{order.id}</strong></p>
            <p>
              <strong>Data:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString("pt-BR")}
            </p>
            <p>
              <strong>Total:</strong> R$ {Number(order.total).toFixed(2)}
            </p>
            <p>
              <strong>Jogos:</strong>{" "}
              {order.items.map((item) => item.game.title).join(", ")}
            </p>

            {/* ⭐⭐ AQUI ESTÁ A FASE 3 — O BOTÃO PARA A PÁGINA DE DETALHES ⭐⭐ */}
            <Link to={`/pedidos/${order.id}`}>
                  Ver detalhes →
             </Link>

          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/" style={{ color: "#5E17EB", textDecoration: "underline" }}>
          Voltar para a loja
        </Link>
      </div>
    </div>
  );
}
