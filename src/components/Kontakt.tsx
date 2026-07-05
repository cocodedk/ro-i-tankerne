import styles from './Kontakt.module.css';
import { kontakt } from '../content/site';
import { Reveal } from './Reveal';

type ContactPrefix = 'mailto:' | 'tel:' | '';
const isPlaceholder = (v: string) => v.startsWith('[');

function ContactLine({ value, prefix }: { value: string; prefix: ContactPrefix }) {
  if (isPlaceholder(value)) return <span className={styles.placeholder}>{value}</span>;
  const href = prefix === 'tel:' ? `${prefix}${value.replace(/\s/g, '')}` : `${prefix}${value}`;
  return <a className={styles.link} href={href}>{value}</a>;
}

export function Kontakt() {
  return (
    <section id="kontakt" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <p className="kicker">{kontakt.kicker}</p>
          <h2>{kontakt.heading}</h2>
          <p className={styles.lead}>{kontakt.lead}</p>
          <div className={styles.lines}>
            <p>{kontakt.mailLabel} <ContactLine value={kontakt.email} prefix="mailto:" /></p>
            <p>{kontakt.phoneLabel} <ContactLine value={kontakt.phone} prefix="tel:" /></p>
          </div>
          <div className={styles.social}>
            <p>{kontakt.follow} <ContactLine value={kontakt.instagram} prefix="" /> · <ContactLine value={kontakt.facebook} prefix="" /></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
