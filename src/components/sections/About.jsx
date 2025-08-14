import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={`section ${styles.aboutSection}`}>
            <div className={styles.content}>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutImage}>
                        <TextReveal as="h2" className={styles.aboutHeading}>
                            About Me
                        </TextReveal>
                        <img src="/Untitled design (5).png" alt="Shri Vikram P" />
                    </div>
                    <div className={styles.description}>
                        <TextReveal as="h3" className="heading-large mb-medium" delay={0.1}>
                            I'm Shri Vikram P,
                        </TextReveal>
                        <TextReveal as="p" className="text-body mb-medium" delay={0.2}>
                            known as VikramVKR, is a financial architect with a strong background in investment banking and strategic advisory. He works closely with founders, family businesses, and early-stage ventures to build structured, financially resilient organizations. Currently, he continues to advise business leaders, boards, and stakeholders- supporting responsible growth, improved financial governance, and inclusive economic development.
                        </TextReveal>
                    </div>
                </div>
                <div className={styles.skills}>
                    <TextReveal as="h3" className={styles.skillsTitle} delay={0.3}>
                        What I Solve
                    </TextReveal>
                    <div className={styles.skillsList}>
                        <TextReveal as="div" className={styles.skill} delay={0.4}>
                            <span className={styles.skillNumber}>01</span>
                            <div>
                                <h4>Founders</h4>
                                <p>Turning passion projects into professionally managed companies</p>
                            </div>
                        </TextReveal>
                        <TextReveal as="div" className={styles.skill} delay={0.5}>
                            <span className={styles.skillNumber}>02</span>
                            <div>
                                <h4>Family Businesses</h4>
                                <p>Building structured, financially resilient organizations</p>
                            </div>
                        </TextReveal>
                        <TextReveal as="div" className={styles.skill} delay={0.6}>
                            <span className={styles.skillNumber}>03</span>
                            <div>
                                <h4>Early-Stage Ventures</h4>
                                <p>Supporting responsible growth and improved financial governance</p>
                            </div>
                        </TextReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;