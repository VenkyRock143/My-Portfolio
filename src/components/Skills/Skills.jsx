import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Skills.module.css';

const GROUPS = [
  { label: 'Backend', color: 'g',
    skills: ['Node.js','Express.js','Socket.IO','REST APIs','JWT Auth','Redis / NodeCache','MVC Architecture','WebSockets'] },
  { label: 'Frontend', color: 'b',
    skills: ['React.js','Next.js 15','TypeScript','Redux Toolkit','Tailwind CSS','Bootstrap','HTML5 & CSS3','JavaScript ES6+'] },
  { label: 'AI / LLM — Production', color: 't',
    skills: ['Groq API','LLaMA 3.3 70B','LangChain','Prompt Engineering'] },
  { label: 'Databases', color: 'g',
    skills: ['PostgreSQL','MongoDB','MySQL'] },
  { label: 'Tools & DevOps', color: 'n',
    skills: ['Git & GitHub','Postman','Swagger','Docker (basic)','Render','Netlify','CI/CD (GitHub)','Java'] },
];

export const Skills = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="skills" className={`${styles.section} section`} ref={ref}>
      <div className="wrap pad">
        <p className="eyebrow rv">Technical Skills</p>
        <h2 className={`${styles.heading} rv d1`}>
          Everything I <span>work with</span>
        </h2>

        <div className={styles.groups}>
          {GROUPS.map((g) => (
            <div key={g.label} className={`${styles.group} rv`}>
              <div className={styles.groupHead}>
                <span className={styles.groupLabel}>{g.label}</span>
                <span className={styles.groupLine} />
              </div>
              <div className={styles.chips}>
                {g.skills.map((s) => (
                  <span key={s} className={`${styles.chip} ${styles[`c${g.color}`]}`}>
                    <span className={styles.dot} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
