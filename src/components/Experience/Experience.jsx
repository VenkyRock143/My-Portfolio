import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import data from '../../data/experience.json';
import styles from './Experience.module.css';

export const Experience = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="experience" className={`${styles.section} section`} ref={ref}>
      <div className="wrap pad">
        <p className="eyebrow rv">Experience</p>
        <h2 className={`${styles.heading} rv d1`}>
          Where I've <span>worked</span>
        </h2>

        <div className={styles.list}>
          {data.map((exp) => (
            <div key={exp.id} className={`${styles.item} rv`}>
              {/* Ghost number */}
              <span className={styles.ghost}>{exp.num}</span>

              {/* Left col */}
              <div className={styles.left}>
                <p className={styles.period}>
                  {exp.period[0]}<br />{exp.period[1]}
                </p>
                <p className={styles.org}>{exp.org}</p>
                {exp.cert && (
                  <a href={exp.cert} className={styles.cert}
                     target="_blank" rel="noopener noreferrer">
                    Certificate ↗
                  </a>
                )}
              </div>

              {/* Right col */}
              <div className={styles.right}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.badge}>{exp.badge}</span>
                <ul className={styles.points}>
                  {exp.points.map((pt, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: pt }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
