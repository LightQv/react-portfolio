import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project,
  index,
  projectIsActive,
  setProjectIsActive,
}) {
  return (
    <li
      key={index}
      className={styles.projectCard}
      style={
        projectIsActive === index
          ? {
              transform: "translateY(-2rem)",
              transition: "0.4s ease-in-out",
            }
          : null
      }
      onClick={() => setProjectIsActive(index)}
    >
      <img src={project.img} alt={project.name} className={styles.projectImg} />
    </li>
  );
}
