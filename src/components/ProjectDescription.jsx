import { useState } from "react";
import styles from "./ProjectDescription.module.css";

export default function ProjectDescription({
  BsCodeSlash,
  BsWindowPlus,
  projects,
  projectIsActive,
}) {
  const [codeIsHover, setCodeIsHover] = useState(false);
  const [liveIsHover, setLiveIsHover] = useState(false);

  return (
    <div className={styles.projectInfos}>
      <div>
        <div className={styles.topSection}>
          <h2 className={styles.projectTitle}>
            {projects[projectIsActive - 1].name}
          </h2>
          <p className={styles.projectDescription}>
            {projects[projectIsActive - 1].description}
          </p>
        </div>
        <h4 className={styles.projectStack}>
          {projects[projectIsActive - 1].language.join(" - ")}
        </h4>
      </div>
      <div className={styles.linkSection}>
        <a
          href={projects[projectIsActive - 1].code_source}
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
        {projects[projectIsActive - 1].demo_link !== null ? (
          <a
            href={projects[projectIsActive - 1].demo_link}
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
        ) : null}
      </div>
    </div>
  );
}
