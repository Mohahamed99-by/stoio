import { FaCamera, FaAward, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">À propos de notre studio</h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-600 mb-6">
            Fondé en 2010, notre studio photo marocain s'est imposé comme une référence dans le domaine de la photographie professionnelle. 
            Notre équipe de photographes passionnés met tout son talent et son expertise à votre service pour immortaliser vos moments précieux.
          </p>
          <p className="text-lg text-gray-600">
            Situé au cœur de Casablanca, notre studio dispose d'un espace moderne et équipé des dernières technologies pour des shootings de qualité.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaCamera size={40} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Matériel Professionnel</h3>
            <p className="text-gray-600">Nous utilisons du matériel haut de gamme pour des résultats impeccables.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaAward size={40} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">10+ Ans d'Expérience</h3>
            <p className="text-gray-600">Une expertise reconnue dans divers domaines de la photographie.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <FaUsers size={40} className="text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Équipe Passionnée</h3>
            <p className="text-gray-600">Des professionnels dévoués à capturer votre histoire avec sensibilité.</p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Notre équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <img src="/photographer1.jpg" alt="Photographe Youssef" className="w-24 h-24 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Youssef El Amrani</h3>
                <p className="text-amber-600 font-medium mb-2">Photographe principal</p>
                <p className="text-gray-600">Spécialisé en photographie de mariage et portrait avec 15 ans d'expérience.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <img src="/photographer2.jpg" alt="Photographe Amina" className="w-24 h-24 rounded-full object-cover mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Amina Benjelloun</h3>
                <p className="text-amber-600 font-medium mb-2">Photographe produit & bébé</p>
                <p className="text-gray-600">Expert en mise en scène et éclairage pour des photos commerciales percutantes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}