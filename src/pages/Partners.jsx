import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/shared/TextReveal';
import styles from './Partners.module.css';

const Partners = () => {
    const partners = [
        {
            name: "Advocate Nilesh S. Pandith",
            role: "Senior Partner & IP Strategist",
            image: "/nilesh.png", // Updated to use actual image
            expertise: "Intellectual Property Law & Strategy",
            experience: "18+ Years",
            education: [
                "M.Sc. Microbiology – North Maharashtra University",
                "LL.B. – Pune University",
                "Registered Indian Patent Attorney – Indian Patent Office"
            ],
            currentRole: "Senior Manager, IPR at TCS",
            keyExpertise: [
                "Corporate Patent Strategy & Risk Management",
                "Global Patent Filings & Enforcement",
                "IP Portfolio Management",
                "Multi-disciplinary Team Leadership",
                "Patentability Analysis & Innovation Processes"
            ],
            achievements: [
                "Accelerated startup fundraising by 30% through strategic IP planning",
                "Secured patents and trademarks for multiple high-growth ventures",
                "Built long-term client partnerships across 50+ startups",
                "Recognized for mentorship in IP and startup law"
            ],
            background: "Nilesh brings over 18 years of expertise in intellectual property law and strategy. His background spans from research-based IP work at CSIR–National Chemical Laboratory and National Institute of Oceanography to leading corporate patent strategy at TCS. He specializes in demystifying complex legal landscapes for startups and providing strategic IP guidance that accelerates growth and investor appeal.",
            contact: {
                email: "nilesh@vnxlexicon.com",
                linkedin: "linkedin.com/in/nilesh-pandith"
            }
        },
        {
            name: "Shri Vikram P (VikramVKR)",
            role: "Strategic Partner & Business Mentor",
            image: "/vikram.png", // Updated to use actual image
            expertise: "Investment Banking & Startup Advisory",
            experience: "15+ Years",
            education: [
                "Investment Banking Certification",
                "Strategic Business Planning",
                "Startup Advisory & Mentorship"
            ],
            currentRole: "Strategic Advisor & Business Mentor",
            keyExpertise: [
                "Investment Banking & Capital Raising",
                "Startup Advisory & Growth Strategy",
                "Strategic Business Planning",
                "Investor Relations & Fundraising",
                "Business Model Optimization"
            ],
            achievements: [
                "Guided 50+ startups through successful funding rounds",
                "Established strategic partnerships with global investors",
                "Mentored founders in scaling operations effectively",
                "Developed innovative business models for high-growth ventures"
            ],
            background: "Vikram brings 15+ years of experience in investment banking and startup advisory. His expertise lies in guiding founders through complex funding landscapes, building investor relationships, and developing strategic frameworks that enable startups to scale without chaos. He has been instrumental in helping numerous startups secure funding and establish sustainable growth trajectories.",
            contact: {
                email: "vikram@vnxlexicon.com",
                linkedin: "linkedin.com/in/vikram-vkr"
            }
        }
    ];

    return (
        <div className={styles.partnersPage}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <Link to="/" className={styles.backButton}>
                        ← Back to Home
                    </Link>
                    <TextReveal as="h1" className={styles.pageTitle}>
                        Our Partners
                    </TextReveal>
                    <TextReveal as="p" className={styles.pageSubtitle} delay={0.2}>
                        Meet the strategic minds behind VNX Lexicon's success
                    </TextReveal>
                </div>
            </header>

            {/* Partners Section */}
            <main className={styles.main}>
                <div className={styles.container}>
                    {partners.map((partner, index) => (
                        <section key={index} className={styles.partnerSection}>
                            <div className={styles.partnerHeader}>
                                <div className={styles.partnerImageContainer}>
                                    <img 
                                        src={partner.image} 
                                        alt={partner.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className={styles.imagePlaceholder}>
                                        {partner.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                                <div className={styles.partnerInfo}>
                                    <TextReveal as="h2" className={styles.partnerName} delay={0.1}>
                                        {partner.name}
                                    </TextReveal>
                                    <TextReveal as="h3" className={styles.partnerRole} delay={0.2}>
                                        {partner.role}
                                    </TextReveal>
                                    <TextReveal as="div" className={styles.partnerBadges} delay={0.3}>
                                        <span className={styles.expertiseBadge}>{partner.expertise}</span>
                                        <span className={styles.experienceBadge}>{partner.experience}</span>
                                    </TextReveal>
                                </div>
                            </div>

                            <div className={styles.partnerContent}>
                                <div className={styles.contentGrid}>
                                    {/* Background */}
                                    <div className={styles.contentSection}>
                                        <TextReveal as="h4" className={styles.sectionTitle} delay={0.4}>
                                            Background
                                        </TextReveal>
                                        <TextReveal as="p" className={styles.backgroundText} delay={0.5}>
                                            {partner.background}
                                        </TextReveal>
                                    </div>

                                    {/* Key Expertise */}
                                    <div className={styles.contentSection}>
                                        <TextReveal as="h4" className={styles.sectionTitle} delay={0.6}>
                                            Key Expertise
                                        </TextReveal>
                                        <TextReveal as="ul" className={styles.expertiseList} delay={0.7}>
                                            {partner.keyExpertise.map((expertise, idx) => (
                                                <li key={idx}>{expertise}</li>
                                            ))}
                                        </TextReveal>
                                    </div>

                                    {/* Achievements */}
                                    <div className={styles.contentSection}>
                                        <TextReveal as="h4" className={styles.sectionTitle} delay={0.8}>
                                            Notable Achievements
                                        </TextReveal>
                                        <TextReveal as="ul" className={styles.achievementsList} delay={0.9}>
                                            {partner.achievements.map((achievement, idx) => (
                                                <li key={idx}>{achievement}</li>
                                            ))}
                                        </TextReveal>
                                    </div>

                                    {/* Education */}
                                    <div className={styles.contentSection}>
                                        <TextReveal as="h4" className={styles.sectionTitle} delay={1.0}>
                                            Education & Credentials
                                        </TextReveal>
                                        <TextReveal as="ul" className={styles.educationList} delay={1.1}>
                                            {partner.education.map((edu, idx) => (
                                                <li key={idx}>{edu}</li>
                                            ))}
                                        </TextReveal>
                                    </div>

                                    {/* Contact */}
                                    <div className={styles.contentSection}>
                                        <TextReveal as="h4" className={styles.sectionTitle} delay={1.2}>
                                            Contact
                                        </TextReveal>
                                        <TextReveal as="div" className={styles.contactInfo} delay={1.3}>
                                            <a href={`mailto:${partner.contact.email}`} className={styles.contactLink}>
                                                {partner.contact.email}
                                            </a>
                                            <a href={`https://${partner.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                                LinkedIn Profile
                                            </a>
                                        </TextReveal>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <TextReveal as="h3" className={styles.ctaTitle}>
                        Ready to Work with Our Partners?
                    </TextReveal>
                    <TextReveal as="p" className={styles.ctaText} delay={0.2}>
                        Get expert legal and strategic guidance for your startup
                    </TextReveal>
                    <TextReveal as="div" className={styles.ctaButtons} delay={0.3}>
                        <Link to="/#contact" className={styles.primaryButton}>
                            Get Started
                        </Link>
                        <Link to="/" className={styles.secondaryButton}>
                            Back to Home
                        </Link>
                    </TextReveal>
                </div>
            </section>
        </div>
    );
};

export default Partners;
