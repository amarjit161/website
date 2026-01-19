import { useEffect } from 'react';

/**
 * GSAP ScrollTrigger Initializer
 * Sets up GSAP ScrollTrigger with optimal settings for wedding website
 * Free plugins only - no paid features
 */

export function useGsapInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set default ScrollTrigger settings
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
      start: 'top 85%',
    });

    // Configure for better mobile performance
    ScrollTrigger.config({
      limitCallbacks: true, // Throttle callbacks for performance
      syncInterval: 150, // Check scroll less frequently on mobile
    });

    // Refresh ScrollTrigger on window resize (debounced)
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);
}

/**
 * Apply GSAP animations to sections automatically
 * Finds elements with data-gsap attributes and animates them
 */
export function useGsapAutoAnimate() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // Animate all elements with data-gsap-fade-up
    const fadeUpElements = document.querySelectorAll('[data-gsap-fade-up]');
    fadeUpElements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 });
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate all elements with data-gsap-fade-left
    const fadeLeftElements = document.querySelectorAll('[data-gsap-fade-left]');
    fadeLeftElements.forEach((element) => {
      gsap.set(element, { opacity: 0, x: -60 });
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate all elements with data-gsap-fade-right
    const fadeRightElements = document.querySelectorAll('[data-gsap-fade-right]');
    fadeRightElements.forEach((element) => {
      gsap.set(element, { opacity: 0, x: 60 });
      gsap.to(element, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate all elements with data-gsap-scale
    const scaleElements = document.querySelectorAll('[data-gsap-scale]');
    scaleElements.forEach((element) => {
      gsap.set(element, { opacity: 0, scale: 0.8 });
      gsap.to(element, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Animate stagger groups
    const staggerGroups = document.querySelectorAll('[data-gsap-stagger]');
    staggerGroups.forEach((group) => {
      const items = group.querySelectorAll('[data-gsap-item]');
      if (items.length === 0) return;

      gsap.set(items, { opacity: 0, y: 40 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);
}

/**
 * Batch animation utility for multiple elements
 */
export function animateBatch(selector: string, animationProps: any) {
  if (typeof window === 'undefined') return;
  if (!window.gsap || !window.ScrollTrigger) return;

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;

  gsap.registerPlugin(ScrollTrigger);

  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  ScrollTrigger.batch(elements, {
    onEnter: (batch: any) => {
      gsap.to(batch, {
        ...animationProps,
        stagger: 0.15,
      });
    },
    start: 'top 85%',
  });
}
