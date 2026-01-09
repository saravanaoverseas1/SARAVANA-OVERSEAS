import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBlog, FaInfoCircle, FaEnvelope, FaGlobe, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [productsDropdown, setProductsDropdown] = useState(false);

    // Hide Navbar on all product pages
    const productRoutes = [
        '/machinery-vehicles',
        '/machinery-tools',
        '/agri-commodities',
        '/general-trading',
        '/handicrafts',
        '/spices',
        '/handlooms-products'
    ];

    if (productRoutes.includes(location.pathname)) return null;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Calculate scroll progress for structure
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setProductsDropdown(false);
    };

    const categories = [
        "Machinery and Vehicles",
        "Machinery and Tools",
        "Agri Commodities",
        "General Trading",
        "Hand crafts",
        "Spices",
        "Handlooms Products"
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-container">
                <div
                    className="scroll-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <div className="container nav-container">
                {/* Unified Navigation Links */}
                <div className="nav-glass-wrap">

                    <ul className="nav-links desktop-nav">
                        <li><a href="#home" className="active"><FaHome /> Home</a></li>
                        <li
                            className="dropdown-parent"
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                        >
                            <a href="#products"><FaBoxOpen /> Products</a>
                            <AnimatePresence>
                                {productsDropdown && (
                                    <motion.div
                                        className="modern-dropdown-premium"
                                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <div className="dropdown-grid-premium">
                                            <a href="/machinery-vehicles" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Machinery and Vehicles</span>
                                            </a>
                                            <a href="/machinery-tools" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Equipment and Tools</span>
                                            </a>
                                            <a href="/agri-commodities" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaGlobe /></div>
                                                <span className="item-text">Agri Commodities</span>
                                            </a>
                                            <a href="/general-trading" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">General Trading</span>
                                            </a>
                                            <a href="/handicrafts" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Hand crafts</span>
                                            </a>
                                            <a href="/spices" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Spices</span>
                                            </a>
                                            <a href="/handlooms-products" className="dropdown-item-premium">
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Handlooms Products</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li><a href="#blogs"><FaBlog /> Blogs</a></li>
                        <li><a href="#about"><FaInfoCircle /> About Us</a></li>
                        <li><a href="#contact" className="nav-contact-btn"><FaEnvelope /> Contact</a></li>
                    </ul>
                </div>

                {/* Hamburger Menu Button (Mobile) */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="mobile-menu open"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            <ul className="mobile-nav-links">
                                <li><a href="/#home" onClick={closeMobileMenu}>Home</a></li>

                                {/* Products Submenu */}
                                <li className="mobile-submenu">
                                    <span className="mobile-submenu-title">Products</span>
                                    <ul className="mobile-submenu-items">
                                        <li><a href="/machinery-vehicles">Farm Machinery & Vehicles</a></li>
                                        <li><a href="/machinery-tools">Farm Equipment & Tools</a></li>
                                        <li><a href="/agri-commodities">Agri Commodities</a></li>
                                        <li><a href="/general-trading">General Trading</a></li>
                                        <li><a href="/handicrafts">Handicrafts</a></li>
                                        <li><a href="/spices">Spices</a></li>
                                        <li><a href="/handlooms-products">Handlooms Products</a></li>
                                    </ul>
                                </li>

                                <li><a href="/#blogs" onClick={closeMobileMenu}>Blogs</a></li>
                                <li><a href="/#about" onClick={closeMobileMenu}>About Us</a></li>
                                <li><a href="/#contact" onClick={closeMobileMenu}>Contact</a></li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
};

export default Navbar;
