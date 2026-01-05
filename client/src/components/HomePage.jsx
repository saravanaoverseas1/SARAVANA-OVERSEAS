import React from 'react';
import Hero from './Hero';
import InfoSection from './InfoSection';
import Products from './Products';
import Gallery from './Gallery';
import Blogs from './Blogs';
import Careers from './Careers';
import About from './About';
import Testimonial from './Testimonial';
import ContactForm from './ContactForm';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Products />
            <Gallery />
            <Blogs />
            <Careers />
            <About />
            <InfoSection />
            <Testimonial />
            <ContactForm />
        </>
    );
};

export default HomePage;
