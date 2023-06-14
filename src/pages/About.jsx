import { Link } from "react-router-dom";
import { useState } from "react";
import profileImg from "../assets/image/profile-smile.jpg";
import FlipCard from "../components/FlipCard";
import { BsFillChatTextFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import styles from "./About.module.css";

export default function About() {
  const [isHover, setIsHover] = useState(false);
  return (
    <main className={styles.aboutPage}>
      <section className={styles.introductionBox}>
        <img
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          src={profileImg}
          alt="profile-pic"
          className={styles.profilePic}
        />
        <h1 className={styles.introductionTitle}>I'm Vivian Querenet,</h1>
        <h3 className={styles.introductionSubtitle}>
          a React.js Junior Developer
        </h3>
        <h5>Nice meeting you !</h5>
      </section>
      <FlipCard />
      <section className={styles.experienceBox}>
        <h3>Experience</h3>
        <div className={styles.expBox}>
          <>
            <h5>Front End Developer</h5>
            <h6 className={styles.expTitle}>Keskonregarde ?</h6>
            <p>
              Search website for movies using React.js & Node.js with TMDB API.
            </p>
          </>
          <>
            <h6 className={styles.expTitle}>Wild Festival</h6>
            <p>
              Website for a fictive music event using HTML, CSS & JavaScript.
            </p>
          </>
          <>
            <h6 className={styles.expTitle}>Hackathon (1st place - 24h)</h6>
            <p>
              Meeting website for travelers using React.js, Node.js & Leaflet.
            </p>
          </>
          <h6 className={styles.expLoc}>
            Wild Code School, Lyon - 5 months, 2023
          </h6>
        </div>
        <div className={styles.expBox}>
          <>
            <h5>Graphic Designer</h5>
            <p>Analysis of the client's needs and of his sector of activity.</p>
            <p>Quotation creation.</p>
            <p>
              Monitoring of current trends in order to offer appropriate
              communication.
            </p>
            <p>
              Creation of adapted visual media: logo, posters, business cards,
              signs.
            </p>
          </>
          <h6 className={styles.expLoc}>Freelance - 2016-2020</h6>
        </div>
        <div className={styles.expBox}>
          <>
            <h5>UX/UI Designer</h5>
            <h6 className={styles.expTitle}>
              Collaboration on a student project
            </h6>
            <p>Analysis of the player expectations and the target market.</p>
            <p>Prototyping of different visual atmospheres.</p>
            <p>Implementation of graphic design.</p>
            <p>
              Creation of a HUD, title screens, menus and various minor
              elements.
            </p>
          </>
          <h6 className={styles.expLoc}>Ariès School, Lyon - 2 months, 2020</h6>
        </div>
        <div className={styles.expBox}>
          <>
            <h5>Other</h5>
            <p>
              During these years, I also held a position of Community Manager
              (Lush - Lyon Part Dieu, 12/2017 - 09/2019) as well as a position
              of storekeeper (Décathlon - St Quentin Fallavier, 06/2021 -
              02/2022 ) and made a long-distance trip to South America (Mexico,
              Belize, Guatemala, Peru, February 2022 - June 2022).
            </p>
          </>
        </div>
      </section>
      <section className={styles.educationBox}>
        <h3>Education</h3>
        <div className={styles.eduBox}>
          <>
            <h5>Web Developer Bootcamp</h5>
            <p>
              Learning over 700h, at full time with a teacher of HTML, CSS,
              JavaScript, React.js, Node.js and SQL.
            </p>
          </>
          <h6 className={styles.eduLoc}>
            Wild Code School, Lyon - 5 months, 2023
          </h6>
        </div>
        <div className={styles.eduBox}>
          <>
            <h5>BTS Graphic Design</h5>
            <p>Double degree : BTS and a professional certification.</p>
          </>
          <h6 className={styles.eduLoc}>École Presqu'Île, Lyon - 2013-2016</h6>
        </div>
        <div className={styles.eduBox}>
          <>
            <h5>Baccalauréat STI2D ITEC</h5>
            <p>Degree with honours.</p>
          </>
          <h6 className={styles.eduLoc}>Lycée Galilée, Vienne - 2011-2013</h6>
        </div>
      </section>
      <section className={styles.contactBox}>
        <h1 className={styles.contactTitle}>Hit me up,</h1>
        <h3 className={styles.contactSubtitle}>don't be shy !</h3>
        <div className={styles.socialLinks}>
          <Link to="/contact">
            <BsFillChatTextFill className={styles.contactIcon} />
          </Link>
          <a href="https://www.linkedin.com/in/vivianquerenet/" target="_blank">
            <BsLinkedin className={styles.linkedinIcon} />
          </a>
          <a href="https://github.com/LightQv" target="_blank">
            <BsGithub className={styles.githubIcon} />
          </a>
        </div>
      </section>
    </main>
  );
}
