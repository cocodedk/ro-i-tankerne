import styles from './ParallaxDivider.module.css';
import type { Divider } from '../content/site';
import { asset } from '../lib/asset';
import { useParallax } from '../hooks/useParallax';

export function ParallaxDivider({ divider }: { divider: Divider }) {
  const ref = useParallax(0.3);
  return (
    <section ref={ref} className={styles.divider} aria-label={divider.alt}>
      <img
        data-parallax-img
        className={styles.image}
        src={asset(`${divider.image}-1920.webp`)}
        srcSet={`${asset(`${divider.image}-960.webp`)} 960w, ${asset(`${divider.image}-1920.webp`)} 1920w`}
        sizes="100vw"
        alt=""
        loading="lazy"
      />
      <div className={styles.overlay} />
      <p className={styles.slogan}>{divider.slogan}</p>
    </section>
  );
}
