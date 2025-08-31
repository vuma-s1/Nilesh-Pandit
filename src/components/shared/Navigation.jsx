import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../icons/Logo';
import styles from './Navigation.module.css';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navRef = useRef(null);

    const navItems = [
        { id: 'home', name: 'Home', href: '#home' },
        { id: 'about', name: 'About', href: '#about' },
        { id: 'services', name: 'Services', href: '#services' },
        { id: 'work', name: 'Work', href: '#work' },
        { id: 'partners', name: 'Partners', href: '/partners' },
        { id: 'contact', name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Background animation on scroll
        ScrollTrigger.create({
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                if (self.progress > 0.05) {
                    gsap.to(nav, {
                        backgroundColor: 'rgba(25, 26, 26, 0.95)',
                        backdropFilter: 'blur(20px)',
                        duration: 0.3
                    });
                } else {
                    gsap.to(nav, {
                        backgroundColor: 'rgba(25, 26, 26, 0.8)',
                        backdropFilter: 'blur(20px)',
                        duration: 0.3
                    });
                }
            }
        });

        // Active section tracking
        const sections = document.querySelectorAll('section[id], header[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        // Close mobile menu after clicking a link
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav ref={navRef} className={styles.navigation}>
            <div className={styles.navContent}>
                <div className={styles.logo} data-hoverable>
                    <Logo />
                </div>
                
                {/* Desktop Navigation */}
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                                onClick={(e) => handleNavClick(e, item.href)}
                                data-hoverable
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className={styles.navCta}>
                    <button 
                        className={styles.ctaButton} 
                        data-hoverable
                    >
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className={styles.mobileMenuButton}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.active : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <ul className={styles.mobileNavList}>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.href}
                                className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button 
                            className={styles.mobileCtaButton}
                        >
                            Let's Talk
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;