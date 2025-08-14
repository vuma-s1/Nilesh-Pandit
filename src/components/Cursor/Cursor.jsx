import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Cursor.module.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const xTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
        const yTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

        const handleMouseMove = (e) => {
            gsap.to(cursor, { 
                x: e.clientX, 
                y: e.clientY, 
                duration: 0 
            });
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const handleMouseEnter = () => {
            gsap.to(follower, { 
                scale: 2.5, 
                backgroundColor: 'rgba(228, 228, 228, 0.4)',
                duration: 0.3,
                ease: "power2.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(follower, { 
                scale: 1, 
                backgroundColor: 'rgba(228, 228, 228, 0.2)',
                duration: 0.3,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Add hover effects to interactive elements
        const addHoverListeners = () => {
            const hoverableElements = document.querySelectorAll('a, button, [data-hoverable]');
            hoverableElements.forEach(el => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
            return hoverableElements;
        };

        let hoverableElements = addHoverListeners();

        // Re-add listeners when DOM changes
        const observer = new MutationObserver(() => {
            hoverableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            hoverableElements = addHoverListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            hoverableElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className={styles.cursor}></div>
            <div ref={followerRef} className={styles.cursorFollower}></div>
        </>
    );
};

export default Cursor;