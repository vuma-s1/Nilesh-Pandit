import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Marquee.module.css';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const items = scrollContainer.querySelectorAll(`.${styles.marqueeItem}`);
    
    // Duplicate items for a seamless loop.
    items.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Create the main infinite scroll animation.
    const marqueeAnimation = gsap.to(scrollContainer, {
      xPercent: -50,
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });

    // Use ScrollTrigger to detect scroll direction and reverse the animation's timeScale.
    const st = ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        gsap.to(marqueeAnimation, {
          timeScale: self.direction, // 1 for down, -1 for up
          overwrite: true
        });
      }
    });

    // Cleanup GSAP instances on component unmount.
    return () => {
      st.kill();
      marqueeAnimation.kill();
    };
  }, []);

  return (
    <section className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <h2 className={styles.marqueeHeadline}>Why Startups Choose VNX Lexicon</h2>
        <div ref={scrollContainerRef} className={styles.marqueeScroll}>
          <div className={styles.marqueeItem}>
            <span className={styles.marqueeText}>• Trusted by 50+ Startups & Investors Globally • 18+ Years Combined Legal & Strategic Expertise • Secured IP & Contracts for Dozens of High-Growth Ventures • Guiding Startups from Incorporation to Successful Exit •</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
