import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Camera, Users, Package, Heart, Star, Mail, Phone, MapPin, Instagram, Facebook, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    testimonials: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'services', 'gallery', 'testimonials'];
      
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

  // Photos en vedette
  const featuredPhotos = [
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Portrait artistique professionnel", category: "Portrait" },
    { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Mariage traditionnel marocain", category: "Mariage" },
    { src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Produit de luxe photographié", category: "Produit" },
    { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400", alt: "Couple romantique au coucher du soleil", category: "Couple" },
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
        {/* Éléments décoratifs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500 opacity-20 rounded-full blur-[120px] animate-pulse"></div>
        
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' backdrop-blur-md bg-white/30 transition-all duration-500"></span>';
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-screen"
        >
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                alt="Shooting mariage professionnel" 
                className="w-full h-full object-cover transition-transform duration-10000 ease-in-out scale-105 animate-slow-zoom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <div className="text-center px-4 max-w-5xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">Studio Photo Professionnel</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400">Capture de moments précieux</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Studio photo professionnel pour vos moments importants avec une touche artistique unique et moderne
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/reservation" 
                      className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
                    >
                      Réserver une séance
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link 
                      to="/portfolio" 
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Découvrir notre portfolio
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1554080351-a576cf803bda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                alt="Portrait professionnel en studio" 
                className="w-full h-full object-cover transition-transform duration-10000 ease-in-out scale-105 animate-slow-zoom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <div className="text-center px-4 max-w-5xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">Excellence Artistique</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400">L'art de la photographie</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Votre histoire racontée à travers notre objectif avec une vision créative et contemporaine
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/portfolio" 
                      className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
                    >
                      Découvrir notre portfolio
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Explorer nos services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full">
              <img 
                src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
                alt="Photo produit professionnelle" 
                className="w-full h-full object-cover transition-transform duration-10000 ease-in-out scale-105 animate-slow-zoom" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px] flex items-center justify-center">
                <div className="text-center px-4 max-w-5xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/20 shadow-xl">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium">Qualité Exceptionnelle</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-amber-400">Excellence visuelle</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Des photos qui transforment votre vision en réalité avec une précision et une clarté inégalées
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/services" 
                      className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
                    >
                      Explorer nos services
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link 
                      to="/reservation" 
                      className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Réserver une séance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Navigation buttons with custom styling */}
          <div className="swiper-button-next after:content-[''] w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 shadow-lg right-6"></div>
          <div className="swiper-button-prev after:content-[''] w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 shadow-lg left-6"></div>
        </Swiper>
      </section>

      {/* Section Introduction */}
      <section id="intro" className="py-24 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white to-amber-50/50 -z-10"></div>
        <div className="absolute -top-40 right-20 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-purple-200 opacity-20 rounded-full blur-[80px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto ${isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium">À propos de nous</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Studio Photo Professionnel</span> au Maroc
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-white/80 mb-10 transform hover:scale-[1.01] transition-all duration-500">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Bienvenue chez <span className="font-semibold text-amber-600">MarocShoot</span>, où nous capturons vos moments précieux avec créativité et professionnalisme.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Notre studio combine <span className="italic">techniques modernes</span> et <span className="italic">sensibilité artistique</span> pour créer des images qui racontent votre histoire.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Avec une équipe passionnée et des équipements de pointe, nous vous offrons une expérience photographique inoubliable.
              </p>
            </div>
            
            <div className="text-center">
              <Link 
                to="/a-propos" 
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
              >
                En savoir plus sur nous
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-white/80 -z-10"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-purple-200 opacity-20 rounded-full blur-[90px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-200 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
              <Camera className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">Nos expertises</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Nos Services</span> Professionnels
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des prestations photo sur mesure pour répondre à tous vos besoins avec une touche d'innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 hover:shadow-xl hover:border-amber-200/60 transition-all duration-500 text-center transform ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-50 to-white shadow-[inset_0_0_0_1px_rgba(251,191,36,0.1),0_4px_20px_rgba(251,191,36,0.1)] group-hover:shadow-[inset_0_0_0_1px_rgba(251,191,36,0.2),0_4px_20px_rgba(251,191,36,0.2)] transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="h-0.5 w-0 group-hover:w-1/2 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500`}>
            <Link 
              to="/services" 
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Tous nos services
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section id="gallery" className="py-28 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/30 -z-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-100 rounded-full opacity-30 blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-[100px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full text-amber-800 mb-6 border border-amber-100 shadow-sm">
              <Camera className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium">Nos créations</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Notre <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">Galerie</span> d'Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos réalisations récentes et laissez-vous inspirer par notre vision artistique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPhotos.map((photo, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] transition-all duration-700 transform ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-2`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-20">
                  <span className="inline-block bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium mb-2 border border-white/20">{photo.category}</span>
                  <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{photo.alt}</h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 border border-white/20 z-20">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 transform ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to="/galerie" 
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Voir toute la galerie
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="testimonials" className="py-28 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black -z-10"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500 opacity-10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 right-20 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-[100px] animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6 border border-white/10 shadow-xl">
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              <span className="text-sm font-medium">Témoignages clients</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Ce que <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">disent nos clients</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus grande récompense
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`group bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 relative overflow-hidden transition-all duration-500 transform ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-amber-500 opacity-5 rounded-full blur-[30px] group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-amber-500/30 p-0.5 shadow-lg">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">{testimonial.name}</h3>
                    <p className="text-amber-400/80 group-hover:text-amber-400 transition-colors duration-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-amber-400 mr-1" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic relative z-10 mb-4">"{testimonial.quote}"</p>
                
                <div className="h-0.5 w-0 group-hover:w-1/3 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>
          
          <div className={`text-center mt-16 transition-all duration-1000 delay-500 transform ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              to="/temoignages" 
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30"
            >
              Tous les témoignages
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
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
