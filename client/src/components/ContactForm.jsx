import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from 'react-icons/fa';
import '../index.css';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

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
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Hide success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section className="section-padding contact-section" id="contact">
            <div className="container">
                <center><span className="section-tag">Get In Touch</span></center>

                {/* Success Notification Popup */}
                <div className={`notification-popup ${status === 'success' ? 'show-success' : ''}`}>
                    <div className="notification-content">
                        <div className="check-icon">
                            ✓
                        </div>
                        <div className="notification-text">
                            <h4>Message Sent!</h4>
                            <p>We'll get back to you shortly.</p>
                        </div>
                    </div>
                </div>

                {/* Error Notification Popup */}
                {status === 'error' && (
                    <div className="error-popup">
                        <p>Something went wrong. Please try again.</p>
                    </div>
                )}

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
                            <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                                Or email us directly at: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saravanaoverseas1@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', fontWeight: '600' }}>saravanaoverseas1@gmail.com</a>
                            </p>
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
                                disabled={status === 'loading'}
                                style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                            >
                                <span>{status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                                {status !== 'loading' && <FaPaperPlane className="send-icon" />}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
