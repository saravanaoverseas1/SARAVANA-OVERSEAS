import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBlog, FaInfoCircle, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
    const location = useLocation();
    // Show Navbar only on the Home page
    if (location.pathname !== '/') return null;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [productsDropdown, setProductsDropdown] = useState(false);

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
        "Handicrafts",
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
                {/* Desktop Navigation Links */}
                <div className="nav-glass-wrap desktop-only">
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
                                            {categories.map((cat, i) => {
                                                const slug = cat.toLowerCase().replace(/ /g, '-').replace('&', 'and');
                                                const getIcon = (name) => {
                                                    if (name.includes("Vehicles")) return <FaBoxOpen />;
                                                    if (name.includes("Tools")) return <FaBoxOpen />;
                                                    if (name.includes("Agri")) return <FaGlobe />;
                                                    return <FaBoxOpen />;
                                                };

                                                return (
                                                    <Link
                                                        key={i}
                                                        to={`/product/${slug}`}
                                                        className="dropdown-item-premium"
                                                        onClick={() => setProductsDropdown(false)}
                                                    >
                                                        <div className="item-icon-wrapper">
                                                            {getIcon(cat)}
                                                        </div>
                                                        <span className="item-text">{cat}</span>
                                                    </Link>
                                                );
                                            })}
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

                {/* Mobile Header (Top Bar) - Structured Solid Design */}
                <div className="mobile-header-bar">
                    <div className="mobile-brand-logo">
                        <FaGlobe className="mobile-brand-icon" />
                        <span>SARAVANA OVERSEAS</span>
                    </div>

                    <button
                        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Navigation - Redesigned as a Solid Menu Grid (No Glass) */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            <motion.div
                                className="mobile-menu-overlay-solid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeMobileMenu}
                            />
                            <motion.div
                                className="mobile-menu-solid"
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            >
                                <div className="mobile-menu-header">
                                    <h3>Quick Navigation</h3>
                                    <button className="close-menu-btn" onClick={closeMobileMenu}>×</button>
                                </div>

                                <div className="mobile-nav-grid">
                                    <a href="#home" className="grid-nav-item" onClick={closeMobileMenu}>
                                        <div className="nav-icon-circle"><FaHome /></div>
                                        <span>Home</span>
                                    </a>
                                    <a href="#products" className="grid-nav-item" onClick={closeMobileMenu}>
                                        <div className="nav-icon-circle"><FaBoxOpen /></div>
                                        <span>Products</span>
                                    </a>
                                    <a href="#blogs" className="grid-nav-item" onClick={closeMobileMenu}>
                                        <div className="nav-icon-circle"><FaBlog /></div>
                                        <span>Blogs</span>
                                    </a>
                                    <a href="#about" className="grid-nav-item" onClick={closeMobileMenu}>
                                        <div className="nav-icon-circle"><FaInfoCircle /></div>
                                        <span>About Us</span>
                                    </a>
                                    <a href="#contact" className="grid-nav-item contact-grid-item" onClick={closeMobileMenu}>
                                        <div className="nav-icon-circle"><FaEnvelope /></div>
                                        <span>Inquiry</span>
                                    </a>
                                </div>

                                <div className="mobile-menu-footer">
                                    <p>© 2026 Saravana Overseas</p>
                                    <div className="mobile-social-shortcuts">
                                        <FaGlobe /> Exporting Globally
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
