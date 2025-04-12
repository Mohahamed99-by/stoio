import { useState } from 'react';
import { Calendar, User, Mail, Phone, Camera, Clock, MessageSquare, CheckCircle, ChevronRight } from 'lucide-react';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    shootingType: 'portrait',
    date: '',
    message: ''
  });

  const shootingTypes = [
    { value: 'portrait', label: 'Portrait' },
    { value: 'mariage', label: 'Mariage' },
    { value: 'bebe', label: 'Bébé' },
    { value: 'produit', label: 'Produit' },
    { value: 'autre', label: 'Autre' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyer les données du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre demande de réservation a été envoyée avec succès!');
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* En-tête de la page */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">Réserver une séance</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Planifiez votre séance photo professionnelle en quelques clics et laissez-nous capturer vos moments précieux.</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500 opacity-5 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500 opacity-5 rounded-full"></div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Calendar className="w-6 h-6 text-amber-600 mr-2" />
            Formulaire de réservation
          </h2>
          
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative group">
                <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">Prénom</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                    placeholder="Votre prénom"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Nom</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                    placeholder="Votre nom"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative group">
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Téléphone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                    required
                    placeholder="+212 XXXXXXXXX"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8 relative group">
              <label htmlFor="shootingType" className="block text-gray-700 mb-2 font-medium">Type de shooting</label>
              <div className="relative">
                <Camera className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                <select
                  id="shootingType"
                  name="shootingType"
                  value={formData.shootingType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white appearance-none"
                  required
                >
                  {shootingTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
                <ChevronRight className="absolute right-3 top-3.5 text-gray-400 rotate-90" size={18} />
              </div>
            </div>
            
            <div className="mb-8 relative group">
              <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">Date souhaitée</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="mb-8 relative group">
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message (facultatif)</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-amber-500 transition-colors duration-200" size={18} />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Détails supplémentaires sur votre demande..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
      
      {/* Avantages */}
      <div className="container mx-auto px-4 max-w-5xl mt-16 mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Pourquoi nous choisir</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Camera className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Équipement professionnel</h3>
            <p className="text-gray-600">Nous utilisons uniquement du matériel haut de gamme pour garantir des photos de qualité exceptionnelle.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Flexibilité horaire</h3>
            <p className="text-gray-600">Nous nous adaptons à votre emploi du temps pour vous offrir une expérience sans stress.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-7 h-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Satisfaction garantie</h3>
            <p className="text-gray-600">Nous travaillons avec vous jusqu'à ce que vous soyez pleinement satisfait du résultat final.</p>
          </div>
        </div>
      </div>

      {/* Prestations */}
      <div className="container mx-auto px-4 max-w-6xl mt-16 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Nos prestations</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex overflow-hidden group">
            <div className="w-24 h-24 rounded-xl bg-amber-100 flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Camera className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Shooting Mariage</h3>
              <p className="text-gray-600">Capturer les moments magiques de votre journée spéciale avec notre équipe professionnelle.</p>
              <p className="mt-3 text-amber-600 font-medium">À partir de 5000 MAD</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex overflow-hidden group">
            <div className="w-24 h-24 rounded-xl bg-amber-100 flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors duration-300">
              <User className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Portrait Personnel</h3>
              <p className="text-gray-600">Des portraits professionnels qui mettent en valeur votre personnalité et votre style unique.</p>
              <p className="mt-3 text-amber-600 font-medium">À partir de 800 MAD</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex overflow-hidden group">
            <div className="w-24 h-24 rounded-xl bg-amber-100 flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Camera className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Shooting Bébé</h3>
              <p className="text-gray-600">Immortaliser les premiers moments précieux de votre enfant dans une ambiance chaleureuse.</p>
              <p className="mt-3 text-amber-600 font-medium">À partir de 1200 MAD</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex overflow-hidden group">
            <div className="w-24 h-24 rounded-xl bg-amber-100 flex-shrink-0 flex items-center justify-center mr-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Camera className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">Shooting Produit</h3>
              <p className="text-gray-600">Des photos professionnelles pour mettre en valeur vos produits et booster vos ventes.</p>
              <p className="mt-3 text-amber-600 font-medium">À partir de 1500 MAD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}