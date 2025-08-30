import React, { useState, useEffect } from 'react';
import Layout from './components/shared/Layout';
import Navigation from './components/shared/Navigation';
import Loader from './components/Loader/Loader';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Experience from './components/sections/Experience';
import Work from './components/sections/Work';
import CareerHighlights from './components/sections/CareerHighlights';
import Achievements from './components/sections/Achievements';
import BeyondWork from './components/sections/BeyondWork';
import Contact from './components/sections/Contact';
import NewSection from './components/sections/NewSection';
import Testimonials from './components/sections/Testimonials';
import Media from './components/sections/Media';
import Engagement from './components/sections/Engagement';
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
        <>
            {isLoading && <Loader onComplete={handleLoadingComplete} />}
            <Navigation />
            <Layout>
                <main style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                    <Hero />
                    <Marquee />
                    <About />
                    <Services />
                    <Experience />
                    <Work />
                    <CareerHighlights />
                    <Achievements />
                    <BeyondWork />
                    <Contact />
                    <NewSection />
                    <Testimonials />
                    <Media />
                    <Engagement />
                    <Footer />
                </main>
            </Layout>
        </>
    );
}

export default App;