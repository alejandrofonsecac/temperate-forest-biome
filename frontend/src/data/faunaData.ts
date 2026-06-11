// =============================================================
// data/faunaData.ts — Dados dos animais da Floresta Sazonal Temperada
// =============================================================

import type { EspecieFauna } from '../types';

export const faunaData: EspecieFauna[] = [
  // -----------------------------------------------------------
  // MAMÍFEROS
  // -----------------------------------------------------------
  {
    id: 1,
    tipo: 'fauna',
    nomePopular: 'Urso-pardo',
    nomeCientifico: 'Ursus arctos',
    // Corrigido: sem a palavra 'public' e apontando direto para a pasta final
    imagem: '/images/fauna/urso-pardo.jpg',
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Onívoro',
    adaptacao: 'Entra em torpor (hibernação parcial) durante o inverno...',
    caracteristicaEcologica: 'Dispersor de sementes e controlador de populações...',
    descricao: 'O maior carnívoro terrestre da floresta sazonal temperada...',
    statusConservacao: 'LC',
  },
  {
    id: 2,
    tipo: 'fauna',
    nomePopular: 'Cervo-vermelho',
    nomeCientifico: 'Cervus elaphus',
    imagem: '/images/fauna/cervo-vermelho.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Herbívoro',
    adaptacao: 'Cobre o pelo com subpelo denso e lanoso no inverno...',
    caracteristicaEcologica: 'Herbívoro de grande porte que regula...',
    descricao: 'Um dos maiores cervídeos do mundo...',
    statusConservacao: 'LC',
  },
  {
    id: 3,
    tipo: 'fauna',
    nomePopular: 'Lobo-cinzento',
    nomeCientifico: 'Canis lupus',
    imagem: '/images/fauna/lobo-cinzento.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Carnívoro',
    adaptacao: 'Caça em alcateia com divisão de papéis...',
    caracteristicaEcologica: 'Predador de topo que regula populações...',
    descricao: 'Predador de topo e espécie-chave ecológica...',
    statusConservacao: 'LC',
  },
  {
    id: 4,
    tipo: 'fauna',
    nomePopular: 'Javali-europeu',
    nomeCientifico: 'Sus scrofa',
    imagem: '/images/fauna/javali-europeu.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Onívoro',
    adaptacao: 'Focinho muscular altamente sensorial usado para escavar...',
    caracteristicaEcologica: 'Engenheiro do ecossistema: suas revolvimentos...',
    descricao: 'Onívoro robusto e altamente adaptável...',
    statusConservacao: 'LC',
  },
  {
    id: 5,
    tipo: 'fauna',
    nomePopular: 'Esquilo-cinzento',
    nomeCientifico: 'Sciurus carolinensis',
    imagem: '/images/fauna/esquilo-cinzento.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Onívoro',
    adaptacao: 'Enterra bolotas e nozes em centenas de locais...',
    caracteristicaEcologica: 'Dispersor de sementes de carvalhos...',
    descricao: 'Pequeno mamífero arborícola abundante nas florestas...',
    statusConservacao: 'LC',
  },
  {
    id: 6,
    tipo: 'fauna',
    nomePopular: 'Raposa-vermelha',
    nomeCientifico: 'Vulpes vulpes',
    imagem: '/images/fauna/raposa-vermelha.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Onívoro',
    adaptacao: 'Cauda espessa ("escova") usada como manta térmica...',
    caracteristicaEcologica: 'Predador meso que controla populações...',
    descricao: 'O canídeo de maior distribuição geográfica do mundo...',
    statusConservacao: 'LC',
  },
  // -----------------------------------------------------------
  // AVES
  // -----------------------------------------------------------
  {
    id: 7,
    tipo: 'fauna',
    nomePopular: 'Pica-pau-manchado',
    nomeCientifico: 'Picoides pubescens',
    imagem: '/images/fauna/pica-pau-manchado.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Ave',
    dieta: 'Insetívoro',
    adaptacao: 'Bico reforçado e pescoço musculoso suportam impactos...',
    caracteristicaEcologica: 'Escava cavidades em troncos mortos usadas...',
    descricao: 'Ave carpinteira das florestas temperadas...',
    statusConservacao: 'LC',
  },
  {
    id: 8,
    tipo: 'fauna',
    nomePopular: 'Gavião-de-cauda-vermelha',
    nomeCientifico: 'Buteo jamaicensis',
    imagem: '/images/fauna/gaviao-de-cauda-vermelha.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Ave',
    dieta: 'Carnívoro',
    adaptacao: 'Visão quatro vezes mais aguçada que a humana...',
    caracteristicaEcologica: 'Predador de topo nas bordas de floresta...',
    descricao: 'Uma das aves de rapina mais comuns da América do Norte...',
    statusConservacao: 'LC',
  },
  {
    id: 9,
    tipo: 'fauna',
    nomePopular: 'Gaio-azul',
    nomeCientifico: 'Cyanocitta cristata',
    imagem: '/images/fauna/gaio-azul.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Ave',
    dieta: 'Onívoro',
    adaptacao: 'Imita o grito de gaviões com perfeição...',
    caracteristicaEcologica: 'O principal dispersor de bolotas de carvalho...',
    descricao: 'Ave colorida e inteligente de voz versátil...',
    statusConservacao: 'LC',
  },
  // -----------------------------------------------------------
  // RÉPTEIS / ANFÍBIOS
  // -----------------------------------------------------------
  {
    id: 10,
    tipo: 'fauna',
    nomePopular: 'Salamandra-manchada',
    nomeCientifico: 'Salamandra salamandra',
    imagem: '/images/fauna/salamandra-manchada.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Anfíbio',
    dieta: 'Carnívoro',
    adaptacao: 'Pele produz alcaloides altamente tóxicos...',
    caracteristicaEcologica: 'Bioindicador sensível à qualidade do habitat...',
    descricao: 'Anfíbio icônico das florestas europeias úmidas...',
    statusConservacao: 'LC',
  },
  {
    id: 11,
    tipo: 'fauna',
    nomePopular: 'Lagarto-de-tronco-lento',
    nomeCientifico: 'Anguis fragilis',
    imagem: '/images/fauna/lagarto-de-tronco-lento.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Réptil',
    dieta: 'Carnívoro',
    adaptacao: 'Apesar de parecer cobra, é um lagarto sem pernas...',
    caracteristicaEcologica: 'Controla populações de lesmas, minhocas...',
    descricao: 'Lagarto sem patas nativo da Europa e Ásia Ocidental...',
    statusConservacao: 'LC',
  },
  // -----------------------------------------------------------
  // INSETOS
  // -----------------------------------------------------------
  {
    id: 12,
    tipo: 'fauna',
    nomePopular: 'Besouro-veado',
    nomeCientifico: 'Lucanus cervus',
    imagem: '/images/fauna/besouro-veado.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Inseto',
    dieta: 'Detritívoro/Saprófago',
    adaptacao: 'Larvas vivem até 8 anos dentro de troncos mortos...',
    caracteristicaEcologica: 'Decompositor essencial de madeira morta...',
    descricao: 'O maior besouro da Europa, ameaçado pela remoção...',
    statusConservacao: 'VU',
  },
  {
    id: 13,
    tipo: 'fauna',
    nomePopular: 'Borboleta-branca-do-repolho',
    nomeCientifico: 'Pieris brassicae',
    imagem: '/images/fauna/borboleta-branca-do-repolho.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Inseto',
    dieta: 'Herbívoro (folhas) / Nectarívoro (adulto)',
    adaptacao: 'Pupas em diapausa (dormência) no inverno...',
    caracteristicaEcologica: 'Polinizador de plantas de sub-bosque...',
    descricao: 'Borboleta abundante em florestas e bordas temperadas...',
    statusConservacao: 'LC',
  },
  // -----------------------------------------------------------
  // MAIS MAMÍFEROS
  // -----------------------------------------------------------
  {
    id: 14,
    tipo: 'fauna',
    nomePopular: 'Texugo-europeu',
    nomeCientifico: 'Meles meles',
    imagem: '/images/fauna/texugo-europeu.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Onívoro',
    adaptacao: 'Constrói sistemas de tocas subterrâneas...',
    caracteristicaEcologica: 'Engenheiro do solo: seus sistemas de tocas...',
    descricao: 'Mustelídeo robusto e noturno amplamente distribuído...',
    statusConservacao: 'LC',
  },
  {
    id: 15,
    tipo: 'fauna',
    nomePopular: 'Alce-europeu',
    nomeCientifico: 'Alces alces',
    imagem: '/images/fauna/alce-europeu.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Mamífero',
    dieta: 'Herbívoro',
    adaptacao: 'Narina bulbosa com cavidades de aquecimento...',
    caracteristicaEcologica: 'Megaerbívoro que regula árvores jovens...',
    descricao: 'O maior cervídeo vivo, habitante de florestas boreais...',
    statusConservacao: 'LC',
  },
  {
    id: 16,
    tipo: 'fauna',
    nomePopular: 'Lince-ibérico',
    nomeCientifico: 'Lynx pardinus',
    imagem: '/images/fauna/lince-iberico.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: true,
    grupoAnimal: 'Mamífero',
    dieta: 'Carnívoro',
    adaptacao: 'Especialização absoluta no coelho-bravo como presa...',
    caracteristicaEcologica: 'Predador de topo que regula populações de coelhos...',
    descricao: 'O felino mais ameaçado do mundo. Endêmico da Península...',
    statusConservacao: 'EN',
  },
  {
    id: 17,
    tipo: 'fauna',
    nomePopular: 'Coruja-das-torres',
    nomeCientifico: 'Tyto alba',
    imagem: '/images/fauna/coruja-das-torres.jpg', // Corrigido
    imagemCredito: 'Wikimedia Commons / CC BY-SA',
    isNativa: true,
    isEndemica: false,
    grupoAnimal: 'Ave',
    dieta: 'Carnívoro',
    adaptacao: 'Face em forma de disco funciona como antena parabólica...',
    caracteristicaEcologica: 'Controla populações de roedores em bordas...',
    descricao: 'A coruja de distribuição mais ampla do mundo...',
    statusConservacao: 'LC',
  },
];

export const faunaDestaque = faunaData.slice(0, 5);