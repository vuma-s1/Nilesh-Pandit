import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header id="hero" className={`section ${styles.heroSection}`}>
            <div className={styles.content}>
                <h1 className={styles.heroTitle}>
                    Turning Good Businesses into Strong, Investor-Ready Organizations
                </h1>
                <TextReveal as="p" className={styles.subtitle} delay={0.3}>
                    Helping founders, boards, and family businesses bring structure, secure funding, and grow without losing control.
                </TextReveal>
                <div className={styles.ctaContainer}>
                    <TextReveal delay={0.6}>
                        <button className={`btn btn-primary ${styles.ctaButton}`}>
                            Book a Strategy Call
                        </button>
                    </TextReveal>
                    <TextReveal delay={0.8}>
                        <button className={`btn btn-secondary ${styles.ctaButton}`}>
                            View My Impact
                        </button>
                    </TextReveal>
                </div>
            </div>
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Scroll to explore</span>
                <div className={styles.scrollLine}></div>
            </div>
        </header>
    );
};

export default Hero;