import { Link } from "react-router-dom";
import GameCard from '../../components/GameCard';
import { useEffect, useState } from 'react';
import { getGames } from "../../api";


const Home = () => {

  const [games, setGames] = useState([]);

  const groups = [];
for (let i = 0; i < games.length; i += 4) {
  groups.push(games.slice(i, i + 4));
}

useEffect(() => {
  async function load() {
    const data = await getGames();
    setGames(data);
  }
  load();
}, []);




  return (
    <div className="page-container">
      {/* Banner principal */}
      <section className="banner">
        <div className="banner-img-container">
          <img
            src="/src/assets/BannerDescontoEpico.png"
            alt="Banner Principal"
            className="banner-img"
          />
        </div>
      </section>

      {/* CARD JOGOS */}
      <section className="">
        <h2 className="title-large">Os mais esperados de 2025!</h2>
        <p className="subtitle">O que 2025 guardou para você?</p>

{/* LINHA 1 */}
       <div className="card-grid">
  {groups[0]?.map((game) => (
    <Link key={game.id} to={`/jogo/${game.id}`}>
      <GameCard
        title={game.title}
        price={game.price}
        discount={game.discount}
        image={game.cover}
      />
    </Link>
  ))}
</div>

{/* LINHA 2 */}
<div className="card-grid">
  {groups[1]?.map((game) => (
    <Link key={game.id} to={`/jogo/${game.id}`}>
      <GameCard
        title={game.title}
        price={game.price}
        discount={game.discount}
        image={game.cover}
      />
    </Link>
  ))}
</div>
      </section>

      {/* Banner intermediário */}
      <section className="banner">
        <div className="banner-img-container">
          <img
            src="/src/assets/BannerCupons.png"
            alt="Banner secundário"
            className="banner-img"
          />
        </div>
      </section>

      {/* Seção: Mais populares */}
      <section className="">
        <h2 className="title-large">Tá na hora da ação!</h2>
        {/* LINHA 3 */}
<div className="card-grid">
  {groups[2]?.map((game) => (
    <Link key={game.id} to={`/jogo/${game.id}`}>
      <GameCard
        title={game.title}
        price={game.price}
        discount={game.discount}
        image={game.cover}
      />
    </Link>
  ))}
</div>

{/* LINHA 4 */}
<div className="card-grid">
  {groups[3]?.map((game) => (
    <Link key={game.id} to={`/jogo/${game.id}`}>
      <GameCard
        title={game.title}
        price={game.price}
        discount={game.discount}
        image={game.cover}
      />
    </Link>
  ))}
</div>
      </section>
    </div>
  );
};

export default Home;
