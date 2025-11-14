import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../../../backend/src/services/cart";
import { finalizeOrder } from "../../../backend/src/services/order";


export default function Carrinho() {
  const [cart, setCart] = useState(null);

  async function load() {
    const data = await getCart();
    setCart(data);
  }

  async function handleRemove(gameId) {
    await removeFromCart(gameId);
    load();
  }

  async function handleClear() {
    await clearCart();
    load();
  }

  useEffect(() => {
    load();
  }, []);

  if (!cart) return <h1>Carregando carrinho...</h1>;

  return (
    <div className="cart-container">
      <h1>Seu carrinho</h1>

      {cart.items.length === 0 && <p>O carrinho está vazio ;(</p>}

      <div className="cart-list">
        {cart.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.game.cover} alt={item.game.title} />
            <div>
              <h2>{item.game.title}</h2>
              <p>R$ {item.game.price}</p>

              <button 
                onClick={() => handleRemove(item.gameId)}>
                Remover
              </button>

              <button
                className="finish-btn"
                onClick={async () => {
                const res = await finalizeOrder();
                alert(res.message);
                load(); // recarrega carrinho limpo
                }}>
              Finalizar compra
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.items.length > 0 && (
        <>
          <button className="clear-btn" onClick={handleClear}>
            Limpar carrinho
          </button>
        </>
      )}
    </div>
  );
}
