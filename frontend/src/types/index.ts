// =============================================================
// types/index.ts — Tipos TypeScript globais do projeto
// Centralizamos aqui todos os tipos reutilizados
// para facilitar manutenção e autocompletion no editor.
// =============================================================

// -------------------------------------------------------------
// ESPÉCIES DE FAUNA E FLORA
// -------------------------------------------------------------

/** Status de conservação baseado na IUCN */
export type StatusConservacao =
  | 'LC'   // Pouco Preocupante
  | 'NT'   // Quase Ameaçado
  | 'VU'   // Vulnerável
  | 'EN'   // Em Perigo
  | 'CR'   // Criticamente em Perigo
  | 'EW'   // Extinto na Natureza
  | 'EX';  // Extinto

/** Tipo de espécie: animal ou vegetal */
export type TipoEspecie = 'fauna' | 'flora';

/** Estrutura base de uma espécie (fauna ou flora) */
export interface Especie {
  id: number;
  nomePopular: string;
  nomeCientifico: string;
  /** URL da imagem — usar fotos reais de fontes como Unsplash/Wikimedia */
  imagem: string;
  imagemCredito?: string;         // Crédito da foto
  isNativa: boolean;              // Nativa do bioma
  isEndemica: boolean;            // Endêmica (só existe neste bioma)
  adaptacao: string;              // Adaptação ao ambiente (obrigatório)
  caracteristicaEcologica: string; // Função/papel no ecossistema
  descricao: string;              // Texto informativo geral
  statusConservacao?: StatusConservacao;
  tipo: TipoEspecie;
}

/** Espécie animal — extende com campos específicos */
export interface EspecieFauna extends Especie {
  tipo: 'fauna';
  grupoAnimal: string;  // Ex: mamífero, ave, réptil, anfíbio, inseto
  dieta: string;        // Ex: herbívoro, carnívoro, onívoro
}

/** Espécie vegetal — extende com campos específicos */
export interface EspecieFlora extends Especie {
  tipo: 'flora';
  grupoVegetal: string; // Ex: árvore decídua, arbusto, herbácea, fungo
  alturaMedia?: string; // Ex: "20–30 m"
}

// -------------------------------------------------------------
// QUIZ
// -------------------------------------------------------------

/** Tipo de questão do quiz */
export type TipoQuestao = 'multipla-escolha' | 'somatoria' | 'verdadeiro-falso';

/** Alternativa de uma questão */
export interface Alternativa {
  id: string;       // 'a', 'b', 'c', 'd'
  texto: string;
  correta: boolean;
  /** Para questões de somatória, valor da alternativa (ex: 01, 02, 04, 08) */
  valorSomatoria?: number;
}

/** Questão do quiz */
export interface Questao {
  id: number;
  enunciado: string;
  tipo: TipoQuestao;
  alternativas: Alternativa[];
  /** Gabarito para múltipla escolha: id da alternativa correta */
  gabarito?: string;
  /** Gabarito para somatória: soma dos valores corretos */
  gabaritoSomatoria?: number;
  explicacao: string; // Mostrada após responder
  dificuldade: 'facil' | 'medio' | 'dificil';
}

/** Resultado do quiz enviado ao backend */
export interface ResultadoQuiz {
  nomeAluno?: string;
  pontuacao: number;
  totalQuestoes: number;
  respostas: {
    questaoId: number;
    respostaAluno: string | number;
    correta: boolean;
  }[];
  tempoSegundos: number;
}

// -------------------------------------------------------------
// NAVEGAÇÃO
// -------------------------------------------------------------

/** Item do menu de navegação */
export interface NavItem {
  label: string;
  href: string;
  /** Se true, abre em nova aba */
  externo?: boolean;
}

// -------------------------------------------------------------
// CARROSSEL
// -------------------------------------------------------------

/** Estado do carrossel */
export interface CarouselState {
  itemAtual: number;
  total: number;
  irPara: (index: number) => void;
  proximo: () => void;
  anterior: () => void;
}

// -------------------------------------------------------------
// SCROLL REVEAL
// -------------------------------------------------------------

/** Opções do hook useScrollReveal */
export interface ScrollRevealOptions {
  /** Percentual da viewport que o elemento precisa ocupar para disparar (0–1) */
  threshold?: number;
  /** Disparar apenas uma vez? (padrão: true) */
  umaVez?: boolean;
  /** Atraso em ms antes de aplicar a classe is-visible */
  delay?: number;
}
