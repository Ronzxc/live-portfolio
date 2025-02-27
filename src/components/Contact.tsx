import React from "react";
import styles from "../styles/contact.module.scss";

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Me</h2>
        <p>If you have any questions or projects in mind, feel free to reach out!</p>
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="text" placeholder="Phone number" />
          <textarea placeholder="Your message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
