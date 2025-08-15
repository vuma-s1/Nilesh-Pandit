import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            number: '01',
            title: 'From Informal to Institutional',
            description: 'Many businesses start without formal systems. I help you create governance structures, reporting systems, and leadership roles that turn your business into a professionally managed, investor-ready organization.'
        },
        {
            number: '02',
            title: 'Closing the Investor Confidence Gap',
            description: 'Sometimes investors hesitate because they don\'t see enough clarity. I prepare your financials, structure, and pitch so they have every reason to invest.'
        },
        {
            number: '03',
            title: 'Scaling Without Chaos',
            description: 'Rapid growth can break a business if systems aren\'t ready. I create frameworks that allow you to expand without losing operational control or profitability.'
        },
        {
            number: '04',
            title: 'Reducing Risk & Protecting Reputation',
            description: 'Good governance isn\'t just about compliance — it\'s about safeguarding your brand and leadership credibility. I design processes that prevent costly mistakes and build long-term trust.'
        }
    ];

    return (
        <section id="services" className={`section ${styles.servicesSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeText}>
                            What I Solve • What I Solve • What I Solve • What I Solve • What I Solve • What I Solve • What I Solve • What I Solve
                   ers Solve Problems That Decide the Future of Their Business
                     When They face high-stakes decisions, they need someone who understands both the numbers and the bigger picture. That’s where I step in
                    </TextReveal>
                </div>
                
                <div className={styles.servicesList}>
                    {services.map((service, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.serviceItem}
                            delay={index * 0.1}
                        >
                            <div className={styles.serviceHeader}>
                                <span className={styles.serviceNumber}>{service.number}</span>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                            </div>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;