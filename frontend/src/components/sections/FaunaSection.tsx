// =============================================================
// components/sections/FaunaSection.tsx
//
// Seção de fauna com:
// - Introdução textual
// - Carrossel com os 5 animais em destaque
// - Botão para galeria completa (16+ animais)
// =============================================================

import ScrollReveal from '../ui/ScrollReveal';
import Carousel from '../ui/Carousel';
import { faunaDestaque } from '../../data/faunaData';

function FaunaSection() {
  return (
    <section id="fauna" className="section bg-sombra-800">
      <div className="container-site">

        {/* Cabeçalho */}
        <ScrollReveal className="reveal text-center mb-16">
          <p className="section-subtitle mb-3">Animais do Bioma</p>
          <h2 className="section-title">
            Fauna da{' '}
            <span className="text-gradient-outono">Floresta Temperada</span>
          </h2>
          <p className="font-body text-floresta-300 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Dos ursos que entram em torpor hibernal aos gaios que plantam
            carvalhos ao esquecer suas reservas de bolotas — cada animal aqui
            é um especialista em sobrevivência sazonal.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Carrossel (esquerda/topo) */}
          <ScrollReveal className="reveal-left">
            <Carousel
              itens={faunaDestaque}
              linkGaleria="/fauna"
              labelGaleria="Ver todos os 17 animais"
            />
          </ScrollReveal>

          {/* Texto explicativo (direita/baixo) */}
          <ScrollReveal className="reveal-right" delay={150}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-neve text-2xl font-semibold mb-3">
                  Uma fauna moldada pelo frio e pela fartura
                </h3>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  A fauna da Floresta Sazonal Temperada é definida pela necessidade de
                  sobreviver a invernos rigorosos sem abandonar o bioma. Isso exigiu
                  soluções evolutivas radicais: hibernação, migração, acumulação de
                  gordura e comportamentos de estocagem de alimento.
                </p>
              </div>

              <div>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  Predadores de topo como o <span className="text-outono-400 font-medium">lobo-cinzento</span> e
                  o <span className="text-outono-400 font-medium">lince-ibérico</span> estruturam toda a cadeia
                  alimentar através de cascatas tróficas — sua presença ou ausência altera
                  até o curso dos rios e a composição vegetal do bioma.
                </p>
              </div>

              <div>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  Animais como o <span className="text-outono-400 font-medium">gaio-azul</span> e o
                  <span className="text-outono-400 font-medium"> esquilo-cinzento</span> são chamados
                  "dispersores de sementes keystones": ao enterrarem bolotas para o inverno
                  e esquecerem parte delas, plantam milhares de carvalhos por ano,
                  regenerando a floresta passivamente.
                </p>
              </div>

              {/* Estatísticas rápidas */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { valor: '200+', label: 'Espécies de mamíferos' },
                  { valor: '300+', label: 'Espécies de aves' },
                  { valor: '~40%', label: 'Aves são migratórias' },
                  { valor: '17',   label: 'Espécies apresentadas' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-floresta-900 rounded-2xl p-4 text-center border border-floresta-800/60">
                    <p className="font-display text-outono-400 text-2xl font-bold">{stat.valor}</p>
                    <p className="font-body text-floresta-300 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default FaunaSection;
