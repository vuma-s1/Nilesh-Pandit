import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Achievements.module.css';

const Achievements = () => {
    const achievements = [
        {
            number: '18+',
            title: 'Years of Leadership',
            description: 'In Intellectual Property Rights and technology law'
        },
        {
            number: 'Registered',
            title: 'Patent Attorney',
            description: 'With the Indian Patent Office'
        },
        {
            number: 'Global',
            title: 'Portfolio Management',
            description: 'Led patent portfolios at India\'s largest IT multinational'
        },
        {
            number: 'Robust',
            title: 'IP Compliance Systems',
            description: 'Recognized for building corporate-scale compliance frameworks'
        },
        {
            number: 'Speaker',
            title: '& Mentor',
            description: 'At academic and professional IP forums'
        }
    ];

    return (
        <section className={`section ${styles.achievementsSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Achievements & Recognition
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Professional Excellence in Intellectual Property & Technology Law
                </TextReveal>
                
                <div className={styles.achievementsGrid}>
                    {achievements.map((achievement, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.achievementCard}
                            delay={index * 0.1}
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
