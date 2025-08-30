import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './CareerHighlights.module.css';

const CareerHighlights = () => {
    const careerItems = [
        {
            period: '2012 – Present',
            company: 'Tata Consultancy Services (TCS)',
            role: 'Senior Manager – IPR (Patents)',
            description: 'Leads corporate patent strategy, risk management, and IP compliance. Advises on global patent filings and enforcement. Manages multi-disciplinary teams across geographies.',
            type: 'current'
        },
        {
            period: 'Earlier Roles',
            company: 'CSIR–National Chemical Laboratory (Pune) & National Institute of Oceanography (Goa)',
            role: 'Research-based IP work',
            description: 'Exposure to applied science, innovation processes, and patentability analysis.',
            type: 'previous'
        },
        {
            period: 'Education',
            company: 'Academic & Professional Credentials',
            role: 'M.Sc. Microbiology – North Maharashtra University | LL.B. – Pune University | Registered Indian Patent Attorney – Indian Patent Office',
            description: 'Comprehensive academic foundation in science and law, combined with professional certification in patent law.',
            type: 'education'
        }
    ];

    return (
        <section id="services" className={`section ${styles.careerSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Career Highlights
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Professional Journey in Intellectual Property & Technology Law
                </TextReveal>
                
                <div className={styles.careerGrid}>
                    {careerItems.map((item, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={`${styles.careerCard} ${styles[item.type]}`}
                            delay={index * 0.2}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.periodBadge}>
                                    {item.period}
                                </div>
                                <h3 className={styles.companyName}>
                                    {item.company}
                                </h3>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <h4 className={styles.roleTitle}>
                                    {item.role}
                                </h4>
                                <p className={styles.roleDescription}>
                                    {item.description}
                                </p>
                            </div>
                            
                            <div className={styles.cardFooter}>
                                <div className={styles.typeIndicator}>
                                    {item.type === 'current' && 'Current Position'}
                                    {item.type === 'previous' && 'Previous Experience'}
                                    {item.type === 'education' && 'Education & Credentials'}
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerHighlights;
