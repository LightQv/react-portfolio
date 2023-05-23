import React from "react";
import styles from "./DetailsModal.module.css";

export default function DetailsModal({
  BsCodeSlash,
  BsWindowPlus,
  setModalIsActive,
}) {
  return (
    <modal className={styles.modal}>
      <div className={styles.overlay} onClick={() => setModalIsActive(false)} />
      <div className={styles.modalContent}>
        <section>
          <h2 className={styles.projectTitle}>WildFest</h2>
          <p className={styles.projectDescription}>
            is a website for a music festival that allow the users to check
            every different artists and prices.
          </p>
          <h4 className={styles.projectStack}>HTML - CSS - JavaScript</h4>
          <div className={styles.linkSection}>
            <a
              href="https://github.com/LightQv/Wild-Festival"
              target="_blank"
              className={styles.projectLink}
            >
              Code
              <BsCodeSlash className={styles.projectIcon} />
            </a>
            <a
              href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-BrainForge/index.html"
              target="_blank"
              className={styles.projectLink}
            >
              Live demo
              <BsWindowPlus className={styles.projectIcon} />
            </a>
          </div>
        </section>
        <section>
          <h2 className={styles.projectTitle}>Pokedex</h2>
          <p className={styles.projectDescription}>
            is an app which lists every Pokemon's datas sorted by areas.
          </p>
          <h4 className={styles.projectStack}>React.js - CSS - Node.js</h4>
          <div className={styles.linkSection}>
            <a
              href="https://github.com/LightQv/pokedex"
              target="_blank"
              className={styles.projectLink}
            >
              Code
              <BsCodeSlash className={styles.projectIcon} />
            </a>
            <a
              href="https://lightqv.github.io/pokedex/"
              target="_blank"
              className={styles.projectLink}
            >
              Live demo
              <BsWindowPlus className={styles.projectIcon} />
            </a>
          </div>
        </section>
        <section>
          <h2 className={styles.projectTitle}>Keskonregarde ?</h2>
          <p className={styles.projectDescription}>
            is a search website that aim to help the users to find a movie to
            watch.
          </p>
          <h4 className={styles.projectStack}>React.js - CSS - Node.js</h4>
          <div className={styles.linkSection}>
            <a
              href="https://github.com/LightQv/keskonregarde"
              target="_blank"
              className={styles.projectLink}
            >
              Code
              <BsCodeSlash className={styles.projectIcon} />
            </a>
            <a
              href="https://keskonregarde.netlify.app"
              target="_blank"
              className={styles.projectLink}
            >
              Live demo
              <BsWindowPlus className={styles.projectIcon} />
            </a>
          </div>
        </section>
        <section>
          <h2 className={styles.projectTitle}>Animalz</h2>
          <p className={styles.projectDescription}>
            is a meeting app that help travelers to find a partner. Hackathon
            24h proof of concept.
          </p>
          <h4 className={styles.projectStack}>React.js - CSS - Node.js</h4>
          <div className={styles.linkSection}>
            <a
              href="https://github.com/LightQv/animalz"
              target="_blank"
              className={styles.projectLink}
            >
              Code
              <BsCodeSlash className={styles.projectIcon} />
            </a>
          </div>
        </section>
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
