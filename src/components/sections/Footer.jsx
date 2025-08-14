import React from 'react';
import TextReveal from '../shared/TextReveal';
import Logo from '../icons/Logo';
import styles from './Footer.module.css';

const Footer = () => {
    const socialLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Dribbble', url: '#' }
    ];

    return (
        <footer id="contact" className={`section ${styles.footerSection}`}>
            <div className={styles.content}>
                <div className={styles.cta}>
                    <TextReveal as="h2" className="heading-display">
                        Let's work<br/>together
                    </TextReveal>
                    <TextReveal as="p" className={`text-body ${styles.ctaText}`} delay={0.2}>
                        Ready to bring your vision to life? Let's create something amazing together.
                    </TextReveal>
                    <TextReveal as="a" 
                        href="mailto:hello@divyanshagarwal.com" 
                        className={styles.emailLink}
                        delay={0.3}
                        data-hoverable
                    >
                        hello@divyanshagarwal.com
                    </TextReveal>
                </div>
                
                <div className={styles.footerBottom}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.social}>
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index}
                                href={link.url} 
                                className={styles.socialLink}
                                data-hoverable
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className={styles.copyright}>
                        <span>© 2024 Divyansh Agarwal</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;