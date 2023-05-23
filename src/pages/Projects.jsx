import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { BsWindowPlus } from "react-icons/bs";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";
import DetailsModal from "../components/DetailsModal";

export default function Projects() {
  const [cardIsActive, setCardIsActive] = useState(false);
  const [wildIsActive, setWildIsActive] = useState(false);
  const [pokedexIsActive, setPokedexIsActive] = useState(false);
  const [keskonregardeIsActive, setKeskonregardeIsActive] = useState(false);
  const [animalzIsActive, setAnimalzIsActive] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);
  const [codeIsHover, setCodeIsHover] = useState(false);
  const [liveIsHover, setLiveIsHover] = useState(false);

  return (
    <main className={styles.projectPage}>
      <section className={styles.mobileLayout}>
        <button
          className={styles.modalBtn}
          onClick={() => setModalIsActive(!modalIsActive)}
        >
          +
        </button>
        {modalIsActive ? (
          <DetailsModal
            BsCodeSlash={BsCodeSlash}
            BsWindowPlus={BsWindowPlus}
            setModalIsActive={setModalIsActive}
          />
        ) : null}
      </section>
      <section className={styles.desktopLayout}>
        {cardIsActive === false ? (
          <div className={styles.pageInfos}>
            <h2 className={styles.pageTitle}>Select a project</h2>
            <h4 className={styles.pageSubtitle}>to learn more about it !</h4>
          </div>
        ) : null}
        {wildIsActive ? (
          <div className={styles.projectInfos}>
            <div>
              <div className={styles.topSection}>
                <h2 className={styles.projectTitle}>WildFest</h2>
                <h4 className={styles.projectStack}>HTML - CSS - JavaScript</h4>
              </div>
              <p className={styles.projectDescription}>
                is a website for a music festival that allow the users to check
                every different artists and prices.
              </p>
            </div>
            <div className={styles.linkSection}>
              <a
                href="https://github.com/LightQv/Wild-Festival"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setCodeIsHover(true)}
                onMouseLeave={() => setCodeIsHover(false)}
              >
                Code
                <BsCodeSlash
                  className={styles.projectIcon}
                  style={
                    codeIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
              <a
                href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-BrainForge/index.html"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setLiveIsHover(true)}
                onMouseLeave={() => setLiveIsHover(false)}
              >
                Live demo
                <BsWindowPlus
                  className={styles.projectIcon}
                  style={
                    liveIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
            </div>
          </div>
        ) : null}
        {pokedexIsActive ? (
          <div className={styles.projectInfos}>
            <div>
              <div className={styles.topSection}>
                <h2 className={styles.projectTitle}>Pokedex</h2>
                <h4 className={styles.projectStack}>
                  React.js - CSS - Node.js
                </h4>
              </div>
              <p className={styles.projectDescription}>
                is an app which lists every Pokemon's datas sorted by areas.
              </p>
            </div>
            <div className={styles.linkSection}>
              <a
                href="https://github.com/LightQv/pokedex"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setCodeIsHover(true)}
                onMouseLeave={() => setCodeIsHover(false)}
              >
                Code
                <BsCodeSlash
                  className={styles.projectIcon}
                  style={
                    codeIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
              <a
                href="https://lightqv.github.io/pokedex/"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setLiveIsHover(true)}
                onMouseLeave={() => setLiveIsHover(false)}
              >
                Live demo
                <BsWindowPlus
                  className={styles.projectIcon}
                  style={
                    liveIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
            </div>
          </div>
        ) : null}
        {keskonregardeIsActive ? (
          <div className={styles.projectInfos}>
            <div>
              <div className={styles.topSection}>
                <h2 className={styles.projectTitle}>Keskonregarde ?</h2>
                <h4 className={styles.projectStack}>
                  React.js - CSS - Node.js
                </h4>
              </div>
              <p className={styles.projectDescription}>
                is a search website that aim to help the users to find a movie
                to watch.
              </p>
            </div>
            <div className={styles.linkSection}>
              <a
                href="https://github.com/LightQv/keskonregarde"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setCodeIsHover(true)}
                onMouseLeave={() => setCodeIsHover(false)}
              >
                Code
                <BsCodeSlash
                  className={styles.projectIcon}
                  style={
                    codeIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
              <a
                href="https://lightqv-keskonregarde.netlify.app/"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setLiveIsHover(true)}
                onMouseLeave={() => setLiveIsHover(false)}
              >
                Live demo
                <BsWindowPlus
                  className={styles.projectIcon}
                  style={
                    liveIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
            </div>
          </div>
        ) : null}
        {animalzIsActive ? (
          <div className={styles.projectInfos}>
            <div>
              <div className={styles.topSection}>
                <h2 className={styles.projectTitle}>Animalz</h2>
                <h4 className={styles.projectStack}>
                  React.js - CSS - Node.js
                </h4>
              </div>
              <p className={styles.projectDescription}>
                is a meeting app that help travelers to find a partner.
                Hackathon 24h proof of concept.
              </p>
            </div>
            <div className={styles.linkSection}>
              <a
                href="https://github.com/LightQv/animalz"
                target="_blank"
                className={styles.projectLink}
                onMouseEnter={() => setCodeIsHover(true)}
                onMouseLeave={() => setCodeIsHover(false)}
              >
                Code
                <BsCodeSlash
                  className={styles.projectIcon}
                  style={
                    codeIsHover
                      ? { color: "var(--white)" }
                      : { color: "var(--black)" }
                  }
                />
              </a>
            </div>
          </div>
        ) : null}
      </section>
      <ProjectCard
        wildIsActive={wildIsActive}
        pokedexIsActive={pokedexIsActive}
        keskonregardeIsActive={keskonregardeIsActive}
        animalzIsActive={animalzIsActive}
        setCardIsActive={setCardIsActive}
        setWildIsActive={setWildIsActive}
        setPokedexIsActive={setPokedexIsActive}
        setKeskonregardeIsActive={setKeskonregardeIsActive}
        setAnimalzIsActive={setAnimalzIsActive}
      />
    </main>
  );
}
