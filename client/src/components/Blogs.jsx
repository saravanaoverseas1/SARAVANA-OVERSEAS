import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import '../index.css';
import '../sections.css';

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Navigating Customs Regulations: A Beginner's Guide",
            excerpt: "Everything you need to know about customs documentation and compliance for smooth shipping.",
            date: "December 10, 2024",
            author: "Saravana Team",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
            category: "Guides"
        }
    ];


    const [flippedId, setFlippedId] = React.useState(null);

    const handleCardClick = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    return (
        <section className="section-padding blogs-section" id="blogs">
            <div className="container">
                <div className="section-header-modern">
                    <motion.span
                        className="section-tag"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Industry Insights
                    </motion.span>
                    <motion.h2
                        className="section-title heading-serif"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Recent Blog
                    </motion.h2>
                    <p className="section-desc">Stay updated with professional guidance and market analysis from our expert trade team.</p>
                </div>

                <div className="featured-proper-container">
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            className="featured-proper-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            onClick={() => handleCardClick(post.id)}
                        >
                            <motion.div
                                className="featured-proper-inner"
                                initial={false}
                                animate={{ rotateY: flippedId === post.id ? 180 : 0 }}
                                transition={{ duration: 0.8, cubicBezier: [0.4, 0, 0.2, 1] }}
                            >
                                {/* Front Side: High Impact Split Layout */}
                                <div className="featured-proper-front">
                                    <div className="featured-proper-image">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <div className="featured-category-badge">{post.category}</div>
                                    </div>
                                    <div className="featured-proper-intro">
                                        <div className="blog-card-meta">
                                            <span><FaCalendarAlt /> {post.date}</span>
                                            <span><FaUser /> {post.author}</span>
                                        </div>
                                        <h3 className="heading-serif featured-proper-title">{post.title}</h3>
                                        <p className="featured-proper-excerpt-front">{post.excerpt}</p>
                                        <div className="flip-instruction">
                                            <span>Read More</span>
                                            <FaArrowRight className="bounce-arrow" />
                                        </div>
                                    </div>
                                </div>

                                {/* Back Side: Detailed Reading Layout */}
                                <div className="featured-proper-back">
                                    <div className="featured-back-content">
                                        <span className="section-tag">Deep Dive</span>
                                        <h3 className="heading-serif">{post.title}</h3>
                                        <div className="premium-divider"></div>
                                        <p className="detailed-article-text">
                                            {post.excerpt} Our expert team at Saravana Overseas focuses on navigating the complexities
                                            of {post.title.toLowerCase()}. We provide the strategic framework needed for businesses
                                            to excel in the global {post.category.toLowerCase()} sector.
                                        </p>
                                        <div className="back-button-wrapper">
                                            <a href="#blogs" className="btn-proper-read" onClick={(e) => e.stopPropagation()}>
                                                Visit Article Page <FaArrowRight />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default Blogs;
