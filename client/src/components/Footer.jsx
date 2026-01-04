import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>SARAVANA <span style={{ color: 'var(--accent-gold)' }}>OVERSEAS</span></h3>
                        <p style={{ color: 'var(--text-muted)', maxWidth: '300px', marginBottom: '15px' }}>
                            A tech-enabled logistics startup revolutionizing global trade.
                            Making international commerce accessible for everyone.
                        </p>
                        <div className="social-icons" style={{ justifyContent: 'flex-start', marginTop: '20px' }}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaYoutube />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">What We Trade</a></li>
                            <li><a href="#media">Our Gallery</a></li>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#location">Visit Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Get In Touch</h3>
                        <ul>
                            <li><span style={{ color: 'var(--accent-gold)' }}>Email:</span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saravanaoverseas1@gmail.com" target="_blank" rel="noopener noreferrer">saravanaoverseas1@gmail.com</a></li>
                            <li><span style={{ color: 'var(--accent-gold)' }}>Email:</span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rraja_77@yahoo.co.in" target="_blank" rel="noopener noreferrer">rraja_77@yahoo.co.in</a></li>
                            <li><span style={{ color: 'var(--accent-gold)' }}>Phone:</span> +91 9047385702</li>
                            <li style={{ marginTop: '10px', lineHeight: '1.4', fontSize: '0.9rem' }}>
                                Location: Kondayanpalayam, Annur,<br />
                                Coimbatore, Tamil Nadu - 641110
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Saravana Overseas. Building the future of global trade.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
