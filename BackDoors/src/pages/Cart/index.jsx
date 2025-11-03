import { Link } from "react-router-dom";

export default function CartPage() {
  return (
  <div className="cart-page">
      {/* Título */}
  <h1 className="cart-title">
        Meu Carrinho
      </h1>

      {/* Caixa principal */}
  <div className="cart-wrapper">
        {/* Mensagem de carrinho vazio */}
  <div className="cart-empty">
          <button
            className="cart-close"
            aria-label="Fechar"
          >
            ✕
          </button>

          <p className="empty-text">
            Não há itens no seu carrinho :(
          </p>

          <Link
            to="/"
            className="back-button"
          >
            Voltar para o início
          </Link>
        </div>

        {/* Lado direito - Total */}
        <div className="cart-total">
          <div>
            <h2 className="total-title">VALOR TOTAL</h2>
            <p className="total-amount">R$ 0,00</p>
          </div>

          <button className="continue-button">
            Continuar
          </button>
        </div>
      </div>

      {/* Informações importantes */}
      <div className="info-box">
        <div className="info-icon">ℹ️</div>
        <div>
          <h3 className="info-title">
            Informações importantes:
          </h3>
          <ul className="info-list">
            <li>
              Todos os itens são entregues apenas em formato digital por download
              ou créditos diretos na conta.
            </li>
            <li>
              Verifique os requisitos de sistema e os Termos de Uso antes da
              compra.
            </li>
            <li>
              Alguns itens podem levar até 2 dias para liberar nova compra.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
