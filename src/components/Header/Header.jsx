import "./Header.css";
import HeaderJob from "./HeaderJob";
import "./Buttons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="header-container">
      <HeaderJob />
      <div className="header-linksbuttons">
        <div className="header-buttons">
          <button class="custom-button">
            <span class="button-content">
              <span class="button-text">My Work</span>
            </span>
            <span class="button-background"></span>
          </button>
          <button class="button">
            <span class="button__text">Download CV</span>
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
            href="https://www.linkedin.com/in/aleksa-subotin/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "#40916c" }}
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
              style={{ color: "#40916c" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
