import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SocialFloatingBar from './components/SocialFloatingBar';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageContext';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Preloader />
        <ScrollToTop />
        <Header />
        <AnimatedRoutes />
        <Footer />
        <SocialFloatingBar />
      </Router>
    </LanguageProvider>
  );
}

export default App;
