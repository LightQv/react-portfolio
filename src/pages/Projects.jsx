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
  const [filter, setFilter] = useState("");

  function findProject(e) {
    setFilter(e.target.value);
    setProjectIsActive(null);
  }

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
          <>
            <ProjectDescription
              BsCodeSlash={BsCodeSlash}
              BsWindowPlus={BsWindowPlus}
              projects={projects}
              projectIsActive={projectIsActive}
            />
          </>
        ) : (
          <div className={styles.pageInfos}>
            <h2 className={styles.pageTitle}>Select a project</h2>
            <h4 className={styles.pageSubtitle}>to learn more about it !</h4>
          </div>
        )}
        <div className={styles.filterBox}>
          <p className={styles.filterTitle}>Filter by</p>
          <select
            id="project-filter"
            onChange={findProject}
            className={styles.selectBox}
          >
            <option value="">All</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React.js">React</option>
            <option value="Tailwind CSS">Tailwind</option>
            <option value="Node.js">Node</option>
            <option value="Express.js">Express</option>
          </select>
        </div>
      </section>
      <ul className={styles.projectCardBox}>
        {projects
          .filter((project) =>
            filter !== "" ? project.language.includes(filter) : project
          )
          .map((project, index) => (
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
