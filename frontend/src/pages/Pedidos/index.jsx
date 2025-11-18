import { useEffect, useState } from "react";
import { getOrders } from "../../services/orders.js";
import { Link } from "react-router-dom";
import "./Pedidos.css";

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
      <div className="orders-page-center">
        <h1 className="orders-loading">Carregando pedidos...</h1>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders-empty-page">
        <h1 className="orders-title">Meus pedidos</h1>
        <p className="orders-empty-text">
          Você ainda não realizou nenhuma compra.
        </p>

        <Link to="/" className="orders-return">
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1 className="orders-title">Meus pedidos</h1>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="orders-card">
            <div className="orders-card-header">
              <p className="orders-id">Pedido #{order.id}</p>
              <p className="orders-date">
                {new Date(order.createdAt).toLocaleDateString("pt-BR")}
              </p>
            </div>

            <div className="orders-games">
              {order.items.map((item) => (
                <div key={item.id} className="orders-game-item">
                  <img
                    src={item.game.cover}
                    alt={item.game.title}
                    className="orders-game-img"
                  />
                  <span className="orders-game-title">
                    {item.game.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="orders-bottom">
              <p className="orders-total">
                Total: R$ {Number(order.total).toFixed(2)}
              </p>

              <Link to={`/pedidos/${order.id}`} className="orders-details-btn">
                Ver detalhes →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="orders-footer">
        <Link to="/" className="orders-return">
          Voltar para a loja
        </Link>
      </div>
    </div>
  );
}
