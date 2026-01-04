import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalVideoBackground from './components/GlobalVideoBackground';
import Navbar from './components/Navbar';
import './index.css';

// Lazy load components for performance
const Hero = lazy(() => import('./components/Hero'));
const InfoSection = lazy(() => import('./components/InfoSection'));
const Products = lazy(() => import('./components/Products'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blogs = lazy(() => import('./components/Blogs'));
const Careers = lazy(() => import('./components/Careers'));
const About = lazy(() => import('./components/About'));
const MarqueeTicker = lazy(() => import('./components/MarqueeTicker'));
const Testimonial = lazy(() => import('./components/Testimonial'));
const LocationMap = lazy(() => import('./components/LocationMap'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));
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
      <div className="App">
        <GlobalVideoBackground />
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Hero />
          <Products />
          <Gallery />
          <Blogs />
          <Careers />
          <About />
          <InfoSection />
          <LocationMap />
          <Testimonial />
          <ContactForm />
          <Footer />
          <WhatsAppFloat />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;

