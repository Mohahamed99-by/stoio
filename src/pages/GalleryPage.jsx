import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCamera, FaChevronRight } from 'react-icons/fa';
import { Sparkles, Filter, Grid3X3, Grid2X2, Maximize } from 'lucide-react';
import FsLightbox from 'fslightbox-react';

export default function GalleryPage() {
  const categories = [
    { 
      id: 1, 
      name: 'Mariage', 
      description: 'Capturez les moments magiques de votre journée spéciale',
      color: 'from-rose-400 to-pink-600',
      images: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
        'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ] 
    },
    { 
      id: 2, 
      name: 'Portrait', 
      description: 'Des portraits qui révèlent votre personnalité unique',
      color: 'from-amber-400 to-orange-600',
      images: [
        'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ] 
    },
    { 
      id: 3, 
      name: 'Produit', 
      description: 'Mettez en valeur vos produits avec un éclairage professionnel',
      color: 'from-blue-400 to-indigo-600',
      images: [
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ] 
    },
    { 
      id: 4, 
      name: 'Bébé', 
      description: 'Immortalisez les premiers moments précieux de votre enfant',
      color: 'from-emerald-400 to-teal-600',
      images: [
        'https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 
        'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
      ] 
    }
  ];

  // États pour la galerie
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1 });
  const [gridLayout, setGridLayout] = useState('grid-3'); // grid-3 ou grid-2
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const galleryRef = useRef(null);

  // Animation au chargement
  useEffect(() => {
    setIsLoaded(true);
    setActiveCategory(categories[0].id); // Ouvrir la première catégorie par défaut
  }, []);

  const handleCategoryChange = (id) => {
    setActiveCategory(id);
    // Scroll doux vers la galerie
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openLightboxOnSlide = (categoryId, imageIndex) => {
    // Calculer l'index global de l'image
    let globalIndex = 0;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === categoryId) {
        globalIndex += imageIndex;
        break;
      }
      globalIndex += categories[i].images.length;
    }
    
    setLightboxController({ toggler: !lightboxController.toggler, slide: globalIndex + 1 });
  };

  // Obtenir la catégorie active
  const getActiveCategory = () => categories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Hero Section avec effet de glassmorphisme */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-24 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-lg">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />
              Collection 2025
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            <span className="block">Notre Galerie</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500">Immersive</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
          >
            Explorez notre collection de photographies à travers une expérience visuelle unique et interactive
          </motion.p>
          
          {/* Navigation des catégories */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  px-6 py-3 rounded-full font-medium transition-all duration-300 transform
                  ${activeCategory === category.id 
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/10'}
                `}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
        
        {/* Vague décorative en bas du hero */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-100/10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full">
            <path fill="rgb(243 244 246)" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Section Galerie */}
      <div ref={galleryRef} className="container mx-auto px-4 py-16">
        {/* Barre d'outils de la galerie */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="bg-white p-2 rounded-full shadow-md">
              <FaCamera className="text-gray-800 w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {getActiveCategory()?.name}
              <span className="ml-2 text-sm font-normal text-gray-500">{getActiveCategory()?.description}</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-lg shadow-sm border border-gray-200 flex items-center">
              <button 
                onClick={() => setGridLayout('grid-3')} 
                className={`p-1.5 rounded ${gridLayout === 'grid-3' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
                title="Grille 3x3"
              >
                <Grid3X3 size={18} />
              </button>
              <button 
                onClick={() => setGridLayout('grid-2')} 
                className={`p-1.5 rounded ${gridLayout === 'grid-2' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
                title="Grille 2x2"
              >
                <Grid2X2 size={18} />
              </button>
            </div>
            
            <button className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-200 text-gray-500 hover:text-gray-700 transition-colors">
              <Filter size={18} />
            </button>
          </motion.div>
        </div>
        
        {/* Galerie d'images avec animation */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`grid ${gridLayout === 'grid-3' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-6`}
          >
            {getActiveCategory()?.images.map((image, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl shadow-lg bg-white/50 backdrop-blur-sm border border-white/80"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${getActiveCategory()?.name} ${index + 1}`} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay avec effet de glassmorphisme */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5`}
                >
                  <h3 className="text-white font-bold text-lg">{getActiveCategory()?.name} {index + 1}</h3>
                  <p className="text-gray-200 text-sm mb-3">Studio Photo Professionnel</p>
                  
                  <button 
                    onClick={() => openLightboxOnSlide(activeCategory, index)}
                    className="bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full py-2 px-4 flex items-center gap-2 w-fit hover:bg-white/30 transition-colors duration-300"
                  >
                    <Maximize size={16} />
                    Agrandir
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Lightbox pour afficher les images en plein écran */}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={categories.flatMap(category => category.images)}
        slide={lightboxController.slide}
      />
      
      {/* Section CTA avec effet de glassmorphisme */}
      <div className="relative overflow-hidden py-20 mt-16 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vous aimez notre travail ?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Réservez dès maintenant une séance photo professionnelle et créez vos propres souvenirs inoubliables
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-amber-500/30 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Réserver une séance
              <FaChevronRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}