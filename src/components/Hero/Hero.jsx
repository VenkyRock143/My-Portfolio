import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.animatedText}`}>Hi <span className={styles.emoji}>👋</span>, I'm Venkatesh</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer with hands-on experience in building and maintaining web applications using the MERN stack. 
          Proficient in Java, MongoDB, Express, React & Node!
        </p>
        <a href="https://drive.google.com/file/d/1ePMxEv60eGd2HvlZBleBvIX9cvC91JnY/view?usp=sharing" 
        className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
