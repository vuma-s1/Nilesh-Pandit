import React from 'react';
import TextReveal from '../shared/TextReveal';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={`section ${styles.aboutSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-large">
                    About Me
                </TextReveal>
                <div className={styles.description}>
                    <TextReveal as="p" className="text-body mb-medium" delay={0.1}>
                        I'm a creative designer and Webflow developer passionate about creating 
                        digital experiences that seamlessly blend aesthetics with functionality. 
                        With a keen eye for detail and a love for clean, minimalist design.
                    </TextReveal>
                    <TextReveal as="p" className="text-body mb-medium" delay={0.2}>
                        My approach combines strategic thinking with creative execution, 
                        ensuring every project not only looks beautiful but also serves 
                        its intended purpose effectively.
                    </TextReveal>
                </div>
                <div className={styles.skills}>
                    <TextReveal as="h3" className={styles.skillsTitle} delay={0.3}>
                        What I Do
                    </TextReveal>
                    <div className={styles.skillsList}>
                        <TextReveal as="div" className={styles.skill} delay={0.4}>
                            <span className={styles.skillNumber}>01</span>
                            <div>
                                <h4>Web Design</h4>
                                <p>Creating beautiful, user-centered digital experiences</p>
                            </div>
                        </TextReveal>
                        <TextReveal as="div" className={styles.skill} delay={0.5}>
                            <span className={styles.skillNumber}>02</span>
                            <div>
                                <h4>Webflow Development</h4>
                                <p>Building responsive, interactive websites with Webflow</p>
                            </div>
                        </TextReveal>
                        <TextReveal as="div" className={styles.skill} delay={0.6}>
                            <span className={styles.skillNumber}>03</span>
                            <div>
                                <h4>Brand Identity</h4>
                                <p>Developing cohesive visual identities and brand systems</p>
                            </div>
                        </TextReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;