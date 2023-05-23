import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsHouseFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillChatTextFill } from "react-icons/bs";

export default function NavBar() {
  const [projectPage, setProjectPage] = useState(false);

  function getNavStatus(isActive) {
    if (isActive && projectPage) return "active-project-nav-content";
    else if (isActive) return "active-nav-content";
    else if (projectPage) return "project-nav-content";
    else return "nav-content";
  }

  return (
    <nav className={projectPage ? "project-nav-bar" : "nav-bar"}>
      <div
        className={projectPage ? "project-home-container" : "home-container"}
      >
        <Link to="/">Vivian.</Link>
      </div>
      <ul className="nav-container">
        <li className="nav-link">
          <Link
            to="/home"
            className={projectPage ? "project-nav-content" : "nav-content"}
            onClick={() => setProjectPage(false)}
          >
            <BsHouseFill className="nav-icon" />
          </Link>
        </li>
        <li className="nav-link">
          <NavLink
            to="/about"
            className={({ isActive }) => getNavStatus(isActive)}
            onClick={() => setProjectPage(false)}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <BsFillPersonFill className="profile-icon" />
                  <p className="nav-text">About</p>
                </>
              ) : (
                <>
                  <BsFillPersonFill className="profile-icon" />
                </>
              )
            }
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/projects"
            className={({ isActive }) => getNavStatus(isActive)}
            onClick={() => setProjectPage(true)}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <BsFillLightbulbFill className="nav-icon" />
                  <p className="nav-text">Projects</p>
                </>
              ) : (
                <>
                  <BsFillLightbulbFill className="nav-icon" />
                </>
              )
            }
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            to="/contact"
            className={({ isActive }) => getNavStatus(isActive)}
            onClick={() => setProjectPage(false)}
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <BsFillChatTextFill className="nav-icon" />
                  <p className="nav-text">Contact</p>
                </>
              ) : (
                <>
                  <BsFillChatTextFill className="nav-icon" />
                </>
              )
            }
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
