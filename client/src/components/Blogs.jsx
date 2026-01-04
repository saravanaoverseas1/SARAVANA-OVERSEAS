import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import '../sections.css';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Global Trade: Trends to Watch in 2025',
            excerpt: 'Discover how AI, blockchain, and sustainable logistics are reshaping international commerce.',
            date: 'December 20, 2024',
            author: 'Saravana Team',
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
            category: 'Industry Insights'
        },
        {
            id: 2,
            title: 'How to Choose the Right Logistics Partner',
            excerpt: 'Key factors to consider when selecting a logistics provider for your international shipments.',
            date: 'December 15, 2024',
            author: 'Saravana Team',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
            category: 'Business Tips'
        },
        {
            id: 3,
            title: 'Navigating Customs Regulations: A Beginner\'s Guide',
            excerpt: 'Everything you need to know about customs documentation and compliance for smooth shipping.',
            date: 'December 10, 2024',
            author: 'Saravana Team',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
            category: 'Guides'
        }
    ];

    return (
        <section className="section-padding blogs-section" id="blogs">
            <div className="container">
                <center><span className="section-tag">Logistics Insights</span></center>
                <motion.h2
                    className="section-title heading-serif"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Recent Blogs
                </motion.h2>

                <div className="blogs-grid">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="flip-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front">
                                    <div className="blog-image">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <span className="blog-category-badge">{post.category}</span>
                                    </div>
                                    <div className="blog-content-preview">
                                        <h3>{post.title}</h3>
                                        <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>
                                            {post.date} • {post.author}
                                        </div>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="flip-card-back">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <a href="#blogs" className="read-more-btn">Read Full Article</a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
