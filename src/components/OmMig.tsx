import styles from './OmMig.module.css';
import { omMig } from '../content/site';
import { Reveal } from './Reveal';
import { Icon } from './icons';

export function OmMig() {
  return (
    <section id="om-mig">
      <div className={`container ${styles.grid}`}>
        <Reveal>
          <div className={styles.portraitFrame}>
            <Icon name="leaf" className={styles.portraitIcon} />
            <span>{omMig.portrait}</span>
          </div>
        </Reveal>
        <Reveal className={styles.text}>
          <p className="kicker">{omMig.kicker}</p>
          <h2>{omMig.heading}</h2>
          {omMig.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
