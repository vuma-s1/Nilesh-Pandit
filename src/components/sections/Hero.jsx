import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header id="hero" className={`section ${styles.heroSection}`}>
            <div className={styles.content}>
                <TextReveal as="h1" className="heading-display">
                    Turning Good Businesses <br/>into Strong, Investor-Ready Organizations
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.3}>
                  Helping founders, boards, and family businesses bring structure, secure funding, and grow without losing control.

                </TextReveal>
            </div>

        </header>
    );
};

export default Hero;