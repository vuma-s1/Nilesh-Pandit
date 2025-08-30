import React from 'react';
import TextReveal from '../shared/TextReveal';
import ArrowUpRight from '../icons/ArrowUpRight';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "Patent Strategy & Prosecution",
            category: "Drafting, filing, and defending patents",
            image: "/1.png",
            link: "#"
        },
        {
            title: "IP Portfolio Management",
            category: "Structuring and aligning IP with business goals",
            image: "/2.png",
            link: "#"
        },
        {
            title: "Legal Risk Mitigation",
            category: "Confidentiality, compliance frameworks, and dispute prevention",
            image: "/3.png",
            link: "#"
        },
        {
            title: "Cross-Functional Leadership",
            category: "Managing global IP teams and stakeholder communication",
            image: "/4.png",
            link: "#"
        },
        {
            title: "Research-Driven Insight",
            category: "Strong foundation in science and technology for IP evaluation",
            image: "/5.png",
            link: "#"
        }
    ];

    return (
        <section id="work" className={`section ${styles.workSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-medium">
                    Core Expertise
                </TextReveal>
                <TextReveal as="p" className={`text-body ${styles.subtitle}`} delay={0.2}>
                    Specialized Skills in Intellectual Property & Technology Law
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