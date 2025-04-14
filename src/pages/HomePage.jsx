import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation, EffectCoverflow, EffectCreative } from 'swiper/modules';
import { Camera, Users, Package, Heart, Star, Mail, Phone, MapPin, Instagram, Facebook, ChevronRight, ArrowRight, Sparkles, Image, Clock, Award, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-creative';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Animations variants pour framer-motion
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const shimmerAnimation = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear"
    }
  }
};

const breatheAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HomePage() {
  // Services offerts par le studio
  const services = [
    {
      icon: <Camera className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Shooting Portrait",
      description: "Des portraits professionnels qui capturent votre personnalité avec une touche artistique unique."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Mariage & Événements",
      description: "Immortalisez vos moments précieux avec notre expertise en photographie d'événements et de mariages."
    },
    {
      icon: <Package className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Photo Produit",
      description: "Mettez en valeur vos produits avec des photos professionnelles pour votre boutique ou catalogue."
    },
    {
      icon: <Heart className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Séance Couple",
      description: "Capturez l'amour et la complicité à travers nos séances photo romantiques en studio ou en extérieur."
    }
  ];
  
  // Animation au défilement
  const [isVisible, setIsVisible] = useState({
    intro: false,
    services: false,
    gallery: false,
    testimonials: false,
    cta: false
  });
  
  // Référence pour l'animation de défilement
  const scrollRef = useRef(null);
  
  // État pour les animations d'entrée
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  
  useEffect(() => {
    // Animation d'entrée
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['intro', 'services', 'gallery', 'testimonials', 'cta'];
      
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
  
  // Fonction pour le défilement doux vers une section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Photos en vedette
  const featuredPhotos = [
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Portrait artistique professionnel", category: "Portrait" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Mariage traditionnel marocain", category: "Mariage" },
    { src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Produit de luxe photographié", category: "Produit" },
    { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Couple romantique au coucher du soleil", category: "Couple" },
  ];

  // Témoignages clients
  const testimonials = [
    {
      name: "Amina B.",
      role: "Mariée à Marrakech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80",
      quote: "Notre photographe a capturé l'essence de notre mariage avec une sensibilité extraordinaire. Les photos racontent parfaitement notre histoire."
    },
    {
      name: "Karim L.",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80",
      quote: "Les photos de mes produits sont magnifiques et ont considérablement augmenté mes ventes en ligne. Un professionnalisme exemplaire !"
    },
    {
      name: "Sara et Mehdi",
      role: "Jeunes mariés",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&h=80",
      quote: "Notre séance couple avant le mariage était magique. L'équipe a su nous mettre à l'aise pour capturer des moments authentiques."
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section avec Slider */}
      <section className="relative overflow-hidden">
        {/* Éléments décoratifs améliorés */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-pink-500 opacity-10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-[90px] animate-pulse delay-2000"></div>
        
        {/* Grille décorative */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        
        <Swiper
          modules={[Autoplay, EffectCreative, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
              opacity: 0
            },
            next: {
              translate: ["100%", 0, 0],
              opacity: 0.5
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' backdrop-blur-md bg-white/30 transition-all duration-500 scale-125"></span>';
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-screen"
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        >
          <SwiperSlide>
            <div className="relative h-full overflow-hidden">
              {/* Image avec effet parallaxe */}
              <div className="absolute inset-0 scale-110 transition-transform duration-10000">
                <img 
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                  alt="Shooting mariage professionnel" 
                  className="w-full h-full object-cover" 
                  style={{
                    transform: activeSlide === 0 ? 'scale(1.05) translate3d(0, 0, 0)' : 'scale(1) translate3d(0, 0, 0)',
                    transition: 'transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              {/* Overlay avec effet de verre amélioré */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[2px]">
                {/* Particules décoratives améliorées */}
                <div className="absolute inset-0 overflow-hidden opacity-30">
                  {[...Array(30)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute rounded-full bg-white"
                      initial={{ opacity: Math.random() * 0.5 + 0.3 }}
                      animate={{
                        opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.2 + 0.1, Math.random() * 0.5 + 0.3],
                        scale: [1, Math.random() * 0.5 + 1.5, 1]
                      }}
                      transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 6 + 2}px`,
                        height: `${Math.random() * 6 + 2}px`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Lignes graphiques modernes */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 8,
                        delay: i * 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      style={{
                        top: `${15 + i * 15}%`,
                        left: '0',
                        opacity: 0.7 - i * 0.1
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Contenu du slide avec animations améliorées */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="text-center px-4 max-w-5xl mx-auto z-10"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl"
                  >
                    <motion.div
                      initial={floatingAnimation.initial}
                      animate={floatingAnimation.animate}
                    >
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </motion.div>
                    <span className="text-sm font-medium">Studio Photo Professionnel</span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                  >
                    <motion.span 
                      className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400 drop-shadow-lg relative inline-block"
                      initial={shimmerAnimation.initial}
                      animate={shimmerAnimation.animate}
                      style={{
                        backgroundSize: "200% 100%",
                        backgroundClip: "text"
                      }}
                    >
                      Capture de moments précieux
                      <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
                    </motion.span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                  >
                    Studio photo professionnel pour vos moments importants avec une touche artistique unique et moderne
                  </motion.p>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link 
                      to="/reservation" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <motion.span 
                        className="relative z-10"
                        initial={breatheAnimation.initial}
                        animate={breatheAnimation.animate}
                      >
                        Réserver une séance
                      </motion.span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </Link>
                    <Link 
                      to="/portfolio" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/10 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative z-10">Découvrir notre portfolio</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full overflow-hidden">
              {/* Image avec effet parallaxe */}
              <div className="absolute inset-0 scale-110 transition-transform duration-10000">
                <img 
                  src="https://images.unsplash.com/photo-1554080351-a576cf803bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                  alt="Portrait professionnel en studio" 
                  className="w-full h-full object-cover" 
                  style={{
                    transform: activeSlide === 1 ? 'scale(1.05) translate3d(0, 0, 0)' : 'scale(1) translate3d(0, 0, 0)',
                    transition: 'transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              {/* Overlay avec effet de verre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[1px]">
                {/* Lignes décoratives */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: '0',
                        right: '0',
                        opacity: 0.7 - i * 0.1,
                        animation: `pulse ${2 + i * 0.5}s infinite alternate ${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Contenu du slide avec animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial="hidden"
                  animate={activeSlide === 1 ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="text-center px-4 max-w-5xl mx-auto z-10"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">Excellence Artistique</span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400 drop-shadow-lg">
                      L'art de la photographie
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                  >
                    Votre histoire racontée à travers notre objectif avec une vision créative et contemporaine
                  </motion.p>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link 
                      to="/portfolio" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative z-10">Découvrir notre portfolio</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </Link>
                    <Link 
                      to="/services" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/10 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative z-10">Explorer nos services</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full overflow-hidden">
              {/* Image avec effet parallaxe */}
              <div className="absolute inset-0 scale-110 transition-transform duration-10000">
                <img 
                  src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                  alt="Photo produit professionnelle" 
                  className="w-full h-full object-cover" 
                  style={{
                    transform: activeSlide === 2 ? 'scale(1.05) translate3d(0, 0, 0)' : 'scale(1) translate3d(0, 0, 0)',
                    transition: 'transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                />
              </div>
              
              {/* Overlay avec effet de verre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent backdrop-blur-[1px]">
                {/* Cercles décoratifs */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full border border-white/30"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        opacity: Math.random() * 0.3 + 0.1,
                        animation: `pulse ${Math.random() * 5 + 3}s infinite alternate ${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Contenu du slide avec animations */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={staggerContainer}
                  className="text-center px-4 max-w-5xl mx-auto z-10"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">Qualité Exceptionnelle</span>
                  </motion.div>
                  
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400 drop-shadow-lg">
                      Excellence visuelle
                    </span>
                  </motion.h1>
                  
                  <motion.p 
                    variants={fadeInUp}
                    className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                  >
                    Des photos qui transforment votre vision en réalité avec une précision et une clarté inégalées
                  </motion.p>
                  
                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link 
                      to="/services" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/50 overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative z-10">Explorer nos services</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                    </Link>
                    <Link 
                      to="/reservation" 
                      className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full h-full bg-white/10 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                      <span className="relative z-10">Réserver une séance</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Navigation buttons with enhanced styling */}
          <div className="swiper-button-next after:content-[''] w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 shadow-lg right-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/40 to-amber-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="swiper-button-prev after:content-[''] w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 shadow-lg left-6 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/40 to-amber-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <ArrowRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white rotate-180 group-hover:scale-110 transition-transform duration-300" />
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <div 
              onClick={() => scrollToSection('intro')} 
              className="flex flex-col items-center cursor-pointer group animate-bounce hover:animate-none"
            >
              <span className="text-white/70 text-sm mb-2 group-hover:text-white transition-colors duration-300">Découvrir</span>
              <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
                <div className="w-1 h-2 bg-white/50 rounded-full group-hover:h-3 group-hover:bg-white transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </Swiper>
      </section>

      {/* Section Introduction avec animations avancées */}
      <section id="intro" className="py-24 relative overflow-hidden">
        {/* Éléments décoratifs améliorés */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-amber-50/50 -z-10"></div>
        <div className="absolute -top-40 right-20 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-purple-200 opacity-20 rounded-full blur-[80px] animate-pulse"></div>
        
        {/* Motif géométrique subtil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGQkJGMjQiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 -z-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            ref={scrollRef}
            initial="hidden"
            animate={isVisible.intro ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium">À propos de nous</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Studio Photo Professionnel</span> au Maroc
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/80 mb-10 transform hover:scale-[1.01] transition-all duration-500 group"
            >
              {/* Éléments décoratifs à l'intérieur de la carte */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-amber-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Bienvenue chez <span className="font-semibold text-amber-600 relative inline-block">
                    MarocShoot
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-200 opacity-50 rounded-full"></span>
                  </span>, où nous capturons vos moments précieux avec créativité et professionnalisme.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Notre studio combine <span className="italic text-amber-700">techniques modernes</span> et <span className="italic text-amber-700">sensibilité artistique</span> pour créer des images qui racontent votre histoire.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Avec une équipe passionnée et des équipements de pointe, nous vous offrons une expérience photographique inoubliable.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <Link 
                to="/a-propos" 
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0"></span>
                <span className="relative z-10">En savoir plus sur nous</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Éléments décoratifs améliorés */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white/80 -z-10"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-[90px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        
        {/* Motif géométrique subtil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGQkJGMjQiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10 -z-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
              <motion.div
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
              >
                <Camera className="w-4 h-4 text-amber-500" />
              </motion.div>
              <span className="text-sm font-medium">Nos expertises</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 inline-block relative"
                initial={shimmerAnimation.initial}
                animate={shimmerAnimation.animate}
                style={{ backgroundSize: "200% 100%", backgroundClip: "text" }}
              >
                Nos Services
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-50"></span>
              </motion.span> Professionnels
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des prestations photo sur mesure pour répondre à tous vos besoins avec une touche d'innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-b from-white to-amber-50/30 backdrop-blur-sm p-8 rounded-3xl border border-white shadow-lg hover:shadow-2xl hover:border-amber-200/60 transition-all duration-500 text-center relative overflow-hidden"
              >
                {/* Cercle décoratif */}
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-amber-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-purple-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Icône avec animation */}
                <div className="flex justify-center mb-6 relative z-10">
                  <motion.div 
                    className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-white shadow-[inset_0_0_0_1px_rgba(251,191,36,0.1),0_4px_20px_rgba(251,191,36,0.1)]"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "inset 0 0 0 1px rgba(251,191,36,0.3), 0 8px 30px rgba(251,191,36,0.2)"
                    }}
                    initial={breatheAnimation.initial}
                    animate={breatheAnimation.animate}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                
                {/* Titre avec animation */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300 relative z-10">{service.title}</h3>
                
                {/* Description avec animation */}
                <p className="text-gray-600 mb-6 relative z-10 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                
                {/* Barre de progression */}
                <div className="relative h-0.5 w-16 mx-auto bg-amber-100 rounded-full overflow-hidden z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700 rounded-full"
                  />
                </div>
                
                {/* Bouton En savoir plus */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <Link 
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors duration-300"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.services ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Tous nos services
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="gallery" className="py-28 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/30 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-[100px] animate-pulse"></div>
        
        {/* Motif géométrique doré */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGQkJGMjQiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xdi0xem0tMiAyaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yIDBoMXYxaC0xdi0xem0tMiAwaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5 -z-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.gallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
              <motion.div
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
              >
                <Image className="w-4 h-4 text-amber-500" />
              </motion.div>
              <span className="text-sm font-medium">Nos créations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Notre <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800 inline-block relative"
                initial={shimmerAnimation.initial}
                animate={shimmerAnimation.animate}
                style={{ backgroundSize: "200% 100%", backgroundClip: "text" }}
              >
                Galerie
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-50"></span>
              </motion.span> d'Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos réalisations récentes et laissez-vous inspirer par notre vision artistique
            </p>
          </motion.div>
          
          {/* Galerie avec effet masonry moderne */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredPhotos.map((photo, index) => {
              // Alterner les tailles pour un effet masonry
              const isLarge = index % 3 === 0;
              const heightClass = isLarge ? "h-96" : "h-80";
              
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible.gallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -10 }}
                  className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${heightClass}`}
                >
                  {/* Effet de grain léger sur le hover */}
                  <motion.div 
                    className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNiIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-0 group-hover:opacity-40 mix-blend-overlay transition-opacity duration-300 z-20"
                  />
                  
                  {/* Overlay dégradé avancé */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Effet de zoom fluide sur l'image */}
                  <motion.div 
                    className="w-full h-full overflow-hidden"
                    whileHover={{ scale: 1.05, transition: { duration: 0.7 } }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className={`w-full h-full object-cover transition-transform duration-700`} 
                    />
                  </motion.div>
                  
                  {/* Badge de catégorie avec effet glassmorphism */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium border border-white/20 shadow-lg z-20"
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {photo.category}
                  </motion.div>
                  
                  {/* Contenu informatif avec animation d'apparition */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <h3 className="text-white text-xl font-bold mb-2">{photo.alt}</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                        <Camera className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white/90 text-sm">Studio MarocShoot</span>
                    </div>
                  </motion.div>
                  
                  {/* Bouton d'action avec animation */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg w-12 h-12 rounded-full flex items-center justify-center border border-white/30 opacity-0 group-hover:opacity-100 shadow-xl z-30"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{ scale: [0, 1], opacity: [0, 1], transition: { delay: 0.2 } }}
                  >
                    <Play className="w-5 h-5 text-white fill-current" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.gallery ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <Link 
              to="/galerie" 
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-amber-600 shadow-md transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Voir toute la galerie</span>
              <ArrowRight className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 group-hover:text-white" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="py-28 relative overflow-hidden">
        {/* Éléments décoratifs améliorés */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500 opacity-5 rounded-full blur-[80px] animate-pulse"></div>
        
        {/* Motif de points */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/10 shadow-xl">
              <motion.div
                initial={floatingAnimation.initial}
                animate={floatingAnimation.animate}
              >
                <Star className="w-4 h-4 text-amber-400 fill-current" />
              </motion.div>
              <span className="text-sm font-medium">Témoignages clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Ce que <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600 inline-block relative"
                initial={shimmerAnimation.initial}
                animate={shimmerAnimation.animate}
                style={{ backgroundSize: "200% 100%", backgroundClip: "text" }}
              >
                disent nos clients
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></span>
              </motion.span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus grande récompense
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.testimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md p-8 rounded-3xl border border-white/10 overflow-hidden"
              >
                {/* Cercle décoratif */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                <div className="absolute -left-10 bottom-0 w-20 h-20 bg-purple-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-500">
                    <path d="M9.5 8H4.5C3.67157 8 3 8.67157 3 9.5V14.5C3 15.3284 3.67157 16 4.5 16H7.5C8.32843 16 9 15.3284 9 14.5V12.5H7.5C6.67157 12.5 6 11.8284 6 11V9.5C6 8.67157 6.67157 8 7.5 8H9.5ZM19.5 8H14.5C13.6716 8 13 8.67157 13 9.5V14.5C13 15.3284 13.6716 16 14.5 16H17.5C18.3284 16 19 15.3284 19 14.5V12.5H17.5C16.6716 12.5 16 11.8284 16 11V9.5C16 8.67157 16.6716 8 17.5 8H19.5Z" fill="currentColor"/>
                  </svg>
                </div>
                
                {/* Avatar et info */}
                <div className="flex items-center mb-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-amber-500/30 p-0.5 shadow-lg"
                    whileHover={{ scale: 1.05, borderColor: "rgba(251,191,36,0.5)" }}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{testimonial.name}</h3>
                    <p className="text-amber-400/80 group-hover:text-amber-400 transition-colors duration-300">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Rating stars avec animation */}
                <div className="flex mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                      <Star key={i} className="w-5 h-5 fill-current text-amber-400 mr-1" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Citation avec effet de typographie */}
                <motion.p 
                  className="text-gray-300 italic relative z-10 mb-6 min-h-[80px] flex items-center"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="leading-relaxed">"{testimonial.quote}"</span>
                </motion.p>
                
                {/* Date de commentaire */}
                <div className="flex justify-between items-center text-xs text-gray-400/80 relative z-10">
                  <span>Vérifié {Math.floor(Math.random() * 12) + 1} mois atrás</span>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>Session {Math.floor(Math.random() * 3) + 1}h</span>
                  </div>
                </div>
                
                {/* Badge de vérification */}
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 text-white/90 border border-white/10">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>Vérifié</span>
                </div>
                
                {/* Progress bar au survol */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.testimonials ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center mt-16"
          >
            <Link 
              to="/temoignages" 
              className="group relative inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">Tous les témoignages</span>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section Call to Action */}
      <section className="py-24 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-400 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20 shadow-2xl transform hover:scale-[1.01] transition-all duration-500">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white mb-6 border border-white/20 shadow-xl">
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span className="text-sm font-medium">Réservation simple</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                Prêt à <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">immortaliser vos moments</span>?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Réservez dès maintenant votre séance photo et créez des souvenirs inoubliables avec notre équipe de professionnels.
              </p>
              <Link 
                to="/reservation" 
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-amber-600 font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/30"
              >
                Réserver ma séance photo
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}
