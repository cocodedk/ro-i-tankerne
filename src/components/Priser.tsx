import styles from './Priser.module.css';
import { services, priser } from '../content/site';
import { Icon } from './icons';
import { Reveal } from './Reveal';

export function Priser() {
  return (
    <section id="priser">
      <div className="container">
        <Reveal className={styles.header}>
          <p className="kicker">{priser.kicker}</p>
          <h2>{priser.heading}</h2>
        </Reveal>
        <ul className={styles.list}>
          {services.map((s) => (
            <li key={s.id}>
              <Reveal className={styles.card}>
                <span className={styles.iconWrap}>
                  <Icon name={s.icon} className={styles.icon} />
                </span>
                <span className={styles.body}>
                  <span className={styles.title}>{s.title}</span>
                  <span className={styles.desc}>
                    {s.duration} – {s.description}
                  </span>
                  {s.note && <span className={styles.note}>{s.note}</span>}
                </span>
                <span className={styles.price}>{s.price}</span>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className={styles.outro}>{priser.outro}</p>
      </div>
    </section>
  );
}
