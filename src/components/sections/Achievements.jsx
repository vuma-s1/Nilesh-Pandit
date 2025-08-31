import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Achievements.module.css';

const Achievements = () => {
    const achievements = [
        {
            number: "30%",
            title: "Faster Fundraising",
            description: "Accelerated startup fundraising through strategic IP and legal planning"
        },
        {
            number: "50+",
            title: "Startups Served",
            description: "Built long-term client partnerships across startups and investors globally"
        },
        {
            number: "100%",
            title: "Success Rate",
            description: "Secured patents and trademarks for multiple high-growth ventures"
        },
        {
            number: "18+",
            title: "Years Combined",
            description: "Recognized for mentorship and thought leadership in IP and startup law"
        }
    ];

    return (
        <section id="achievements" className={`section ${styles.achievementsSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className={`heading-large mb-medium ${styles.achievementsHeading}`}>
                    Notable Accomplishments
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Measurable impact in the startup ecosystem
                </TextReveal>
                
                <div className={styles.achievementsGrid}>
                    {achievements.map((achievement, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.achievementCard}
                            delay={index * 0.2}
                        >
                            <div className={styles.achievementNumber}>
                                {achievement.number}
                            </div>
                            <h3 className={styles.achievementTitle}>
                                {achievement.title}
                            </h3>
                            <p className={styles.achievementDescription}>
                                {achievement.description}
                            </p>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
