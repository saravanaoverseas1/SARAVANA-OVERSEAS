import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Testimonial = () => {
    const quotes = [
        "We're not just moving cargo – we're moving ideas, opportunities, and dreams across borders.",
        "Empowering every entrepreneur with the tools to compete globally and efficiently.",
        "Building the future of cross-border commerce through innovation and strategic logistics.",
        "Connecting manufacturers and buyers across continents with absolute transparency and care."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds
        return () => clearInterval(timer);
    }, [quotes.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.02, staggerDirection: -1 }
        }
    };

    const wordVariants = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.9,
            filter: "blur(4px)",
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            filter: "blur(4px)",
            transition: {
                duration: 0.3
            }
        },
    };

    return (
        <section className="section-padding testimonial-section" id="testimonials">
            <div className="container">
                <center><span className="section-tag">Word of Impact</span></center>

                <motion.div
                    className="testimonial-card glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}
                >
                    <motion.div
                        className="quote-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        style={{ fontSize: '5rem', lineHeight: 1, marginBottom: '20px', color: 'var(--accent-gold)' }}
                    >
                        "
                    </motion.div>

                    <div style={{ minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                className="testimonial-text"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: '600',
                                    lineHeight: '1.4',
                                    color: 'var(--accent-blue)',
                                    fontStyle: 'italic',
                                    margin: 0
                                }}
                            >
                                {quotes[index].split(' ').map((word, i) => (
                                    <motion.span
                                        variants={wordVariants}
                                        style={{ display: 'inline-block', marginRight: '0.25em' }}
                                        key={i}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="director-info"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ marginTop: '40px' }}
                    >
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '5px' }}>SARAVANA OVERSEAS</h4>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>Building the Future of Global Trade</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;



