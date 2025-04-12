import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  X, 
  ChevronDown,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Heart,
  Eye,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function ShopPage() {
  // État pour les animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // Animation au chargement
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  // Utilisation du contexte du panier
  const { cart, addToCart, removeFromCart, getQuantity, total } = useCart();
  
  // Produits du studio photo
  const products = [
    { 
      id: 1, 
      name: 'Impression Photo Premium 20x30cm', 
      price: 150, 
      category: 'impression',
      image: 'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlZCUyMHBob3RvfGVufDB8fDB8fHww'
    },
    { 
      id: 2, 
      name: 'Impression Photo Grand Format 30x45cm', 
      price: 250, 
      category: 'impression',
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJpbnRlZCUyMHBob3RvfGVufDB8fDB8fHww'
    },
    { 
      id: 3, 
      name: 'Album Photo Premium Cuir', 
      price: 400, 
      category: 'album',
      image: 'https://images.unsplash.com/photo-1544104695-e69b5ad3500f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwYWxidW18ZW58MHx8MHx8fDA%3D'
    },
    { 
      id: 4, 
      name: 'Cadre Photo Bois Rustique', 
      price: 200, 
      category: 'accessoire',
      image: 'https://images.unsplash.com/photo-1581343109297-b0723710832c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBmcmFtZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    { 
      id: 5, 
      name: 'Pack Shooting Portrait + 10 Photos', 
      price: 1200, 
      category: 'service',
      image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvJTIwc2hvb3R8ZW58MHx8MHx8fDA%3D'
    },
    { 
      id: 6, 
      name: 'Cartes Postales Personnalisées (lot de 10)', 
      price: 100, 
      category: 'impression',
      image: 'https://images.unsplash.com/photo-1607370850536-64d0965ba6be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvc3RjYXJkfGVufDB8fDB8fHww'
    },
    { 
      id: 7, 
      name: 'Pack Shooting Famille Extérieur', 
      price: 1500, 
      category: 'service',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D'
    },
    { 
      id: 8, 
      name: 'Tableau Photo sur Toile 40x60cm', 
      price: 350, 
      category: 'impression',
      image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FudmFzJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D'
    },
    { 
      id: 9, 
      name: 'Album Photo Mariage Luxe', 
      price: 600, 
      category: 'album',
      image: 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMGFsYnVtfGVufDB8fDB8fHww'
    }
  ];

  // État pour la recherche, le filtrage et le tri
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('tous');
  const [sortBy, setSortBy] = useState('default');
  
  // État pour la gestion des quantités
  const [quantity, setQuantity] = useState(1);
  
  // Catégories disponibles
  const categories = [
    { id: 'tous', name: 'Tous les produits' },
    { id: 'impression', name: 'Impressions' },
    { id: 'album', name: 'Albums' },
    { id: 'accessoire', name: 'Accessoires' },
    { id: 'service', name: 'Services Photo' }
  ];
  
  // Options de tri
  const sortOptions = [
    { id: 'default', name: 'Par défaut' },
    { id: 'price-asc', name: 'Prix croissant' },
    { id: 'price-desc', name: 'Prix décroissant' },
    { id: 'name-asc', name: 'Nom A-Z' }
  ];
  
  // Fonction pour filtrer et trier les produits
  const getFilteredProducts = () => {
    let filteredProducts = [...products];
    
    // Filtre par recherche
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtre par catégorie
    if (categoryFilter !== 'tous') {
      filteredProducts = filteredProducts.filter(product => 
        product.category === categoryFilter
      );
    }
    
    // Tri
    switch (sortBy) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    return filteredProducts;
  };
  
  // Les fonctions pour le panier sont maintenant fournies par le contexte CartContext

  // Affichage des produits filtrés
  const filteredProducts = getFilteredProducts();

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen overflow-hidden">
      {/* Bannière moderne avec effet de glassmorphisme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-amber-500 to-pink-500 py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Collection 2025
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            <span className="block">Boutique Studio Photo</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 drop-shadow-sm">Nouvelle Génération</span>
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Découvrez notre sélection exclusive de produits et services photo de qualité supérieure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-white text-amber-600 font-medium hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2">
              Explorer la collection
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 font-medium hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Nouveautés
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Barre de recherche flottante et filtres */}
        <div className={`bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl mb-12 border border-white/50 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* Recherche */}
            <div className="relative flex-grow w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-amber-500" />
              </div>
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="pl-12 pr-4 py-3.5 w-full border-0 bg-gray-50/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner text-gray-700 placeholder-gray-400 transition-all duration-300 hover:bg-gray-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Bouton de filtres mobile */}
            <div className="md:hidden w-full">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Filter className="h-5 w-5" />
                Filtres et tri
              </button>
            </div>
            
            {/* Filtres desktop */}
            <div className={`flex-col sm:flex-row gap-3 w-full md:w-auto md:flex ${showFilters ? 'flex' : 'hidden'}`}>
              {/* Filtre par catégorie */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SlidersHorizontal className="h-4 w-4 text-amber-500" />
                </div>
                <select
                  className="appearance-none pl-12 pr-10 py-3.5 bg-gray-50/80 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner text-gray-700 w-full transition-all duration-300 hover:bg-gray-50"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-amber-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
              
              {/* Tri */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <ArrowRight className="h-4 w-4 text-amber-500 rotate-90" />
                </div>
                <select
                  className="appearance-none pl-12 pr-10 py-3.5 bg-gray-50/80 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner text-gray-700 w-full transition-all duration-300 hover:bg-gray-50"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-amber-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Nombre de résultats et mini panier */}
        <div className={`mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-100`}>
          <p className="text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/50 shadow-sm">
            <span className="font-semibold text-amber-600">{filteredProducts.length}</span> produits trouvés
          </p>
          
          {/* Mini panier */}
          <div className="flex items-center bg-white/80 backdrop-blur-md px-6 py-3 rounded-xl shadow-md border border-white/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-amber-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <span className="text-gray-700 font-medium group-hover:text-amber-600 transition-colors duration-300">
              {cart.length} article(s) - <span className="font-bold">{total.toFixed(2)} MAD</span>
            </span>
          </div>
        </div>
        
        {/* Grille de produits avec effet 3D */}
        {filteredProducts.length > 0 ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className={`group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Badge de catégorie */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/80 backdrop-blur-md text-amber-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm border border-white/50">
                    {categories.find(cat => cat.id === product.category)?.name.replace('s ', ' ')}
                  </span>
                </div>
                
                {/* Actions rapides */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-amber-500 hover:text-white transition-all duration-300 border border-white/50">
                    <Heart className="h-4 w-4" />
                  </button>
                  <button className="bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-amber-500 hover:text-white transition-all duration-300 border border-white/50">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                
                {/* Image avec effet 3D */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>
                
                <div className="p-6 relative">
                  {/* Titre et prix avec effet de glassmorphisme */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-amber-400' : 'text-gray-300'}`} fill={i < 4 ? 'currentColor' : 'none'} />
                      ))}
                      <span className="text-xs text-gray-500">(4.0)</span>
                    </div>
                    
                    <p className="text-amber-600 font-bold text-2xl">
                      {product.price.toFixed(2)} <span className="text-sm font-medium">MAD</span>
                    </p>
                  </div>
                  
                  {/* Contrôles de quantité et bouton d'ajout */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 bg-gray-100/80 backdrop-blur-sm rounded-xl p-1 border border-gray-200/50">
                      <button 
                        onClick={() => removeFromCart(product.id)}
                        className="bg-white p-2 rounded-lg shadow-sm hover:bg-amber-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-inherit"
                        disabled={getQuantity(product.id) === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium px-3">{getQuantity(product.id)}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-white p-2 rounded-lg shadow-sm hover:bg-amber-500 hover:text-white transition-all duration-300"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter
                    </button>
                  </div>
                </div>
                
                {/* Effet de brillance au survol */}
                <div 
                  className={`absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`}
                  style={{
                    transform: hoveredProduct === product.id ? 'rotate(120deg)' : 'rotate(25deg)',
                    transformOrigin: 'center',
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '1.5s'
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
            <div className="mb-6 text-amber-500 bg-amber-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <SlidersHorizontal className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Aucun produit trouvé</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">Essayez de modifier vos filtres ou votre recherche pour trouver ce que vous cherchez</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('tous');
                setSortBy('default');
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
      
      {/* Section de tendances */}
      <div className="bg-gradient-to-b from-gray-100 to-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Tendances 2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Découvrez nos collections exclusives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explorez nos produits les plus populaires et nos dernières innovations en matière de photographie</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Carte de collection 1 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Collection Premium" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Collection Premium</h3>
                <p className="text-white/80 mb-4">Nos produits haut de gamme pour les professionnels</p>
                <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-lg transition-all duration-300 border border-white/30">
                  Explorer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Carte de collection 2 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605117882932-f9e32b03b1c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Édition Limitée" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Édition Limitée</h3>
                <p className="text-white/80 mb-4">Séries spéciales et produits en quantité limitée</p>
                <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-lg transition-all duration-300 border border-white/30">
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Carte de collection 3 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Nouveautés" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-2">Nouveautés 2025</h3>
                <p className="text-white/80 mb-4">Découvrez nos dernières innovations</p>
                <button className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-lg transition-all duration-300 border border-white/30">
                  Voir tout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section newsletter avec effet glassmorphisme */}
      <div className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-amber-500/10 to-pink-500/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="bg-white/60 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Restez informé des nouveautés</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Inscrivez-vous à notre newsletter pour recevoir en avant-première nos offres exclusives et nos dernières collections</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-5 py-4 rounded-xl bg-white/80 border border-white shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}