// =============================================================
// components/sections/Caracterizacao.tsx
//
// Seção que apresenta as características físicas e ambientais
// do bioma: localização, clima, temperatura, chuvas, solo e
// paisagem predominante.
// =============================================================

import { MapPin, Thermometer, CloudRain, Layers, Sun, Wind } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

// ----------------------------------------------------------
// Dados das características — fáceis de editar aqui
// ----------------------------------------------------------
const caracteristicas = [
  {
    icone: <MapPin size={22} />,
    titulo: 'Localização Geográfica',
    conteudo: `Distribuída entre as latitudes 30°–60° N e S, a Floresta Sazonal 
    Temperada ocorre principalmente no leste da América do Norte (EUA e Canadá), 
    Europa Ocidental e Central, leste asiático (China, Japão, Coreia) e trechos 
    da América do Sul (sul do Brasil, Argentina e Chile).`,
    detalhe: 'Latitudes 30°–60° Norte e Sul',
  },
  {
    icone: <Thermometer size={22} />,
    titulo: 'Temperatura',
    conteudo: `Verões quentes (15–30°C) e invernos rigorosos (-30°C a 5°C), com 
    temperatura média anual entre 5°C e 15°C. A amplitude térmica anual (diferença 
    entre o mês mais quente e o mais frio) costuma superar 20°C, fator determinante 
    para a caducifolia das árvores.`,
    detalhe: '-30°C até +30°C ao longo do ano',
  },
  {
    icone: <CloudRain size={22} />,
    titulo: 'Regime de Chuvas',
    conteudo: `Precipitação anual entre 750 e 1.500 mm, distribuída de forma 
    relativamente uniforme pelas quatro estações. Não há uma estação seca definida, 
    o que difere a floresta temperada da savana e da floresta mediterrânea. 
    Neve é comum no inverno em latitudes mais altas.`,
    detalhe: '750–1.500 mm anuais, bem distribuídos',
  },
  {
    icone: <Layers size={22} />,
    titulo: 'Características do Solo',
    conteudo: `Solo do tipo Alfissolo (argissolo na classificação brasileira), 
    rico em matéria orgânica pela decomposição sazonal da serapilheira de folhas 
    caducas. A camada de húmus é espessa (15–30 cm) e altamente fértil. 
    pH geralmente entre 5,5 e 7, levemente ácido a neutro.`,
    detalhe: 'Alfissolo rico em húmus, pH 5,5–7',
  },
  {
    icone: <Sun size={22} />,
    titulo: 'Sazonalidade',
    conteudo: `Quatro estações bem definidas regem a vida do bioma. A primavera traz 
    o rebrotamento; o verão, o ápice da produção primária; o outono, a 
    queda das folhas com explosão de cores; e o inverno, o repouso fisiológico 
    das plantas e a dormência ou migração dos animais.`,
    detalhe: 'Quatro estações bem marcadas',
  },
  {
    icone: <Wind size={22} />,
    titulo: 'Paisagem Predominante',
    conteudo: `Dossel denso de 20–35 m de altura formado por árvores decíduas 
    (carvalhos, faias, bordos, freixos). Sub-bosque com arbustos e herbáceas 
    adaptados à sombra do verão e à luz total do inverno. Rios e lagos 
    abundantes integram o ecossistema aquático ao terrestre.`,
    detalhe: 'Dossel decíduo de 20–35 m',
  },
];

// ----------------------------------------------------------
// Dados do mapa — descrição das regiões principais
// ----------------------------------------------------------
const regioes = [
  { nome: 'América do Norte', paises: 'EUA nordeste, Canadá SE', area: '~1,8 milhão km²' },
  { nome: 'Europa',           paises: 'França, Alemanha, Polônia, Reino Unido', area: '~3 milhões km²' },
  { nome: 'Ásia Oriental',    paises: 'China NE, Japão, Coreia', area: '~1,5 milhão km²' },
  { nome: 'América do Sul',   paises: 'Sul do Brasil, Argentina, Chile', area: '~0,5 milhão km²' },
];

function Caracterizacao() {
  return (
    <section id="caracterizacao" className="section bg-terra-900">
      <div className="container-site">

        {/* --------------------------------------------------------
            CABEÇALHO DA SEÇÃO
        -------------------------------------------------------- */}
        <ScrollReveal className="reveal text-center mb-16">
          <p className="section-subtitle mb-3">O Bioma</p>
          <h2 className="section-title">
            Caracterização da{' '}
            <span className="text-gradient-outono">Floresta Temperada</span>
          </h2>
          <p className="font-body text-floresta-300 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Compreender as condições físicas e ambientais do bioma é essencial 
            para entender por que a vida aqui é tão diversa e adaptada ao ritmo das estações.
          </p>
        </ScrollReveal>

        {/* --------------------------------------------------------
            GRID DE CARACTERÍSTICAS
            2 colunas em tablet, 3 em desktop
        -------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {caracteristicas.map((item, i) => (
            <ScrollReveal
              key={item.titulo}
              className="reveal"
              delay={i * 80}
            >
              <div className="bg-sombra-900 card bg-som p-6 h-full group">
                {/* Ícone com fundo laranja */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-outono-600/15 border border-outono-600/20 mb-5 group-hover:bg-outono-600/25 transition-colors duration-300">
                  <span className="text-outono-500">{item.icone}</span>
                </div>

                <h3 className="font-display text-neve text-lg font-semibold mb-3">
                  {item.titulo}
                </h3>

                <p className="font-body text-floresta-300 text-sm leading-relaxed mb-4">
                  {item.conteudo}
                </p>

                {/* Detalhe em destaque */}
                <div className="mt-auto pt-4 border-t border-floresta-800">
                  <p className="font-body text-outono-400 text-xs font-medium">
                     {item.detalhe}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* --------------------------------------------------------
            MAPA DE DISTRIBUIÇÃO MUNDIAL
            Mapa SVG simplificado + tabela de regiões
        -------------------------------------------------------- */}
        <ScrollReveal className="reveal">
          <div className="bg-sombra-900 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Imagem do mapa */}
              <div className="relative min-h-[280px] lg:min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=800&q=80&auto=format&fit=crop"
                  alt="Vista aérea de floresta temperada com folhagem outonal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-outono-600/60 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-sombra-900/70 to-transparent lg:hidden" />

                {/* Label sobre a imagem */}
                <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2">
                  <p className="font-body text-neve text-xs font-medium">
                     Floresta outonal — Canadá / Nova Inglaterra
                  </p>
                </div>
              </div>

              {/* Tabela de regiões */}
              <div className="p-8 flex flex-col justify-center">
                <h3 className="font-display text-neve text-xl font-semibold mb-2">
                  Distribuição Mundial
                </h3>
                <p className="font-body text-floresta-300 text-sm mb-6 leading-relaxed">
                  A Floresta Sazonal Temperada ocorre em quatro grandes regiões do globo,
                  cobrindo aproximadamente 6,8 milhões de km² — cerca de 5% da superfície 
                  continental da Terra.
                </p>

                <div className="space-y-3">
                  {regioes.map((regiao, i) => (
                    <div
                      key={regiao.nome}
                      className="flex items-start gap-3 p-3 rounded-xl bg-outono-200 transition-colors duration-200"
                    >
                      {/* Número */}
                      <span className="flex items-center justify-center w-6 h-6 rounded-full border-sombra-950 bg-outono-600/20 text-sombra-950  text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sombra-950 text-sm font-medium">{regiao.nome}</p>
                        <p className="font-body text-sombra-900 text-xs">{regiao.paises}</p>
                      </div>
                      <span className="font-body text-outono-700 text-xs font-medium whitespace-nowrap">
                        {regiao.area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Caracterizacao;
