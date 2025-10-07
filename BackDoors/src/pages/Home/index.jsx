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
      <section className=" promoções mt-10 px-6">
        <h2 className="text-4xl font-bold mb-4">Os mais esperados de 2025!</h2>
        <p className="
        ">O que 2025 guardou para você?</p>
        <div className="grid grid-cols-4 place-items-center w-full" >
          <GameCard 
          title="The Elder Scrolls IV: Oblivion
          Remastered"
          price="211,92"
          discount="20"
          image="/src/assets/Oblivion.png"
          />
          <GameCard 
          title="DOOM Eternal"
          price="181,80"
          discount="20"
          image="/src/assets/DoomEternal.png"
          />
          <GameCard 
          title="Indiana Jones and the Great Circle"
          price="279,20"
          discount="20"
          image="/src/assets/IndianaJones.png"/>
          <GameCard
          title="Starfield"
          price="179,40"
          discount="40"
          image="src/assets/Starfield.png"
          />
          
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
      <section className="mt-10 px-6">
        <h2 className="text-4xl font-bold mb-4">Tá na hora da ação!</h2>
        <div className="grid grid-cols-4 place-items-center w-full">
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