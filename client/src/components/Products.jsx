import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            id: 'machinery-vehicles',
            name: 'Machinery and Vehicles',
            description: 'Industrial tractors, excavators, and heavy-duty transport vehicles.',
            image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'machinery-tools',
            name: 'Machinery and Tools',
            description: 'Precision engineering tools including spanners, screw drivers, motors, and specialized workshop equipment.',
            image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'agri-commodities',
            name: 'Agri Commodities',
            description: 'Fresh vegetables, seasonal fruits, premium grains, and cereals.',
            image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 'general-trading',
            name: 'General Trading',
            description: 'Diverse range of consumer electronics, appliances, and lifestyle products.',
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop'
        },
        {
            id: 'handicrafts',
            name: 'Hand Crafts',
            description: 'Palm base, holy cross, wooden toys and traditional terracotta art.',
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
            description: 'Exquisite hand-woven textiles, including bedsheets, sweaters, and traditional artisanal fabrics.',
            image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2070&auto=format&fit=crop'
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
                    Our Products
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
                            <a href={`/${product.id}`} className="card-link-wrap">
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
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
