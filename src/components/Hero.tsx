import React from "react";
import styles from "../styles/hero.module.scss";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <h1>Hi, I am <span>Ron!</span></h1>
        <h2>Front-end Developer / UI Designer</h2>
        
        <div className={styles.socialLinks}>
          <a href="https://www.facebook.com/ronwaldo.espinosa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://github.com/Ronzxc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ronwaldo-espinosa-a923a9231/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};


export default Hero;