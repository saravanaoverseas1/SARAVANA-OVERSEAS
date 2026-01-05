import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-grid-modern">
                    {/* Brand Column */}
                    <motion.div
                        className="footer-col brand-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="footer-title">SARAVANA <span>OVERSEAS</span></h2>
                        <p className="footer-mission">
                            Elevating global trade through precision logistics and innovative supply chain solutions.
                        </p>
                        <div className="footer-social-grid">
                            <a href="#" className="social-pill"><FaInstagram /></a>
                            <a href="#" className="social-pill"><FaYoutube /></a>
                            <a href="#" className="social-pill"><FaLinkedin /></a>
                            <a href="#" className="social-pill"><FaTwitter /></a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3>Navigation</h3>
                        <ul className="vertical-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#blogs">Insights</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact & Support */}
                    <motion.div
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3>Get In Touch</h3>
                        <div className="vertical-contact">
                            <div className="contact-block">
                                <span>Email</span>
                                <a href="mailto:saravanaoverseas1@gmail.com">saravanaoverseas1@gmail.com</a>
                            </div>
                            <div className="contact-block">
                                <span>Reach Us</span>
                                <a href="tel:+919047385702">+91 90473 85702</a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Reveal */}
                    <motion.div
                        className="footer-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3>HQ Location</h3>
                        <p className="footer-address-modern">
                            Kondayanpalayam, Annur,<br />
                            Coimbatore, Tamil Nadu,<br />
                            India - 641110
                        </p>
                    </motion.div>
                </div>

                <div className="footer-vertical-bottom">
                    <p>&copy; {new Date().getFullYear()} SARAVANA OVERSEAS. PRECISION IN EVERY MOVE.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
