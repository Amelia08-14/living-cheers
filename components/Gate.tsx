import type { CSSProperties } from 'react';
import LeafMark from './LeafMark';
import styles from './Gate.module.css';

// Intro : le logo se trace, puis la « grille » de lamelles s'ouvre
// comme les grilles de la galerie marchande.
export default function Gate() {
  return (
    <div className={styles.gate} aria-hidden="true">
      <div className={styles.slats}>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className={styles.slat} style={{ '--i': i } as CSSProperties} />
        ))}
      </div>
      <LeafMark className={styles.mark} draw />
    </div>
  );
}
