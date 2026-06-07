// =============================================================
// components/layout/Footer.tsx
//
// Rodapé do site com:
// - Logo e descrição curta
// - Links de navegação rápida
// - Créditos e referências
// - Informações do projeto escolar
// =============================================================

import { Link } from 'react-router-dom';
import { Leaf, BookOpen, GraduationCap } from 'lucide-react';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-sombra-950 border-t border-floresta-900/50">
      <div className="container-site py-16">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Coluna 1 — Identidade */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-floresta-700/60 border border-floresta-500/30">
                <Leaf size={18} className="text-floresta-300" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-neve text-sm font-semibold">Floresta Sazonal</p>
                <p className="font-body text-floresta-400 text-xs tracking-widest uppercase">Temperada</p>
              </div>
            </div>
            <p className="font-body text-floresta-400 text-sm leading-relaxed max-w-xs">
              Museu virtual sobre a Floresta Sazonal Temperada, explorando biodiversidade, 
              características climáticas e impactos ambientais.
            </p>
            <div className="flex items-center gap-2 text-floresta-500 text-xs font-body">
              <GraduationCap size={14} />
              <span>3ª Série do Ensino Médio</span>
            </div>
          </div>

          {/* Coluna 2 — Navegação rápida */}
          <div>
            <h3 className="font-body text-neve text-sm font-semibold mb-4 uppercase tracking-widest">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Apresentação',   href: '/#inicio' },
                { label: 'Caracterização', href: '/#caracterizacao' },
                { label: 'Biodiversidade', href: '/#biodiversidade' },
                { label: 'Fauna',          href: '/#fauna' },
                { label: 'Flora',          href: '/#flora' },
                { label: 'Impactos',       href: '/#impactos' },
                { label: 'Quiz',           href: '/quiz' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-floresta-400 text-sm hover:text-outono-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Fontes principais */}
          <div>
            <h3 className="font-body text-neve text-sm font-semibold mb-4 uppercase tracking-widest">
              Fontes Principais
            </h3>
            <ul className="space-y-2.5">
              {[
                'IUCN Red List (2024)',
                'Archibold, O.W. — Ecology of World Vegetation, 1995',
                'Whittaker, R.H. — Communities and Ecosystems, 1975',
                'Euro+Med Plantbase Project',
                'IOC World Bird List v14.1',
                'Wilson & Mittermeier — Handbook of Mammals of the World',
              ].map((fonte) => (
                <li key={fonte} className="flex items-start gap-2">
                  <BookOpen size={12} className="text-outono-600 mt-0.5 shrink-0" />
                  <span className="font-body text-floresta-400 text-xs leading-relaxed">{fonte}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="divider-floresta mb-8" />

        {/* Copyright e créditos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-floresta-500 text-xs font-body">
          <p>© {anoAtual} — Museu Virtual dos Biomas do Mundo. Projeto escolar.</p>
          <p className="text-center">
            Todas as imagens utilizadas pertencem aos seus respectivos autores.
            <span className="mx-2 text-floresta-700">|</span>
            Fontes: Wikimedia Commons, Unsplash
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
