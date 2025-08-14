import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Experience.module.css';

const Experience = () => {
    const steps = [
        {
            year: '01',
            company: '',
            role: 'Assess -',
            description: 'Understand your strengths, weaknesses, and opportunities',
            technologies: ['Business Analysis', 'Gap Assessment', 'Market Research', 'Risk Evaluation']
        },
        {
            year: '02',
            company: '',
            role: 'Architect -',
            description: 'Create a structure that supports growth and inspires investor trust',
            technologies: ['Governance Design', 'Financial Modeling', 'Compliance Framework', 'Investor Relations']
        },
        {
            year: '03',
            company: '',
            role: 'Align -',
            description: 'Match your financial strategy with your business goals',
            technologies: ['Strategic Planning', 'Capital Allocation', 'Performance Metrics', 'Goal Setting']
        },
        {
            year: '04',
            company: '',
            role: 'Accelerate -',
            description: 'Put the plan into action and measure results',
            technologies: ['Implementation', 'Progress Tracking', 'Performance Monitoring', 'Continuous Improvement']
        }
    ];

    return (
        <section id="experience" className={`section ${styles.experienceSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <TextReveal as="h2" className="heading-large">
                        The Structured Growth Approach
                    </TextReveal>
                    <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                        A Simple 4-Step Path to Long-Term Growth
                    </TextReveal>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.timelineItem}
                            delay={index * 0.1}
                        >
                            <div className={styles.timelineYear}>
                                <span>{step.year}</span>
                            </div>
                            <div className={styles.timelineContent}>
                                <div className={styles.experienceHeader}>
                                    <h3 className={styles.role}>{step.role}</h3>
                                    <span className={styles.company}>{step.company}</span>
                                </div>
                                <p className={styles.description}>{step.description}</p>
                                <div className={styles.technologies}>
                                    {step.technologies.map((tech, idx) => (
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