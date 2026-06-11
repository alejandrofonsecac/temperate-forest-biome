// =============================================================
// components/layout/Header.tsx
//
// Header com:
// - Logo e nome do site à esquerda
// - Menu de navegação no centro/direita (desktop)
// - Menu hamburguer animado (mobile)
// - Fundo transparente que fica sólido (glass) ao scrollar
// - Link ativo destacado em laranja
// =============================================================

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import clsx from 'clsx';
import type { NavItem } from '../../types';

// Itens do menu de navegação
// href com # aponta para seções da Home via scroll suave
const navItems: NavItem[] = [
  { label: 'Início',         href: '/#inicio' },
  { label: 'Caracterização', href: '/#caracterizacao' },
  { label: 'Biodiversidade', href: '/#biodiversidade' },
  { label: 'Fauna',          href: '/#fauna' },
  { label: 'Flora',          href: '/#flora' },
  { label: 'Impactos',       href: '/#impactos' },
  { label: 'Quiz',           href: '/quiz' },
];

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollado, setScrollado] = useState(false);
  const [mostrarHeader, setMostrarHeader] = useState(true)

  // Usado para destacar o link da página atual
  const location = useLocation();

  // ----------------------------------------------------------
  // Detecta scroll para mudar visual do header
  // ----------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      // Aplica fundo sólido após 60px de scroll
      setScrollado(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Fecha o menu mobile ao mudar de rota
  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  // Impede scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuAberto]);

  // ----------------------------------------------------------
  // Verifica se um link está ativo
  // ----------------------------------------------------------
  const isAtivo = (href: string) => {
    if (href === '/quiz') return location.pathname === '/quiz';
    if (href.startsWith('/#')) return location.pathname === '/';
    return false;
  };

  return (
    <>
      <header
        className={clsx(
          // Posicionamento fixo no topo
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-500 ease-out',
          // Estado padrão: transparente
          !scrollado && !menuAberto && 'bg-transparent',
          // Com scroll: glassmorphism escuro
          (scrollado || menuAberto) && 'glass-dark border-b border-floresta-700/20 shadow-floresta',
        )}
        style={{ height: 'var(--header-height)' }}
      >
        <div className="container-site bg-[#F7F0E6] h-full flex items-center justify-between">

          {/* ------------------------------------------------
              LOGO / NOME DO SITE
          ------------------------------------------------ */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Página inicial - Floresta Sazonal Temperada"
          >
            {/* Ícone de folha com animação de balanço */}
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-outono-400/30 border border-outono-800/30 group-hover:border-outono-600 transition-all duration-300">
              <Leaf
                size={18}
                className="text-outono-600 group-hover:text-outono-700 transition-colors duration-300 animate-leaf-sway"
              />
            </span>

            {/* Nome em duas linhas */}
            <div className="leading-tight">
              <p className="font-display text-sombra-950 text-sm font-semibold tracking-tight">
                Floresta Sazonal
              </p>
              <p className="font-body text-outono-600 text-xs font-light tracking-widest uppercase">
                Temperada
              </p>
            </div>
          </Link>

          {/* ------------------------------------------------
              MENU DESKTOP
              Visível apenas em telas md e maiores
          ------------------------------------------------ */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={clsx(
                  'relative px-3 py-2 font-body text-sm transition-colors duration-200 rounded-lg',
                  // Link do Quiz tem destaque especial
                  item.href === '/quiz'
                    ? 'ml-2 btn-primary !py-2 !px-5 text-xs'
                    : clsx(
                        'hover:text-neve',
                        isAtivo(item.href)
                          ? 'text-outono-400 font-medium'
                          : 'text-floresta-300'
                      ),
                )}
              >
                {item.label}
                {/* Sublinhado animado para links ativos (exceto Quiz) */}
                {item.href !== '/quiz' && isAtivo(item.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-outono-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* ------------------------------------------------
              BOTÃO HAMBURGUER — mobile only
          ------------------------------------------------ */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-sombra-950 hover:text-white hover:bg-outono-600/70 transition-all duration-200"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
          >
            {/* Alterna entre ícone de menu e X com animação */}
            <span
              className={clsx(
                'absolute transition-all duration-300',
                menuAberto ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
              )}
            >
              <X size={20} />
            </span>
            <span
              className={clsx(
                'absolute transition-all duration-300',
                menuAberto ? 'opacity-0 -rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              )}
            >
              <Menu size={20} />
            </span>
          </button>
        </div>
      </header>

      {/* --------------------------------------------------------
          MENU MOBILE — painel deslizante
          Aparece abaixo do header quando hamburguer está ativo
      -------------------------------------------------------- */}
      <div
        className={clsx(
          'fixed inset-0 z-40 md:hidden',
          'transition-all duration-400 ease-out',
          menuAberto
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        // Fundo escuro translúcido atrás do menu
        onClick={() => setMenuAberto(false)}
        aria-hidden={!menuAberto}
      >
        {/* Painel do menu propriamente dito */}
        <nav
          className={clsx(
            'absolute top-[var(--header-height)] right-0 left-0',
            'glass-dark border-b border-floresta-700/20',
            'px-4 py-6 flex flex-col gap-1',
            'transition-all duration-400 ease-out',
            menuAberto
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          )}
          onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar no painel
          aria-label="Menu mobile"
        >
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              to={item.href}
              style={{ transitionDelay: menuAberto ? `${i * 50}ms` : '0ms' }}
              className={clsx(
                'flex items-center px-4 py-3.5 rounded-xl font-body text-base',
                'transition-all duration-300',
                // Stagger de entrada dos itens
                menuAberto ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
                item.href === '/quiz'
                  ? 'mt-2 bg-outono-600 text-white font-medium justify-center rounded-pill'
                  : clsx(
                      'hover:bg-floresta-700/40',
                      isAtivo(item.href)
                        ? 'text-outono-400 bg-floresta-800/40 font-medium'
                        : 'text-floresta-200'
                    ),
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Header;
