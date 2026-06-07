// =============================================================
// components/layout/Layout.tsx
//
// Componente wrapper que envolve todas as páginas com:
// - Header fixo
// - Área de conteúdo com padding-top para compensar o header
// - Footer
// =============================================================

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fixo no topo */}
      <Header />

      {/* Conteúdo principal — pt compensa a altura do header fixo */}
      <main className="flex-1 pt-[var(--header-height)]">
        {/* Outlet renderiza a página atual de acordo com o React Router */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
