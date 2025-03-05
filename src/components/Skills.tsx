import React from "react";
import styles from "../styles/skills.module.scss";

const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills</h2>

        <div className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>Using Now:</h3>
          <div className={styles.skillList}>
            <div className={styles.skill}>HTML</div>
            <div className={styles.skill}>CSS</div>
            <div className={styles.skill}>JavaScript</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>TypeScript</div>
          </div>
        </div>

        <div className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>Learning:</h3>
          <div className={styles.skillList}>
            <div className={styles.skill}>NodeJs</div>
            <div className={styles.skill}>React</div>
            <div className={styles.skill}>CSS</div>
          </div>
        </div>

        <div className={styles.skillSection}>
          <h3 className={styles.sectionTitle}>Different:</h3>
          <div className={styles.skillList}>
            <div className={styles.skill}>C++</div>
            <div className={styles.skill}>Java</div>
            <div className={styles.skill}>Python</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
