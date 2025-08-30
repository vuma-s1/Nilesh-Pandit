import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './About.module.css';

const About = () => {
    return (
        <section id="about" className={`section ${styles.aboutSection}`}>
            <div className={styles.content}>
                <div className={styles.aboutGrid}>
                    <div className={styles.aboutImage}>
                        <TextReveal as="h2" className={styles.aboutHeading}>
                            About Me
                        </TextReveal>
                        <img src="/nilesh.png" alt="Mr Nilesh Pandit" />
                    </div>
                    <div className={styles.description}>
                        <TextReveal as="h3" className="heading-large mb-medium" delay={0.1}>
                            Mr Nilesh Pandit,
                        </TextReveal>
                        <TextReveal as="p" className="text-body mb-medium" delay={0.2}>
                            Senior Manager – IPR (Patents) at Tata Consultancy Services and Registered Indian Patent Attorney with nearly two decades of experience in intellectual property law, technology, and business innovation. I have led cross-border teams in building and protecting IP portfolios for global enterprises, ensuring compliance and mitigating legal risks. My expertise spans corporate IP leadership, research institutions, and law practice, providing a comprehensive view of the innovation ecosystem.
                        </TextReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;