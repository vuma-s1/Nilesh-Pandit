import React from 'react';
import TextReveal from '../shared/TextReveal';
import { 
    FaBuilding, 
    FaLock, 
    FaFileContract, 
    FaMoneyBillWave, 
    FaBalanceScale, 
    FaRocket 
} from 'react-icons/fa';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            title: "Incorporation & Company Formation",
            description: "Strategic business structure setup for optimal growth and investor appeal",
            icon: FaBuilding,
            features: ["Business Structure", "Legal Compliance", "Investor Ready"]
        },
        {
            title: "Intellectual Property Protection",
            description: "Comprehensive IP strategy from patents to trademarks and trade secrets",
            icon: FaLock,
            features: ["Patent Strategy", "Trademark Protection", "Trade Secrets"]
        },
        {
            title: "Contract Drafting & Review",
            description: "Air-tight agreements that protect your interests and enable growth",
            icon: FaFileContract,
            features: ["Legal Agreements", "Risk Mitigation", "Growth Protection"]
        },
        {
            title: "Funding & Investment Support",
            description: "Legal framework for successful fundraising and investor relations",
            icon: FaMoneyBillWave,
            features: ["Investor Documentation", "Due Diligence", "Fundraising"]
        },
        {
            title: "Compliance & Regulatory Advisory",
            description: "Navigating complex regulations while maintaining operational agility",
            icon: FaBalanceScale,
            features: ["Regulatory Compliance", "Risk Management", "Operational Support"]
        },
        {
            title: "Exit Strategies & Mergers",
            description: "Strategic planning for successful exits, acquisitions, and mergers",
            icon: FaRocket,
            features: ["Exit Planning", "M&A Support", "Strategic Advisory"]
        }
    ];

    return (
        <section id="services" className={`section ${styles.servicesSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className={`heading-large mb-medium ${styles.servicesHeading}`}>
                    Your Startup's Legal Foundation
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    From incorporation to exit, we provide the legal foundation your startup needs to scale without limits.
                </TextReveal>
                
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <TextReveal 
                                key={index}
                                as="div" 
                                className={styles.serviceCard}
                                delay={index * 0.1}
                            >
                                <div className={styles.serviceHeader}>
                                    <div className={styles.serviceIcon}>
                                        <IconComponent className={styles.iconSvg} />
                                    </div>
                                    <h3 className={styles.serviceTitle}>
                                        {service.title}
                                    </h3>
                                </div>
                                <p className={styles.serviceDescription}>
                                    {service.description}
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className={styles.feature}>
                                            <span className={styles.featureDot}></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </TextReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;