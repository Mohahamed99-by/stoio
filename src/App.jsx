


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ShopPage from './pages/ShopPage';
import ReservationPage from './pages/ReservationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="galerie" element={<GalleryPage />} />
          <Route path="boutique" element={<ShopPage />} />
          <Route path="reservation" element={<ReservationPage />} />
          <Route path="a-propos" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App