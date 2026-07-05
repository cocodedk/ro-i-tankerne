import { useEffect, useRef } from 'react';

/** Translates the child element marked [data-parallax-img] as the section
 *  scrolls through the viewport. Transform-based (iOS-safe). */
export function useParallax(strength = 0.25) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = el.querySelector<HTMLElement>('[data-parallax-img]');
    if (!img) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2 - window.innerHeight / 2;
      const progress = mid / Math.max(window.innerHeight, 1);
      img.style.transform = `translateY(${(progress * strength * 100).toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  return ref;
}
