// =============================================================
// components/layout/Header.tsx
//
// Header com:
// - Logo e nome do site à esquerda
// - Menu de navegação no centro/direita (desktop)
// - Menu hamburguer animado (mobile)
// - Fundo transparente que fica sólido (glass) ao scrollar
// - Forçado a aparecer automaticamente 100% no topo
// - Link ativo destacado em laranja
// =============================================================

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import clsx from 'clsx';
import type { NavItem } from '../../types';

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
  const [showHeader, setShowHeader] = useState(true);
  const [noTopo, setNoTopo] = useState(true); // Controla a transparência inicial
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // ----------------------------------------------------------
  // Detecta scroll para ocultar/exibir e mudar visual do header
  // ----------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowHeader(true);
        setNoTopo(true);
      } else {
        setNoTopo(false);

        if (!menuAberto) {
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Rola para baixo: esconde
            setShowHeader(false);
          } else {
            // Rola para cima: mostra
            setShowHeader(true);
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, menuAberto]);

  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuAberto]);

  const isAtivo = (href: string) => {
    if (href === '/quiz') return location.pathname === '/quiz';
    if (href.startsWith('/#')) return location.pathname === '/';
    return false;
  };

  return (
    <>
      <header
        className={clsx(
          'top-0 left-0 right-0 z-50 fixed',
          'transition-all duration-500 ease-out',
          showHeader ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none',

          noTopo 
            ? 'bg-transparent border-b border-transparent ' 
            : 'glass-light border-b border-floresta-700/20 backdrop-blur-sm '
        )}
        style={{ height: 'var(--header-height)' }}
      >
        <div className={clsx(
          "container-site h-full flex items-center justify-between transition-colors duration-500",
          noTopo ? "bg-transparent" : "bg-[#F7F0E6]/90"
        )}>

          {/* LOGO / NOME DO SITE */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Página inicial - Floresta Sazonal Temperada"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-outono-400/30 border border-outono-800/30 group-hover:border-outono-600 transition-all duration-300">
              <Leaf
                size={18}
                className="text-outono-600 group-hover:text-outono-700 transition-colors duration-300 animate-leaf-sway"
              />
            </span>

            <div className="leading-tight">
              <p className={clsx(
                  'font-display text-sombra-950 text-sm font-semibold tracking-tight', noTopo ? 'text-transparent bg-clip-text bg-gradient-to-r from-outono-600 to-floresta-800' : 'text-floresta-800'
              )} >
                Floresta Sazonal
              </p>
              <p className="font-body text-outono-600 text-xs font-light tracking-widest uppercase">
                Temperada
              </p>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={clsx(
                  'relative px-3 py-2 font-body text-sm transition-colors duration-200 rounded-lg',
                  item.href === '/quiz'
                    ? 'ml-2 btn-primary !py-2 !px-5 text-xs'
                    : clsx(
                        'hover:text-outono-500',
                        isAtivo(item.href)
                          ? 'text-outono-500 font-medium'
                          : 'text-floresta-800'
                      ),
                )}
              >
                {item.label}
                {item.href !== '/quiz' && isAtivo(item.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-outono-500 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* BOTÃO HAMBURGUER — mobile only */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-sombra-950 hover:text-white hover:bg-outono-600/70 transition-all duration-200"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuAberto}
          >
            <span
              className={clsx(
                'absolute transition-all duration-300', noTopo ? 'text-white' : 'text-sombra-950',
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

      <div
        className={clsx(
          'fixed inset-0 z-40 md:hidden',
          'transition-all duration-400 ease-out',
          menuAberto ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMenuAberto(false)}
        aria-hidden={!menuAberto}
      >
        <nav
          className={clsx(
            'absolute top-[var(--header-height)] right-0 left-0',
            'glass-dark border-b border-floresta-700/20',
            'px-4 py-6 flex flex-col gap-1',
            'transition-all duration-400 ease-out',
            menuAberto ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          )}
          onClick={(e) => e.stopPropagation()}
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