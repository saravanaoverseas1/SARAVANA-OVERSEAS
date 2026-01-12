import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      </div>
    </Router>
  );
}

export default App;
