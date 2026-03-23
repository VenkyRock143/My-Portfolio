import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Hero.module.css';

const STATS = [
  { n: '10+',  l: 'Projects Deployed'  },
  { n: '100+', l: 'Students Mentored'  },
  { n: '95%',  l: 'Satisfaction Rate'  },
  { n: '3+',   l: 'Years Building'     },
];

export const Hero = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="hero" className={`${styles.hero} section`} ref={ref}>
      {/* Floating orbs */}
      <span className={styles.orb1} />
      <span className={styles.orb2} />

      <div className={styles.inner}>
        {/* Availability chip */}
        <div className={`${styles.status} rv`}>
          <span className={styles.statusInner}>
            <span className={styles.pulse} />
            OPEN TO WORK
          </span>
          Available for Full-Time Roles
        </div>

        {/* Name */}
        <h1 className={`${styles.name} rv d1`}>
          Venkatesh
          <em className={styles.nameEm}>Balusani</em>
        </h1>

        {/* Tagline */}
        <p className={`${styles.tagline} rv d2`}>
          <strong>Full Stack Developer</strong> — MERN · Next.js · Real-Time Systems ·{' '}
          <span className={styles.badge}>AI / LLM</span>
          <br />
          Building production-grade applications that scale and endure.
        </p>

        {/* CTA buttons */}
        <div className={`${styles.btns} rv d3`}>
          <a
            href="https://drive.google.com/file/d/1THaU7l-QOEMCLQ1rVwIwU0dxznpbtHHT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGold}
          >
            View Resume ↗
          </a>
          <a href="#projects" className={styles.btnOutline}>See My Work</a>
          <a href="mailto:venky.balusani1@gmail.com" className={styles.btnOutline}>Get In Touch</a>
        </div>

        {/* Info card (desktop only) */}
        <div className={`${styles.card} rv d4`}>
          <div className={styles.cardTop}>
            <span className={styles.cardLabel}>Profile</span>
            <div className={styles.cardDots}>
              <span className={styles.cd} />
              <span className={styles.cd} />
              <span className={styles.cd} />
            </div>
          </div>
          {[
            { k: 'Name',     v: 'Venkatesh Balusani', cls: styles.crGold   },
            { k: 'Stack',    v: 'MERN · Next.js · TypeScript'               },
            { k: 'AI/LLM',  v: 'Groq + LangChain',   cls: styles.crTeal   },
            { k: 'Projects', v: '10+ Deployed'                               },
          ].map((r) => (
            <div key={r.k} className={styles.cardRow}>
              <span className={styles.crKey}>{r.k}</span>
              <span className={`${styles.crVal} ${r.cls ?? ''}`}>{r.v}</span>
            </div>
          ))}
          <div className={styles.cardRow}>
            <span className={styles.crKey}>Status</span>
            <span className={styles.crBadge}>● Actively Hiring</span>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className={styles.stats}>
        {STATS.map((s, i) => (
          <div key={s.l} className={`${styles.stat} rv ${i > 0 ? `d${i}` : ''}`}>
            <div className={styles.statN}>{s.n}</div>
            <div className={styles.statL}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
