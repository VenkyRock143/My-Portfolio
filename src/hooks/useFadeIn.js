import { useEffect, useRef } from 'react';

/**
 * Watches every .rv element inside `containerRef` (or the document if none
 * given) and adds the `on` class when it enters the viewport.
 * Siblings are staggered by 80 ms.
 */
export function useFadeIn(containerRef) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.parentElement;
          const siblings = parent
            ? [...parent.querySelectorAll('.rv')]
            : [entry.target];
          const idx = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add('on'), idx * 80);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.09, rootMargin: '0px 0px -36px 0px' }
    );

    const root = containerRef?.current ?? document;
    root.querySelectorAll('.rv').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef]);
}
