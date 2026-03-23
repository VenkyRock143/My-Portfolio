import { useRef } from 'react';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Contact.module.css';

const LINKS = [
  { href: 'mailto:venky.balusani1@gmail.com',                           icon: '✉',  label: 'venky.balusani1@gmail.com', external: false },
  { href: 'https://www.linkedin.com/in/venkatesh-balusani-9724aa180',   icon: '💼', label: 'LinkedIn',                  external: true  },
  { href: 'https://github.com/VenkyRock143',                            icon: '⌥',  label: 'GitHub',                    external: true  },
  { href: 'https://leetcode.com/u/venkycrash45/',                          icon: '⚡', label: 'LeetCode',                  external: true  },
];

export const Contact = () => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <footer id="contact" className={`${styles.footer} section`} ref={ref}>
      {/* Glow orb */}
      <span className={styles.orb} />

      <div className={styles.wrap}>
        <p className={`eyebrow rv ${styles.eyebrowCenter}`}>Let's Connect</p>

        <h2 className={`${styles.heading} rv d1`}>
          Ready to contribute{' '}
          <span>from day one.</span>
        </h2>

        <p className={`${styles.sub} rv d2`}>
          I'm <strong>actively seeking full-time roles</strong> in full-stack
          development. If you value ownership, clean code, and fast shipping —
          let's talk.
        </p>

        <div className={`${styles.links} rv d3`}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.clink}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
            >
              <span className={styles.icon}>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1THaU7l-QOEMCLQ1rVwIwU0dxznpbtHHT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.cta} rv d4`}
        >
          Download Resume ↗
        </a>
      </div>

      <div className={styles.bar}>
        <span>
          Built by{' '}
          <a href="https://github.com/VenkyRock143" target="_blank" rel="noopener noreferrer">
            Venkatesh Balusani
          </a>{' '}
          · Hyderabad, India
        </span>
        <span>
          <a href="mailto:venky.balusani1@gmail.com">venky.balusani1@gmail.com</a>
        </span>
      </div>
    </footer>
  );
};
