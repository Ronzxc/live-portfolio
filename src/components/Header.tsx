import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/header.module.scss";

const Header: React.FC = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.container}>
      <Link to="hero" smooth={true} duration={500}><div className={styles.logo}>My Portfolio</div></Link>

        <div className={styles.navLinks}>
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          
        </div>

        <Link to="contact" smooth={true} duration={500}><button className={styles.contactBtn}>Contact Me</button></Link>
      </div>
    </nav>
  );
};

export default Header;
