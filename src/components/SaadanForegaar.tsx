import styles from './SaadanForegaar.module.css';
import { saadan } from '../content/site';
import { Reveal } from './Reveal';

export function SaadanForegaar() {
  return (
    <section id="saadan-foregaar-det">
      <div className="container">
        <Reveal className={styles.header}>
          <p className="kicker">{saadan.kicker}</p>
          <h2>{saadan.heading}</h2>
        </Reveal>
        <ol className={styles.steps}>
          {saadan.steps.map((step, i) => (
            <li key={step.title}>
              <Reveal className={styles.step}>
                <span className={styles.number}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className={styles.note}>{saadan.note}</p>
      </div>
    </section>
  );
}
