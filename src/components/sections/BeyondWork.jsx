import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './BeyondWork.module.css';

const BeyondWork = () => {
    const interests = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            ),
            title: "Cricket",
            description: "Active participation and team engagement, fostering leadership and strategic thinking that translates into our client relationships."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
            ),
            title: "Music",
            description: "Finding harmony in melodies and rhythms, music provides a creative outlet that complements the analytical nature of legal work."
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            ),
            title: "Photography",
            description: "Capturing moments through a lens, photography offers a unique perspective on the world and enhances attention to detail."
        }
    ];

    return (
        <section className={`section ${styles.beyondWorkSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Beyond Work
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Humanizing the professional journey with personal passions and creative pursuits
                </TextReveal>
                
                <div className={styles.interestsGrid}>
                    {interests.map((interest, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.interestCard}
                            delay={index * 0.2}
                        >
                            <div className={styles.interestIcon}>
                                {interest.icon}
                            </div>
                            <h3 className={styles.interestTitle}>
                                {interest.title}
                            </h3>
                            <p className={styles.interestDescription}>
                                {interest.description}
                            </p>
                        </TextReveal>
                    ))}
                </div>
                
                <TextReveal as="div" className={styles.personalNote} delay={0.8}>
                    <p className={styles.noteText}>
                        At VNX Lexicon, we believe that personal passions enrich professional expertise. 
                        Whether on the cricket pitch, capturing moments through a lens, or immersed in music, 
                        our team finds balance and creativity that enhance our strategic approach to startup legal services.
                    </p>
                </TextReveal>
            </div>
        </section>
    );
};

export default BeyondWork;


