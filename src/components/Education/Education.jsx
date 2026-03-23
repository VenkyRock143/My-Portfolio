import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Education.module.css';

const EDU = [
  {
    deg:  'B.Tech — Electronics & Communication Engineering',
    inst: 'Siddhartha Institute of Technology & Science, Hyderabad',
    yr:   '2015 – 2022',
    mods: [],
  },
  {
    deg:  'Full Stack Web Development',
    inst: 'Coding Ninjas — Certificate Program',
    yr:   'Comprehensive curriculum · Capstone projects',
    mods: ['Frontend', 'Backend', 'React', 'DSA', 'DBMS', 'System Design'],
  },
];

export const Education = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="education" className={`${styles.section} section`} ref={ref}>
      <div className="wrap pad">
        <p className="eyebrow rv">Education &amp; Certifications</p>
        <h2 className={`${styles.heading} rv d1`}>
          My <span>background</span>
        </h2>

        <div className={styles.grid}>
          {EDU.map((e, i) => (
            <div key={e.deg} className={`${styles.card} rv ${i > 0 ? 'd1' : ''}`}>
              <h3 className={styles.deg}>{e.deg}</h3>
              <p className={styles.inst}>{e.inst}</p>
              <p className={styles.yr}>{e.yr}</p>
              {e.mods.length > 0 && (
                <div className={styles.mods}>
                  {e.mods.map((m) => (
                    <span key={m} className={styles.mod}>{m}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
