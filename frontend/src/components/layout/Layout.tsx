import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToAnchor from './ScrollToAnchor';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToAnchor />
      <main className="flex-1 pt-[var(--header-height)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
