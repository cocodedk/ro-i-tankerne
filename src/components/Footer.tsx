import styles from './Footer.module.css';
import { footer } from '../content/site';
import { Icon } from './icons';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Icon name="leaf" className={styles.icon} />
      <p className={styles.slogan}>{footer.slogan}</p>
      <p className={styles.meta}>{footer.copyright}</p>
      <p className={styles.meta}>{footer.privacy}</p>
    </footer>
  );
}
