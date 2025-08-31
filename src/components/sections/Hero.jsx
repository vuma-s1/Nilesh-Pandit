import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header id="home" className={`section ${styles.heroSection}`}>
            <div className={styles.content}>
                <TextReveal as="h1" className="heading-display" style={{ 
                    fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', 
                    lineHeight: '1.3', 
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem'
                }}>
                    Build Your Startup's Future.<br/>
                    <span style={{ display: 'block', marginTop: '0.8rem' }}>Legally Sound,</span>
                    <span style={{ display: 'block', marginTop: '0.8rem' }}>Strategically Brilliant.</span>
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.3}>
                    From your first pitch to your triumphant exit, VNX Lexicon provides expert legal and strategic foresight to protect your vision, attract investors, and scale without limits.
                </TextReveal>
            </div>

        </header>
    );
};

export default Hero;