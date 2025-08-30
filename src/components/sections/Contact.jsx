import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={`section ${styles.contactSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Let's Connect
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Ready to discuss IP strategy and innovation opportunities?
                </TextReveal>
                
                <div className={styles.contactGrid}>
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className={styles.contactTitle}>Email</h3>
                            <p className={styles.contactDetail}>nilesh@anjuris.com</p>
                        </div>
                    </div>
                    
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className={styles.contactTitle}>Phone</h3>
                            <p className={styles.contactDetail}>+91 98450 12345</p>
                        </div>
                    </div>
                    
                    <div className={styles.contactCard}>
                        <div className={styles.contactIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 className={styles.contactTitle}>Location</h3>
                            <p className={styles.contactDetail}>Mumbai Metropolitan Region, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
