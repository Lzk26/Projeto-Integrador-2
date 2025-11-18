// src/pages/Payment/index.jsx
import { useEffect, useState } from "react";
import { getCart } from "../../services/cart";
import { finalizeOrder } from "../../services/order";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [cart, setCart] = useState(null);
  const [method, setMethod] = useState("pix");
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
      <div className="min-h-screen flex items-center justify-center text-white">
        <h1>Carregando pagamento...</h1>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-3">
        <h1>Nenhum item no carrinho.</h1>
        <button
          className="mt-2 px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600"
          onClick={() => navigate("/")}
        >
          Voltar para a loja
        </button>
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
    <div className="payment-page">
      {/* Lado esquerdo – progresso + métodos */}
      <section className="payment-left">
        <div className="progress">
          <div className="logo-box">
            <img src="/Logo.png" alt="Trapdoor" />
          </div>
          <h2 className="progress-title">
            Finalize sua compra com segurança
          </h2>
          <div className="progress-line">
            <div className="progress-bar" />
          </div>
        </div>

        <div>
          <h3 className="payment-title">Selecione a forma de pagamento</h3>

          <div className="methods">
            <div
              className={
                "method-card " + (method === "pix" ? "selected" : "")
              }
              onClick={() => setMethod("pix")}
            >
              <div className="method-content">
                <div>
                  <p className="method-name">Pix</p>
                  <p className="method-desc">
                    Aprovação rápida e segura direto no seu banco.
                  </p>
                </div>
                <img
                  src="/pix-payment.png"
                  alt="Pix"
                  className="method-logo"
                />
              </div>
            </div>

            <div
              className={
                "method-card " + (method === "credito" ? "selected" : "")
              }
              onClick={() => setMethod("credito")}
            >
              <div className="method-content">
                <div>
                  <p className="method-name">Cartão de crédito</p>
                  <p className="method-desc">
                    Pague em até 12x (sujeito a juros).
                  </p>
                </div>
                <img
                  src="/mastercard-payment.png"
                  alt="Cartão"
                  className="method-logo"
                />
              </div>
            </div>

            <div
              className={
                "method-card " + (method === "boleto" ? "selected" : "")
              }
              onClick={() => setMethod("boleto")}
            >
              <div className="method-content">
                <div>
                  <p className="method-name">Boleto bancário</p>
                  <p className="method-desc">
                    Compensação em até 2 dias úteis.
                  </p>
                </div>
                <img
                  src="/boleto-payment.png"
                  alt="Boleto"
                  className="method-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lado direito – resumo */}
      <aside className="payment-summary">
        <h3 className="summary-title">Resumo da compra</h3>

        {/* Primeiro jogo em destaque */}
        <div className="summary-product">
          <img
            src={cart.items[0].game.cover}
            alt={cart.items[0].game.title}
            className="product-img"
          />
          <div>
            <p className="product-title">{cart.items[0].game.title}</p>
            <p className="product-sub">
              + {cart.items.length - 1} jogo(s) adicional(is), se houver.
            </p>
          </div>
          <span className="price-box">
            R$ {Number(cart.items[0].game.price).toFixed(2)}
          </span>
        </div>

        <div className="summary-details">
          <p>Subtotal: R$ {total.toFixed(2)}</p>
          <p>Taxas: R$ 0,00</p>
          <div className="divider" />
          <p className="total">Total: R$ {total.toFixed(2)}</p>
        </div>

        <div className="coupon-box">
          <label htmlFor="cupom">Cupom promocional</label>
          <select id="cupom">
            <option>Nenhum cupom aplicado</option>
            <option>TRAP10 - 10% OFF</option>
          </select>
        </div>

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Li e concordo com os{" "}
            <span className="link">Termos de Uso</span> e a{" "}
            <span className="link">Política de Privacidade</span>.
          </label>
        </div>

        <button className="confirm-btn" onClick={handlePayment}>
          Confirmar pagamento
        </button>
      </aside>
    </div>
  );
}
