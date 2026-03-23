import styles from './ProjectCard.module.css';

const CHIP_MAP = {
  ai: styles.chipAi,
  rt: styles.chipRt,
  fs: styles.chipFs,
};

const CHIP_LABEL = {
  ai: 'AI-Powered',
  rt: 'Real-Time',
  fs: 'Full Stack',
};

export const ProjectCard = ({ project, mini = false }) => {
  if (mini) {
    return (
      <div className={styles.miniCard}>
        <div className={styles.miniTop}>
          <span className={styles.miniTitle}>{project.emoji} {project.title}</span>
          <div className={styles.miniLinks}>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.miniLink} title="Live Demo">↗</a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.miniLink} title="Source">⌥</a>
            )}
          </div>
        </div>
        <p className={styles.miniDesc}>{project.description}</p>
        <div className={styles.miniStack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.mst}>{s}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.top}>
        <div className={styles.emoji}>{project.emoji}</div>
        {project.chipType && (
          <span className={`${styles.chip} ${CHIP_MAP[project.chipType] || ''}`}>
            {CHIP_LABEL[project.chipType] || project.chip}
          </span>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <span key={s} className={styles.st}>{s}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              ⌥ GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.demo}`}>
              ↗ Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
