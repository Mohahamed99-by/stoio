import React, { useState, useEffect, useRef } from 'react';
import { FaCamera, FaBaby, FaRing, FaBoxOpen, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { ArrowRight, Sparkles, Star, ChevronRight, Camera, Award, Clock } from 'lucide-react';

export default function ServicesPage() {
  // Animation au défilement
  const [isVisible, setIsVisible] = useState({
    header: false,
    services: false,
    contact: false,
    features: false
  });
  
  // Référence pour le slider de services
  const sliderRef = useRef(null);
  const [activeService, setActiveService] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'services', 'features', 'contact'];
      
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
  
  // Fonction pour naviguer dans le slider
  const scrollToService = (index) => {
    setActiveService(index);
    if (sliderRef.current) {
      const serviceWidth = sliderRef.current.children[0].offsetWidth;
      sliderRef.current.scrollTo({
        left: index * (serviceWidth + 24), // 24px is the gap between items
        behavior: 'smooth'
      });
    }
  };
  
  // Dans une implémentation réelle, remplacez les placeholders par vos propres images ou des URLs vers des images hébergées
  const services = [
    {
      id: 1,
      title: "Shooting Mariage",
      icon: <FaRing size={32} className="text-amber-500" />,
      description: "Capturer les moments magiques de votre journée spéciale avec notre équipe professionnelle.",
      price: "À partir de 3000 MAD",
      features: ["Album photo premium", "Vidéo highlights", "Drone aérien", "Équipe de 2 photographes"],
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Couple de mariés posant dans un cadre romantique"
    },
    {
      id: 2,
      title: "Portrait Personnel",
      icon: <FaCamera size={32} className="text-amber-500" />,
      description: "Des portraits professionnels qui mettent en valeur votre personnalité et votre style unique.",
      price: "À partir de 800 MAD",
      features: ["Retouche professionnelle", "Plusieurs tenues", "Maquillage inclus", "5 photos HD"],
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Portrait élégant en studio avec éclairage professionnel"
    },
    {
      id: 3,
      title: "Shooting Bébé",
      icon: <FaBaby size={32} className="text-amber-500" />,
      description: "Immortaliser les premiers moments précieux de votre enfant dans une ambiance chaleureuse.",
      price: "À partir de 1000 MAD",
      features: ["Accessoires mignons", "Environnement sécurisé", "Album souvenir", "Photos numériques HD"],
      image: "https://www.emilielarochephotographe.com/wp-content/uploads/2021/04/emilie-laroche-photographe-naissance-bebe-114-sur-201-1024x682.jpg",
      alt: "Bébé souriant dans un décor doux et chaleureux"
    },
    {
      id: 4,
      title: "Shooting Produit",
      icon: <FaBoxOpen size={32} className="text-amber-500" />,
      description: "Des photos professionnelles pour mettre en valeur vos produits et booster vos ventes.",
      price: "À partir de 1200 MAD",
      features: ["Fond personnalisable", "Éclairage professionnel", "Post-traitement avancé", "Format web & print"],
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      alt: "Présentation élégante de produits avec éclairage professionnel"
    }
  ];

  // Caractéristiques de notre service
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-amber-500" />,
      title: "Équipement Pro",
      description: "Matériel haut de gamme pour des résultats exceptionnels"
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Expertise",
      description: "Plus de 10 ans d'expérience dans la photographie professionnelle"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Livraison Rapide",
      description: "Recevez vos photos retouchées en moins de 72h"
    }
  ];

  // Témoignages clients
  const testimonials = [
    {
      name: "Sarah & Ahmed",
      role: "Mariage à Marrakech",
      content: "Une expérience incroyable ! Les photos de notre mariage sont absolument magnifiques, chaque émotion a été capturée parfaitement.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Karim Benali",
      role: "Shooting professionnel",
      content: "Très professionnel et créatif. Les portraits ont dépassé mes attentes et ont parfaitement servi pour ma communication d'entreprise.",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white/80 -z-10"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-[90px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100 opacity-10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      {/* Motif géométrique */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-amber-200/20 rounded-full"></div>
        <div className="absolute top-1/4 -left-12 w-64 h-64 border border-amber-200/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-amber-200/10 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div id="header" className={`text-center mb-20 transition-all duration-1000 transform ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">Nos expertises</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Nos Prestations</span> 
            <span className="relative">
              Professionnelles
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q40,0 80,5 T160,5 T240,5" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Découvrez nos services professionnels pour immortaliser vos moments les plus précieux avec une touche artistique unique
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30">
              Découvrir nos services
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-medium py-4 px-8 rounded-full transition-all duration-300 border border-gray-200 hover:border-amber-200 shadow-sm hover:shadow-md">
              Voir notre portfolio
            </button>
          </div>
        </div>
        
        {/* Navigation des services */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full shadow-inner">
            {services.map((service, index) => (
              <button
                key={`nav-${service.id}`}
                onClick={() => scrollToService(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-white text-amber-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Slider de services */}
        <div id="services" className={`relative transition-all duration-1000 transform ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)] snap-center px-4 flex-shrink-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group h-full bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.05)] border border-white/60 hover:shadow-xl hover:border-amber-200/60 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-14 h-14 flex items-center justify-center bg-white/30 backdrop-blur-md rounded-full border border-white/30 shadow-lg z-20">
                      {service.icon}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1 bg-amber-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                        <Star className="w-3 h-3 fill-white" />
                        Service premium
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
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
              </div>
            ))}
          </div>
          
          {/* Indicateurs de pagination */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => scrollToService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-amber-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Voir service ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Section caractéristiques */}
        <div 
          id="features" 
          className={`my-32 transition-all duration-1000 transform ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">Pourquoi nous choisir</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Une expérience <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">exceptionnelle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous combinons expertise technique et vision artistique pour des résultats qui dépassent vos attentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60 hover:border-amber-200/60 transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-amber-50 rounded-2xl mb-6 group-hover:bg-amber-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Témoignages */}
        <div className="mb-32 bg-gradient-to-br from-amber-50 to-white rounded-3xl p-10 shadow-lg border border-amber-100/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ce que nos clients disent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Découvrez les expériences de ceux qui nous ont fait confiance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="absolute -top-3 -left-3 text-amber-500 text-6xl opacity-20">"</div>
                <p className="text-gray-700 mb-6 relative z-10">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div id="contact" className={`mt-20 text-center bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/80 transition-all duration-1000 transform ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
            <FaInfoCircle className="text-amber-500" />
            <span className="text-sm font-medium">Besoin d'aide ?</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une question sur nos services ?</h2>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">Notre équipe est à votre disposition pour vous aider à choisir la prestation idéale pour vos besoins spécifiques</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-800/30">
              Contactez-nous
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-amber-600 font-medium py-4 px-8 rounded-full transition-all duration-300 border border-amber-200 shadow-sm hover:shadow-md">
              Voir nos tarifs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}