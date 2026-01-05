import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaGlobe, FaCertificate } from 'react-icons/fa';

const ProductDetails = () => {
    const { productId } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Product data mapping based on ID or Name
    const productData = {
        'machinery-and-vehicles': {
            title: 'Machinery and Vehicles',
            subtitle: 'Industrial Excellence & Transport Solutions',
            image: '/machinery_vehicles_collage_1767517463792.png',
            description: 'We provide heavy-duty machinery and versatile vehicles for diverse industrial applications. From construction equipment to agricultural tractors, our sourcing ensures peak performance and durability.',
            features: ['Heavy Construction Equipment', 'Agricultural Machinery', 'Commercial Vehicles', 'Quality Inspected'],
            specs: {
                type: 'Industrial/Agricultural',
                standards: 'ISO 9001 Certified',
                availability: 'Global Export',
                warranty: 'Manufacturer Standard'
            }
        },
        'machinery-and-tools': {
            title: 'Machinery and Tools',
            subtitle: 'Precision Engineering Tools',
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5be6b22b?q=80&w=2070&auto=format&fit=crop',
            description: 'A comprehensive range of precision tools and specialized machinery for workshops and manufacturing plants. Our tools are engineered for accuracy and longevity.',
            features: ['Precision Hand Tools', 'Power Equipment', 'Workshop Machinery', 'Engineered for Safety'],
            specs: {
                type: 'Power & Hand Tools',
                material: 'High-Grade Steel',
                precision: 'Industrial Grade',
                package: 'Export Standard'
            }
        },
        'agri-commodities': {
            title: 'Agri Commodities',
            subtitle: 'Freshness from the Farm to the World',
            image: '/agro_commodities_collage_1767517406330.png',
            description: 'Supplying a wide variety of fresh vegetables, seasonal fruits, high-grade grains, and nutritious cereals. We bridge the gap between local farmers and global consumers.',
            features: ['Fresh Vegetables', 'Seasonal Fruits', 'Premium Grains', 'Organic Options'],
            specs: {
                origin: 'Sourced Globally',
                quality: 'Grade A Export',
                packaging: 'Fresh-Lock Vents',
                delivery: 'Temperature Controlled'
            }
        },
        'general-trading': {
            title: 'General Trading',
            subtitle: 'Your Diverse Sourcing Partner',
            image: '/general_trading_collage_1767517445112.png',
            description: 'Offering a broad spectrum of general merchandise from home appliances to fitness equipment. Our trading network ensures the best value and quality across various sectors.',
            features: ['Home Appliances', 'Fitness Equipment', 'Consumer Electronics', 'Lifestyle Products'],
            specs: {
                categories: '50+ Product Lines',
                sourcing: 'Direct Manufacturers',
                customization: 'Available',
                logistics: 'Efficient Worldwide'
            }
        },
        'handicrafts': {
            title: 'Handicrafts',
            subtitle: 'Preserving Traditional Artistry',
            image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
            description: 'Celebrating cultural heritage through exquisite palm products, handmade dolls, and terracotta art. Each piece tells a story of craftsmanship and tradition.',
            features: ['Palm Leaf Products', 'Handmade Dolls', 'Terracotta Pottery', 'Eco-Friendly Materials'],
            specs: {
                craft: '100% Handmade',
                material: 'Natural & Sustainable',
                art: 'Traditional Heritage',
                finish: 'Authentic Finish'
            }
        },
        'spices': {
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
        },
        'handlooms-products': {
            title: 'Handlooms Products',
            subtitle: 'Exquisite Weaves & Textures',
            image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=2070&auto=format&fit=crop',
            description: 'Beautifully crafted hand-woven textiles and products that showcase the skill of master weavers. From silk sarees to home textiles, experience the luxury of handloom.',
            features: ['Authentic Hand-Woven', 'Silk & Cotton', 'Traditional Patterns', 'Sustainable Fashion'],
            specs: {
                loom: 'Traditional Pit Loom',
                thread: 'High-Count Natural Fiber',
                dye: 'Eco-Friendly Dyes',
                texture: 'Premium Softness'
            }
        }
    };

    const currentProduct = productData[productId] || productData['machinery-and-vehicles'];

    return (
        <div className="product-details-page">
            <Link to="/" className="back-link" style={{
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
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
                <FaArrowLeft /> Back to Home
            </Link>

            <header className="details-header" style={{ backgroundImage: `url(${currentProduct.image})` }}>
                <div className="details-header-overlay">
                    <div className="container">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-serif"
                        >
                            {currentProduct.title}
                        </motion.h1>
                        <p className="details-subtitle">{currentProduct.subtitle}</p>
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
                            <p>{currentProduct.description}</p>

                            <div className="features-list">
                                {currentProduct.features.map((feature, i) => (
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
                                {Object.entries(currentProduct.specs).map(([label, value]) => (
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
                                INOUIRE NOW <FaCheckCircle />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
