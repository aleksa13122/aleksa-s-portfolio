import "./Header.css";
import HeaderJob from "./HeaderJob";
import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { forwardRef } from "react";

const Header = forwardRef(({ goToProjects }, ref) => {
  return (
    <div className="header-container" ref={ref}>
      <HeaderJob />
      <div className="header-links-and-buttons">
        <div className="header-buttons">
          <button className="custom-button" onClick={goToProjects}>
            My Work
          </button>
          <a className="button" href="/Resume-Eng.pdf" download>
            Download CV
            <svg
              stroke-linejoin="round"
              stroke-linecap="round"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              height="40"
              width="40"
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
              <path d="M7 11l5 5l5 -5"></path>
              <path d="M12 4l0 12"></path>
            </svg>
          </a>
        </div>
        <div className="header-links">
          <a
            href="https://www.linkedin.com/in/aleksa-s1/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#367a5c" }}
              className="media-icon"
            />
          </a>
          <a
            href="https://github.com/aleksa13122"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="media-icon"
              size="xl"
              style={{ color: "#367a5c" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
});
export default Header;
