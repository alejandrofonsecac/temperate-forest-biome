// =============================================================
// components/sections/Biodiversidade.tsx
//
// Seção que apresenta o panorama geral da biodiversidade:
// - Visão geral da fauna e flora
// - Tipos de adaptações (estrutural, fisiológica, comportamental)
// - Relação entre biodiversidade e condições ambientais
// =============================================================

import { TreePine, Bird, Bug, Droplets, Snowflake, Sun } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// ----------------------------------------------------------
// Dados de adaptações por categoria
// ----------------------------------------------------------
const adaptacoes = [
  {
    tipo: 'Estruturais',
    icone: <TreePine size={20} />,
    cor: 'floresta',
    exemplos: [
      'Folhas largas e finas para maximizar a fotossíntese no verão',
      'Casca espessa e corticosa como isolante térmico',
      'Raízes profundas para acessar água durante geadas superficiais',
      'Chifres e galhadas utilizados em combates territoriais sazonais',
    ],
  },
  {
    tipo: 'Fisiológicas',
    icone: <Droplets size={20} />,
    cor: 'outono',
    exemplos: [
      'Hibernação e torpor: metabolismo reduzido em até 75% no inverno',
      'Acumulação de gordura e glicogênio no outono como reserva energética',
      'Produção de proteínas anticongelantes na seiva de algumas plantas',
      'Caducifolia: reabsorção de nutrientes antes da queda das folhas',
    ],
  },
  {
    tipo: 'Comportamentais',
    icone: <Bird size={20} />,
    cor: 'terra',
    exemplos: [
      'Migração para regiões mais quentes no inverno (aves, borboletas)',
      'Entesouramento de alimentos (bolotas, nozes) para o inverno frio',
      'Mudança de dieta sazonal conforme a disponibilidade de recursos',
      'Reprodução sincronizada com a primavera para maximizar recursos',
    ],
  },
];

// ----------------------------------------------------------
// Grupos taxonômicos presentes no bioma
// ----------------------------------------------------------
const grupos = [
  { nome: 'Mamíferos',  numero: '+200 espécies', icone: '🦌', descricao: 'Ursos, cervos, lobos, esquilos, texugos' },
  { nome: 'Aves',       numero: '+300 espécies', icone: '🦅', descricao: 'Pica-paus, gaviões, corujas, tentilhões' },
  { nome: 'Répteis',    numero: '+60 espécies',  icone: '🦎', descricao: 'Lagartos, cobras, tartarugas terrestres' },
  { nome: 'Anfíbios',   numero: '+50 espécies',  icone: '🐸', descricao: 'Salamandras, sapos, tritões' },
  { nome: 'Insetos',    numero: '+20.000 esp.',  icone: '🦋', descricao: 'Besouros, borboletas, abelhas, formigas' },
  { nome: 'Plantas',    numero: '+3.000 espécies',icone: '🌿', descricao: 'Árvores decíduas, arbustos, herbáceas, fetos' },
  { nome: 'Fungos',     numero: '+5.000 espécies',icone: '🍄', descricao: 'Micorrízicos, decompositores, epífitos' },
  { nome: 'Peixes',     numero: '+200 espécies', icone: '🐟', descricao: 'Trutas, salmões, carpas em rios e lagos' },
];

function Biodiversidade() {
  return (
    <section id="biodiversidade" className="section bg-sombra-900">
      <div className="container-site">

        {/* Cabeçalho */}
        <ScrollReveal className="reveal text-center mb-16">
          <p className="section-subtitle mb-3 text-outono-700">Vida no Bioma</p>
          <h2 className="section-title">
            Biodiversidade da{' '}
            <span className=" text-outono-700">Floresta Temperada</span>
          </h2>
          <p className="font-body text-floresta-300 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            A variação sazonal extrema moldou organismos com estratégias de sobrevivência
            extraordinárias. Cada espécie aqui é uma resposta evolutiva às condições únicas
            deste bioma dinâmico.
          </p>
        </ScrollReveal>

        {/* --------------------------------------------------------
            PANORAMA DA BIODIVERSIDADE — grupos taxonômicos
        -------------------------------------------------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {grupos.map((grupo, i) => (
            <ScrollReveal key={grupo.nome} className="reveal" delay={i * 60}>
              <div className="bg-outono-600 card p-5 text-center group hover:border hover:border-floresta-600/30">
                <div className="text-3xl mb-3">{grupo.icone}</div>
                <p className="font-display text-neve text-sm font-semibold mb-1">{grupo.nome}</p>
                <p className="font-body text-white text-xs font-medium mb-2">{grupo.numero}</p>
                <p className="font-body text-sombra-950 text-xs leading-snug">{grupo.descricao}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* --------------------------------------------------------
            RELAÇÃO BIODIVERSIDADE × AMBIENTE
        -------------------------------------------------------- */}
        <ScrollReveal className="reveal mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="section-subtitle mb-3">Relação com o Ambiente</p>
              <h3 className="font-display text-neve text-display-md font-semibold mb-5">
                Como as estações moldam a vida
              </h3>
              <div className="space-y-4">
                {[
                  {
                    estacao: 'Primavera',
                    icon: <Sun size={16} />,
                    cor: 'text-yellow-400',
                    texto: 'Temperaturas crescentes e dias mais longos disparam o rebrotamento vegetal, a reprodução de aves e anfíbios e o despertar dos mamíferos hibernantes. A disponibilidade de insetos e plantas jovens atinge o pico.',
                  },
                  {
                    estacao: 'Verão',
                    icon: <Sun size={16} />,
                    cor: 'text-outono-400',
                    texto: 'Dossel fechado filtra até 97% da luz solar. Plantas intensificam a fotossíntese. Animais acumulam reservas de gordura. A diversidade de insetos e aves polinizadoras é máxima.',
                  },
                  {
                    estacao: 'Outono',
                    icon: <Bug size={16} />,
                    cor: 'text-outono-500',
                    texto: 'Queda das folhas devolve nutrientes ao solo. Frutos e sementes (bolotas, castanhas) alimentam mamíferos que estocam alimento. Aves migratórias partem em voos de até 10.000 km.',
                  },
                  {
                    estacao: 'Inverno',
                    icon: <Snowflake size={16} />,
                    cor: 'text-blue-300',
                    texto: 'Solo coberto de neve isola raízes das geadas. Animais hibernam, migram ou sobrevivem com reservas acumuladas. Plantas entram em dormência; fungos continuam decompondo a serapilheira.',
                  },
                ].map((item) => (
                  <div key={item.estacao} className="flex gap-4 p-4 rounded-xl bg-floresta-900/60 border border-floresta-800/50">
                    <span className={`${item.cor} mt-0.5 shrink-0`}>{item.icon}</span>
                    <div>
                      <p className="font-body text-neve text-sm font-semibold mb-1">{item.estacao}</p>
                      <p className="font-body text-floresta-300 text-sm leading-relaxed">{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem da floresta em diferentes estações */}
            <div className="relative rounded-3xl overflow-hidden min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
                alt="Floresta temperada com paisagem outonal vibrante"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sombra-950/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-body text-floresta-300 text-xs mb-1">📷 Floresta de carvalhos e bordos no outono</p>
                <p className="font-display text-neve text-lg font-semibold">
                  "A caducifolia não é morte — é estratégia."
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --------------------------------------------------------
            TIPOS DE ADAPTAÇÕES
        -------------------------------------------------------- */}
        <ScrollReveal className="reveal">
          <p className="section-subtitle text-center mb-3">Adaptações ao Ambiente</p>
          <h3 className="font-display text-neve text-display-md text-center font-semibold mb-10">
            Como os organismos sobrevivem às estações
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adaptacoes.map((adap, i) => (
              <ScrollReveal key={adap.tipo} className="reveal" delay={i * 100}>
                <div className="card p-6 h-full">
                  <div className={`flex items-center gap-3 mb-5`}>
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                      adap.cor === 'floresta' ? 'bg-floresta-700/40 text-floresta-300' :
                      adap.cor === 'outono'   ? 'bg-outono-700/25 text-outono-400' :
                                               'bg-terra-700/30 text-terra-300'
                    }`}>
                      {adap.icone}
                    </div>
                    <h4 className="font-display text-neve text-lg font-semibold">
                      Adaptações {adap.tipo}
                    </h4>
                  </div>

                  <ul className="space-y-3">
                    {adap.exemplos.map((ex) => (
                      <li key={ex} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-outono-500 mt-2 shrink-0" />
                        <p className="font-body text-floresta-200 text-sm leading-relaxed">{ex}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default Biodiversidade;
