import React from "react";
import styles from "./DetailsModal.module.css";

export default function DetailsModal({
  BsCodeSlash,
  BsWindowPlus,
  setModalIsActive,
  projects,
}) {
  return (
    <modal className={styles.modal}>
      <div className={styles.overlay} onClick={() => setModalIsActive(false)} />
      <div className={styles.modalContent}>
        <ul className={styles.infosContainer}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectInfosContainer}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <h4 className={styles.projectStack}>
                {project.language.join(" - ")}
              </h4>
              <div className={styles.linkSection}>
                <a
                  href={project.code_source}
                  target="_blank"
                  className={styles.projectLink}
                >
                  Code
                  <BsCodeSlash className={styles.projectIcon} />
                </a>
                {project.demo_link !== null ? (
                  <a
                    href={project.demo_link}
                    target="_blank"
                    className={styles.projectLink}
                  >
                    Live demo
                    <BsWindowPlus className={styles.projectIcon} />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <button
          className={styles.modalBtn}
          onClick={() => setModalIsActive(false)}
        >
          Close
        </button>
      </div>
    </modal>
  );
}
