// =============================================================
// router.tsx — Configuração das rotas do React Router v6
//
// Rotas disponíveis:
//   /          → Página principal (Home com todas as seções)
//   /fauna     → Galeria completa de animais
//   /flora     → Galeria completa de plantas
//   /quiz      → Página do quiz
//
// Todas as páginas compartilham o Layout (Header + Footer).
// =============================================================

import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import FaunaGaleria from './pages/FaunaGaleria';
import FloraGaleria from './pages/FloraGaleria';
import Quiz from './pages/Quiz';

const router = createBrowserRouter([
  {
    // Layout envolve todas as rotas filhas
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,    // "/" → Home
        element: <Home />,
      },
      {
        path: 'fauna',
        element: <FaunaGaleria />,
      },
      {
        path: 'flora',
        element: <FloraGaleria />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
    ],
  },
]);

export default router;
