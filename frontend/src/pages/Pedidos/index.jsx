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
      <div className="min-h-screen pt-24 flex items-center justify-center text-white">
        <h1>Carregando pedidos...</h1>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-start text-white gap-3">
        <h1 className="text-2xl font-bold">Meus pedidos</h1>
        <p className="text-sm text-gray-300">
          Você ainda não realizou nenhuma compra.
        </p>
        <Link
          to="/"
          className="text-purple-400 hover:text-purple-300 underline text-sm"
        >
          Voltar para a loja
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 text-white max-w-3xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Meus pedidos</h1>

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-700 rounded-xl p-4 bg-black/60"
          >
            <p className="font-semibold">Pedido #{order.id}</p>
            <p className="text-sm text-gray-300">
              <strong>Data:</strong>{" "}
              {new Date(order.createdAt).toLocaleDateString("pt-BR")}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Total:</strong> R$ {Number(order.total).toFixed(2)}
            </p>
            <p className="text-sm text-gray-300">
              <strong>Jogos:</strong>{" "}
              {order.items.map((item) => item.game.title).join(", ")}
            </p>

            <Link
              to={`/pedidos/${order.id}`}
              className="mt-3 inline-block text-purple-400 hover:text-purple-300 underline text-sm"
            >
              Ver detalhes →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="text-purple-400 hover:text-purple-300 underline text-sm"
        >
          Voltar para a loja
        </Link>
      </div>
    </div>
  );
}
