import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';
import '../index.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert('Thank you for reaching out! We will get back to you shortly.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please check your connection.');
        }
    };

    return (
        <section className="section-padding contact-section" id="contact">
            <div className="container">
                <center><span className="section-tag">Get In Touch</span></center>
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-card glass-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-header">
                            <h2 className="heading-serif">Start a Conversation</h2>
                            <p>Our experts are ready to streamline your global logistics today.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="input-row">
                                <div className="modern-input-group">
                                    <label><FaUser /> Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="e.g. John Doe"
                                        className="modern-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="modern-input-group">
                                    <label><FaEnvelope /> Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="e.g. john@example.com"
                                        className="modern-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label><FaCommentAlt /> Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your requirements..."
                                    className="modern-input"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn-send-message"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span>SEND MESSAGE</span>
                                <FaPaperPlane className="send-icon" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
