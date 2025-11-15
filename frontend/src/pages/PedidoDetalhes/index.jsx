import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../../services/orders";

export default function PedidoDetalhes() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await getOrderById(id);
      setOrder(data);
    }
    load();
  }, [id]);

  if (!order) {
    return (
      <div style={{ paddingTop: "80px", color: "white", textAlign: "center" }}>
        <h1>Carregando pedido...</h1>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "80px", color: "white", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Detalhes do Pedido #{order.id}</h1>

      <p><strong>Data:</strong> {new Date(order.createdAt).toLocaleDateString("pt-BR")}</p>
      <p><strong>Total:</strong> R$ {Number(order.total).toFixed(2)}</p>

      <h2 style={{ marginTop: "25px" }}>Jogos Comprados:</h2>

      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
        {order.items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              background: "#111",
              borderRadius: "10px",
              padding: "15px",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <img
              src={item.game.cover}
              alt={item.game.title}
              style={{
                width: "140px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>{item.game.title}</p>
              <p style={{ marginTop: "5px" }}>
                <strong>Preço:</strong> R$ {Number(item.price).toFixed(2)}
              </p>

              <Link
                to={`/jogo/${item.game.id}`}
                style={{ color: "#5E17EB", textDecoration: "underline", marginTop: "5px", display: "inline-block" }}
              >
                Ver jogo →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px" }}>
        <Link to="/pedidos" style={{ color: "#5E17EB", textDecoration: "underline" }}>
          ← Voltar para meus pedidos
        </Link>
      </div>
    </div>
  );
}
