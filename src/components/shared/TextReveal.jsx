import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, as: Component = 'div', delay = 0, ...props }) => {
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        const element = triggerRef.current;
        if (!element) return;

        // Make element visible for splitting
        gsap.set(element, { visibility: 'visible' });

        const split = new SplitType(element, { 
            types: 'lines',
            lineClass: 'split-line'
        });

        // Wrap each line for the masking effect
        split.lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.className = 'split-line-wrapper';
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        // Set initial state
        gsap.set(split.lines, { yPercent: 100 });

        const anim = gsap.to(split.lines, {
            yPercent: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'expo.out',
            delay: delay,
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });

        return () => {
            anim.kill();
            split.revert();
        };
    }, [delay]);

    return (
        <Component 
            ref={triggerRef} 
            style={{ visibility: 'hidden' }} 
            {...props}
        >
            {children}
        </Component>
    );
};

export default TextReveal;