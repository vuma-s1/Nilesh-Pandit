import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './CaseStudies.module.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            id: 1 ,
            title: "From Family Business to Professional Entity",
            problem: "A 25-year-old family manufacturing firm was losing orders due to poor systems.",
            action: "Introduced governance structure, formal reporting, and leadership roles.",
            result:  "Secured ₹18 crores in new contracts within a year."
        },
        {
            id: 2 ,
            title: "Investor Confidence Restored",
            problem: "A tech startup lost investor interest due to unclear financials.",
            action: "Restructured financial reporting and created a clear investment pitch.",
            result: "Closed ₹7 crore in funding within 90 days."
        },
        {
            id: 3 ,
            title: "Scaling Without Breaking",
            problem: "A retail chain was growing fast but losing control over expenses.",
            action: "Implemented cost control systems and operational KPIs.",
            result: "Increased profitability by 35% while opening 12 new outlets."
        },
        {
            id: 4 ,
            title: "From Risk to Resilience",
            problem: "A service company had no formal risk management process.",
            action: "Designed and implemented a governance and compliance framework.",
            result: "Passed investor due diligence and signed a strategic partnership deal."
        }
    ];

    return (
        <section className={`section ${styles.caseStudiesSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-large">
                    Real Business Transformations
                </TextReveal>
                
                <div className={styles.caseStudiesList}>
                    {caseStudies.map((study, index) => (
                        <TextReveal 
                            key={study.id}
                            as="div" 
                            className={styles.caseStudy}
                            delay={index * 0.2}
                        >
                            <div className={styles.caseStudyHeader}>
                                <span className={styles.caseNumber}>Case Study {study.id}</span>
                                <h3 className={styles.caseTitle}>{study.title}</h3>
                            </div>
                            
                            <div className={styles.caseContent}>
                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Problem</h4>
                                    <p className={styles.sectionText}>{study.problem}</p>
                                </div>
                                
                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Action</h4>
                                    <p className={styles.sectionText}>{study.action}</p>
                                </div>
                                
                                <div className={styles.caseSection}>
                                    <h4 className={styles.sectionTitle}>Result</h4>
                                    <p className={styles.sectionText}>{study.result}</p>
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>
                
                <TextReveal delay={1.2}>
                    <div className={styles.ctaContainer}>
                        <button className={`btn btn-primary ${styles.ctaButton}`}>
                            Book a Call
                        </button>
                    </div>
                </TextReveal>
            </div>
        </section>
    );
};

export default CaseStudies;
