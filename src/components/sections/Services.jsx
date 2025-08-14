import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            number: '01',
            title: 'Web Design',
            description: 'Creating beautiful, user-centered digital experiences that engage and convert visitors into customers.',
            features: ['UI/UX Design', 'Responsive Design', 'Prototyping', 'User Research']
        },
        {
            number: '02',
            title: 'Webflow Development',
            description: 'Building fast, responsive websites with clean code and seamless animations using Webflow\'s powerful platform.',
            features: ['Custom Development', 'CMS Integration', 'E-commerce', 'Performance Optimization']
        },
        {
            number: '03',
            title: 'Brand Identity',
            description: 'Developing cohesive visual identities that tell your story and connect with your target audience.',
            features: ['Logo Design', 'Brand Guidelines', 'Visual Systems', 'Brand Strategy']
        }
    ];

    return (
        <section id="services" className={`section ${styles.servicesSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <TextReveal as="h2" className="heading-large">
                        What I Do
                    </TextReveal>
                    <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                        I specialize in creating digital experiences that combine beautiful design 
                        with functional development, helping businesses establish their online presence.
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
                            <ul className={styles.serviceFeatures}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.feature}>
                                        <span className={styles.featureDot}></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;