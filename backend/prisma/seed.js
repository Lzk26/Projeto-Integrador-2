// backend/prisma/seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco...");

  const games = [
    // =====================
    // LINHA 1 (Home - Destaques)
    // =====================
    {
      id: "oblivion",
      title: "The Elder Scrolls IV: Oblivion Remastered",
      description: "Reviva o clássico RPG de mundo aberto com gráficos remasterizados e melhorias de jogabilidade.",
      price: 211.92,
      discount: 20,
      cover: "/games/Oblivion.jpg",
      video: "https://www.youtube.com/embed/wFJ3PZuAjK4"
    },
    {
      id: "doom-eternal",
      title: "DOOM Eternal",
      description: "Enfrente hordas demoníacas no shooter mais frenético e brutal da atualidade.",
      price: 181.80,
      discount: 20,
      cover: "/games/DoomEternal.jpg",
      video: "https://www.youtube.com/embed/2HOClc6Svg4"
    },
    {
      id: "indiana-jones",
      title: "Indiana Jones and the Great Circle",
      description: "Viva uma aventura cinematográfica com o icônico arqueólogo Indiana Jones.",
      price: 279.20,
      discount: 20,
      cover: "/games/IndianaJones.jpg",
      video: "https://www.youtube.com/embed/CynusAYSin0"
    },
    {
      id: "starfield",
      title: "Starfield",
      description: "Explore o universo com liberdade total neste RPG espacial da Bethesda.",
      price: 179.40,
      discount: 40,
      cover: "/games/Starfield.jpg",
      video: "https://www.youtube.com/embed/k2p3c8Eo9pA"
    },

    // =====================
    // LINHA 2 (Ação)
    // =====================
    {
      id: "back4blood",
      title: "Back 4 Blood",
      description: "Um shooter cooperativo dos criadores de Left 4 Dead.",
      price: 55.99,
      discount: 80,
      cover: "/games/Back4Blood.jpg",
      video: "https://www.youtube.com/embed/EXE5RsvZ9a0"
    },
    {
      id: "injustice2",
      title: "Injustice 2 - Legendary Edition",
      description: "Escolha seu herói e lute pelo futuro da humanidade com intensidade cinematográfica.",
      price: 55.99,
      discount: 80,
      cover: "/games/Injustice2.jpg",
      video: "https://www.youtube.com/embed/HU1YgIWu8rE"
    },
    {
      id: "suicide-squad",
      title: "Suicide Squad: Kill the Justice League",
      description: "A equipe mais caótica do mundo contra a Liga da Justiça.",
      price: 55.99,
      discount: 80,
      cover: "/games/SuicideSquad.jpg",
      video: "https://www.youtube.com/embed/v2VpWnBKtnk"
    },
    {
      id: "injustice-gods",
      title: "Injustice: Gods Among Us Ultimate Edition",
      description: "Heróis contra heróis em batalhas épicas.",
      price: 17.99,
      discount: 80,
      cover: "/games/InjusticeGodAUs.jpg",
      video: "https://www.youtube.com/embed/1yBJjENd3RY"
    },

    // =====================
    // LINHA 3 (Novos)
    // =====================
    {
      id: "dragons-dogma-2",
      title: "Dragon's Dogma II",
      description: "Um RPG profundo cheio de monstros gigantes e exploração.",
      price: 249.90,
      discount: 10,
      cover: "/games/DragonsDogma2.jpg",
      video: "https://www.youtube.com/embed/jCEdT3CjHfE"
    },
    {
      id: "elden-ring",
      title: "Elden Ring",
      description: "Uma grande aventura em um mundo aberto desafiador criado por Miyazaki e George R.R. Martin.",
      price: 199.90,
      discount: 30,
      cover: "/games/EldenRing.jpg",
      video: "https://www.youtube.com/embed/E3Huy2cdih0"
    },
    {
      id: "gta5",
      title: "Grand Theft Auto V",
      description: "A experiência definitiva de mundo aberto da Rockstar Games.",
      price: 79.99,
      discount: 50,
      cover: "/games/GTA5.jpg",
      video: "https://www.youtube.com/embed/hvoD7ehZPcM"
    },
    {
      id: "red-dead-2",
      title: "Red Dead Redemption 2",
      description: "Um épico sobre honra e lealdade no velho oeste.",
      price: 249.90,
      discount: 30,
      cover: "/games/RDR2.jpg",
      video: "https://www.youtube.com/embed/eaW0tYpxyp0"
    },

    // =====================
    // LINHA 4 (RPG / blockbuster)
    // =====================
    {
      id: "cyberpunk",
      title: "Cyberpunk 2077",
      description: "Um RPG futurista cheio de ação e narrativa profunda.",
      price: 199.99,
      discount: 50,
      cover: "/games/Cyberpunk.jpg",
      video: "https://www.youtube.com/embed/8X2kIfS6fb8"
    },
    {
      id: "witcher3",
      title: "The Witcher 3: Wild Hunt",
      description: "Um dos maiores RPGs já feitos, com narrativa profunda e mundo vivo.",
      price: 99.99,
      discount: 70,
      cover: "/games/Witcher3.jpg",
      video: "https://www.youtube.com/embed/53MyR_Z3i1w"
    },
    {
      id: "hogwarts",
      title: "Hogwarts Legacy",
      description: "Viva como um estudante de Hogwarts e explore o mundo mágico.",
      price: 299.99,
      discount: 30,
      cover: "/games/HogwartsLegacy.jpg",
      video: "https://www.youtube.com/embed/1O6Qstncpnc"
    },
    {
      id: "assassins-creed-valhalla",
      title: "Assassin’s Creed Valhalla",
      description: "Torne-se um guerreiro Viking e conquiste a Inglaterra.",
      price: 199.99,
      discount: 60,
      cover: "/games/ACValhalla.jpg",
      video: "https://www.youtube.com/embed/ssrNcwxALS4"
    }
  ];

  // Inserindo no banco
  for (const game of games) {
    await prisma.game.upsert({
      where: { id: game.id },
      update: {},
      create: game,
    });
  }

  console.log("🌱 Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
