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
      <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Promoções imperdíveis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
          <GameCard 
          title="The Elder Scrolls IV: Oblivion
          Remastered"
          price="211,92"
          discount="20"
          image="/src/assets/Oblivion.png"
          
          />
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
      <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Mais populares</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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