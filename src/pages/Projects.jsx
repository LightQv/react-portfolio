import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { BsWindowPlus } from "react-icons/bs";
import ProjectCard from "../components/ProjectCard";
import styles from "./Projects.module.css";
import DetailsModal from "../components/DetailsModal";
import { projects } from "../data";
import ProjectDescription from "../components/ProjectDescription";

export default function Projects() {
  const [projectIsActive, setProjectIsActive] = useState(null);
  const [modalIsActive, setModalIsActive] = useState(false);

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
            projects={projects}
          />
        ) : null}
      </section>
      <section className={styles.desktopLayout}>
        {projectIsActive !== null ? (
          <ProjectDescription
            BsCodeSlash={BsCodeSlash}
            BsWindowPlus={BsWindowPlus}
            projects={projects}
            projectIsActive={projectIsActive}
          />
        ) : (
          <div className={styles.pageInfos}>
            <h2 className={styles.pageTitle}>Select a project</h2>
            <h4 className={styles.pageSubtitle}>to learn more about it !</h4>
          </div>
        )}
      </section>
      <ul className={styles.projectCardBox}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            projectIsActive={projectIsActive}
            setProjectIsActive={setProjectIsActive}
          />
        ))}
      </ul>
    </main>
  );
}
