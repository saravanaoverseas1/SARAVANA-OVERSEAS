import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import '../index.css';

const Testimonial = () => {
    const quotes = [
        "We're not just moving cargo – we're moving ideas, opportunities, and dreams across borders.",
        "Empowering every entrepreneur with the tools to compete globally and efficiently.",
        "Building the future of cross-border commerce through innovation and strategic logistics.",
        "Connecting manufacturers and buyers across continents with absolute transparency and care."
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [index, setIndex] = useState(0);

    // Map scroll progress to cycle through quotes twice (0-7 for 4 quotes)
    const totalQuotes = quotes.length;
    const cycles = 2;
    const indexValue = useTransform(scrollYProgress, [0, 1], [0, (totalQuotes * cycles) - 0.01]);

    useMotionValueEvent(indexValue, "change", (latest) => {
        setIndex(Math.floor(latest) % totalQuotes);
    });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.1 },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.01, staggerDirection: -1 }
        }
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 150,
            },
        },
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9,
            filter: "blur(8px)",
        },
        exit: {
            opacity: 0,
            y: -30,
            scale: 0.9,
            filter: "blur(8px)",
            transition: {
                duration: 0.2
            }
        },
    };

    return (
        <div className="testimonial-scroll-wrapper" ref={containerRef}>
            <div className="testimonial-sticky-container">
                <section className="testimonial-section">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <motion.div
                                className="quote-icon"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, type: "spring" }}
                            >
                                "
                            </motion.div>

                            <div style={{ minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={index}
                                        className="testimonial-text"
                                        variants={container}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        style={{ margin: 0 }}
                                    >
                                        {quotes[index].split(' ').map((word, i) => (
                                            <motion.span
                                                variants={child}
                                                className="word-animate"
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
                            >
                                <h4>SARAVANA OVERSEAS</h4>
                                <span>Building the Future of Global Trade</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Testimonial;


