import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/image/profile.jpg";
import styles from "./Home.module.css";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.homePage}>
      <h1 className={styles.welcomeHeadline}>Hello &</h1>
      <Link
        to="/about"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <img src={profile} alt="profile-pic" className={styles.welcomePic} />
      </Link>
      <h3 className={styles.welcomeTitle}>welcome</h3>
      <h3 className={isActive ? styles.noSubTitle : styles.welcomeSubTitle}>
        to my portfolio !
      </h3>
      <h3 className={isActive ? styles.welcomeSubTitle : styles.noSubTitle}>
        click to see more !
      </h3>
    </div>
  );
}
