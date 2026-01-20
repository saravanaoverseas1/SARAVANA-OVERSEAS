import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy load pages for code splitting
import HomePage from './components/HomePage';
import Footer from './components/Footer';

// Product Pages
import MachineryVehicles from './pages/MachineryVehicles';
import MachineryTools from './pages/MachineryTools';
import AgriCommodities from './pages/AgriCommodities';
import GeneralTrading from './pages/GeneralTrading';
import Handicrafts from './pages/Handicrafts';
import Spices from './pages/Spices';
import HandloomsProducts from './pages/HandloomsProducts';

// Modern, minimalist loading state
const LoadingScreen = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--primary-color)'
  }}>
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <GlobalVideoBackground />
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/machinery-vehicles" element={<MachineryVehicles />} />
            <Route path="/machinery-tools" element={<MachineryTools />} />
            <Route path="/agri-commodities" element={<AgriCommodities />} />
            <Route path="/general-trading" element={<GeneralTrading />} />
            <Route path="/handicrafts" element={<Handicrafts />} />
            <Route path="/spices" element={<Spices />} />
            <Route path="/handlooms-products" element={<HandloomsProducts />} />
          </Routes>
          <Footer />
        </Suspense>

        {/* Global Floating Draggable WhatsApp Button - Fixed to Right Side */}
        <motion.a
          href="https://wa.me/919047385702?text=Hello%20Saravana%20Overseas!%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="global-whatsapp-btn"
          drag="y"
          dragConstraints={{ top: -300, bottom: 300 }}
          dragMomentum={false}
          dragElastic={0.1}
          whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'grab' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>
    </Router>
  );
}

export default App;
