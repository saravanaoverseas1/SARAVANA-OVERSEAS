import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import '../index.css';

const WhatsAppFloat = () => {
    const location = useLocation();
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only show on home page
    if (location.pathname !== '/') {
        return null;
    }

    const handleWhatsAppClick = () => {
        // SARAVANA OVERSEAS WhatsApp number from the image
        const phoneNumber = '919047385702'; // +91 9047385702
        const message = encodeURIComponent('Hello Saravana Overseas! I would like to inquire about your services.');
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div
            className="whatsapp-float"
            onClick={handleWhatsAppClick}
            style={{
                opacity: isHidden ? 0 : 1,
                pointerEvents: isHidden ? 'none' : 'auto',
                transform: isHidden ? 'translateY(20px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
            }}
        >
            <FaWhatsapp />
        </div>
    );
};

export default WhatsAppFloat;
