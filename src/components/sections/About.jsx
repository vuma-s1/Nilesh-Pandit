import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`section ${styles.aboutSection}`}>
            <div className={styles.content}>
                <div className={styles.aboutContainer}>
                    <TextReveal as="h2" className={styles.aboutHeading}>
                        Our Story
                    </TextReveal>
                    
                    <div className={styles.description}>
                        <TextReveal as="h3" className="heading-large mb-medium" delay={0.1}>
                            VNX Lexicon
                        </TextReveal>
                        <TextReveal as="p" className="text-body mb-medium" delay={0.2}>
                            VNX Lexicon was born from a fundamental belief: that groundbreaking startups deserve legal and strategic guidance that is as agile and forward-thinking as they are. Too many founders are overwhelmed by legal jargon and compliance hurdles, diverting precious energy from their core mission. Our mission became clear: to demystify the legal landscape, empower founders with unwavering protection, and instill the confidence needed to turn audacious visions into reality.
                        </TextReveal>
                    </div>
                    
                    <TextReveal as="div" className="text-body" delay={0.3}>
                        <h4 className="heading-medium mb-small">Our Values:</h4>
                    </TextReveal>
                    
                    <div className={styles.valuesContainer}>
                        <ul className={styles.valuesList}>
                            <li><strong>Integrity:</strong> Ethical counsel and transparency.</li>
                            <li><strong>Clarity:</strong> Translating complex law into actionable insights.</li>
                            <li><strong>Innovation:</strong> Proactive, future-focused solutions.</li>
                            <li><strong>Partnership:</strong> Deeply invested in your journey, celebrating milestones together.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;