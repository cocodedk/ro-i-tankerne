import styles from './AkutHjaelp.module.css';
import { akut } from '../content/site';

export function AkutHjaelp() {
  return (
    <section id="akut-hjaelp" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>{akut.heading}</h2>
        <p>{akut.lead}</p>
        <p className={styles.lines}>
          {akut.contacts.map((c) => (
            <a key={c.name} href={`tel:${c.phone.replace(/\s/g, '')}`} className={styles.line}>
              {c.name} – {c.phone}
            </a>
          ))}
        </p>
        <p className={styles.afgraensning}>{akut.afgraensning}</p>
      </div>
    </section>
  );
}
