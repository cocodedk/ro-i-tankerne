import { useEffect, useState } from 'react';
import styles from './Nav.module.css';
import { navLinks } from '../content/site';
import { Icon } from './icons';

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={styles.nav} data-solid={solid}>
      <a href="#top" className={styles.brand}>
        <Icon name="leaf" className={styles.brandIcon} />
        Ro i Tankerne
      </a>
      <ul className={styles.links}>
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
