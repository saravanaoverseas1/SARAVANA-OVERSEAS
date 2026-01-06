import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaHandshake, FaMedal, FaUserTie, FaGlobeAmericas } from 'react-icons/fa';
import '../index.css';

const About = () => {
    const whyChooseUs = [
        {
            icon: <FaHandshake />,
            title: 'Bridging the Gap',
            description: 'Our primary objective is to eliminate the distance between global buyers and sellers, creating a unified marketplace.',
            color: '#1976D2'
        },
        {
            icon: <FaMedal />,
            title: 'Uncompromising Quality',
            description: 'We are committed to sourcing and delivering only the highest grade of merchandise to ensure total customer satisfaction.',
            color: '#FFA726'
        },
        {
            icon: <FaUserTie />,
            title: 'Expert Guidance',
            description: 'To foster long-term loyalty, we provide hands-on assistance through a team of qualified consultants who navigate the complexities of international trade on your behalf.',
            color: '#00C853'
        },
        {
            icon: <FaGlobeAmericas />,
            title: 'Global Reliability',
            description: 'Whether you are a local producer or a foreign buyer, we offer the security and professionalism required to thrive in today\'s competitive market.',
            color: '#E91E63'
        }
    ];

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
                </motion.div>

                {/* Why Choose Us Section */}
                <motion.div
                    className="why-choose-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="why-choose-title">Why Choose Saravana Overseas?</h3>

                    <div className="why-choose-grid">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                className="why-choose-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                            >
                                <div className="why-choose-icon" style={{ background: item.color }}>
                                    {item.icon}
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Footer info */}
                <motion.div
                    className="about-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="hq-address">
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
