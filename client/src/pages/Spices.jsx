import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaGlobe, FaCertificate } from 'react-icons/fa';

const Spices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productData = {
        title: 'Spices',
        subtitle: 'Authentic Flavors & Aromas',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop',
        description: 'The finest selection of whole and ground spices, curated for their intense flavor, aroma, and purity. Enhance your culinary experience with our premium spice range.',
        features: ['Whole Spices', 'Ground Powders', 'Aromatic Herbs', 'Pure & Unadulterated'],
        specs: {
            purity: 'Lab Tested',
            aroma: 'Long-Lasting',
            packaging: 'Aroma-Sealed',
            shelf_life: '24 Months'
        }
    };

    return (
        <div className="product-details-page">
            <a href="/" className="back-link" style={{
                position: 'fixed',
                top: '30px',
                left: '30px',
                zIndex: 1000,
                background: 'rgba(255,255,255,0.9)',
                padding: '12px 24px',
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#1a1a1a',
                fontWeight: '600',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.5)',
                transition: 'transform 0.3s ease'
            }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
                <FaArrowLeft /> Back to Home
            </a>

            <header className="details-header" style={{ backgroundImage: `url(${productData.image})` }}>
                <div className="details-header-overlay">
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-serif"
                        >
                            {productData.title}
                        </motion.h1>
                        <p className="details-subtitle">{productData.subtitle}</p>
                    </div>
                </div>
            </header>

            <section className="details-content-section section-padding">
                <div className="container">
                    <div className="details-grid">
                        <motion.div
                            className="details-text-wrap"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag">Product Overview</span>
                            <h2 className="heading-serif">Excellence in Trade</h2>
                            <p>{productData.description}</p>

                            <div className="features-list">
                                {productData.features.map((feature, i) => (
                                    <div key={i} className="feature-item">
                                        <FaCheckCircle className="feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="details-specs-card glass-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="heading-serif">Technical Specifications</h3>
                            <div className="specs-table">
                                {Object.entries(productData.specs).map(([label, value]) => (
                                    <div key={label} className="spec-row">
                                        <span className="spec-label">{label.replace('_', ' ')}</span>
                                        <span className="spec-value">{value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="trust-badges">
                                <div className="trust-badge">
                                    <FaGlobe />
                                    <span>Global Shipping</span>
                                </div>
                                <div className="trust-badge">
                                    <FaCertificate />
                                    <span>Certified Quality</span>
                                </div>
                            </div>

                            <Link to="/#contact" className="btn-send-message inquiry-btn">
                                INQUIRE NOW <FaCheckCircle />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Spices;
