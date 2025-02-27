import React from "react";
import styles from "../styles/about.module.scss";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>ABOUT ME</h2>
        <p className={styles.description}>
        I am Ronwaldo Espinosa, a 4th-year Computer Science student passionate about technology and innovation. 
        My journey in tech has been shaped by hands-on experience in front-end development, where I have worked on multiple projects, refining my skills in React, TypeScript, and other web development tech stack.
        </p>
        <p className={styles.description}>
        Beyond coding, I am an active student leader and a Microsoft Learn Student Ambassador, where I contribute to the tech community by organizing events, and sharing knowledge on the latest technologies. 
        My leadership experiences have strengthened my ability to collaborate, communicate, and adapt to dynamic challenges.
        </p>

        <div className={styles.moreContainer}>
          <span className={styles.line} />
          <span className={styles.moreText}>MORE</span>
          <span className={styles.line} />
        </div>

        <div className={styles.services}>
          <div className={styles.service}>
            <h3 className={styles.serviceTitle}>DESIGN</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.service}>
            <h3 className={styles.serviceTitle}>DEVELOPMENT</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
          <div className={styles.service}>
            <h3 className={styles.serviceTitle}>MAINTENANCE</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;