import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Media.module.css';

const Media = () => {
    return (
        <section className={`section ${styles.mediaSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className={styles.headline}>
                    Media Coverage & Thought Leadership
                </TextReveal>
                
                <TextReveal as="p" className={styles.description} delay={0.2}>
                    Our team shares insights at startup accelerators, investor events, and legal forums. We focus on building trust with investors, scaling without chaos, and designing businesses that last through strategic legal guidance.
                </TextReveal>
                
                <div className={styles.ctaContainer}>
                    <button 
                        className={`btn btn-primary ${styles.ctaButton}`}
                    >
                        View Media Coverage
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Media;
