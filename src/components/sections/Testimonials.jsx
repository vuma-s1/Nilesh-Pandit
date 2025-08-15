import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Vikram's clarity has transformed how we run our business. He makes complex financial matters simple and actionable.",
            author: "CEO",
            role: "Tech Firm"
        },
        {
            quote: "We thought we were ready for investors — Vikram showed us exactly what was missing. We secured funding within months.",
            author: "Founder",
            role: "Startup"
        },
        {
            quote: "His approach to governance has saved us from costly mistakes more than once.",
            author: "Director",
            role: "Manufacturing Company"
        }
    ];

    return (
        <section id="testimonials" className={`section ${styles.testimonialsSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.marqueeContainer}>
                        <div className={styles.marqueeText}>
                            Trusted by Leaders • Trusted by Leaders • Trusted by Leaders • Trusted by Leaders • Trusted by Leaders • Trusted by Leaders • Trusted by Leaders • Trusted by Leaders
                        </div>
                    </div>
                    <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                        Don't just take my word for it. Here's what some of my clients 
                        have to say about working together.
                    </TextReveal>
                </div>

                <div className={styles.testimonialsList}>
                    {testimonials.map((testimonial, index) => (
                        <TextReveal 
                            key={index}
                            as="div" 
                            className={styles.testimonialItem}
                            delay={index * 0.1}
                        >
                            <div className={styles.quote}>
                                <span className={styles.quoteIcon}>"</span>
                                <p className={styles.quoteText}>{testimonial.quote}</p>
                            </div>
                            <div className={styles.author}>
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>{testimonial.author}</h4>
                                    <span className={styles.authorRole}>{testimonial.role}</span>
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>

                <TextReveal delay={0.8}>
                    <div className={styles.ctaContainer}>
                        <a 
                            href="https://calendly.com/team-symbiotes/book-appointement" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`btn btn-primary ${styles.ctaButton}`}
                        >
                            Work With Me
                        </a>
                    </div>
                </TextReveal>
            </div>
        </section>
    );
};

export default Testimonials;