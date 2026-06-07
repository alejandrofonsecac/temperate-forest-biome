// =============================================================
// pages/Quiz.tsx
//
// Página do Quiz sobre a Floresta Sazonal Temperada.
//
// ESTADO ATUAL: Utiliza dados locais (questões embutidas no código).
// PRÓXIMO PASSO: Quando o backend Spring Boot estiver pronto,
//   trocar a constante `questoesLocais` por uma chamada fetch:
//   fetch('/api/quiz/questoes').then(r => r.json())
//
// Suporta dois tipos de questão:
//   - Múltipla escolha: apenas 1 alternativa correta
//   - Somatória: várias corretas, resposta é a soma dos valores
// =============================================================

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import type { Questao } from '../types';

// ----------------------------------------------------------
// QUESTÕES DO QUIZ (dados locais)
// Quando o backend estiver pronto, remova este bloco e faça
// fetch('/api/quiz/questoes') no useEffect abaixo.
// ----------------------------------------------------------
const questoesLocais: Questao[] = [
  {
    id: 1,
    tipo: 'multipla-escolha',
    dificuldade: 'facil',
    enunciado: 'Qual característica define as árvores dominantes da Floresta Sazonal Temperada?',
    alternativas: [
      { id: 'a', texto: 'Folhas perenes (não caem no inverno)', correta: false },
      { id: 'b', texto: 'Folhas caducas (caem no outono)', correta: true },
      { id: 'c', texto: 'Folhas espinhosas para reter água', correta: false },
      { id: 'd', texto: 'Ausência total de folhagem', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'As árvores da Floresta Sazonal Temperada são predominantemente decíduas (caducifólias): perdem suas folhas no outono para reduzir a perda de água por transpiração durante o inverno frio e para evitar quebra de galhos pela neve.',
  },
  {
    id: 2,
    tipo: 'multipla-escolha',
    dificuldade: 'facil',
    enunciado: 'Em quais latitudes a Floresta Sazonal Temperada se distribui principalmente?',
    alternativas: [
      { id: 'a', texto: '0°–10° Norte e Sul (região equatorial)', correta: false },
      { id: 'b', texto: '10°–30° Norte e Sul (subtropical)', correta: false },
      { id: 'c', texto: '30°–60° Norte e Sul (temperado)', correta: true },
      { id: 'd', texto: '60°–90° Norte e Sul (polar)', correta: false },
    ],
    gabarito: 'c',
    explicacao: 'O bioma ocorre entre as latitudes 30° e 60° Norte e Sul, onde as quatro estações são bem definidas. Regiões encontradas na Europa, leste da América do Norte e leste asiático.',
  },
  {
    id: 3,
    tipo: 'multipla-escolha',
    dificuldade: 'medio',
    enunciado: 'O fenômeno "cascata trófica" reintroduzido em Yellowstone pelo lobo-cinzento resultou em qual consequência ecológica inesperada?',
    alternativas: [
      { id: 'a', texto: 'Extinção de diversas espécies de aves migratórias', correta: false },
      { id: 'b', texto: 'Alteração no comportamento dos cervos que permitiu regeneração vegetal e mudou o curso de rios', correta: true },
      { id: 'c', texto: 'Aumento descontrolado da população de ursos-pardos', correta: false },
      { id: 'd', texto: 'Redução da diversidade de insetos no parque', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'Com a reintrodução dos lobos em 1995, os cervos passaram a evitar determinadas áreas (especialmente margens de rios), permitindo a regeneração de vegetação ribeirinha. Isso estabilizou as margens dos rios e chegou a alterar seu curso — um exemplo de cascata trófica.',
  },
  {
    id: 4,
    tipo: 'multipla-escolha',
    dificuldade: 'medio',
    enunciado: 'Qual é o papel ecológico principal do gaio-azul (Cyanocitta cristata) nas florestas temperadas norte-americanas?',
    alternativas: [
      { id: 'a', texto: 'Predador de peixe nos rios do bioma', correta: false },
      { id: 'b', texto: 'Controlador de populações de roedores', correta: false },
      { id: 'c', texto: 'Principal dispersor de sementes de carvalho, plantando centenas de árvores por ano', correta: true },
      { id: 'd', texto: 'Decompositor de matéria orgânica no solo', correta: false },
    ],
    gabarito: 'c',
    explicacao: 'O gaio-azul enterra bolotas em reservas espalhadas pela floresta para o inverno. Como esquece muitas delas, planta indiretamente 150–200 carvalhos por ano, sendo considerado o principal responsável pela expansão de populações de carvalho após a última glaciação.',
  },
  {
    id: 5,
    tipo: 'multipla-escolha',
    dificuldade: 'medio',
    enunciado: 'Qual tipo de solo predomina na Floresta Sazonal Temperada e por que ele é especialmente fértil?',
    alternativas: [
      { id: 'a', texto: 'Latossolo; rico em ferro e alumínio, com pH ácido', correta: false },
      { id: 'b', texto: 'Alfissolo; rico em matéria orgânica proveniente da serapilheira de folhas caducas', correta: true },
      { id: 'c', texto: 'Espodossolo; arenoso e pobre em nutrientes', correta: false },
      { id: 'd', texto: 'Gleissolo; encharcado e com baixo teor de oxigênio', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'O Alfissolo (chamado argissolo no Brasil) é formado pela decomposição anual da serapilheira (camada de folhas caídas). A queda sazonal de folhas devolve nutrientes ao solo, criando uma camada de húmus espessa (15–30 cm) e altamente fértil, com pH entre 5,5 e 7.',
  },
  {
    id: 6,
    tipo: 'multipla-escolha',
    dificuldade: 'dificil',
    enunciado: 'A salamandra-manchada (Salamandra salamandra) produz samandarina em sua pele. Qual é a função principal desta substância e como se relaciona com a coloração do animal?',
    alternativas: [
      { id: 'a', texto: 'Atrai parceiros no período reprodutivo; coloração chamativa funciona como sinal sexual', correta: false },
      { id: 'b', texto: 'Defesa química; coloração amarelo-preta é aposemática, alertando predadores sobre a toxicidade', correta: true },
      { id: 'c', texto: 'Auxilia na termorregulação; cores escuras absorvem calor solar eficientemente', correta: false },
      { id: 'd', texto: 'Camuflagem no sub-bosque; padrão manchado imita a iluminação dapple da floresta', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'A samandarina é um alcaloide altamente tóxico que causa espasmos musculares em vertebrados. A coloração amarelo-preta brilhante é um sinal aposemático — um aviso evolutivo para predadores de que o animal é venenoso, evitando o ataque antes de qualquer contato.',
  },
  {
    id: 7,
    tipo: 'somatoria',
    dificuldade: 'medio',
    enunciado: `Sobre as adaptações dos organismos da Floresta Sazonal Temperada ao inverno, assinale as afirmativas CORRETAS e some os valores correspondentes:
    
(01) O urso-pardo entra em hibernação verdadeira, com temperatura corporal próxima a 0°C, não podendo ser acordado sem risco de morte.
(02) A caducifolia das árvores permite recuperar até 60% do nitrogênio contido nas folhas antes da queda, reduzindo a perda de nutrientes.
(04) Aves migratórias como a andorinha percorrem até 10.000 km sazonalmente em resposta à redução de insetos no inverno temperado.
(08) O esquilo enterra sementes em centenas de locais usando memória espacial e olfato, sendo responsável pelo plantio acidental de carvalhos.
(16) O besouro-veado (Lucanus cervus) passa a fase larval de até 8 anos dentro de troncos mortos, digerindo celulose com bactérias intestinais.`,
    alternativas: [
      { id: '01', texto: '(01) Hibernação do urso com temperatura próxima a 0°C', correta: false, valorSomatoria: 1 },
      { id: '02', texto: '(02) Recuperação de 60% do nitrogênio foliar', correta: true, valorSomatoria: 2 },
      { id: '04', texto: '(04) Migração de aves por redução de insetos', correta: true, valorSomatoria: 4 },
      { id: '08', texto: '(08) Plantio acidental de carvalhos pelo esquilo', correta: true, valorSomatoria: 8 },
      { id: '16', texto: '(16) Larva do besouro-veado em troncos mortos', correta: true, valorSomatoria: 16 },
    ],
    gabaritoSomatoria: 30,
    explicacao: 'O urso-pardo NÃO entra em hibernação verdadeira — entra em torpor (metabolismo reduzido ~75%, mas temperatura corporal próxima a 31–35°C e pode ser acordado). As demais afirmativas (02, 04, 08, 16) estão corretas: 2+4+8+16 = 30.',
  },
  {
    id: 8,
    tipo: 'multipla-escolha',
    dificuldade: 'dificil',
    enunciado: 'O fenômeno do "mast seeding" (produção massal sincronizada de sementes) é observado em carvalhos e castanheiros. Qual hipótese melhor explica sua vantagem evolutiva?',
    alternativas: [
      { id: 'a', texto: 'Permite que os frutos amadureçam uniformemente, facilitando a coleta por herbívoros dispersores', correta: false },
      { id: 'b', texto: 'Satura os predadores de sementes com excesso de alimento, garantindo que parte das sementes sobreviva e germine', correta: true },
      { id: 'c', texto: 'Coincide com períodos de baixa atividade de fungos no solo, reduzindo a infecção das sementes', correta: false },
      { id: 'd', texto: 'Maximiza a polinização cruzada entre indivíduos da mesma espécie na mesma estação', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'O mast seeding é uma estratégia antipredação: ao produzir quantidades massivas de sementes em anos específicos (e pouco em outros), as árvores "saturam" a capacidade de consumo dos predadores de sementes (roedores, cervos, javalis). Após a "saciedade" dos predadores, sobram sementes suficientes para germinar.',
  },
  {
    id: 9,
    tipo: 'somatoria',
    dificuldade: 'dificil',
    enunciado: `Considerando os impactos humanos sobre a Floresta Sazonal Temperada, indique as afirmativas CORRETAS:

(01) A doença da dieback do freixo, causada pelo fungo Hymenoscyphus fraxineus, é uma espécie nativa europeia que afeta apenas árvores envelhecidas.
(02) A fragmentação florestal afeta negativamente o fluxo gênico de espécies como o urso-pardo, aumentando a endogamia e a vulnerabilidade à extinção local.
(04) A reintrodução do lobo-cinzento em Yellowstone demonstrou que predadores de topo podem alterar a estrutura de vegetação e o curso de rios via cascatas tróficas.
(08) A remoção de madeira morta (troncos e galhos caídos) é considerada uma prática de conservação benéfica, pois reduz o risco de incêndio florestal.
(16) Segundo o Global Forest Watch, apenas cerca de 25% das florestas temperadas originais permanecem contínuas e não fragmentadas.`,
    alternativas: [
      { id: '01', texto: '(01) Hymenoscyphus fraxineus é fungo nativo europeu', correta: false, valorSomatoria: 1 },
      { id: '02', texto: '(02) Fragmentação aumenta endogamia em ursos-pardos', correta: true, valorSomatoria: 2 },
      { id: '04', texto: '(04) Lobos em Yellowstone alteraram vegetação e rios', correta: true, valorSomatoria: 4 },
      { id: '08', texto: '(08) Remoção de madeira morta é prática de conservação benéfica', correta: false, valorSomatoria: 8 },
      { id: '16', texto: '(16) ~25% das florestas originais permanecem contínuas', correta: true, valorSomatoria: 16 },
    ],
    gabaritoSomatoria: 22,
    explicacao: '(01) Falsa: Hymenoscyphus fraxineus é um fungo INVASOR asiático, não nativo europeu. (08) Falsa: madeira morta é ESSENCIAL para a biodiversidade — o besouro-veado e dezenas de espécies dependem dela. As corretas são 02+04+16 = 22.',
  },
  {
    id: 10,
    tipo: 'multipla-escolha',
    dificuldade: 'dificil',
    enunciado: 'A rede micelial do Boletus edulis conecta árvores de espécies diferentes no solo florestal. Como essa "teia de madeira" (wood wide web) beneficia o ecossistema?',
    alternativas: [
      { id: 'a', texto: 'Compete diretamente com as raízes das árvores pelos nutrientes minerais do solo', correta: false },
      { id: 'b', texto: 'Transfere carbono, água e nutrientes entre árvores, podendo sustentar mudas jovens em condições de baixa luminosidade', correta: true },
      { id: 'c', texto: 'Produz substâncias antibióticas que eliminam bactérias patogênicas do solo', correta: false },
      { id: 'd', texto: 'Atua exclusivamente como decompositor de matéria orgânica morta sem interação com plantas vivas', correta: false },
    ],
    gabarito: 'b',
    explicacao: 'As redes de micorriza formadas por fungos como o Boletus edulis conectam raízes de árvores vizinhas, transferindo carbono, fósforo, nitrogênio e água. Árvores-mãe maiores podem "alimentar" mudas jovens em seu sub-bosque através dessas redes, aumentando a sobrevivência das plântulas.',
  },
];

// ----------------------------------------------------------
// COMPONENTE PRINCIPAL
// ----------------------------------------------------------

type FaseQuiz = 'inicio' | 'jogando' | 'resultado';

function Quiz() {
  const [fase, setFase] = useState<FaseQuiz>('inicio');
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string[]>([]);
  const [confirmada, setConfirmada] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [historico, setHistorico] = useState<boolean[]>([]);

  // Cronômetro
  const [tempo, setTempo] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const questaoAtual = questoesLocais[indiceAtual];
  const totalQuestoes = questoesLocais.length;

  // Inicia/para o timer
  useEffect(() => {
    if (fase === 'jogando') {
      timerRef.current = setInterval(() => setTempo((t) => t + 1), 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [fase]);

  // Formata segundos em mm:ss
  const formatarTempo = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // Reinicia tudo
  const reiniciar = () => {
    setFase('inicio');
    setIndiceAtual(0);
    setRespostaSelecionada([]);
    setConfirmada(false);
    setAcertos(0);
    setHistorico([]);
    setTempo(0);
  };

  // Seleciona alternativa
  const selecionarAlternativa = (id: string) => {
    if (confirmada) return;

    if (questaoAtual.tipo === 'multipla-escolha') {
      // Múltipla escolha: apenas uma selecionável
      setRespostaSelecionada([id]);
    } else {
      // Somatória: toggle — pode selecionar várias
      setRespostaSelecionada((prev) =>
        prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
      );
    }
  };

  // Confirma resposta e avalia
  const confirmarResposta = () => {
    if (respostaSelecionada.length === 0) return;
    setConfirmada(true);

    let correta = false;
    if (questaoAtual.tipo === 'multipla-escolha') {
      correta = respostaSelecionada[0] === questaoAtual.gabarito;
    } else {
      // Somatória: soma os valores das alternativas selecionadas
      const somaAluno = questaoAtual.alternativas
        .filter((alt) => respostaSelecionada.includes(alt.id))
        .reduce((acc, alt) => acc + (alt.valorSomatoria ?? 0), 0);
      correta = somaAluno === questaoAtual.gabaritoSomatoria;
    }

    if (correta) setAcertos((a) => a + 1);
    setHistorico((h) => [...h, correta]);
  };

  // Próxima questão
  const proximaQuestao = () => {
    if (indiceAtual + 1 >= totalQuestoes) {
      setFase('resultado');
    } else {
      setIndiceAtual((i) => i + 1);
      setRespostaSelecionada([]);
      setConfirmada(false);
    }
  };

  // ----------------------------------------------------------
  // TELA DE INÍCIO
  // ----------------------------------------------------------
  if (fase === 'inicio') {
    return (
      <div className="min-h-screen bg-sombra-900 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="text-6xl mb-6">🌳</div>
          <p className="section-subtitle mb-3">Teste seus conhecimentos</p>
          <h1 className="font-display text-display-lg text-neve font-semibold mb-4">
            Quiz — Floresta Sazonal Temperada
          </h1>
          <p className="font-body text-floresta-300 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            {totalQuestoes} questões sobre biodiversidade, adaptações e impactos ambientais
            da floresta temperada. Inclui questões de múltipla escolha e somatória.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto">
            {[
              { label: 'Questões', valor: totalQuestoes },
              { label: 'Somatórias', valor: questoesLocais.filter(q => q.tipo === 'somatoria').length },
              { label: 'Difíceis', valor: questoesLocais.filter(q => q.dificuldade === 'dificil').length },
            ].map((stat) => (
              <div key={stat.label} className="bg-floresta-900 rounded-2xl p-4 border border-floresta-800/60">
                <p className="font-display text-outono-400 text-2xl font-bold">{stat.valor}</p>
                <p className="font-body text-floresta-400 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setFase('jogando')}
            className="btn-primary text-base px-10 py-4"
          >
            Começar Quiz
            <ArrowRight size={18} />
          </button>

          <div className="mt-6">
            <Link to="/" className="font-body text-floresta-400 text-sm hover:text-outono-400 transition-colors">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------
  // TELA DE RESULTADO
  // ----------------------------------------------------------
  if (fase === 'resultado') {
    const porcentagem = Math.round((acertos / totalQuestoes) * 100);
    const mensagem =
      porcentagem >= 80 ? 'Excelente! Você domina o bioma! 🏆' :
      porcentagem >= 60 ? 'Muito bom! Quase lá! 🌿' :
      porcentagem >= 40 ? 'Bom começo! Revise o conteúdo. 📚' :
      'Continue estudando! A floresta tem muito mais para ensinar. 🌱';

    return (
      <div className="min-h-screen bg-sombra-900 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-floresta-900 rounded-3xl p-8 md:p-12 text-center border border-floresta-800/40">
            <Trophy size={48} className="text-outono-400 mx-auto mb-4" />
            <h2 className="font-display text-neve text-3xl font-semibold mb-2">Resultado Final</h2>
            <p className="font-body text-floresta-300 text-base mb-8">{mensagem}</p>

            {/* Placar */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div>
                <p className="font-display text-outono-400 text-5xl font-bold">{acertos}<span className="text-floresta-500 text-2xl">/{totalQuestoes}</span></p>
                <p className="font-body text-floresta-400 text-sm mt-1">Acertos</p>
              </div>
              <div className="w-px h-16 bg-floresta-800" />
              <div>
                <p className="font-display text-floresta-300 text-5xl font-bold">{porcentagem}<span className="text-floresta-500 text-2xl">%</span></p>
                <p className="font-body text-floresta-400 text-sm mt-1">Aproveitamento</p>
              </div>
              <div className="w-px h-16 bg-floresta-800" />
              <div>
                <p className="font-display text-floresta-300 text-3xl font-bold">{formatarTempo(tempo)}</p>
                <p className="font-body text-floresta-400 text-sm mt-1">Tempo total</p>
              </div>
            </div>

            {/* Histórico por questão */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {historico.map((acertou, i) => (
                <div
                  key={i}
                  className={clsx(
                    'flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold font-body',
                    acertou ? 'bg-floresta-600/30 text-floresta-300 border border-floresta-600/40' : 'bg-red-700/20 text-red-400 border border-red-700/30'
                  )}
                  title={`Questão ${i + 1}: ${acertou ? 'Correta' : 'Incorreta'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={reiniciar} className="btn-outline flex items-center gap-2">
                <RotateCcw size={16} />
                Tentar novamente
              </button>
              <Link to="/" className="btn-primary">
                Voltar ao site
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------------
  // TELA DE JOGO
  // ----------------------------------------------------------
  const progresso = ((indiceAtual) / totalQuestoes) * 100;

  return (
    <div className="min-h-screen bg-sombra-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header do quiz */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="font-body text-floresta-400 text-sm">
              Questão <span className="text-neve font-medium">{indiceAtual + 1}</span> de {totalQuestoes}
            </span>
            <span className={clsx(
              'badge text-xs',
              questaoAtual.dificuldade === 'facil'  ? 'bg-emerald-700/20 text-emerald-400 border border-emerald-700/30' :
              questaoAtual.dificuldade === 'medio'   ? 'bg-yellow-700/20 text-yellow-400 border border-yellow-700/30' :
                                                      'bg-red-700/20 text-red-400 border border-red-700/30'
            )}>
              {questaoAtual.dificuldade === 'facil' ? 'Fácil' : questaoAtual.dificuldade === 'medio' ? 'Médio' : 'Difícil'}
            </span>
            {questaoAtual.tipo === 'somatoria' && (
              <span className="badge bg-outono-700/20 text-outono-400 border border-outono-700/30 text-xs">
                Somatória
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-floresta-300 text-sm font-body">
            <Clock size={14} />
            {formatarTempo(tempo)}
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="w-full h-1.5 bg-floresta-900 rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-outono-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progresso}%` }}
          />
        </div>

        {/* Card da questão */}
        <div className="bg-floresta-900 rounded-3xl p-6 md:p-8 border border-floresta-800/40 mb-6">

          <p className="font-display text-neve text-lg md:text-xl font-semibold leading-relaxed mb-6 whitespace-pre-line">
            {questaoAtual.enunciado}
          </p>

          {/* Instrução para somatória */}
          {questaoAtual.tipo === 'somatoria' && (
            <p className="font-body text-outono-400 text-sm mb-4 bg-outono-700/10 border border-outono-700/20 rounded-xl px-4 py-2">
              ⚠️ Somatória: Selecione todas as afirmativas corretas e some os valores.
            </p>
          )}

          {/* Alternativas */}
          <div className="space-y-3">
            {questaoAtual.alternativas.map((alt) => {
              const selecionada = respostaSelecionada.includes(alt.id);
              const correta = alt.correta;

              // Cor após confirmar
              let cor = '';
              if (confirmada) {
                if (correta) cor = 'border-floresta-500 bg-floresta-700/30 text-neve';
                else if (selecionada && !correta) cor = 'border-red-500 bg-red-700/20 text-red-200';
                else cor = 'border-floresta-800/40 text-floresta-500 opacity-60';
              } else {
                cor = selecionada
                  ? 'border-outono-500 bg-outono-700/20 text-neve'
                  : 'border-floresta-800/40 text-floresta-200 hover:border-floresta-600 hover:bg-floresta-800/60';
              }

              return (
                <button
                  key={alt.id}
                  onClick={() => selecionarAlternativa(alt.id)}
                  disabled={confirmada}
                  className={clsx(
                    'w-full text-left p-4 rounded-xl border transition-all duration-200 font-body text-sm leading-relaxed',
                    'flex items-start gap-3',
                    cor,
                    !confirmada && 'cursor-pointer',
                  )}
                >
                  {/* Indicador de seleção */}
                  <span className={clsx(
                    'flex items-center justify-center w-6 h-6 rounded-full border text-xs font-bold shrink-0 mt-0.5 transition-all duration-200',
                    confirmada && correta ? 'border-floresta-400 bg-floresta-600 text-neve' :
                    confirmada && selecionada && !correta ? 'border-red-400 bg-red-700 text-white' :
                    selecionada ? 'border-outono-400 bg-outono-600 text-white' :
                    'border-floresta-600 text-floresta-500'
                  )}>
                    {confirmada
                      ? correta ? '✓' : selecionada ? '✗' : alt.id.toUpperCase()
                      : selecionada ? '✓' : alt.id.toUpperCase()
                    }
                  </span>
                  {alt.texto}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explicação após confirmar */}
        {confirmada && (
          <div className={clsx(
            'rounded-2xl p-5 mb-6 border flex items-start gap-3',
            historico.length > 0 && historico[historico.length - 1] !== undefined
              ? historico[historico.length - 1] || false
                ? 'bg-floresta-700/20 border-floresta-600/30'
                : 'bg-red-700/10 border-red-700/20'
              : 'bg-floresta-700/20 border-floresta-600/30'
          )}>
            {historico[historico.length - 1]
              ? <CheckCircle size={20} className="text-floresta-400 shrink-0 mt-0.5" />
              : <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
            }
            <div>
              <p className="font-body text-neve text-sm font-semibold mb-1">
                {historico[historico.length - 1] ? '✅ Correto!' : '❌ Incorreto'}
              </p>
              <p className="font-body text-floresta-200 text-sm leading-relaxed">
                {questaoAtual.explicacao}
              </p>
            </div>
          </div>
        )}

        {/* Botões de ação */}
        <div className="flex justify-between items-center">
          <span className="font-body text-floresta-500 text-sm">
            {acertos} acerto{acertos !== 1 ? 's' : ''} até agora
          </span>

          {!confirmada ? (
            <button
              onClick={confirmarResposta}
              disabled={respostaSelecionada.length === 0}
              className={clsx(
                'btn-primary',
                respostaSelecionada.length === 0 && 'opacity-50 cursor-not-allowed hover:translate-y-0'
              )}
            >
              Confirmar resposta
            </button>
          ) : (
            <button onClick={proximaQuestao} className="btn-primary">
              {indiceAtual + 1 >= totalQuestoes ? 'Ver resultado' : 'Próxima questão'}
              <ArrowRight size={16} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Quiz;
