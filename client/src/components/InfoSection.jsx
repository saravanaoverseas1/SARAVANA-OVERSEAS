import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const InfoSection = () => {
    const words = [
        "International Commerce",
        "Global Trade",
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <section className="section-padding info-section">
            <div className="container">
                <div className="info-grid">
                    <motion.div
                        className="info-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-tag">Our Innovation</span>
                        <h2 className="heading-serif">
                            Redefining{' '}
                            <span className="dynamic-word-container">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={words[index]}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="dynamic-word"
                                    >
                                        {words[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </h2>
                        <p>
                            <strong>SARAVANA OVERSEAS</strong> is a progressive international trade enterprise dedicated to bridging the gap between global supply and demand. We provide a robust and secure platform designed to facilitate the seamless exchange of high-quality products across both domestic and international borders.
                        </p>
                        <p>
                            As a committed partner in the import-export landscape, our mission is to provide genuine, high-value services to stakeholders who are dedicated to the worldwide distribution of essential commodities. We act as the vital link in the global supply chain, ensuring that premium goods reach their destination efficiently and ethically.
                        </p>
                        <p>
                            We believe in the power of fair trade and mutual growth. By maintaining transparent and reasonable dealings with our diverse network—including producers, farmers, wholesalers, and importers—we are rapidly establishing a formidable presence in the international arena.
                        </p>
                    </motion.div>

                    <motion.div
                        className="info-visual"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                            alt="Global Innovation"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;

