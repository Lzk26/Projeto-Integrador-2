// src/pages/Cart/index.jsx
import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../../services/cart";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

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

  if (!cart) {
    return (
      <div className="cart-page flex items-center justify-center">
        <h1 className="text-xl">Carregando carrinho...</h1>
      </div>
    );
  }

  const total = cart.items.reduce(
    (sum, item) => sum + Number(item.game.price),
    0
  );

  const hasItems = cart.items.length > 0;

  return (
    <div className="cart-page">
      <h1 className="cart-title">Seu carrinho</h1>

      {/* Área roxa com os cards */}
      <div className="cart-wrapper mt-4">
        {hasItems ? (
          <div className="cart-grid">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={item.game.cover}
                  alt={item.game.title}
                  className="cart-card__img"
                />
                <div className="cart-card__body">
                  <h2 className="cart-card__title">{item.game.title}</h2>
                  <p className="cart-card__price">
                    R$ {Number(item.game.price).toFixed(2)}
                  </p>

                  <button
                    className="mt-2 text-xs text-red-300 underline"
                    onClick={() => handleRemove(item.gameId)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-200">
            O carrinho está vazio ;(
          </p>
        )}

        {/* Rodapé com info e total */}
        <div className="cart-bottom">
          {/* Box de informações */}
          <div className="info-box">
            <div className="info-box__icon">i</div>
            <div className="info-box__content">
              <h3 className="info-box__title">Como funciona a Trapdoor?</h3>
              <ul className="info-box__list">
                <li>Você recebe a chave oficial do jogo após o pagamento.</li>
                <li>
                  Todos os jogos são originais e ativados na sua conta Steam.
                </li>
                <li>
                  Suporte disponível em caso de qualquer problema com a ativação.
                </li>
              </ul>
            </div>
          </div>

          {/* Box de total */}
          <div className="total-box">
            <div>
              <p className="total-box__title">TOTAL DA COMPRA</p>
              <p className="total-box__amount">
                R$ {total.toFixed(2)}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <button
                className={
                  "continue-btn " +
                  (hasItems ? "continue-btn--on" : "continue-btn--off")
                }
                disabled={!hasItems}
                onClick={() => hasItems && navigate("/pagamento")}
              >
                Continuar para pagamento
              </button>

              {hasItems && (
                <button
                  className="text-xs text-gray-200 underline mt-2"
                  onClick={handleClear}
                >
                  Limpar carrinho
                </button>
              )}

              <Link
                to="/"
                className="text-xs text-gray-200 underline mt-2 text-center"
              >
                ← Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
