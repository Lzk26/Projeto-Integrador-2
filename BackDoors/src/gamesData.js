// src/gamesData.js
export const gamesData = [
  {
    id: "oblivion",
    title: "The Elder Scrolls IV: Oblivion Remastered",
    description: "Reviva o clássico RPG de mundo aberto com gráficos remasterizados e melhorias de jogabilidade.",
    price: "211,92",
    discount: "20",
    cover: "/src/assets/Oblivion.png",
    video: "https://www.youtube.com/embed/wFJ3PZuAjK4",
    thumbnails: [
      "/src/assets/oblivion1.jpg",
      "/src/assets/oblivion2.jpg",
      "/src/assets/oblivion3.jpg",
    ],
    requisitos: {
      minimos: [
        "SO: Windows XP",
        "Processador: Intel Core 2 Duo",
        "Memória: 2 GB RAM",
        "Placa de vídeo: NVIDIA GeForce 8800",
      ],
      recomendados: [
        "SO: Windows 7",
        "Processador: Intel Core i5",
        "Memória: 4 GB RAM",
        "Placa de vídeo: NVIDIA GeForce GTX 460",
      ]
    }
  },
  
  {
    id: "doom-eternal",
    title: "DOOM Eternal",
    description:
      "Enfrente hordas demoníacas no shooter mais frenético e brutal da atualidade.",
    price: "181,80",
    discount: "20",
    cover: "/src/assets/DoomEternal.png",
    video: "https://www.youtube.com/embed/2HOClc6Svg4", // exemplo: adicione outro vídeo se quiser
    requisitos: {
      minimos: [
        "SO: Windows 10",
        "Processador: Intel Core i5-6600K",
        "Memória: 8 GB RAM",
        "Placa de vídeo: GTX 1050 Ti / RX 470",
      ],
      recomendados: [
        "SO: Windows 10",
        "Processador: Intel Core i7-7700K",
        "Memória: 16 GB RAM",
        "Placa de vídeo: GTX 1660 / RX 5600",
      ],
    },
  },
  {
    id: "starfield",
    title: "Starfield",
    description:
      "Explore o universo com liberdade total neste RPG espacial da Bethesda.",
    price: "179,40",
    discount: "40",
    cover: "/src/assets/Starfield.png",
    video: "https://www.youtube.com/embed/k2p3c8Eo9pA", // exemplo: trailer oficial de Starfield
    requisitos: {
      minimos: [
        "SO: Windows 10",
        "Processador: Ryzen 5 2600X",
        "Memória: 16 GB RAM",
        "Placa de vídeo: GTX 1070 Ti / RX 5700",
      ],
      recomendados: [
        "SO: Windows 11",
        "Processador: Ryzen 7 5800X",
        "Memória: 32 GB RAM",
        "Placa de vídeo: RTX 3060 / RX 6800",
      ],
    },
  },
];
