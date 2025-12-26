import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            {/* Video Background - Local Cargo Ship Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-bg"
                poster="https://images.unsplash.com/photo-1494412651409-ae44160a1d66?q=80&w=2070&auto=format&fit=crop"
            >
                <source src="https://github.com/K-bit-23/saravana_overseas/blob/main/client/src/assets/cargo-ship.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    SARAVANA OVERSEAS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Revolutionizing Global Trade Through Innovation
                </motion.p>
                <motion.a
                    href="#contact"
                    className="btn-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Join Our Journey
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
