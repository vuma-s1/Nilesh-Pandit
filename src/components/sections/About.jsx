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
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillsContent}>
                            <TextReveal as="h3" className={styles.skillsTitle} delay={0.3}>
                             Over the last 15+ years, I've advised:
                            </TextReveal>
                            <div className={styles.skillsList}>
                                <TextReveal as="div" className={styles.skill} delay={0.4}>
                                    <h4 className={styles.skillItem}>
                                        <span className={styles.skillNumber}>01</span><strong>Founders</strong> - turning passion projects into professionally managed companies
                                    </h4>
                                </TextReveal>
                                <TextReveal as="div" className={styles.skill} delay={0.5}>
                                    <h4 className={styles.skillItem}>
                                        <span className={styles.skillNumber}>02</span><strong>Family businesses</strong> - transitioning into modern governance structures
                                    </h4>
                                </TextReveal>
                                <TextReveal as="div" className={styles.skill} delay={0.6}>
                                    <h4 className={styles.skillItem}>
                                        <span className={styles.skillNumber}>03</span><strong>Entrepreneurs</strong> - seeking mentorship to navigate growth
                                    </h4>
                                </TextReveal>
                                <TextReveal as="div" className={styles.skill} delay={0.7}>
                                    <h4 className={styles.skillItem}>
                                        <span className={styles.skillNumber}>04</span><strong>Early-stage ventures</strong> - preparing for investor funding and expansion
                                    </h4>
                                </TextReveal>
                                <TextReveal as="div" className={styles.skill} delay={0.8}>
                                    <h4 className={styles.skillItem}>
                                        <span className={styles.skillNumber}>05</span><strong>Boards</strong> - needing strategic counsel for high-stakes decisions
                                    </h4>
                                </TextReveal>
                            </div>
                        </div>
                        <div className={styles.skillsImage}>
                            <img src="/1.png" alt="Business Advisory Meeting" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;