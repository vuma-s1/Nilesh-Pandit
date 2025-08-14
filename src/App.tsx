import React, { useState, useEffect } from 'react';
import Layout from './components/shared/Layout';
import Navigation from './components/shared/Navigation';
import Loader from './components/Loader/Loader';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Work from './components/sections/Work';
import Footer from './components/sections/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        // Add a slight delay to ensure all DOM is ready before making it visible
        setTimeout(() => setIsLoading(false), 200);
    };
    
    useEffect(() => {
        // Prevent scrolling during loading
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLoading]);
    
    return (
        <Layout>
            {isLoading && <Loader onComplete={handleLoadingComplete} />}
            <Navigation />
            <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <Hero />
                <Marquee />
                <About />
                <Services />
                <Experience />
                <Testimonials />
                <Work />
                <Footer />
            </main>
        </Layout>
    );
}

export default App;