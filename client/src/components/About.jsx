import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../index.css';

const About = () => {
    return (
        <section className="section-padding about-section" id="about">
            <div className="container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-tag">Our Philosophy</span>
                    <h2 className="heading-serif">Our Startup Story</h2>
                    <p>
                        <strong>SARAVANA OVERSEAS</strong> was founded with a bold vision: to make international trade
                        as simple as ordering online. We saw businesses struggling with complex logistics, opaque pricing,
                        and unreliable partners. So we built a solution.
                    </p>

                    <p>
                        We're a lean, agile team of logistics experts, tech innovators, and trade enthusiasts working
                        from our headquarters in Coimbatore, Tamil Nadu. Every day, we're pushing boundaries and
                        reimagining what's possible in global commerce.
                    </p>
                    <p style={{ fontSize: '0.9rem', marginTop: '20px' }}>
                        <strong>HQ:</strong> D. No. 3/98, Sri Sendhur Garden Phase-2, Varathaiyangarpalayam,
                        Kondayanpalayam, Annur, Coimbatore - 641110, Tamil Nadu, India
                    </p>

                    <div className="social-icons">
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
                </motion.div>
            </div>
        </section>
    );
};

export default About;
