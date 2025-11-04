import { useState } from "react";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("pix");
  const [agreed, setAgreed] = useState(false);

  const methods = [
    {
      id: "paypal",
      name: "PAYPAL",
      desc: "Até 6x sem juros no cartão",
      logo: "/src/assets/paypal-payment.png",
    },
    {
      id: "pix",
      name: "PIX",
      desc: "Pagamento rápido e fácil com aprovação imediata",
      logo: "/src/assets/pix-payment.png",
    },
    {
      id: "card",
      name: "CARTÃO DE CRÉDITO",
      desc: "Até 6x sem juros no cartão",
      logo: "/src/assets/visa-master-payment.png",
    },
    {
      id: "boleto",
      name: "BOLETO",
      desc: "Até 3 dias para pagamento após emissão. Compra liberada após o pagamento.",
      logo: "/src/assets/boleto-payment.png",
    },
  ];

  return (
    <div className="payment-page">
      {/* ======= LADO ESQUERDO ======= */}
      <section className="payment-left">
        <div className="progress">
          <div className="logo-box">
            <img src="Logo.png" alt="Trapdoor Logo" />
          </div>
          <h2 className="progress-title">Você está quase lá!</h2>
          <div className="progress-line">
            <div className="progress-bar"></div>
          </div>
        </div>

        <h3 className="payment-title">Métodos de pagamento</h3>

        <div className="methods">
          {methods.map((method) => (
            <label
              key={method.id}
              className={`method-card ${
                selectedMethod === method.id ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                className="hidden"
              />
              <div className="method-content">
                <div>
                  <p className="method-name">{method.name}</p>
                  <span className="method-desc">{method.desc}</span>
                </div>
                <img src={method.logo} alt={method.name} className="method-logo" />
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* ======= LADO DIREITO ======= */}
      <section className="payment-summary">
        <h3 className="summary-title">Resumo do pedido</h3>

        <div className="summary-product">
          <img
            src="/src/assets/death-stranding.png"
            alt="Death Stranding"
            className="product-img"
          />
          <div>
            <p className="product-title">DEATH STRANDING DIRECTOR’S CUT</p>
            <p className="product-sub">Kojima Productions</p>
          </div>
          <div className="price-box">
            <span className="price-label">R$ 238,50</span>
          </div>
        </div>

        <div className="summary-details">
          <p>
            <span>Preço:</span> R$ 239,00
          </p>
          <p>
            <span>Desconto:</span> -R$ 0,50
          </p>
          <hr className="divider" />
          <p className="total">
            <span>Total:</span> R$ 238,50
          </p>
        </div>

        <div className="coupon-box">
          <label htmlFor="coupon">Cupom:</label>
          <select id="coupon">
            <option>Selecione um cupom de desconto</option>
            <option>TRAP10 - 10% OFF</option>
            <option>WELCOME - 15% OFF</option>
          </select>
        </div>

        {/* ======= TERMOS ======= */}
        <div className="terms mt-4">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
            Clique aqui para aceitar nossos termos de{" "}
            <span className="link">política de usuário e reembolso</span>
          </label>
        </div>

        {/* ======= BOTÃO FINALIZAR ======= */}
        <button
          disabled={!agreed}
          className={`mt-4 py-3 rounded-xl font-semibold w-full transition-all duration-300 ${
            agreed
              ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white hover:scale-[1.02]"
              : "bg-gray-500 text-gray-300 cursor-not-allowed opacity-60"
          }`}
        >
          Finalizar pedido
        </button>
      </section>
    </div>
  );
}
