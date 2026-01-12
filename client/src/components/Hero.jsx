import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import cargoShipVideo from '../assets/cargo-ship.mp4';
import logoImage from '../assets/logo.png';
import { FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const Hero = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '919047385702';
        const message = encodeURIComponent('Hello Saravana Overseas! I would like to inquire about your services.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };


    return (
        <section className="hero" id="home">
            {/* Video Background - Local Cargo Ship Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-bg"
                poster="https://plus.unsplash.com/premium_photo-1675804669851-e2833075b9f7?q=80&w=2070&auto=format&fit=crop"
            >
                <source src={cargoShipVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {/* Logo Box (Circle Redesign) */}
                <motion.div
                    className="logo-box-circle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <img src={logoImage} alt="Logo" className="hero-logo-img" />
                </motion.div>

                <motion.div
                    className="hero-main-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    SARAVANA OVERSEAS
                </motion.div>

                <motion.p
                    className="hero-tagline-italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <i>Revolutionizing Global Trade Through Innovation</i>
                </motion.p>

                {/* Location Badge */}
                <motion.div
                    className="location-badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <FaMapMarkerAlt />
                    <span>Tamil Nadu | Global Reach</span>
                </motion.div>

                {/* Single Explore Button */}
                <motion.div
                    className="hero-btn-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    <motion.a
                        href="#products"
                        className="btn-explore-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Explore</span>
                        <div className="btn-icon-circle">
                            <FaPaperPlane />
                        </div>
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Floating WhatsApp Button - Localized to Hero */}
            <motion.div
                className="hero-whatsapp-float"
                onClick={handleWhatsAppClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaWhatsapp />
                <span className="whatsapp-tooltip">Chat with us</span>
            </motion.div>



        </section>
    );
};

export default Hero;
