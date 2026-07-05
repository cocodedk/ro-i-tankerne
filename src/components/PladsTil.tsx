import styles from './PladsTil.module.css';
import { pladsTil } from '../content/site';
import { Reveal } from './Reveal';

export function PladsTil() {
  return (
    <section id="plads-til" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <p className="kicker">{pladsTil.kicker}</p>
          <h2>{pladsTil.heading}</h2>
        </Reveal>
        <Reveal>
          <ul className={styles.pills}>
            {pladsTil.items.map((item) => (
              <li key={item} className={styles.pill}>{item}</li>
            ))}
          </ul>
          <p className={styles.outro}>{pladsTil.outro}</p>
        </Reveal>
      </div>
    </section>
  );
}
