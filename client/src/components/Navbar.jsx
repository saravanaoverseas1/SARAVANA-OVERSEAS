import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBoxOpen, FaBlog, FaInfoCircle, FaEnvelope, FaGlobe, FaBars, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

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

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Calculate scroll progress for structure
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Scroll Spy Logic
            const sections = ['home', 'products', 'blogs', 'about', 'contact'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport (with some offset)
                    // Or if we've scrolled past it but haven't hit the next one yet
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        current = section;
                    }
                }
            }

            if (current) {
                setActiveSection(current);
            } else if (window.scrollY < 100) {
                setActiveSection('home');
            }
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
        setMobileProductsOpen(false);
    };

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
                        <li>
                            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                                <FaHome /> Home
                            </a>
                        </li>
                        <li
                            className="dropdown-parent"
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                        >
                            <a href="#products" className={activeSection === 'products' ? 'active' : ''}>
                                <FaBoxOpen /> Products
                            </a>
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
                                            <a href="/machinery-vehicles" className={`dropdown-item-premium ${location.pathname === '/machinery-vehicles' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Machinery and Vehicles</span>
                                            </a>
                                            <a href="/machinery-tools" className={`dropdown-item-premium ${location.pathname === '/machinery-tools' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Equipment and Tools</span>
                                            </a>
                                            <a href="/agri-commodities" className={`dropdown-item-premium ${location.pathname === '/agri-commodities' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaGlobe /></div>
                                                <span className="item-text">Agri Commodities</span>
                                            </a>
                                            <a href="/general-trading" className={`dropdown-item-premium ${location.pathname === '/general-trading' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">General Trading</span>
                                            </a>
                                            <a href="/handicrafts" className={`dropdown-item-premium ${location.pathname === '/handicrafts' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Handicrafts</span>
                                            </a>
                                            <a href="/spices" className={`dropdown-item-premium ${location.pathname === '/spices' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Spices</span>
                                            </a>
                                            <a href="/handlooms-products" className={`dropdown-item-premium ${location.pathname === '/handlooms-products' ? 'active' : ''}`}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Handlooms Products</span>
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <a href="#blogs" className={activeSection === 'blogs' ? 'active' : ''}>
                                <FaBlog /> Blogs
                            </a>
                        </li>
                        <li>
                            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                                <FaInfoCircle /> About Us
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" className={`nav-contact-btn ${activeSection === 'contact' ? 'active' : ''}`}>
                                <FaEnvelope /> Contact
                            </a>
                        </li>
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
                                <li>
                                    <a
                                        href="/#home"
                                        className={activeSection === 'home' ? 'active' : ''}
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </a>
                                </li>

                                {/* Products Submenu */}
                                <li className="mobile-submenu">
                                    <button
                                        className={`mobile-submenu-title ${mobileProductsOpen || location.pathname.includes('machinery') || location.pathname.includes('agri') || location.pathname.includes('general') || location.pathname.includes('handicrafts') || location.pathname.includes('spices') || location.pathname.includes('handlooms') ? 'active' : ''}`}
                                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                    >
                                        <span>Products</span>
                                        {mobileProductsOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                    <AnimatePresence>
                                        {mobileProductsOpen && (
                                            <motion.ul
                                                className="mobile-submenu-items"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <li><a href="/machinery-vehicles" className={location.pathname === '/machinery-vehicles' ? 'active-link' : ''} onClick={closeMobileMenu}>Farm Machinery & Vehicles</a></li>
                                                <li><a href="/machinery-tools" className={location.pathname === '/machinery-tools' ? 'active-link' : ''} onClick={closeMobileMenu}>Farm Equipment & Tools</a></li>
                                                <li><a href="/agri-commodities" className={location.pathname === '/agri-commodities' ? 'active-link' : ''} onClick={closeMobileMenu}>Agri Commodities</a></li>
                                                <li><a href="/general-trading" className={location.pathname === '/general-trading' ? 'active-link' : ''} onClick={closeMobileMenu}>General Trading</a></li>
                                                <li><a href="/handicrafts" className={location.pathname === '/handicrafts' ? 'active-link' : ''} onClick={closeMobileMenu}>Handicrafts</a></li>
                                                <li><a href="/spices" className={location.pathname === '/spices' ? 'active-link' : ''} onClick={closeMobileMenu}>Spices</a></li>
                                                <li><a href="/handlooms-products" className={location.pathname === '/handlooms-products' ? 'active-link' : ''} onClick={closeMobileMenu}>Handlooms Products</a></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>

                                <li>
                                    <a
                                        href="/#blogs"
                                        className={activeSection === 'blogs' ? 'active' : ''}
                                        onClick={closeMobileMenu}
                                    >
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#about"
                                        className={activeSection === 'about' ? 'active' : ''}
                                        onClick={closeMobileMenu}
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/#contact"
                                        className={activeSection === 'contact' ? 'active' : ''}
                                        onClick={closeMobileMenu}
                                    >
                                        Contact
                                    </a>
                                </li>
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
