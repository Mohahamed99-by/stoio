import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';
import { CartProvider } from '../context/CartContext';

export default function Layout() {
  // Effet pour les animations au chargement de la page
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 overflow-x-hidden">
        <Header />
        {/* Padding-top pour compenser le header fixe */}
        <main className="flex-grow pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}