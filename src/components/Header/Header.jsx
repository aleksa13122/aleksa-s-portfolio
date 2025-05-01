import "./Header.css";
import HeaderJob from "./HeaderJob";
import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { forwardRef } from "react";

const Header = forwardRef(({ goToProjects }, ref) => {
  return (
    <div className="background-container">
      <div className="header-container" ref={ref}>
        <HeaderJob />
        <div className="header-links-and-buttons">
          <div className="header-buttons">
            <button className="custom-button">
              <span className="button-content">
                <span className="button-text" onClick={goToProjects}>
                  My Work
                </span>
              </span>
              <span class="button-background"></span>
            </button>
            <button class="button">
              <a
                className="CVanchor"
                href="../../../assets/Resume Eng.pdf"
                download
              >
                <span class="button__text">Download CV</span>
              </a>
              <svg
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
            </button>
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
              />
            </a>
            <a
              href="https://github.com/aleksa13122"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                style={{ color: "#367a5c" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Header;
// It’s just a background div absolutely positioned behind the nav items.
// I track the hovered tab using React useState,
// and move the background using CSS transitions based on which tab is hovered.
// The whole nav is set up with a CSS grid,
// so each item takes up exactly a quarter of the space.
