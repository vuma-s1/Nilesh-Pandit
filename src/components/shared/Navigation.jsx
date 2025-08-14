import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo from '../icons/Logo';
import styles from './Navigation.module.css';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
    const navRef = useRef(null);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero', id: 'hero' },
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Services', href: '#services', id: 'services' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Work', href: '#work', id: 'work' },
        { name: 'Contact', href: '#contact', id: 'contact' }
    ];

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const nav = navRef.current;
        if (!nav) return;

        // Initial animation
        gsap.fromTo(nav, 
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 2.5 }
        );

        // Hide/show on scroll
        ScrollTrigger.create({
            start: 'top -80',
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === -1) {
                    gsap.to(nav, { y: 0, duration: 0.3 });
                } else {
                    gsap.to(nav, { y: -100, duration: 0.3 });
                }
            }
        });

        // Active section tracking
        const sections = document.querySelectorAll('section, header');
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
                    <a href="#contact" className={styles.ctaButton} data-hoverable>
                        Let's Talk
                    </a>
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
                        <a 
                            href="#contact" 
                            className={styles.mobileCtaButton}
                            onClick={(e) => handleNavClick(e, '#contact')}
                        >
                            Let's Talk
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;