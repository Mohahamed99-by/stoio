
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone, Twitter, Youtube, Camera, Calendar, ChevronRight } from 'lucide-react';
export default function Footer() {
  return (
 <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10 relative overflow-hidden">
   {/* Éléments décoratifs */}
   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400"></div>
   <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-600 opacity-10 rounded-full blur-3xl"></div>
   <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-400 opacity-10 rounded-full blur-3xl"></div>
   
   <div className="container mx-auto px-6 relative z-10">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
       {/* À propos */}
       <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
         <div className="flex items-center mb-6">
           <Camera className="w-6 h-6 text-amber-500 mr-2" />
           <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">MarocShoot</h3>
         </div>
         <p className="text-gray-300 mb-8 leading-relaxed">
           Studio photo professionnel spécialisé dans les mariages, portraits, événements et photos de produits au Maroc.
         </p>
         <div className="flex space-x-3">
           <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
             <Instagram className="w-5 h-5" />
           </a>
           <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
             <Facebook className="w-5 h-5" />
           </a>
           <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
             <Twitter className="w-5 h-5" />
           </a>
           <a href="#" className="p-2.5 bg-gray-800 hover:bg-amber-600 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110">
             <Youtube className="w-5 h-5" />
           </a>
         </div>
       </div>
       
       {/* Navigation rapide */}
       <div>
         <h3 className="text-xl font-bold mb-6 flex items-center">
           <ChevronRight className="w-5 h-5 text-amber-500 mr-1" />
           Navigation
         </h3>
         <ul className="space-y-3">
           {[
             { path: "/", label: "Accueil" },
             { path: "/services", label: "Services" },
             { path: "/galerie", label: "Galerie" },
             { path: "/boutique", label: "Boutique" },
             { path: "/a-propos", label: "À propos" },
             { path: "/contact", label: "Contact" }
           ].map((item, index) => (
             <li key={index}>
               <Link 
                 to={item.path} 
                 className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"
               >
                 <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                 {item.label}
               </Link>
             </li>
           ))}
         </ul>
       </div>
       
       {/* Services */}
       <div>
         <h3 className="text-xl font-bold mb-6 flex items-center">
           <Camera className="w-5 h-5 text-amber-500 mr-1" />
           Nos Services
         </h3>
         <ul className="space-y-3">
           {[
             { path: "/services/portrait", label: "Shooting Portrait" },
             { path: "/services/mariage", label: "Mariage & Événements" },
             { path: "/services/produit", label: "Photo Produit" },
             { path: "/services/couple", label: "Séance Couple" },
             { path: "/services/famille", label: "Photo Famille" }
           ].map((item, index) => (
             <li key={index}>
               <Link 
                 to={item.path} 
                 className="text-gray-300 hover:text-amber-400 transition-colors flex items-center group"
               >
                 <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                 {item.label}
               </Link>
             </li>
           ))}
         </ul>
       </div>
       
       {/* Contact */}
       <div>
         <h3 className="text-xl font-bold mb-6 flex items-center">
           <Mail className="w-5 h-5 text-amber-500 mr-1" />
           Contact
         </h3>
         <ul className="space-y-5">
           <li className="flex items-start group">
             <div className="p-2 bg-gray-800 rounded-lg text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <MapPin className="w-5 h-5" />
             </div>
             <span className="text-gray-300">123 Avenue Mohammed V, Casablanca, Maroc</span>
           </li>
           <li className="flex items-start group">
             <div className="p-2 bg-gray-800 rounded-lg text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <Phone className="w-5 h-5" />
             </div>
             <span className="text-gray-300">+212 5XX-XXXXXX</span>
           </li>
           <li className="flex items-start group">
             <div className="p-2 bg-gray-800 rounded-lg text-amber-500 mr-3 flex-shrink-0 mt-1 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
               <Mail className="w-5 h-5" />
             </div>
             <span className="text-gray-300">contact@marocshoot.ma</span>
           </li>
         </ul>
       </div>
     </div>
     
     {/* Newsletter */}
     <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl mb-16 border border-gray-700/50 shadow-xl">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
         <div className="md:col-span-1">
           <h3 className="text-xl font-bold mb-2">Restez informé</h3>
           <p className="text-gray-300">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et offres spéciales.</p>
         </div>
         <div className="md:col-span-2">
           <form className="flex flex-col sm:flex-row gap-3">
             <input 
               type="email" 
               placeholder="Votre adresse email" 
               className="flex-grow px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
               required
             />
             <button 
               type="submit" 
               className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold rounded-xl transition duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
             >
               <Mail className="w-5 h-5" />
               S'abonner
             </button>
           </form>
         </div>
       </div>
     </div>
     
     <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
       <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} MarocShoot. Tous droits réservés.</p>
       <div className="flex space-x-6">
         <Link to="/mentions-legales" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Mentions légales</Link>
         <Link to="/politique-confidentialite" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Politique de confidentialité</Link>
         <Link to="/cgv" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">CGV</Link>
       </div>
     </div>
   </div>
</footer>
  );
}