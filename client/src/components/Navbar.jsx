import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.png';
import '../index.css';

const Navbar = () => {
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
                {/* Unified Navigation Links */}
                <div className="nav-glass-wrap">
                    <ul className="nav-links desktop-nav">
                        <li><a href="#home" className="active">Home</a></li>
                        <li
                            className="dropdown-parent"
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                        >
                            <a href="#products">Products</a>
                            <AnimatePresence>
                                {productsDropdown && (
                                    <motion.div
                                        className="modern-dropdown"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="dropdown-arrow"></div>
                                        <div className="dropdown-list">
                                            {categories.map((cat, i) => {
                                                const slug = cat.toLowerCase().replace(/ /g, '-').replace('&', 'and');
                                                return (
                                                    <Link
                                                        key={i}
                                                        to={`/product/${slug}`}
                                                        className={`dropdown-link ${i === 0 ? 'highlight-item' : ''}`}
                                                        onClick={() => setProductsDropdown(false)}
                                                    >
                                                        {cat}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact" className="nav-contact-btn">Contact</a></li>
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
                                <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                                <li><a href="#products" onClick={closeMobileMenu}>Products</a></li>
                                <li><a href="#blogs" onClick={closeMobileMenu}>Blogs</a></li>
                                <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
                                <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
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
