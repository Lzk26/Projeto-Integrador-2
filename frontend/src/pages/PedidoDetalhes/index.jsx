import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../../services/orders";
import "./PedidoDetalhes.css";

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
      <div className="order-center">
        <h1 className="order-loading">Carregando pedido...</h1>
      </div>
    );
  }

  return (
    <div className="order-page">
      <h1 className="order-title">Pedido #{order.id}</h1>

      <div className="order-card">

        {/* Cabeçalho */}
        <div className="order-header">
          <p className="order-date">
            <strong>Data:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString("pt-BR")}
          </p>

          <p className="order-total">
            <strong>Total:</strong> R$ {Number(order.total).toFixed(2)}
          </p>
        </div>

        {/* Jogos */}
        <div className="order-games">
          {order.items.map((item) => (
            <div key={item.id} className="order-game-item">
              <img
                src={item.game.cover}
                alt={item.game.title}
                className="order-game-img"
              />

              <div className="order-game-info">
                <p className="order-game-title">{item.game.title}</p>

                <p className="order-game-price">
                  Preço: R$ {Number(item.price).toFixed(2)}
                </p>

                <Link
                  to={`/jogo/${item.game.id}`}
                  className="order-game-link"
                >
                  Ver jogo →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navegação inferior */}
      <div className="order-footer">
        <Link to="/pedidos" className="order-return">
          ← Voltar para meus pedidos
        </Link>

        <Link to="/usuario" className="order-return">
          Ir para minha conta
        </Link>
      </div>
    </div>
  );
}
