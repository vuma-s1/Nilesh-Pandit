import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Media.module.css';

const Media = ({ openCalendly }) => {
    return (
        <section className={`section ${styles.mediaSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className={styles.headline}>
                    In the Media & On Stage
                </TextReveal>
                
                <TextReveal as="p" className={styles.description} delay={0.2}>
                    I share my insights at leadership summits, investor events, and board-level workshops. My talks focus on building trust with investors, scaling without chaos, and designing businesses that last.
                </TextReveal>
                
                <div className={styles.ctaContainer}>
                    <button 
                        onClick={() => {
                            console.log('Media button clicked');
                            openCalendly();
                        }}
                        className={`btn btn-primary ${styles.ctaButton}`}
                    >
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Media;
