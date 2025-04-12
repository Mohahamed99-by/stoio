import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Envoyez-nous un message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Envoyer
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos coordonnées</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">Adresse</h3>
                    <p className="text-gray-600">123 Avenue Mohammed V, Casablanca, Maroc</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">+212 6 12 34 56 78</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@studiophoto.ma</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaClock className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-800">Horaires</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 9h - 18h</p>
                    <p className="text-gray-600">Samedi: 10h - 16h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.349646143961!2d-7.612906424174715!3d33.5962423733386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sfr!2sma!4v1712345678901!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}