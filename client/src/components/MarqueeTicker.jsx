import React from 'react';
import { motion } from 'framer-motion';
import './MarqueeTicker.css';

const MarqueeTicker = () => {
    const words = [
        "24/7 SUPPORT",
        "SARAVANA OVERSEAS",
        "100% TRANSPARENCY",
        "INNOVATION HUB",
        "GLOBAL REACH"
    ];

    // Double the array to ensure smooth seamless loop
    const displayWords = [...words, ...words];

    return (
        <div className="marquee-wrapper">
            <motion.div
                className="marquee-content"
                animate={{ x: "-50%" }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {displayWords.map((word, index) => (
                    <span key={index} className="marquee-item">
                        {word} <span className="marquee-separator">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default MarqueeTicker;
