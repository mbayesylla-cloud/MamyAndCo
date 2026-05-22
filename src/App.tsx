import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import Boutique from './pages/Boutique';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';
import Commande from './pages/Commande';
import APropos from './pages/APropos';
import ProduitDetail from './pages/ProduitDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <FloatingButtons />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/produit/:slug" element={<ProduitDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 24px', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '80px', marginBottom: '24px' }}>🌸</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '52px', fontWeight: 800, color: 'var(--color-secondary-dark)', marginBottom: '12px' }}>
        404
      </h1>
      <p style={{ fontSize: '18px', color: '#888', marginBottom: '32px' }}>
        Cette page n'existe pas ou a été déplacée.
      </p>
      <a href="/" className="btn-primary">🏠 Retour à l'accueil</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <Layout />
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
