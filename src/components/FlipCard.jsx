import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import styles from "./FlipCard.module.css";

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <section className={styles.skillBox}>
        <h3 className={styles.skillType}>Hard Skills</h3>
        <div className={styles.skillListContainer}>
          <div>
            <h5>Development</h5>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>HTML</li>
            </ul>
          </div>
          <div>
            <h5>Design</h5>
            <ul>
              <li>Figma</li>
              <li>Adobe inDesign</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
        </div>
        <button onClick={() => handleClick()} className={styles.switchBtn}>
          Soft skills
        </button>
      </section>

      <section className={styles.skillBox}>
        <h3 className={styles.skillType}>Soft Skills</h3>
        <div className={styles.skillListContainer}>
          <div>
            <h5>Personal skills</h5>
            <ul>
              <li>Curious</li>
              <li>Initiative</li>
              <li>Logical</li>
              <li>Resilient</li>
              <li>Teamwork</li>
            </ul>
          </div>
          <div>
            <h5>Language</h5>
            <ul>
              <li>English (C1)</li>
              <li>French (Native)</li>
              <li>Spanish (B1)</li>
              <li>Japanese (A1)</li>
            </ul>
          </div>
        </div>
        <button onClick={() => handleClick()} className={styles.switchBtn}>
          Hard skills
        </button>
      </section>
    </ReactCardFlip>
  );
}
