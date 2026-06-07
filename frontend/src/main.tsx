// =============================================================
// main.tsx — Ponto de entrada da aplicação React
//
// Monta o componente App no elemento #root do index.html
// e importa o CSS global com Tailwind e variáveis customizadas.
// =============================================================

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';
import App from './App';

// Obtém o elemento raiz do DOM (definido no index.html)
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Elemento #root não encontrado no DOM. Verifique o index.html.'
  );
}

// Cria a raiz e renderiza a aplicação
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
