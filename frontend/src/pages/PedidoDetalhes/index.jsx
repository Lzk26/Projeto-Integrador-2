// src/pages/PedidoDetalhes/index.jsx
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
      <div className="min-h-screen pt-24 flex items-center justify-center text-white">
        <h1>Carregando pedido...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 text-white max-w-4xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-2">
        Detalhes do Pedido #{order.id}
      </h1>

      <p className="text-sm text-gray-300">
        <strong>Data:</strong>{" "}
        {new Date(order.createdAt).toLocaleDateString("pt-BR")}
      </p>
      <p className="text-sm text-gray-300 mb-4">
        <strong>Total:</strong> R$ {Number(order.total).toFixed(2)}
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-3">Jogos comprados</h2>

      <div className="flex flex-col gap-4">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 bg-black/70 rounded-xl p-4 items-center"
          >
            <img
              src={item.game.cover}
              alt={item.game.title}
              className="w-40 h-24 rounded-lg object-cover"
            />

            <div className="flex-1">
              <p className="text-lg font-semibold">{item.game.title}</p>
              <p className="text-sm text-gray-300 mt-1">
                <strong>Preço:</strong> R$ {Number(item.price).toFixed(2)}
              </p>

              <Link
                to={`/jogo/${item.game.id}`}
                className="mt-2 inline-block text-purple-400 hover:text-purple-300 underline text-sm"
              >
                Ver jogo →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          to="/pedidos"
          className="text-purple-400 hover:text-purple-300 underline text-sm"
        >
          ← Voltar para meus pedidos
        </Link>
        <Link
          to="/usuario"
          className="text-purple-400 hover:text-purple-300 underline text-sm"
        >
          Ir para minha conta
        </Link>
      </div>
    </div>
  );
}
