import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './NewSection.module.css';

const NewSection = ({ openCalendly }) => {
    const caseStudies = [
        {
            id: 1,
            title: "From Family Business to Professional Entity",
            problem: "A 25-year-old family manufacturing firm was losing orders due to poor systems.",
            action: "Introduced governance structure, formal reporting, and leadership roles and responsibilities.",
            result: "Secured ₹18 crores in new contracts within a year."
        },
        {
            id: 2,
            title: "Investor Confidence Restored",
            problem: "A tech startup lost investor interest due to unclear financials.",
            action: "Restructured financial reporting and created a clear investment pitch and strategy.",
            result: "Closed ₹7 crore in funding within 90 days."
        },
        {
            id: 3,
            title: "Scaling Without Breaking",
            problem: "A retail chain was growing fast but losing control over expenses.",
            action: "Implemented cost control systems and operational KPIs.",
            result: "Increased profitability by 35% while opening 12 new outlets."
        },
        {
            id: 4,
            title: "From Risk to Resilience",
            problem: "A service company had no formal risk management process.",
            action: "Designed and implemented a governance and compliance framework and policies.",
            result: "Passed investor due diligence and signed a strategic partnership deal and agreement."
        }
    ];

    return (
        <section className={`section ${styles.newSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-large">
                    Real Business Transformations
                </TextReveal>
                
                <div className={styles.cardsGrid}>
                    {caseStudies.map((study, index) => (
                        <TextReveal 
                            key={study.id}
                            as="div" 
                            className={styles.card}
                            delay={index * 0.1}
                        >
                            <h3 className={styles.cardTitle}>Case Study {study.id} — {study.title}</h3>
                            <div className={styles.cardContent}>
                                <p className={styles.problem}><strong>Problem:</strong> {study.problem}</p>
                                <p className={styles.action}><strong>Action:</strong> {study.action}</p>
                                <p className={styles.result}><strong>Result:</strong> {study.result}</p>
                            </div>
                        </TextReveal>
                    ))}
                </div>
                
                <div className={styles.ctaContainer}>
                    <button 
                        onClick={() => {
                            console.log('NewSection button clicked');
                            openCalendly();
                        }}
                        className={`btn btn-primary ${styles.ctaButton}`}
                    >
                        Book a Call
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewSection;
