import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './CareerHighlights.module.css';

const CareerHighlights = () => {
    const partners = [
        {
            name: "Advocate Nilesh S. Pandith",
            role: "Senior Partner & IP Strategist",
            image: "/nilesh.png", // Updated to use actual image
            expertise: "18+ Years in IP Law & Strategy",
            highlights: "Leading corporate patent strategy, risk management, and IP compliance. Advises on global patent filings and enforcement.",
            type: "current"
        },
        {
            name: "Shri Vikram P (VikramVKR)",
            role: "Strategic Partner & Business Mentor",
            image: "/vikram.png", // Updated to use actual image
            expertise: "15+ Years in Investment Banking",
            highlights: "Expert in investment banking, startup advisory, and strategic planning. Guides startups through funding rounds.",
            type: "current"
        }
    ];

    const handleViewMore = () => {
        // This will be replaced with actual navigation when we create the Partners page
        window.location.href = '/partners';
    };

    return (
        <section id="partners" className={`section ${styles.careerSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Our Partners
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Meet the team behind VNX Lexicon's success
                </TextReveal>
                
                <div className={styles.partnersGrid}>
                    {partners.map((partner, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={`${styles.partnerCard} ${styles[partner.type]}`}
                            delay={index * 0.2}
                        >
                            <div className={styles.partnerImage}>
                                <img 
                                    src={partner.image} 
                                    alt={partner.name}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className={styles.imagePlaceholder}>
                                    {partner.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                            
                            <div className={styles.partnerInfo}>
                                <h3 className={styles.partnerName}>
                                    {partner.name}
                                </h3>
                                <h4 className={styles.partnerRole}>
                                    {partner.role}
                                </h4>
                                <div className={styles.partnerExpertise}>
                                    {partner.expertise}
                                </div>
                                <p className={styles.partnerHighlights}>
                                    {partner.highlights}
                                </p>
                            </div>
                        </TextReveal>
                    ))}
                </div>

                <TextReveal as="div" className={styles.viewMoreContainer} delay={0.6}>
                    <button 
                        className={styles.viewMoreButton}
                        onClick={handleViewMore}
                    >
                        View Full Partner Profiles
                    </button>
                </TextReveal>
            </div>
        </section>
    );
};

export default CareerHighlights;
