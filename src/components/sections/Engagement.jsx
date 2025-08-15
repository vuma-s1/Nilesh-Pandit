import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../shared/TextReveal';
import styles from './Engagement.module.css';

gsap.registerPlugin(ScrollTrigger);

const Engagement = () => {
    const sectionRef = useRef(null);
    const stepsRef = useRef([]);
    const connectorsRef = useRef([]);
    const buttonRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const steps = stepsRef.current;
        const connectors = connectorsRef.current;
        const button = buttonRef.current;

        if (!section || steps.length === 0) return;

        const isMobile = window.innerWidth < 1024;

        if (!isMobile) {
            // Initial state - steps hidden in 3D space (desktop only)
            gsap.set(steps, {
                scale: 0.3,
                z: -600,
                opacity: 0,
                rotationY: -60,
                rotationX: 20,
                y: 150,
                x: (index) => (index % 2 === 0 ? -100 : 100),
            });

            // Initial state - connectors hidden (desktop only)
            gsap.set(connectors, {
                scaleX: 0,
                opacity: 0,
            });

            // Create timeline for sequential animations (desktop only)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 60%",
                    end: "bottom 20%",
                    scrub: 1.5,
                },
            });

            // Animate steps sequentially with connected flow (desktop only)
            steps.forEach((step, index) => {
                const delay = index * 0.3;

                tl.to(
                    step,
                    {
                        scale: 1,
                        z: 0,
                        opacity: 1,
                        rotationY: 0,
                        rotationX: 0,
                        y: 0,
                        x: 0,
                        duration: 1,
                        ease: "back.out(1.7)",
                    },
                    delay,
                );

                // Animate connector after step appears
                if (index < connectors.length) {
                    tl.to(
                        connectors[index],
                        {
                            scaleX: 1,
                            opacity: 1,
                            duration: 0.8,
                            ease: "power2.out",
                        },
                        delay + 0.5,
                    );
                }
            });

            // Removed floating animation - cards now stay constant
        } else {
            gsap.set(steps, {
                scale: 1,
                z: 0,
                opacity: 1,
                rotationY: 0,
                rotationX: 0,
                y: 0,
                x: 0,
            });

            gsap.set(connectors, {
                scaleX: 1,
                opacity: 1,
            });
        }

        // Button marquee animation (works on all devices)
        if (button) {
            const marqueeText = button.querySelector('.marquee-text');
            if (marqueeText) {
                gsap.to(marqueeText, {
                    x: "-50%",
                    duration: 5,
                    ease: "none",
                    repeat: -1,
                });
            }
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    const addToRefs = (el, index) => {
        if (el && !stepsRef.current.includes(el)) {
            stepsRef.current[index] = el;
        }
    };

    const addToConnectorRefs = (el, index) => {
        if (el && !connectorsRef.current.includes(el)) {
            connectorsRef.current[index] = el;
        }
    };

    const steps = [
        {
            number: "01",
            title: "Book a Call",
            description: "We discuss your business goals and challenges.",
            icon: (
                <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        fill="currentColor"
                    />
                </svg>
            ),
        },
        {
            number: "02",
            title: "Get a Strategy Blueprint",
            description: "Clear steps to strengthen and grow your business.",
            icon: (
                <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" />
                    <polyline points="14,2 14,8 20,8" fill="currentColor" />
                    <line x1="16" y1="13" x2="8" y2="13" stroke="white" strokeWidth="2" />
                    <line x1="16" y1="17" x2="8" y2="17" stroke="white" strokeWidth="2" />
                    <polyline points="10,9 9,9 8,9" stroke="white" strokeWidth="2" />
                </svg>
            ),
        },
        {
            number: "03",
            title: "Implement & Grow",
            description: "We work together to deliver results.",
            icon: (
                <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                    <path d="M2 17l10 5 10-5" fill="currentColor" />
                    <path d="M2 12l10 5 10-5" fill="currentColor" />
                </svg>
            ),
        },
    ];

    return (
        <section 
            ref={sectionRef}
            className={`section ${styles.engagementSection}`}
            style={{
                perspective: "2000px",
                perspectiveOrigin: "center center",
            }}
        >
            <div className={styles.content}>
                {/* Header */}
                <div className={styles.header}>
                    <TextReveal as="h2" className={styles.headline}>
                        Engagement Pathway
                    </TextReveal>
                    <TextReveal as="p" className={styles.subtitle} delay={0.2}>
                        Your 3 Steps to Working Together
                    </TextReveal>
                </div>

                <div className={styles.stepsContainer}>
                    <div className={styles.stepsRow}>
                        {steps.map((step, index) => (
                            <div key={index} className={styles.stepWrapper}>
                                <div
                                    ref={(el) => addToRefs(el, index)}
                                    className={styles.step}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Number Badge */}
                                    <div className={styles.stepNumber}>
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={styles.stepIcon}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className={styles.stepTitle}>
                                        {step.title}
                                    </h3>
                                    <p className={styles.stepDescription}>
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connectors - Hidden on mobile, visible on large screens */}
                                {index < steps.length - 1 && (
                                    <div className={styles.connectorWrapper}>
                                        <div
                                            ref={(el) => addToConnectorRefs(el, index)}
                                            className={styles.connector}
                                        >
                                            <div className={styles.connectorLine}></div>
                                            <div className={styles.connectorPulse}></div>
                                            {/* Flowing particles */}
                                            <div
                                                className={styles.connectorParticle}
                                                style={{ animationDelay: `${index * 0.5}s` }}
                                            ></div>
                                        </div>
                                        {/* Arrow */}
                                        <div className={styles.connectorArrow}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.ctaContainer}>
                    <a
                        href="https://calendly.com/team-symbiotes/book-appointement"
                        target="_blank"
                        rel="noopener noreferrer"
                        ref={buttonRef}
                        className={styles.ctaButton}
                    >
                        <div className={styles.marqueeWrapper}>
                            <div className="marquee-text">
                                Start Your Journey • Transform Your Business • Achieve Success • Start Your Journey • Transform Your Business • Achieve Success •
                            </div>
                        </div>
                        <div className={styles.buttonOverlay}></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Engagement;
