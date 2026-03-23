import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './About.module.css';

const CARDS = [
  { ico: '⚡', cls: 'g', title: 'Frontend Engineering',
    body: 'React.js, Next.js 15, TypeScript, Redux Toolkit, Tailwind CSS — pixel-perfect, responsive, performant UIs optimised for every device.' },
  { ico: '🛠', cls: 'g', title: 'Backend & API Design',
    body: 'MVC architecture, JWT authentication, WebSocket systems, REST APIs, Redis caching, PostgreSQL and MongoDB modelling built to scale.' },
  { ico: '🤖', cls: 't', title: 'AI / LLM Integration',
    body: 'Groq API, LLaMA 3.3 70B, LangChain, prompt engineering with persistent context — production deployments, not prototypes.' },
  { ico: '🔗', cls: 'b', title: 'DevOps & Systems',
    body: 'CI/CD pipelines, Docker basics, rate limiting, WebSocket event architecture — end-to-end ownership from schema to production.' },
];

const BADGES = [
  { label: 'Full Stack Dev',     cls: 'gold' },
  { label: 'AI / LLM',          cls: 'gold' },
  { label: 'Real-Time Systems',  cls: 'teal' },
  { label: 'Backend Arch',       cls: 'blue' },
  { label: 'Open to Work',       cls: 'gold' },
];

export const About = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <section id="about" className={`${styles.section} section`} ref={ref}>
      <div className="wrap pad">
        <p className="eyebrow rv">About Me</p>
        <h2 className={`${styles.heading} rv d1`}>
          Passionate builder,<br />
          <span>ready to contribute.</span>
        </h2>

        <div className={styles.grid}>
          {/* Bio */}
          <div className={`${styles.bio} rv`}>
            <p>I'm a <strong>Full Stack Developer</strong> based in Hyderabad, India, specialising in scalable real-time web applications. My stack spans <strong>React and Next.js 15 on the frontend</strong> to <strong>Node.js, Express, PostgreSQL, and MongoDB on the backend</strong> — with recent production work in AI/LLM integrations.</p>
            <p>I integrated <strong>Groq's LLaMA 3.3 70B via LangChain</strong> in a live weather platform — persistent AI chat context, auto-generated briefings, and natural-language queries against live data. These are deployed, working products — not experiments.</p>
            <p>Before engineering, I was a Teaching Assistant at <strong>Coding Ninjas</strong>, mentoring 100+ students through DSA and full-stack concepts. That experience sharpened my communication, debugging instincts, and ability to perform under pressure.</p>
            <p>I'm <strong>actively seeking a full-time role</strong> where I can own features end-to-end, ship fast, and grow alongside people who genuinely care about the craft.</p>
            <div className={styles.badges}>
              {BADGES.map((b) => (
                <span key={b.label} className={`${styles.badge} ${styles[b.cls]}`}>{b.label}</span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className={styles.cardStack}>
            {CARDS.map((c, i) => (
              <div key={c.title} className={`${styles.card} rv d${i + 1}`}>
                <div className={`${styles.ico} ${styles[`ico${c.cls.toUpperCase()}`]}`}>{c.ico}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
