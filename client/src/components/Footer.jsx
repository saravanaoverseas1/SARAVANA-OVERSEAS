import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';
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
                            <li><a href="/"><FaChevronRight className="link-icon" /> Home</a></li>
                            <li><Link to="/#products"><FaChevronRight className="link-icon" /> Products</Link></li>
                            <li><Link to="/#about"><FaChevronRight className="link-icon" /> About</Link></li>
                            <li><Link to="/#blogs"><FaChevronRight className="link-icon" /> Insights</Link></li>
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
                                <span><FaEnvelope className="contact-icon" /> Email</span>
                                <a href="mailto:saravanaoverseas1@gmail.com">saravanaoverseas1@gmail.com</a>
                            </div>
                            <div className="contact-block">
                                <span><FaPhoneAlt className="contact-icon" /> Reach Us</span>
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
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Kondayanpalayam,+Annur,+Coimbatore,+Tamil+Nadu+-+641110"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-address-modern address-link"
                        >
                            <FaMapMarkerAlt className="location-icon" />
                            <div>
                                Kondayanpalayam, Annur,<br />
                                Coimbatore, Tamil Nadu,<br />
                                India - 641110
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
