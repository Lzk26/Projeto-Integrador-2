import GameCard from '../../components/GameCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Banner principal */}
      <section className="banner">
        <div className="banner-desconto"> <img src="/src/assets/BannerDescontoEpico.png" alt="Banner Principal" className="h-full object-cover rounded-xl" /></div>
      </section>

      {/* Seção: Promoções */}
      <section className="section">
        <h2>Promoções imperdíveis</h2>
        <div className="card-grid">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </section>

      {/* Banner intermediário */}
      <section className="banner">
        <div className="banner-promoção"><img src="/src/assets/BannerCupons.png" alt="Banner cupons" /></div>
      </section>

      {/* Seção: Mais populares */}
      <section className="section">
        <h2>Mais populares</h2>
        <div className="card-grid">
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </section>
    </div>
  );
};

export default Home;