import { useEffect, useState } from "react";
import { getCart } from "../../services/cart";
import { finalizeOrder } from "../../services/order";
import { useNavigate, Link } from "react-router-dom";

export default function Payment() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await getCart();
      setCart(data);
    }
    load();
  }, []);

  if (!cart) {
    return (
      <div style={{ paddingTop: "80px", color: "white", textAlign: "center" }}>
        <h1>Carregando pagamento...</h1>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div style={{ paddingTop: "80px", color: "white", textAlign: "center" }}>
        <h1>Nenhum item no carrinho.</h1>
        <Link to="/" style={{ color: "#5E17EB" }}>
          Voltar para a loja
        </Link>
      </div>
    );
  }

  const total = cart.items.reduce(
    (sum, item) => sum + Number(item.game.price),
    0
  );

  async function handlePayment() {
    const result = await finalizeOrder();

    alert(result.message);

    navigate("/pedidos");
  }

  return (
    <div
      style={{
        paddingTop: "80px",
        color: "white",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>Finalizar Pagamento</h1>

      <h3 style={{ marginTop: "20px" }}>Resumo da compra:</h3>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {cart.items.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#111",
              padding: "12px",
              borderRadius: "8px",
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <img
              src={item.game.cover}
              alt={item.game.title}
              style={{ width: "120px", height: "70px", borderRadius: "6px" }}
            />

            <div>
              <p><strong>{item.game.title}</strong></p>
              <p>R$ {Number(item.game.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "20px" }}>
        Total: R$ {total.toFixed(2)}
      </h2>

      <button
        onClick={handlePayment}
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "14px",
          background: "#5E17EB",
          border: "none",
          color: "white",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Confirmar pagamento
      </button>

      <div style={{ marginTop: "20px" }}>
        <Link to="/carrinho" style={{ color: "#5E17EB" }}>
          ← Voltar para o carrinho
        </Link>
      </div>
    </div>
  );
}
