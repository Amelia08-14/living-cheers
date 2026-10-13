import type { CSSProperties } from 'react';
import styles from './LeafMark.module.css';

// Pétales du logo Living Cheers (4 feuilles qui se rejoignent au centre).
const ANGLES = [-135, -45, 135, 45];
const PETAL = 'M14 0 Q58 -40 104 0 Q58 40 14 0Z';

type Props = {
  className?: string;
  /** Trace les pétales un à un (animation d'intro). */
  draw?: boolean;
  strokeWidth?: number;
};

export default function LeafMark({ className, draw = false, strokeWidth = 2.2 }: Props) {
  return (
    <svg
      className={[styles.mark, draw ? styles.draw : '', className].filter(Boolean).join(' ')}
      viewBox="-112 -112 224 224"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ANGLES.map((a, i) => (
        <path
          key={a}
          d={PETAL}
          pathLength={1}
          transform={`rotate(${a})`}
          style={{ '--p': i } as CSSProperties}
        />
      ))}
    </svg>
  );
}
