import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHandshake, FaGlobe, FaArrowRight } from 'react-icons/fa';
import '../index.css';

const InfoSection = () => {
    const [activeCard, setActiveCard] = useState(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 80, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }),
        hover: {
            y: -15,
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        animate: {
            boxShadow: [
                "0 0 20px rgba(25, 118, 210, 0.3)",
                "0 0 40px rgba(255, 167, 38, 0.4)",
                "0 0 20px rgba(25, 118, 210, 0.3)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const cards = [
        {
            id: 'mission',
            icon: <FaRocket />,
            title: 'Our Mission',
            subtitle: 'Driving Excellence',
            description: 'As a committed partner in the import-export landscape, our mission is to provide genuine, high-value services to stakeholders who are dedicated to the worldwide distribution of essential commodities. We act as the vital link in the global supply chain, ensuring that premium goods reach their destination efficiently and ethically.',
            image: '/mission_image.png',
            gradient: 'linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)',
            accent: '#1976D2'
        },
        {
            id: 'vision',
            icon: <FaEye />,
            title: 'Our Vision',
            subtitle: 'Shaping Tomorrow',
            description: 'To become the most trusted and innovative bridge connecting global markets, empowering businesses worldwide with seamless trade solutions. We envision a future where quality products flow freely across borders, creating prosperity for all stakeholders in the international trade ecosystem.',
            image: '/vision_image.png',
            gradient: 'linear-gradient(135deg, #FF6B35 0%, #FFA726 100%)',
            accent: '#FF6B35'
        },
        {
            id: 'approach',
            icon: <FaHandshake />,
            title: 'Strategic Approach',
            subtitle: 'Fair Trade & Growth',
            description: 'We believe in the power of fair trade and mutual growth. By maintaining transparent and reasonable dealings with our diverse network—including producers, farmers, wholesalers, and importers—we are rapidly establishing a formidable presence in the international arena.',
            image: '/approach_image.png',
            gradient: 'linear-gradient(135deg, #00C853 0%, #69F0AE 100%)',
            accent: '#00C853'
        }
    ];

    return (
        <section className="section-padding info-section-funky">
            {/* Animated Background Elements */}
            <div className="funky-bg-elements">
                <motion.div
                    className="floating-orb orb-1"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="floating-orb orb-2"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1.2, 1, 1.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="floating-orb orb-3"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, 60, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div className="container">
                {/* Hero Header */}
                <motion.div
                    className="funky-header"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="section-tag funky-tag"
                        whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                    >
                        <FaGlobe className="tag-icon" /> Our Innovation
                    </motion.span>

                    <h2 className="funky-title">
                        <span className="title-line-1">Saravana Overseas</span>
                        <motion.span
                            className="title-line-2"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            Connecting Markets, Delivering Excellence
                        </motion.span>
                    </h2>

                    <motion.p
                        className="funky-intro"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <strong>SARAVANA OVERSEAS</strong> is a progressive international trade enterprise
                        dedicated to bridging the gap between global supply and demand. We provide a robust
                        and secure platform designed to facilitate the seamless exchange of high-quality
                        products across both domestic and international borders.


                        
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <div className="funky-cards-grid">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`funky-card ${activeCard === card.id ? 'active' : ''}`}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            onHoverStart={() => setActiveCard(card.id)}
                            onHoverEnd={() => setActiveCard(null)}
                            style={{ '--card-gradient': card.gradient, '--card-accent': card.accent }}
                        >
                            {/* Card Glow Effect */}
                            <motion.div
                                className="card-glow"
                                variants={glowVariants}
                                animate={activeCard === card.id ? "animate" : ""}
                            />

                            {/* Card Image */}
                            <motion.div
                                className="card-image-wrapper"
                                variants={floatingVariants}
                                animate="animate"
                            >
                                <img src={card.image} alt={card.title} className="card-image" />
                                <div className="image-overlay" style={{ background: card.gradient }} />
                            </motion.div>

                            {/* Card Content */}
                            <div className="card-content">
                                <motion.div
                                    className="card-icon"
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ background: card.gradient }}
                                >
                                    {card.icon}
                                </motion.div>

                                <span className="card-subtitle">{card.subtitle}</span>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-description">{card.description}</p>

                                <motion.div
                                    className="card-cta"
                                    whileHover={{ x: 10 }}
                                >
                                    <span>Learn More</span>
                                    <FaArrowRight className="cta-arrow" />
                                </motion.div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="card-decoration">
                                <motion.div
                                    className="deco-circle"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="deco-dots"
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
