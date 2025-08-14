import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Divyansh transformed our vision into a stunning digital reality. His attention to detail and creative approach exceeded all our expectations.",
            author: "Sarah Johnson",
            role: "CEO, TechStart",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
            quote: "Working with Divyansh was an absolute pleasure. He delivered a beautiful, functional website that perfectly represents our brand.",
            author: "Michael Chen",
            role: "Founder, Creative Agency",
            avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        },
        {
            quote: "The level of professionalism and creativity Divyansh brings to every project is remarkable. Highly recommended for any design work.",
            author: "Emily Rodriguez",
            role: "Marketing Director, InnovateCorp",
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
        }
    ];

    return (
        <section id="testimonials" className={`section ${styles.testimonialsSection}`}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <TextReveal as="h2" className="heading-large">
                        What Clients Say
                    </TextReveal>
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
                                <div className={styles.authorAvatar}>
                                    <img src={testimonial.avatar} alt={testimonial.author} />
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>{testimonial.author}</h4>
                                    <span className={styles.authorRole}>{testimonial.role}</span>
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>

                <div className={styles.stats}>
                    <TextReveal as="div" className={styles.stat} delay={0.4}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </TextReveal>
                    <TextReveal as="div" className={styles.stat} delay={0.5}>
                        <span className={styles.statNumber}>30+</span>
                        <span className={styles.statLabel}>Happy Clients</span>
                    </TextReveal>
                    <TextReveal as="div" className={styles.stat} delay={0.6}>
                        <span className={styles.statNumber}>3+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </TextReveal>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;