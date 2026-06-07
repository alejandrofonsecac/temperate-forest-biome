// =============================================================
// components/sections/FloraSection.tsx
//
// Seção de flora com:
// - Introdução textual
// - Carrossel com as 5 plantas em destaque
// - Botão para galeria completa (15+ plantas)
// =============================================================

import ScrollReveal from '../ui/ScrollReveal';
import Carousel from '../ui/Carousel';
import { floraDestaque } from '../../data/floraData';

function FloraSection() {
  return (
    <section id="flora" className="section bg-sombra-900">
      <div className="container-site">

        {/* Cabeçalho */}
        <ScrollReveal className="reveal text-center mb-16">
          <p className="section-subtitle mb-3">Plantas do Bioma</p>
          <h2 className="section-title">
            Flora da{' '}
            <span className="text-gradient-floresta">Floresta Temperada</span>
          </h2>
          <p className="font-body text-floresta-300 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Do carvalho centenário que hospeda 2.300 espécies ao alho-do-urso
            que floresce em uma janela de apenas 8 semanas — a flora temperada
            é um calendário biológico de precisão.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Texto explicativo (esquerda/topo) */}
          <ScrollReveal className="reveal-left" delay={150}>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-neve text-2xl font-semibold mb-3">
                  Árvores que perdem folhas para viver melhor
                </h3>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  A caducifolia — a queda anual das folhas — é a estratégia mais
                  emblemática das plantas deste bioma. Ao invés de manter folhas
                  durante o inverno (o que custaria mais energia do que produziria),
                  as árvores recuam e investem nas reservas das raízes.
                </p>
              </div>

              <div>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  Antes de perder as folhas, as plantas recuperam até <span className="text-floresta-300 font-medium">60% do nitrogênio</span> contido
                  nelas — revelando o espetáculo outonal de amarelos, laranjas e
                  vermelhos ao remover a clorofila verde que antes dominava.
                </p>
              </div>

              <div>
                <p className="font-body text-floresta-200 text-base leading-relaxed">
                  A floresta é estruturada em <span className="text-floresta-300 font-medium">estratos verticais</span>:
                  dossel (20–40m), sub-bosque (5–15m), arbustivo (1–5m) e herbáceo
                  (0–1m). Cada camada tem luz, temperatura e umidade distintas,
                  multiplicando os microhabitats disponíveis para a fauna.
                </p>
              </div>

              {/* Estratificação visual simplificada */}
              <div className="bg-floresta-900 rounded-2xl p-5 border border-floresta-800/60">
                <p className="font-body text-neve text-sm font-semibold mb-4">
                  Estratificação vertical da floresta
                </p>
                {[
                  { camada: 'Dossel emergente', altura: '30–45 m', cor: 'bg-floresta-600', largura: 'w-full' },
                  { camada: 'Dossel principal',  altura: '20–30 m', cor: 'bg-floresta-500', largura: 'w-5/6' },
                  { camada: 'Sub-bosque',         altura: '5–15 m',  cor: 'bg-floresta-700', largura: 'w-4/6' },
                  { camada: 'Arbustivo',          altura: '1–5 m',   cor: 'bg-terra-600',    largura: 'w-3/6' },
                  { camada: 'Herbáceo / Solo',    altura: '0–1 m',   cor: 'bg-terra-800',    largura: 'w-2/6' },
                ].map((estrato) => (
                  <div key={estrato.camada} className="flex items-center gap-3 mb-2">
                    <div className={`h-3 ${estrato.largura} ${estrato.cor} rounded-full opacity-80`} />
                    <div className="shrink-0">
                      <p className="font-body text-floresta-200 text-xs">{estrato.camada}</p>
                      <p className="font-body text-floresta-500 text-xs">{estrato.altura}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Carrossel (direita/baixo) */}
          <ScrollReveal className="reveal-right">
            <Carousel
              itens={floraDestaque}
              linkGaleria="/flora"
              labelGaleria="Ver todas as 16 plantas"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default FloraSection;
