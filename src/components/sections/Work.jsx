import React from 'react';
import TextReveal from '../shared/TextReveal';
import ArrowUpRight from '../icons/ArrowUpRight';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "Business Structuring & Governance",
            category: "Transition from informal to professionally managed",
            image: "/1.png",
            link: "#"
        },
        {
            title: "Mentorship for Founders & First-Generation Entrepreneurs ",
            category: " Strategic direction to scale confidently",
            image: "/2.png",
            link: "#"
        },
        {
            title: "Investor Readiness & Capital Access",
            category: "From collateral facilitation to investor trust-building",
            image: "/3.png",
            link: "#"
        },
        {
            title: "Growth Advisory ",
            category: "Scale-up strategies, governance improvements, and risk management",
            image: "/4.png",
            link: "#"
        },
        {
            title: "Financial Inclusion Support ",
            category: "Helping businesses with growth potential access the resources they need",
            image: "/5.png",
            link: "#"
        }
    ];

    return (
        <section id="work" className={`section ${styles.workSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-large">
                    Advisory Services
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    How I Help Leaders Win Long-Term
                </TextReveal>
                <div className={styles.projectsList}>
                    {projects.map((project, index) => (
                        <TextReveal 
                            key={index}
                            as="a" 
                            href={project.link}
                            className={styles.projectItem}
                            delay={index * 0.1}
                            data-hoverable
                        >
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className={styles.projectInfo}>
                                <div className={styles.projectMeta}>
                                    <span className={styles.projectCategory}>{project.category}</span>
                                    <span className={styles.projectYear}>{project.year}</span>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <div className={styles.projectArrow}>
                                    <ArrowUpRight />
                                </div>
                            </div>
                        </TextReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;