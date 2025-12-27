import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const InfoSection = () => {
    const words = [
        "International Commerce",
        "Global Trade",
        "Supply Chains",
        "Strategic Logistics",
        "Digital Markets"
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
                            <strong>SARAVANA OVERSEAS</strong> is not just another trading company – we're a tech-enabled
                            logistics startup disrupting traditional supply chains. Born from a vision to make global trade
                            accessible, transparent, and efficient for businesses of all sizes.
                        </p>
                        <p>
                            We leverage cutting-edge technology and strategic partnerships to connect manufacturers,
                            suppliers, and buyers across continents. Our agile approach eliminates bottlenecks, reduces
                            costs, and accelerates delivery timelines – transforming how the world trades.
                        </p>
                        <p>
                            From our innovation hub in Coimbatore, we're building the future of cross-border commerce,
                            one shipment at a time. Join us in our mission to democratize global trade.
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
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;

