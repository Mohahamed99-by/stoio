import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, X, Menu, Search, User, Camera, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cart, setCart, removeFromCart, getQuantity, total, cartCount } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);
  
  // Effet pour détecter le défilement et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Animation d'entrée des éléments du header
  useEffect(() => {
    setAnimateItems(true);
  }, []);

  // Les fonctions removeFromCart, getQuantity et total sont maintenant fournies par le contexte

  return (
    <header className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'}`}>
      {/* Panier Modal - Design modernisé */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in">
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white/90 backdrop-blur-xl dark:bg-gray-900/90 p-8 rounded-3xl max-w-md w-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transform transition-all duration-500 border border-white/30 dark:border-gray-800/30 animate-scale-up overflow-hidden relative"
          >
            {/* Éléments décoratifs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-center mb-6 relative">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent flex items-center gap-2 animate-fade-right">
                <span className="relative">
                  <ShoppingBag className="w-6 h-6 text-amber-500" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-md">
                    {cart.length}
                  </span>
                </span>
                <span>Mon Panier</span>
              </h3>
              <button 
                onClick={() => setShowCartModal(false)} 
                className="text-gray-500 hover:text-amber-600 transition-all duration-300 p-2 rounded-full hover:bg-amber-50/50 dark:hover:bg-gray-800/50 hover:scale-110 hover:rotate-90 animate-fade-left"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {cart.length > 0 ? (
              <div className="animate-fade-up">
                <div className="max-h-[calc(100vh-300px)] overflow-y-auto pr-2 mb-5 space-y-3 custom-scrollbar">
                  {[...new Set(cart.map(item => item.id))].map((jproductId, index) => {
                    const product = cart.find(item => item.id === productId);
                    const quantity = getQuantity(productId);
                    return (
                      <div 
                        key={productId} 
                        className="group flex items-center justify-between p-3 border border-gray-100 hover:border-amber-100 rounded-xl bg-white/50 hover:bg-white/80 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 transition-all duration-300 hover:shadow-md"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative overflow-hidden rounded-lg w-16 h-16 bg-gray-50 p-1 border border-gray-100 shadow-sm group-hover:shadow transition-all duration-300">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">{product.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{product.price} MAD</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center bg-gray-50/80 dark:bg-gray-800/50 rounded-full p-1 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <button 
                            onClick={() => removeFromCart(productId)}
                            className="p-1.5 hover:bg-amber-50 rounded-l-full transition-all duration-300 hover:text-amber-600 group/btn"
                            aria-label="Diminuer la quantité"
                          >
                            <Minus size={14} className="text-amber-500 group-hover/btn:scale-110 transition-transform" />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-700 dark:text-gray-300">{quantity}</span>
                          <button 
                            onClick={() => setCart([...cart, product])}
                            className="p-1.5 hover:bg-amber-50 rounded-r-full transition-all duration-300 hover:text-amber-600 group/btn"
                            aria-label="Augmenter la quantité"
                          >
                            <Plus size={14} className="text-amber-500 group-hover/btn:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 -top-6 h-6 pointer-events-none"></div>
                  <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-400">Sous-total:</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{total} MAD</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600 dark:text-gray-400">Livraison:</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">Gratuite</span>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-3"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-lg">Total:</span>
                      <span className="font-bold text-xl bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">{total} MAD</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="w-full mt-5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-2 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                  <ShoppingBag className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Passer la commande</span>
                </button>
              </div>
            ) : (
              <div className="text-center py-10 animate-fade-up">
                <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-50 to-white shadow-[inset_0_0_0_1px_rgba(251,191,36,0.1),0_4px_20px_rgba(251,191,36,0.1)] flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-amber-50/10 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
                  <ShoppingBag className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">Votre panier est vide</h3>
                <p className="text-gray-500 mb-6 max-w-xs mx-auto">Ajoutez des produits à votre panier pour les retrouver ici</p>
                <button 
                  onClick={() => setShowCartModal(false)}
                  className="group inline-flex items-center justify-center gap-2 mt-2 text-amber-600 hover:text-white font-medium border border-amber-500 rounded-full py-3 px-6 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                  <span className="relative z-10">Découvrir nos produits</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40" onClick={() => setShowMobileMenu(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white/95 backdrop-blur-md dark:bg-gray-900/95 shadow-2xl p-8 overflow-y-auto transform transition-all duration-500 border-l border-white/20 dark:border-gray-800/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent flex items-center gap-2">
                <Camera className="w-7 h-7 text-amber-500" />
                MarocShoot
              </Link>
              <button 
                onClick={() => setShowMobileMenu(false)}
                className="p-2 rounded-full hover:bg-amber-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            <nav className="mb-8">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/galerie" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Galerie
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/boutique" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/reservation" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Réservation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/a-propos" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="group flex items-center py-3 px-4 text-gray-800 hover:text-amber-600 hover:bg-amber-50/80 rounded-xl transition-all duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            
            <button 
              onClick={() => {
                setShowMobileMenu(false);
                setShowCartModal(true);
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/30"
            >
              <ShoppingBag className="w-5 h-5" />
              Voir le panier ({cartCount})
            </button>
          </div>
        </div>
      )}
      
      {/* Header Content */}
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent flex items-center gap-2 transform transition-all duration-1000 ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        >
          <Camera className="w-7 h-7 text-amber-500" />
          MarocShoot
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-2 items-center">
            <li>
              <Link 
                to="/" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '100ms' }}
              >
                Accueil
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                Services
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/galerie" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '300ms' }}
              >
                Galerie
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/boutique" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '400ms' }}
              >
                Boutique
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/reservation" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '500ms' }}
              >
                Réservation
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/a-propos" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '600ms' }}
              >
                À propos
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`group relative px-3 py-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white'} transition-all duration-300 transform ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '700ms' }}
              >
                Contact
                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${scrolled ? 'bg-amber-500' : 'bg-white'} group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2`}></span>
              </Link>
            </li>
            <li className="ml-2">
              <button 
                onClick={() => setShowCartModal(true)}
                className={`p-2 rounded-full ${scrolled ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-white/20 text-white hover:bg-white/30'} transition-all duration-300 transform hover:scale-110 relative ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: '800ms' }}
                aria-label="Voir le panier"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Navigation Controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <button 
            onClick={() => setShowCartModal(true)}
            className={`p-2 rounded-full ${scrolled ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-700 hover:shadow-lg' : 'bg-white/20 text-white hover:bg-white/30'} transition-all duration-300 transform hover:scale-110 relative ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
            aria-label="Voir le panier"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>
          
          <button 
            onClick={() => setShowMobileMenu(true)}
            className={`p-2 rounded-full ${scrolled ? 'bg-white/80 text-gray-700 hover:bg-gray-100 hover:shadow-lg' : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'} transition-all duration-300 transform hover:scale-110 ${animateItems ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}