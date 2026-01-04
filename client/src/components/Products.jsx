import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            id: 'machinery-and-vehicles',
            name: 'Machinery and Vehicles',
            description: 'Industrial tractors, excavators, and heavy-duty transport vehicles.',
            image: '/machinery_vehicles_collage_1767517463792.png'
        },
        {
            id: 'machinery-and-tools',
            name: 'Machinery and Tools',
            description: 'Precision engineering tools and specialized workshop equipment.',
            image: 'https://images.unsplash.com/photo-1504917595217-d4dc5be6b22b?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'agri-commodities',
            name: 'Agri Commodities',
            description: 'Fresh vegetables, seasonal fruits, premium grains, and cereals.',
            image: '/agro_commodities_collage_1767517406330.png'
        },
        {
            id: 'general-trading',
            name: 'General Trading',
            description: 'Diverse range of consumer electronics, appliances, and lifestyle products.',
            image: '/general_trading_collage_1767517445112.png'
        },
        {
            id: 'handicrafts',
            name: 'Handicrafts',
            description: 'Intricate palm products, handmade dolls, and traditional terracotta art.',
            image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'spices',
            name: 'Spices',
            description: 'Authentic flavors and aromas from the finest spice gardens.',
            image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'handlooms-products',
            name: 'Handlooms Products',
            description: 'Exquisite hand-woven textiles and traditional artisanal fabrics.',
            image: 'https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <section className="section-padding products-section" id="products">
            <div className="container">
                <center>
                    <span className="section-tag">Global Marketplace</span>
                </center>
                <motion.h2
                    className="section-title heading-serif"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Collections
                </motion.h2>

                <div className="product-category-grid-modern">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="modern-category-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={`/product/${product.id}`} className="card-link-wrap">
                                <div className="modern-card-image">
                                    <img src={product.image} alt={product.name} loading="lazy" />
                                    <div className="modern-card-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>
                                <div className="modern-card-content">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
