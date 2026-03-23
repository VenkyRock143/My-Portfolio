import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import data from '../../data/projects.json';
import styles from './Projects.module.css';

/* ─── Tag colour map ─── */
const TAG_CLS = { ai: styles.tagAi, rt: styles.tagRt, fs: styles.tagFs };

/* ─── Featured card ─── */
const FeaturedCard = ({ p, delay }) => (
  <div className={`${styles.card} rv ${delay ? `d${delay}` : ''}`}>
    <div className={styles.cardTop}>
      <div className={styles.cardIco}>{p.emoji}</div>
      {p.tagType && <span className={`${styles.tag} ${TAG_CLS[p.tagType]}`}>{p.tag}</span>}
    </div>
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>{p.title}</h3>
      <p
        className={styles.cardDesc}
        dangerouslySetInnerHTML={{ __html: p.description }}
      />
      <div className={styles.stack}>
        {p.stack.map((s) => <span key={s} className={styles.stag}>{s}</span>)}
      </div>
      <div className={styles.links}>
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.pl}>⌥ Source</a>}
        {p.demo   && <a href={p.demo}   target="_blank" rel="noopener noreferrer" className={`${styles.pl} ${styles.plLive}`}>↗ Live</a>}
      </div>
    </div>
  </div>
);

/* ─── Mini card ─── */
const MiniCard = ({ p, delay }) => (
  <div className={`${styles.mini} rv ${delay ? `d${delay}` : ''}`}>
    <div className={styles.miniTop}>
      <span className={styles.miniTitle}>{p.emoji} {p.title}</span>
      <div className={styles.miniLinks}>
        {p.demo   && <a href={p.demo}   target="_blank" rel="noopener noreferrer" className={styles.ml}>↗</a>}
        {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.ml}>⌥</a>}
      </div>
    </div>
    <p className={styles.miniDesc}>{p.description}</p>
    <div className={styles.miniStack}>
      {p.stack.map((s) => <span key={s} className={styles.ms}>{s}</span>)}
    </div>
  </div>
);

export const Projects = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  const featured = data.filter((p) => p.featured);
  const more     = data.filter((p) => !p.featured);

  return (
    <section id="projects" className={`${styles.section} section`} ref={ref}>
      <div className="wrap pad">
        <p className="eyebrow rv">Work</p>
        <h2 className={`${styles.heading} rv d1`}>Things I've <span>shipped</span></h2>
        <p className={`${styles.sub} rv d2`}>
          Production-deployed applications — built, maintained, and owned entirely by me.
        </p>

        <span className={`${styles.featLabel} rv`}>✦ Flagship Projects</span>

        <div className={styles.grid}>
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} p={p} delay={i > 0 ? i : null} />
          ))}
        </div>

        <p className={styles.moreHead}>More Projects</p>
        <div className={styles.miniGrid}>
          {more.map((p, i) => (
            <MiniCard key={p.id} p={p} delay={i % 2 > 0 ? 1 : null} />
          ))}
        </div>
      </div>
    </section>
  );
};
