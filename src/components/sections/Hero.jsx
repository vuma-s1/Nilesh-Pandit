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
                    Transforming Innovation<br/>
                    <span style={{ display: 'block', marginTop: '0.8rem' }}>into Strategic Intellectual</span>
                    <span style={{ display: 'block', marginTop: '0.8rem' }}>Property</span>
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.3}>
                    Guiding organizations in protecting, structuring, and leveraging their ideas with 18+ years of global IP leadership.
                </TextReveal>
            </div>

        </header>
    );
};

export default Hero;