import React, { useState, useEffect } from 'react';
import { FaCamera, FaBaby, FaRing, FaBoxOpen, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesPage() {
  // Animation au défilement
  const [isVisible, setIsVisible] = useState({
    header: false,
    services: false,
    contact: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'services', 'contact'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const position = element.getBoundingClientRect();
          if (position.top < window.innerHeight * 0.75) {
            setIsVisible(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Dans une implémentation réelle, remplacez les placeholders par vos propres images ou des URLs vers des images hébergées
  const services = [
    {
      id: 1,
      title: "Shooting Mariage",
      icon: <FaRing size={32} className="text-amber-500" />,
      description: "Capturer les moments magiques de votre journée spéciale avec notre équipe professionnelle.",
      price: "À partir de 3000 MAD",
      // Recommendation: photo de couple élégante, mariés se tenant la main dans un jardin ou contre un coucher de soleil
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Couple de mariés posant dans un cadre romantique"
    },
    {
      id: 2,
      title: "Portrait Personnel",
      icon: <FaCamera size={32} className="text-amber-500" />,
      description: "Des portraits professionnels qui mettent en valeur votre personnalité et votre style unique.",
      price: "À partir de 800 MAD",
      // Recommendation: portrait professionnel avec éclairage artistique, fond neutre, sujet regardant légèrement hors cadre
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Portrait élégant en studio avec éclairage professionnel"
    },
    {
      id: 3,
      title: "Shooting Bébé",
      icon: <FaBaby size={32} className="text-amber-500" />,
      description: "Immortaliser les premiers moments précieux de votre enfant dans une ambiance chaleureuse.",
      price: "À partir de 1000 MAD",
      // Recommendation: bébé endormi sur couverture douce, ou bébé souriant avec accessoires mignons comme peluche
      image: "https://www.emilielarochephotographe.com/wp-content/uploads/2021/04/emilie-laroche-photographe-naissance-bebe-114-sur-201-1024x682.jpg",
      alt: "Bébé souriant dans un décor doux et chaleureux"
    },
    {
      id: 4,
      title: "Shooting Produit",
      icon: <FaBoxOpen size={32} className="text-amber-500" />,
      description: "Des photos professionnelles pour mettre en valeur vos produits et booster vos ventes.",
      price: "À partir de 1200 MAD",
      // Recommendation: arrangement élégant de produits cosmétiques ou bijoux sur fond minimaliste avec ombres douces
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Présentation élégante de produits avec éclairage professionnel"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white/80 -z-10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-[90px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div id="header" className={`text-center mb-20 transition-all duration-1000 transform ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">Nos expertises</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Nos Prestations</span> Professionnelles
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services professionnels pour immortaliser vos moments les plus précieux
          </p>
        </div>
        
        <div id="services" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-white/60 hover:shadow-xl hover:border-amber-200/60 transition-all duration-500 transform ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg z-20">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-amber-600 font-medium bg-amber-50 px-4 py-2 rounded-full">{service.price}</p>
                  <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
                    <FaCalendarAlt className="text-sm" />
                    Réserver
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div id="contact" className={`mt-20 text-center bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/80 transition-all duration-1000 transform ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
            <FaInfoCircle className="text-amber-500" />
            <span className="text-sm font-medium">Besoin d'aide ?</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une question sur nos services ?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">Notre équipe est à votre disposition pour vous aider à choisir la prestation idéale pour vos besoins spécifiques</p>
          <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-800/30">
            Contactez-nous
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}