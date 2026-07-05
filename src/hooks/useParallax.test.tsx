import { render } from '@testing-library/react';
import { useParallax } from './useParallax';

function Demo() {
  const ref = useParallax(0.5);
  return (
    <section ref={ref}>
      <img data-parallax-img alt="" src="x.webp" />
    </section>
  );
}

test('applies a translateY transform to the marked child on scroll', () => {
  const { container } = render(<Demo />);
  window.dispatchEvent(new Event('scroll'));
  const img = container.querySelector<HTMLElement>('[data-parallax-img]')!;
  // jsdom: rects are 0, so transform is set (possibly 0px) — key is it IS managed
  expect(img.style.transform).toMatch(/translateY\(.*px\)/);
});

test('does nothing under prefers-reduced-motion', () => {
  const orig = window.matchMedia;
  window.matchMedia = ((q: string) => ({
    ...orig(q),
    matches: q.includes('prefers-reduced-motion'),
  })) as typeof window.matchMedia;
  const { container } = render(<Demo />);
  window.dispatchEvent(new Event('scroll'));
  const img = container.querySelector<HTMLElement>('[data-parallax-img]')!;
  expect(img.style.transform).toBe('');
  window.matchMedia = orig;
});
