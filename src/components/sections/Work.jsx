import React from 'react';
import TextReveal from '../shared/TextReveal';
import ArrowUpRight from '../icons/ArrowUpRight';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "Patent Strategy & IP Protection",
            category: "Comprehensive intellectual property strategy from drafting to enforcement",
            image: "/1.png",
            link: "#"
        },
        {
            title: "Startup Legal Foundation",
            category: "Complete legal framework for startup formation and compliance",
            image: "/2.png",
            link: "#"
        },
        {
            title: "Investment & Funding Support",
            category: "Legal expertise for successful fundraising and investor relations",
            image: "/3.png",
            link: "#"
        },
        {
            title: "Contract & Risk Management",
            category: "Strategic contract drafting and risk mitigation for growth",
            image: "/4.png",
            link: "#"
        },
        {
            title: "Exit Strategy & M&A",
            category: "Strategic planning for successful exits and acquisitions",
            image: "/5.png",
            link: "#"
        }
    ];

    return (
        <section id="work" className={`section ${styles.workSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Our Expertise
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Specialized Skills in Startup Legal & Strategic Advisory
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