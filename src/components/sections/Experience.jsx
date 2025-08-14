import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            year: '2024',
            company: 'Freelance Designer',
            role: 'Creative Designer & Developer',
            description: 'Working with various clients to create stunning digital experiences, from brand identity to full-scale web applications.',
            technologies: ['Webflow', 'Figma', 'React', 'GSAP']
        },
        {
            year: '2023',
            company: 'Digital Agency',
            role: 'Senior Web Designer',
            description: 'Led design initiatives for major client projects, focusing on user experience and conversion optimization.',
            technologies: ['Adobe Creative Suite', 'Webflow', 'JavaScript', 'CSS']
        },
        {
            year: '2022',
            company: 'Tech Startup',
            role: 'UI/UX Designer',
            description: 'Designed and prototyped user interfaces for a fast-growing SaaS platform, improving user engagement by 40%.',
            technologies: ['Figma', 'Principle', 'HTML/CSS', 'Vue.js']
        },
        {
            year: '2021',
            company: 'Creative Studio',
            role: 'Junior Designer',
            description: 'Started my journey in digital design, working on branding projects and learning the fundamentals of web design.',
            technologies: ['Photoshop', 'Illustrator', 'Sketch', 'InVision']
        }
    ];

    return (
        <section id="experience" className={`section ${styles.experienceSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <TextReveal as="h2" className="heading-large">
                        Experience
                    </TextReveal>
                    <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                        A journey through various roles and projects that shaped my expertise 
                        in design and development.
                    </TextReveal>
                </div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.timelineItem}
                            delay={index * 0.1}
                        >
                            <div className={styles.timelineYear}>
                                <span>{exp.year}</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.experienceHeader}>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <span className={styles.company}>{exp.company}</span>
                                </div>
                                <p className={styles.description}>{exp.description}</p>
                                <div className={styles.technologies}>
                                    {exp.technologies.map((tech, idx) => (
                                        <span key={idx} className={styles.tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;