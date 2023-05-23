import React from "react";
import wildfest from "../assets/image/projects/wildfest.png";
import pokedex from "../assets/image/projects/pokedex.png";
import keskonregarde from "../assets/image/projects/keskonregarde.png";
import animalz from "../assets/image/projects/animalz.png";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  wildIsActive,
  pokedexIsActive,
  keskonregardeIsActive,
  animalzIsActive,
  setCardIsActive,
  setWildIsActive,
  setPokedexIsActive,
  setKeskonregardeIsActive,
  setAnimalzIsActive,
}) {
  // Use states to trigger the right content based on which card is selected
  const handleWildMouse = () => {
    setCardIsActive(true);
    setPokedexIsActive(false);
    setKeskonregardeIsActive(false);
    setAnimalzIsActive(false);
    setWildIsActive(true);
  };

  const handlePokedexMouse = () => {
    setCardIsActive(true);
    setWildIsActive(false);
    setKeskonregardeIsActive(false);
    setAnimalzIsActive(false);
    setPokedexIsActive(true);
  };

  const handleKeskonregardeMouse = () => {
    setCardIsActive(true);
    setWildIsActive(false);
    setPokedexIsActive(false);
    setAnimalzIsActive(false);
    setKeskonregardeIsActive(true);
  };

  const handleAnimalzMouse = () => {
    setCardIsActive(true);
    setWildIsActive(false);
    setPokedexIsActive(false);
    setKeskonregardeIsActive(false);
    setAnimalzIsActive(true);
  };

  return (
    <ul className={styles.projectCardBox}>
      <li
        className={styles.projectCard}
        onMouseEnter={() => handleWildMouse()}
        style={
          wildIsActive
            ? {
                transform: "translateY(-2rem)",
                transition: "0.4s ease-in-out",
              }
            : null
        }
      >
        <img src={wildfest} alt="project-1" className={styles.projectImg} />
      </li>
      <li
        className={styles.projectCard}
        onMouseEnter={() => handlePokedexMouse()}
        style={
          pokedexIsActive
            ? { transform: "translateY(-2rem)", transition: "0.4s ease-out" }
            : null
        }
      >
        <img src={pokedex} alt="project-2" className={styles.projectImg} />
      </li>
      <li
        className={styles.projectCard}
        onMouseEnter={() => handleKeskonregardeMouse()}
        style={
          keskonregardeIsActive
            ? { transform: "translateY(-2rem)", transition: "0.4s ease-out" }
            : null
        }
      >
        <img
          src={keskonregarde}
          alt="project-3"
          className={styles.projectImg}
        />
      </li>
      <li
        className={styles.projectCard}
        onMouseEnter={() => handleAnimalzMouse()}
        style={
          animalzIsActive
            ? { transform: "translateY(-2rem)", transition: "0.4s ease-out" }
            : null
        }
      >
        <img src={animalz} alt="project-4" className={styles.projectImg} />
      </li>
    </ul>
  );
}
