// =============================================================
// components/sections/Referencias.tsx
//
// Seção de referências bibliográficas e digitais
// conforme exigido nas orientações do trabalho.
// =============================================================

import { BookOpen, Globe, ExternalLink } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const refsBibliograficas = [
  {
    autores: 'ARCHIBOLD, O. W.',
    titulo: 'Ecology of World Vegetation.',
    editora: 'London: Chapman & Hall, 1995.',
  },
  {
    autores: 'WHITTAKER, R. H.',
    titulo: 'Communities and Ecosystems.',
    editora: 'New York: Macmillan, 1975.',
  },
  {
    autores: 'WILSON, D. E.; MITTERMEIER, R. A. (Eds.).',
    titulo: 'Handbook of the Mammals of the World. Vol. 1–9.',
    editora: 'Barcelona: Lynx Edicions, 2009–2019.',
  },
  {
    autores: 'GILL, F.; DONSKER, D. (Eds.).',
    titulo: 'IOC World Bird List. Version 14.1.',
    editora: 'International Ornithologists\' Union, 2024.',
  },
  {
    autores: 'FLEROV, C. C.',
    titulo: 'Musk Deer and Deer. Fauna of the USSR.',
    editora: 'Moscow: Academy of Sciences, 1952.',
  },
  {
    autores: 'KÖRNER, C.',
    titulo: 'Alpine Plant Life: Functional Plant Ecology of High Mountain Ecosystems.',
    editora: 'Berlin: Springer, 2003.',
  },
  {
    autores: 'SERVHEEN, C. et al.',
    titulo: 'Bears: Status Survey and Conservation Action Plan.',
    editora: 'Gland: IUCN/SSC Bear Specialist Group, 1999.',
  },
];

const refsDigitais = [
  {
    nome: 'IUCN Red List of Threatened Species',
    url: 'https://www.iucnredlist.org',
    descricao: 'Lista vermelha de espécies ameaçadas — dados de status de conservação',
    acesso: '2024',
  },
  {
    nome: 'Euro+Med Plantbase Project',
    url: 'https://europlusmed.org',
    descricao: 'Base de dados de plantas da Europa e região mediterrânea',
    acesso: '2024',
  },
  {
    nome: 'Flora of North America',
    url: 'http://floranorthamerica.org',
    descricao: 'Flora completa da América do Norte',
    acesso: '2024',
  },
  {
    nome: 'Global Forest Watch',
    url: 'https://www.globalforestwatch.org',
    descricao: 'Monitoramento em tempo real das florestas do mundo — dados de desmatamento',
    acesso: '2024',
  },
  {
    nome: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org',
    descricao: 'Banco de imagens de uso livre — fotografias de espécies',
    acesso: '2024',
  },
  {
    nome: 'Unsplash',
    url: 'https://unsplash.com',
    descricao: 'Fotografias de alta qualidade de florestas e paisagens naturais',
    acesso: '2024',
  },
];

function Referencias() {
  return (
    <section id="referencias" className="section bg-sombra-950">
      <div className="container-site">

        <ScrollReveal className="reveal text-center mb-14">
          <p className="section-subtitle mb-3">Fontes Consultadas</p>
          <h2 className="section-title">Referências</h2>
          <p className="font-body text-floresta-300 text-sm mt-3 max-w-xl mx-auto">
            Todas as informações científicas deste site foram verificadas nas
            fontes abaixo, seguindo normas ABNT.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Referências bibliográficas */}
          <ScrollReveal className="reveal-left">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={20} className="text-outono-400" />
              <h3 className="font-display text-neve text-xl font-semibold">Bibliográficas</h3>
            </div>
            <div className="space-y-4">
              {refsBibliograficas.map((ref) => (
                <div
                  key={ref.titulo}
                  className="p-4 rounded-xl bg-floresta-900/60 border border-floresta-800/40 hover:border-floresta-700/60 transition-colors duration-200"
                >
                  <p className="font-body text-floresta-200 text-sm leading-relaxed">
                    <span className="text-neve font-medium">{ref.autores}</span>{' '}
                    <span className="italic">{ref.titulo}</span>{' '}
                    {ref.editora}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Referências digitais */}
          <ScrollReveal className="reveal-right" delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <Globe size={20} className="text-floresta-400" />
              <h3 className="font-display text-neve text-xl font-semibold">Digitais</h3>
            </div>
            <div className="space-y-4">
              {refsDigitais.map((ref) => (
                <a
                  key={ref.nome}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-4 rounded-xl bg-floresta-900/60 border border-floresta-800/40 hover:border-floresta-600/50 hover:bg-floresta-900 transition-all duration-200 group"
                >
                  <ExternalLink size={14} className="text-floresta-500 group-hover:text-outono-400 mt-0.5 shrink-0 transition-colors duration-200" />
                  <div>
                    <p className="font-body text-neve text-sm font-medium group-hover:text-outono-300 transition-colors duration-200">
                      {ref.nome}
                    </p>
                    <p className="font-body text-floresta-400 text-xs mt-0.5">{ref.descricao}</p>
                    <p className="font-body text-floresta-600 text-xs mt-1">
                      Acesso em: {ref.acesso}. Disponível em: {ref.url}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Referencias;
