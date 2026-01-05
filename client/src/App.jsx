import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

// Eager load Home Page components to avoid waterfalls/flicker
import HomePage from './components/HomePage';

// Keep ProductDetails lazy as it is a separate route
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const Footer = lazy(() => import('./components/Footer')); // Can stay lazy or be eager
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat'));

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
            <Route path="/product/:productId" element={<ProductDetails />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

