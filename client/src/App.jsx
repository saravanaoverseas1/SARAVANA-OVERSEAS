import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Lazy load pages for code splitting
const HomePage = React.lazy(() => import('./components/HomePage'));
const Footer = React.lazy(() => import('./components/Footer'));
const WhatsAppFloat = React.lazy(() => import('./components/WhatsAppFloat'));

// Product Pages
const MachineryVehicles = React.lazy(() => import('./pages/MachineryVehicles'));
const MachineryTools = React.lazy(() => import('./pages/MachineryTools'));
const AgriCommodities = React.lazy(() => import('./pages/AgriCommodities'));
const GeneralTrading = React.lazy(() => import('./pages/GeneralTrading'));
const Handicrafts = React.lazy(() => import('./pages/Handicrafts'));
const Spices = React.lazy(() => import('./pages/Spices'));
const HandloomsProducts = React.lazy(() => import('./pages/HandloomsProducts'));

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
          <WhatsAppFloat />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
