// =============================================================
// components/sections/ImpactosHumanos.tsx
//
// Seção sobre a relação humana com o bioma:
// - Formas de uso e ocupação econômica
// - Impactos ambientais (desmatamento, fragmentação, invasoras)
// - Consequências ecológicas
// - Estratégias de conservação
// =============================================================

import { AlertTriangle, Shield, Factory, Trees } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// Dados dos impactos
const impactos = [
  {
    titulo: 'Desmatamento e Fragmentação',
    icone: '🌲',
    gravidade: 'alta',
    descricao: `Apenas ~25% das florestas temperadas originais permanecem contínuas. 
    A fragmentação isola populações animais e impede o fluxo gênico, tornando 
    espécies como o urso-pardo e o lince vulneráveis à extinção local. 
    Na Europa, menos de 1% das florestas são consideradas "antigas" (primárias).`,
    exemplo: 'Europa perdeu 80% de suas florestas antigas desde 1900.',
  },
  {
    titulo: 'Espécies Invasoras',
    icone: '⚠️',
    gravidade: 'alta',
    descricao: `Plantas e animais introduzidos competem com nativas e alteram 
    ecossistemas inteiros. O esquilo-cinzento americano introduzido no Reino 
    Unido devastou populações do esquilo-vermelho nativo. O fungo Ophiostoma 
    novo-ulmi eliminou mais de 60 milhões de olmos europeus em poucas décadas.`,
    exemplo: 'Doença da grafiose do olmo: >60 milhões de árvores mortas na Europa.',
  },
  {
    titulo: 'Agricultura Intensiva',
    icone: '🌾',
    gravidade: 'media',
    descricao: `A conversão de florestas em campos agrícolas é a principal causa 
    de perda de habitat. Pesticidas eliminam insetos polinizadores e 
    decompositores. Monoculturas homogeneízam a paisagem, eliminando corredores 
    ecológicos essenciais para a fauna.`,
    exemplo: 'EUA: mais de 90% das florestas do leste foram convertidas até 1900.',
  },
  {
    titulo: 'Mudanças Climáticas',
    icone: '🌡️',
    gravidade: 'alta',
    descricao: `O aumento de 1,5–2°C na temperatura média altera a fenologia 
    das espécies: plantas brotam mais cedo, insetos emergem fora de sincronia 
    com flores e aves. Surtos de pragas de besouros-da-casca destroem 
    vastas florestas enfraquecidas pelo estresse térmico.`,
    exemplo: 'Nos EUA, surtos de Dendroctonus ponderosae mataram >70 milhões de ha de floresta.',
  },
];

// Estratégias de conservação
const conservacao = [
  {
    icone: <Shield size={18} />,
    titulo: 'Áreas Protegidas',
    descricao: 'Criação de parques nacionais e reservas florestais. Europa tem +30% de área florestal protegida. Brasil: Mata de Araucária e floresta subtropical incluídas no SNUC.',
  },
  {
    icone: <Trees size={18} />,
    titulo: 'Restauração Florestal',
    descricao: 'Programas como o Trillion Trees e o Bonn Challenge visam restaurar 350 milhões de ha até 2030. Reflorestamento com espécies nativas restabelece funções ecológicas em décadas.',
  },
  {
    icone: <Factory size={18} />,
    titulo: 'Corredores Ecológicos',
    descricao: 'Conexão de fragmentos florestais por faixas de vegetação nativa. Na Europa, o projeto Rewilding Europe restaura corredores para lobos, linces e ursos atravessarem fronteiras.',
  },
  {
    icone: <AlertTriangle size={18} />,
    titulo: 'Controle de Invasoras',
    descricao: 'Programas de erradicação de espécies invasoras em ilhas e áreas protegidas. No Reino Unido, manejo ativo do esquilo-cinzento tem permitido a recuperação do esquilo-vermelho nativo.',
  },
];

function ImpactosHumanos() {
  return (
    <section id="impactos" className="section bg-sombra-950">
      <div className="container-site">

        {/* Cabeçalho */}
        <ScrollReveal className="reveal text-center mb-16">
          <p className="section-subtitle mb-3">Ação Humana</p>
          <h2 className="section-title">
            Impactos e{' '}
            <span className="text-gradient-outono">Conservação</span>
          </h2>
          <p className="font-body text-floresta-300 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A Floresta Sazonal Temperada é um dos biomas mais degradados do planeta.
            Entender os impactos é o primeiro passo para revertê-los.
          </p>
        </ScrollReveal>

        {/* Imagem de impacto com texto sobreposto */}
        <ScrollReveal className="reveal mb-16">
          <div className="relative rounded-3xl overflow-hidden min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80&auto=format&fit=crop"
              alt="Floresta temperada com árvores e luz solar filtrando pelo dossel"
              className="w-full h-full object-cover max-h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sombra-950/90 via-sombra-950/60 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div className="max-w-lg">
                <p className="font-display text-neve text-2xl md:text-3xl font-semibold leading-tight mb-3">
                  "Apenas 25% das florestas temperadas originais permanecem intactas."
                </p>
                <p className="font-body text-floresta-300 text-sm">
                  — World Resources Institute, Global Forest Watch, 2023
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid de impactos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {impactos.map((item, i) => (
            <ScrollReveal key={item.titulo} className="reveal" delay={i * 80}>
              <div className="card p-6 h-full border-l-2 border-l-outono-700/50 hover:border-l-outono-500 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.icone}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-neve text-lg font-semibold">{item.titulo}</h3>
                      <span className={`badge text-xs ${
                        item.gravidade === 'alta'
                          ? 'bg-red-700 text-red-400 border border-red-700/25'
                          : 'bg-yellow-400 text-yellow-400'
                      }`}>
                      </span>
                    </div>
                    <p className="font-body text-floresta-200 text-sm leading-relaxed mb-3">
                      {item.descricao}
                    </p>
                    <div className="bg-floresta-800/60 rounded-xl p-3">
                      <p className="font-body text-outono-400 text-xs">
                         Exemplo real: {item.exemplo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Estratégias de conservação */}
        <ScrollReveal className="reveal">
          <div className="bg-floresta-900 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <p className="section-subtitle mb-2 text-outono-600">Soluções</p>
              <h3 className="font-display text-neve text-display-md font-semibold">
                Estratégias de Conservação
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {conservacao.map((item, i) => (
                <div
                  key={item.titulo}
                  className="flex gap-4 p-5 rounded-2xl bg-sombra-950 hover:bg-floresta-800 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-floresta-600/30 text-floresta-300 shrink-0">
                    {item.icone}
                  </div>
                  <div>
                    <h4 className="font-body text-neve text-sm font-semibold mb-2">{item.titulo}</h4>
                    <p className="font-body text-floresta-300 text-sm leading-relaxed">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mensagem final */}
            <div className="mt-8 p-5 rounded-2xl bg-outono-700/10 border border-outono-700/20">
              <p className="font-body text-floresta-200 text-sm leading-relaxed text-center">
                🌱 A regeneração natural das florestas temperadas é possível: em áreas onde 
                a pressão humana foi reduzida, ecossistemas recuperaram até <span className="text-outono-400 font-medium">80% 
                de sua biodiversidade original em 80–100 anos</span>, demonstrando 
                a resiliência deste bioma quando protegido.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default ImpactosHumanos;
