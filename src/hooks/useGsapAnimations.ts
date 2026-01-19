import { useEffect, useRef } from 'react';

// Type definitions for GSAP (from CDN)
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

/**
 * GSAP Scroll Animations Hook
 * Uses GSAP + ScrollTrigger from CDN for subtle scroll-based animations
 * Free plugins only - no ScrollSmoother or paid features
 * Optimized for mobile performance and Vercel hosting
 */

interface UseGsapScrollOptions {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  markers?: boolean;
  scrub?: boolean | number;
  once?: boolean;
}

/**
 * Fade In Up Animation
 * Element fades in and slides up when scrolled into view
 */
export function useGsapFadeInUp(options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // Set initial state
    gsap.set(elementRef.current, {
      opacity: 0,
      y: 50,
    });

    // Animate on scroll
    gsap.to(elementRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || 'top 85%',
        end: options.end || 'top 70%',
        toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [options.trigger, options.start, options.end, options.markers, options.once]);

  return elementRef;
}

/**
 * Fade In Left Animation
 * Element fades in from the left when scrolled into view
 */
export function useGsapFadeInLeft(options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(elementRef.current, {
      opacity: 0,
      x: -60,
    });

    gsap.to(elementRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || 'top 85%',
        toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [options.trigger, options.start, options.markers, options.once]);

  return elementRef;
}

/**
 * Fade In Right Animation
 * Element fades in from the right when scrolled into view
 */
export function useGsapFadeInRight(options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(elementRef.current, {
      opacity: 0,
      x: 60,
    });

    gsap.to(elementRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || 'top 85%',
        toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [options.trigger, options.start, options.markers, options.once]);

  return elementRef;
}

/**
 * Scale In Animation
 * Element scales up from 0.8 to 1 when scrolled into view
 */
export function useGsapScaleIn(options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(elementRef.current, {
      opacity: 0,
      scale: 0.8,
    });

    gsap.to(elementRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || 'top 85%',
        toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [options.trigger, options.start, options.markers, options.once]);

  return elementRef;
}

/**
 * 3D Lift Animation
 * Element lifts with 3D transform when scrolled into view
 * Only when 3D mode is enabled
 */
export function useGsap3DLift(options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    // Check if 3D mode is enabled
    const is3DEnabled = document.documentElement.classList.contains('threeD-enabled');

    if (is3DEnabled) {
      gsap.set(elementRef.current, {
        opacity: 0,
        y: 60,
        rotateX: -15,
        transformPerspective: 1200,
      });

      gsap.to(elementRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: options.trigger || elementRef.current,
          start: options.start || 'top 85%',
          toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
          markers: options.markers || false,
        },
      });
    } else {
      // Fallback to simple fade in up if 3D disabled
      gsap.set(elementRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.to(elementRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: options.trigger || elementRef.current,
          start: options.start || 'top 85%',
          toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
          markers: options.markers || false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [options.trigger, options.start, options.markers, options.once]);

  return elementRef;
}

/**
 * Stagger Children Animation
 * Animates multiple children with a stagger delay
 * Use with data-gsap-item attribute on children
 */
export function useGsapStaggerChildren(
  childrenSelector = '[data-gsap-item]',
  options: UseGsapScrollOptions = {}
) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    const children = containerRef.current.querySelectorAll(childrenSelector);

    if (children.length === 0) return;

    gsap.set(children, {
      opacity: 0,
      y: 40,
    });

    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: options.trigger || containerRef.current,
        start: options.start || 'top 80%',
        toggleActions: options.once !== false ? 'play none none none' : 'play reverse play reverse',
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [childrenSelector, options.trigger, options.start, options.markers, options.once]);

  return containerRef;
}

/**
 * Parallax Scroll Animation
 * Element moves at different speed than scroll
 */
export function useGsapParallax(speed = 0.5, options: UseGsapScrollOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || typeof window === 'undefined') return;
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(elementRef.current, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: options.scrub !== undefined ? options.scrub : 1,
        markers: options.markers || false,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, [speed, options.trigger, options.scrub, options.markers]);

  return elementRef;
}
