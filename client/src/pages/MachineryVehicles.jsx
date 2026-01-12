import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaGlobe, FaCertificate } from 'react-icons/fa';

const MachineryVehicles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productData = {
        title: 'Farm Machinery and Vehicles',
        subtitle: 'Agricultural Vehicles & Heavy Machinery',
        image: '/farm_machinery_hero.jpg',
        description: 'We provide heavy-duty farm machinery and agricultural vehicles for diverse farming applications. From tractors and combine harvesters to specialty farm vehicles, our sourcing ensures peak performance and durability for modern agriculture.',
        features: ['Agricultural Tractors', 'Combine Harvesters', 'Farm Utility Vehicles', 'Quality Inspected'],
        specs: {
            type: 'Agricultural/Farm Vehicles',
            standards: 'ISO 9001 Certified',
            availability: 'Global Export',
            warranty: 'Manufacturer Standard'
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

export default MachineryVehicles;
