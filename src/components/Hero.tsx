import styles from './Hero.module.css';
import { hero } from '../content/site';
import { asset } from '../lib/asset';
import { useParallax } from '../hooks/useParallax';
import { Icon } from './icons';

export function Hero() {
  const ref = useParallax(0.15);
  return (
    <section ref={ref} className={styles.hero} id="top">
      <img
        data-parallax-img
        className={styles.image}
        src={asset(`${hero.image}-1920.webp`)}
        srcSet={`${asset(`${hero.image}-960.webp`)} 960w, ${asset(`${hero.image}-1920.webp`)} 1920w`}
        sizes="100vw"
        alt=""
        fetchPriority="high"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Icon name="logo" className={styles.logo} />
        <h1 className={styles.title}>{hero.title}</h1>
        <p className="kicker">{hero.tagline}</p>
        <a className={styles.cta} href="#kontakt">{hero.cta}</a>
      </div>
    </section>
  );
}
