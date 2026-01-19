import { useRef, useEffect } from 'react';

/**
 * Hook to apply fade-in-up animation when element comes into view
 * Uses Intersection Observer API (no external library needed)
 */
export function useFadeInUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * Hook to apply fade-in-up animation to multiple children
 */
export function useFadeInUpChildren() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          const children = ref.current.querySelectorAll('[data-fade-item]');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('fade-in-up');
            }, index * 100);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
