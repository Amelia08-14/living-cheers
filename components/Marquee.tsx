import LeafMark from './LeafMark';
import styles from './Marquee.module.css';

const WORDS = ['Meubles', 'Salons', 'Confort'];

function Group() {
  return (
    <div className={styles.group}>
      {Array.from({ length: 3 }).flatMap((_, r) =>
        WORDS.map((w, i) => (
          <span key={`${r}-${w}`} className={styles.item}>
            <span className={i % 2 ? styles.thin : styles.bold}>{w}</span>
            <LeafMark className={styles.leaf} strokeWidth={5} />
          </span>
        )),
      )}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className={styles.band} aria-hidden="true">
      <div className={styles.track}>
        <Group />
        <Group />
      </div>
    </div>
  );
}
