import React, { useState } from "react";
import styles from "../styles/portfolio.module.scss";

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const projects = {
    Frontend: [
      { name: "SMS Fraud Detection", description: "Comparison of 3 AI models for detecting SMS fraud (Reactjs & Flask)", info: "https://github.com/omzkiii/FraudDetectionComparison" },
      { name: "frontend-crud-exam", description: "Designing the front-end of User Management and functionality of CRUD (React, Reactstrap, & SASS)", info: "https://github.com/Ronzxc/frontend-crud-exam" },
      { name: "Danpass", description: "A secured and fully working login/Signup for safekeeping of passwords in every accounts", info: "https://danpass.xyz/#/auth/signin" },
    ],
    Backend: [
      { name: "Bankers Algorithm", description: "Develop a Java simulation for Deadlock Detection in operating systems.", info: "https://github.com/Ronzxc/bankers-algo" },
      { name: "Batch Queue Algortihm", description: "Develop a Java simulation for Batch Queue in operating systems.", info: "#https://github.com/Ronzxc/ProjectOS" },
      { name: "Email Automation", description: "automation of clock in and clock out email.", info: "https://github.com/Ronzxc/email-automation" },
    ],
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.tabs}>
          <button
            className={activeTab === "Frontend" ? styles.active : ""}
            onClick={() => setActiveTab("Frontend")}
          >
            Frontend/GUI
          </button>
          <button
            className={activeTab === "Backend" ? styles.active : ""}
            onClick={() => setActiveTab("Backend")}
          >
            Backend/Coded
          </button>
        </div>

        <div className={styles.projects}>
          {projects[activeTab].map((project, index) => (
            <div key={index} className={styles.project}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a href={project.info} className={styles.info}>
                  Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
