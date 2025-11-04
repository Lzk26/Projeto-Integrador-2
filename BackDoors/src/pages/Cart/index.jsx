import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems = useMemo(
    () => [
      {
        id: 1,
        title: "Death stranding Director's cut",
        price: 238.5,
        image: "/src/assets/death-stranding.png",
      },
      // adicione mais jogos que eles entram responsivamente
      // { id: 2, title: "Outro Jogo", price: 181.8, image: "/src/assets/..." },
    ],
    [] // array de dependências vazio pois os dados são estáticos
  );

  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === cartItems.length && cartItems.length > 0;

  const toggleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (allSelected) setSelected([]);
    else setSelected(cartItems.map((g) => g.id));
  };

  const total = useMemo(
    () =>
      selected
        .map((id) => cartItems.find((g) => g.id === id)?.price || 0)
        .reduce((a, b) => a + b, 0),
    [selected, cartItems]
  );

  return (
    <div className="cart-page">
      {/* header */}
      <h1 className="cart-title">Meu Carrinho</h1>

      {/* selecionar tudo (fora da área roxa, em fundo preto) */}
      <div className="select-all-row">
        <label className="select-all">
          <input
            type="checkbox"
            className="select-all__native"
            checked={allSelected}
            onChange={toggleAll}
          />
          <span className="select-all__box" />
          <span>Selecionar tudo</span>
        </label>
      </div>

      {/* grande área roxa de itens */}
      <section className="cart-wrapper">
        <div className="cart-grid">
          {cartItems.map((item) => {
            const isSelected = selected.includes(item.id);
            return (
              <article
                key={item.id}
                className={`cart-card ${isSelected ? "cart-card--selected" : ""}`}
                onClick={() => toggleOne(item.id)}
              >
                {/* checkbox individual no topo direito */}
                <button
                  type="button"
                  aria-label={`Selecionar ${item.title}`}
                  className={`card-check ${isSelected ? "card-check--on" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOne(item.id);
                  }}
                />
                <img src={item.image} alt={item.title} className="cart-card__img" />
                <div className="cart-card__body">
                  <h3 className="cart-card__title">{item.title}</h3>
                  <p className="cart-card__price">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* rodapé dividido em 2 colunas */}
      <section className="cart-bottom">
        {/* Informações importantes */}
        <aside className="info-box">
          <div className="info-box__icon">i</div>
          <div className="info-box__content">
            <h4 className="info-box__title">Informações importantes:</h4>
            <ul className="info-box__list">
              <li>
                Todos os itens são entregues apenas em formato digital por downloads
                ou créditos direto na conta e estão sujeitos à política de reembolso.
              </li>
              <li>
                Verifique os requisitos de sistema na página de cada jogo e os Termos
                de Uso antes de realizar a compra.
              </li>
              <li>
                Alguns itens possuem limite temporário de compra e podem levar em torno
                de 2 dias para poder fazer uma nova compra do mesmo item.
              </li>
            </ul>
          </div>
        </aside>

        {/* Valor total + botão */}
        <aside className="total-box">
          <div>
            <h4 className="total-box__title">VALOR TOTAL</h4>
            <p className="total-box__amount">
              R$ {total.toFixed(2).replace(".", ",")}
            </p>
          </div>

          <Link to="/pagamento">
            <button
              className={`continue-btn ${
                selected.length ? "continue-btn--on" : "continue-btn--off"
              }`}
              disabled={!selected.length}
            >
            Continuar
          </button>
          </Link>
        </aside>
      </section>
    </div>
  );
}
