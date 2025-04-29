import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // komponenta za prikaz ikonica
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // konkretna ikonica
import { forwardRef } from "react";
import portfolioImg from "../../images/PortfolioMockup.jpg";
import obssesedImg from "../../images/obssesedMockup.jpg";
import dvmImg from "../../images/dvmMockup.jpg";
import Obssesed from "./../Routes/Obssesed";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <div className="project-image-container">
            <img src={portfolioImg} className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <a href="/portfolio" className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">React.js</button>
            <button className="tech-btn">HTML</button>
            <button className="tech-btn">CSS</button>
            <button className="tech-btn">Figma</button>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src={obssesedImg} className="project-img" />
          </div>
          <div className="project-info">
            <h3>Obssesed</h3>
            <a href="/obssesed" className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">React.js</button>
            <button className="tech-btn">HTML</button>
            <button className="tech-btn">CSS</button>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src={dvmImg} className="project-img" />
          </div>
          <div className="project-info">
            <h3>DVM Renovatie</h3>
            <a href="/dvm" className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">React.js</button>
            <button className="tech-btn">HTML</button>
            <button className="tech-btn">CSS</button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;
