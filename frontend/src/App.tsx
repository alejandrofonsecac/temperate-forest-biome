// =============================================================
// App.tsx — Componente raiz da aplicação
//
// Responsável apenas por montar o RouterProvider.
// O roteamento em si está em router.tsx.
// =============================================================

import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;