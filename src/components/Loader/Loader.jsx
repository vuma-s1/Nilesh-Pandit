import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Loader.module.css';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);
    const progressRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(onComplete, 500);
            }
        });

        // Animate progress bar
        tl.to(progressRef.current, {
            width: '100%',
            duration: 2,
            ease: 'power2.inOut'
        })
        // Fade out loader
        .to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut'
        })
        // Scale and hide
        .to(loaderRef.current, {
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.inOut'
        }, '-=0.3');

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div ref={loaderRef} className={styles.loader}>
            <div className={styles.content}>
                <div ref={textRef} className={styles.text}>
                    Loading Experience
                </div>
                <div className={styles.progressContainer}>
                    <div ref={progressRef} className={styles.progress}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;