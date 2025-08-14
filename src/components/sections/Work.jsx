import React from 'react';
import TextReveal from '../shared/TextReveal';
import ArrowUpRight from '../icons/ArrowUpRight';
import styles from './Work.module.css';

const Work = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            category: "Web Design & Development",
            year: "2024",
            image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800",
            link: "#"
        },
        {
            title: "Brand Identity System",
            category: "Branding & Design",
            year: "2024",
            image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
            link: "#"
        },
        {
            title: "Portfolio Website",
            category: "Webflow Development",
            year: "2023",
            image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
            link: "#"
        }
    ];

    return (
        <section id="work" className={`section ${styles.workSection}`}>
            <div className={styles.content}>
                <TextReveal as="h2" className="heading-large mb-large">
                    Selected Work
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