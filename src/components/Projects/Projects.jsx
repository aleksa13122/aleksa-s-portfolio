import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // komponenta za prikaz ikonica
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // konkretna ikonica
import { forwardRef } from "react";
import desktopImg from "../../images/desktopReady.jpg";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <div className="project-image-container">
            <img src={desktopImg} className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <button className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">React.js</button>
            <button className="tech-btn">HTML</button>
            <button className="tech-btn">CSS</button>
            <button className="tech-btn">Figma</button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;
