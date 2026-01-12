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

    // Hide Navbar on specific pages if needed, but here we enable it everywhere to allow "Contact" routing
    // const productRoutes = [ ... ];
    // if (productRoutes.includes(location.pathname)) return null;

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);

                    // Calculate scroll progress for structure
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
                    setScrollProgress(progress);

                    // Scroll Spy Logic
                    const sections = ['home', 'products', 'blogs', 'about', 'contact', 'start-conversation'];
                    let current = '';

                    for (const section of sections) {
                        const element = document.getElementById(section);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            // If the top of the section is near the top of the viewport (with some offset)
                            if (rect.top <= 150 && rect.bottom >= 150) {
                                current = section;
                            }
                        }
                    }

                    if (current) {
                        setActiveSection(current === 'start-conversation' ? 'contact' : current);
                    } else if (window.scrollY < 100) {
                        setActiveSection('home');
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

    const handleNavClick = (e, targetId) => {
        // If we are on the home page, scroll smoothly
        if (location.pathname === '/') {
            const element = document.getElementById(targetId);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
                // Update URL without reload to keep the hash
                window.history.pushState(null, '', `/#${targetId}`);
                closeMobileMenu();
            }
        }
        // If we are on another page, let standard Link behavior handle it (it will go to /#id)
        // ScrollToTop component will handle scrolling to hash on load.
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
                            <Link
                                to="/#home"
                                className={activeSection === 'home' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'home')}
                            >
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li
                            className="dropdown-parent"
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                        >
                            <Link
                                to="/#products"
                                className={activeSection === 'products' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'products')}
                            >
                                <FaBoxOpen /> Products
                            </Link>
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
                                            <Link to="/machinery-vehicles" className={`dropdown-item-premium ${location.pathname === '/machinery-vehicles' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Machinery and Vehicles</span>
                                            </Link>
                                            <Link to="/machinery-tools" className={`dropdown-item-premium ${location.pathname === '/machinery-tools' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Farm Equipment and Tools</span>
                                            </Link>
                                            <Link to="/agri-commodities" className={`dropdown-item-premium ${location.pathname === '/agri-commodities' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaGlobe /></div>
                                                <span className="item-text">Agri Commodities</span>
                                            </Link>
                                            <Link to="/general-trading" className={`dropdown-item-premium ${location.pathname === '/general-trading' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">General Trading</span>
                                            </Link>
                                            <Link to="/handicrafts" className={`dropdown-item-premium ${location.pathname === '/handicrafts' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Handicrafts</span>
                                            </Link>
                                            <Link to="/spices" className={`dropdown-item-premium ${location.pathname === '/spices' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Spices</span>
                                            </Link>
                                            <Link to="/handlooms-products" className={`dropdown-item-premium ${location.pathname === '/handlooms-products' ? 'active' : ''}`} onClick={closeMobileMenu}>
                                                <div className="item-icon-wrapper"><FaBoxOpen /></div>
                                                <span className="item-text">Handlooms Products</span>
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li>
                            <Link
                                to="/#blogs"
                                className={activeSection === 'blogs' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'blogs')}
                            >
                                <FaBlog /> Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#about"
                                className={activeSection === 'about' ? 'active' : ''}
                                onClick={(e) => handleNavClick(e, 'about')}
                            >
                                <FaInfoCircle /> About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#start-conversation"
                                className={`nav-contact-btn ${activeSection === 'contact' ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, 'start-conversation')}
                            >
                                <FaEnvelope /> Contact
                            </Link>
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
                                    <Link
                                        to="/#home"
                                        className={activeSection === 'home' ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, 'home')}
                                    >
                                        Home
                                    </Link>
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
                                                <li><Link to="/machinery-vehicles" className={location.pathname === '/machinery-vehicles' ? 'active-link' : ''} onClick={closeMobileMenu}>Farm Machinery & Vehicles</Link></li>
                                                <li><Link to="/machinery-tools" className={location.pathname === '/machinery-tools' ? 'active-link' : ''} onClick={closeMobileMenu}>Farm Equipment & Tools</Link></li>
                                                <li><Link to="/agri-commodities" className={location.pathname === '/agri-commodities' ? 'active-link' : ''} onClick={closeMobileMenu}>Agri Commodities</Link></li>
                                                <li><Link to="/general-trading" className={location.pathname === '/general-trading' ? 'active-link' : ''} onClick={closeMobileMenu}>General Trading</Link></li>
                                                <li><Link to="/handicrafts" className={location.pathname === '/handicrafts' ? 'active-link' : ''} onClick={closeMobileMenu}>Handicrafts</Link></li>
                                                <li><Link to="/spices" className={location.pathname === '/spices' ? 'active-link' : ''} onClick={closeMobileMenu}>Spices</Link></li>
                                                <li><Link to="/handlooms-products" className={location.pathname === '/handlooms-products' ? 'active-link' : ''} onClick={closeMobileMenu}>Handlooms Products</Link></li>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>

                                <li>
                                    <Link
                                        to="/#blogs"
                                        className={activeSection === 'blogs' ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, 'blogs')}
                                    >
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/#about"
                                        className={activeSection === 'about' ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, 'about')}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/#start-conversation"
                                        className={activeSection === 'contact' ? 'active' : ''}
                                        onClick={(e) => handleNavClick(e, 'start-conversation')}
                                    >
                                        Contact
                                    </Link>
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
