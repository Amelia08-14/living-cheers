'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Pic, { type PicName } from './Pic';
import styles from './Compare.module.css';

type Pair = { id: string; label: string; before: PicName; after: PicName; beforeAlt: string; afterAlt: string };

const PAIRS: Pair[] = [
  {
    id: 'hall',
    label: 'Le grand hall',
    before: 'real-hall',
    after: 'render-column',
    beforeAlt: 'Le local aujourd’hui : grand hall vide, plafond noir et carrelage gris',
    afterAlt: 'Rendu conceptuel du même hall, meublé de salons et de fauteuils',
  },
  {
    id: 'aisle',
    label: 'L’allée centrale',
    before: 'real-aisle',
    after: 'render-recliners',
    beforeAlt: 'Le local aujourd’hui : longue allée vide sous les luminaires',
    afterAlt: 'Rendu conceptuel de la même allée, bordée de salons sectionnels',
  },
  {
    id: 'arches',
    label: 'Les arcades',
    before: 'real-arches',
    after: 'render-arches',
    beforeAlt: 'Le local aujourd’hui : arcades blanches et corniche en bois, sans meubles',
    afterAlt: 'Rendu conceptuel des mêmes arcades, avec trois divans et des plantes',
  },
];

export default function Compare() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const stageRef = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const pair = PAIRS[active];

  // Petit va-et-vient à la première visite pour montrer que ça se glisse.
  useEffect(() => {
    const el = stageRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          if (touched.current) return;
          const t = Math.min((now - t0) / 2200, 1);
          setPos(50 + Math.sin(t * Math.PI * 2) * 22 * (1 - t));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="chantier" className={styles.section}>
      <div className="wrap">
        <p className={`eyebrow ${styles.eyebrow}`}>Le chantier</p>
        <h2 className={styles.h2}>Du local vide au salon.</h2>
        <p className={styles.lead}>
          Glissez pour passer de la photo du local, aujourd’hui, au rendu conceptuel de ce qui vous attend.
        </p>

        <div className={styles.tabs} role="tablist" aria-label="Choisir une vue">
          {PAIRS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={styles.tab}
              onClick={() => {
                setActive(i);
                setPos(50);
                touched.current = true;
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div ref={stageRef} className={styles.stage} style={{ '--pos': `${pos}%` } as CSSProperties}>
          <Pic
            key={`${pair.id}-after`}
            name={pair.after}
            alt={pair.afterAlt}
            sizes="(min-width: 1000px) 900px, 100vw"
            className={styles.layer}
          />
          <Pic
            key={`${pair.id}-before`}
            name={pair.before}
            alt={pair.beforeAlt}
            sizes="(min-width: 1000px) 900px, 100vw"
            className={`${styles.layer} ${styles.before}`}
          />

          <span className={`${styles.chip} ${styles.chipL}`}>Aujourd’hui</span>
          <span className={`${styles.chip} ${styles.chipR}`}>Bientôt · rendu conceptuel</span>

          <div className={styles.handle} aria-hidden="true">
            <span className={styles.knob}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          <input
            className={styles.range}
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={pos}
            aria-label="Comparer le local aujourd’hui et le rendu conceptuel"
            onChange={(e) => {
              touched.current = true;
              setPos(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </section>
  );
}
