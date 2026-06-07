// =============================================================
// pages/FloraGaleria.tsx
//
// Galeria completa com todas as plantas da floresta sazonal.
// Exibe cards filtráveis por grupo vegetal.
// =============================================================

import { useState } from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { floraData } from '../data/floraData';
import { BadgeEspecie, BadgeStatus } from '../components/ui/Badge';
import ScrollReveal from '../components/ui/ScrollReveal';
import type { EspecieFlora } from '../types';

const TODOS = 'Todos';

function FloraGaleria() {
  const [filtroGrupo, setFiltroGrupo] = useState<string>(TODOS);
  const [busca, setBusca] = useState('');

  const grupos = [TODOS, ...Array.from(new Set(floraData.map((p) => p.grupoVegetal)))];

  const floraFiltrada = floraData.filter((planta) => {
    const matchGrupo = filtroGrupo === TODOS || planta.grupoVegetal === filtroGrupo;
    const termoBusca = busca.toLowerCase();
    const matchBusca =
      !busca ||
      planta.nomePopular.toLowerCase().includes(termoBusca) ||
      planta.nomeCientifico.toLowerCase().includes(termoBusca);
    return matchGrupo && matchBusca;
  });

  return (
    <div className="min-h-screen bg-sombra-900">

      {/* Cabeçalho da página */}
      <div className="bg-sombra-950 border-b border-floresta-900/50 py-12">
        <div className="container-site">
          <Link
            to="/#flora"
            className="inline-flex items-center gap-2 text-floresta-400 hover:text-outono-400 transition-colors duration-200 mb-6 font-body text-sm"
          >
            <ArrowLeft size={16} />
            Voltar para Flora
          </Link>

          <p className="section-subtitle mb-2">Galeria Completa</p>
          <h1 className="font-display text-display-lg text-neve font-semibold mb-3">
            Flora da Floresta{' '}
            <span className="text-gradient-floresta">Sazonal Temperada</span>
          </h1>
          <p className="font-body text-floresta-300 text-base max-w-2xl leading-relaxed">
            {floraData.length} espécies vegetais com informações científicas sobre
            adaptações sazonais, papel ecológico e distribuição geográfica.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="sticky top-[var(--header-height)] z-30 bg-sombra-900/95 backdrop-blur-sm border-b border-floresta-900/40 py-4">
        <div className="container-site flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {grupos.map((grupo) => (
              <button
                key={grupo}
                onClick={() => setFiltroGrupo(grupo)}
                className={`
                  font-body text-xs px-4 py-2 rounded-pill transition-all duration-200
                  ${filtroGrupo === grupo
                    ? 'bg-floresta-600 text-white font-medium'
                    : 'bg-floresta-900 text-floresta-300 hover:bg-floresta-800 hover:text-neve border border-floresta-800/60'
                  }
                `}
              >
                {grupo}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-floresta-500" />
            <input
              type="text"
              placeholder="Buscar espécie..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-floresta-900 border border-floresta-800/60 rounded-pill
                         font-body text-sm text-neve placeholder:text-floresta-600
                         focus:outline-none focus:border-floresta-500 transition-colors duration-200"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container-site py-12">
        {floraFiltrada.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-floresta-400 text-lg">Nenhuma espécie encontrada.</p>
            <button
              onClick={() => { setFiltroGrupo(TODOS); setBusca(''); }}
              className="mt-4 btn-outline text-sm"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {floraFiltrada.map((planta, i) => (
              <PlantaCard key={planta.id} planta={planta} delay={i * 40} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------
// Card individual de planta
// ----------------------------------------------------------
interface PlantaCardProps {
  planta: EspecieFlora;
  delay?: number;
}

function PlantaCard({ planta, delay = 0 }: PlantaCardProps) {
  const [expandido, setExpandido] = useState(false);

  return (
    <ScrollReveal className="reveal" delay={delay}>
      <div className="card group cursor-pointer" onClick={() => setExpandido(!expandido)}>

        {/* Imagem */}
        <div className="relative overflow-hidden h-52">
          <img
            src={planta.imagem}
            alt={planta.nomePopular}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-overlay-dark opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          <div className="absolute top-3 left-3">
            <span className="badge glass text-floresta-200 text-xs">{planta.grupoVegetal}</span>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-display text-neve text-lg font-semibold leading-tight">
              {planta.nomePopular}
            </h3>
            <p className="font-body text-floresta-300 text-xs italic">{planta.nomeCientifico}</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-1.5 mb-3">
            <BadgeEspecie isNativa={planta.isNativa} isEndemica={planta.isEndemica} />
            {planta.alturaMedia && (
              <span className="badge bg-floresta-800/60 text-floresta-400 border border-floresta-700/30 text-xs">
                🌿 {planta.alturaMedia}
              </span>
            )}
            <BadgeStatus status={planta.statusConservacao} />
          </div>

          <div className="mb-3">
            <p className="font-body text-floresta-400 text-xs font-medium mb-1">Adaptação Sazonal</p>
            <p className={`font-body text-floresta-200 text-sm leading-relaxed ${expandido ? '' : 'line-clamp-3'}`}>
              {planta.adaptacao}
            </p>
          </div>

          {expandido && (
            <div className="mt-3 pt-3 border-t border-floresta-800 space-y-3">
              <div>
                <p className="font-body text-floresta-400 text-xs font-medium mb-1">Papel Ecológico</p>
                <p className="font-body text-floresta-300 text-sm leading-relaxed">
                  {planta.caracteristicaEcologica}
                </p>
              </div>
              <div>
                <p className="font-body text-floresta-400 text-xs font-medium mb-1">Descrição</p>
                <p className="font-body text-floresta-300 text-sm leading-relaxed">
                  {planta.descricao}
                </p>
              </div>
              {planta.imagemCredito && (
                <p className="font-body text-floresta-600 text-xs">📷 {planta.imagemCredito}</p>
              )}
            </div>
          )}

          <button className="mt-3 font-body text-xs text-floresta-400 hover:text-floresta-300 transition-colors duration-200">
            {expandido ? '▲ Menos detalhes' : '▼ Mais detalhes'}
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default FloraGaleria;
