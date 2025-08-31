import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Experience.module.css';

const Experience = () => {
    const timeline = [
        {
            year: "2023 - Present",
            title: "VNX Lexicon Founded",
            description: "Establishing tailored legal solutions for startups, focusing on IP strategy and investor documentation"
        },
        {
            year: "2022 - 2023",
            title: "Key Partnerships Formed",
            description: "Strategic collaborations with accelerators, investors, and startup ecosystems across India"
        },
        {
            year: "2021 - 2022",
            title: "Client Portfolio Growth",
            description: "Successfully serving 50+ startups across fintech, healthtech, and deep tech sectors"
        },
        {
            year: "2020 - 2021",
            title: "Innovation in Legal Tech",
            description: "Developing streamlined processes for startup legal operations and compliance management"
        }
    ];

    return (
        <section id="experience" className={`section ${styles.experienceSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className={`heading-large mb-medium ${styles.experienceHeading}`}>
                    Experience Timeline
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Our journey in empowering startups with strategic legal guidance
                </TextReveal>
                
                <div className={styles.timeline}>
                    {timeline.map((item, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.timelineItem}
                            delay={index * 0.2}
                        >
                            <div className={styles.timelineYear}>
                                {item.year}
                            </div>
                            <div className={styles.timelineContent}>
                                <h3 className={styles.timelineTitle}>
                                    {item.title}
                                </h3>
                                <p className={styles.timelineDescription}>
                                    {item.description}
                                </p>
                            </div>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;