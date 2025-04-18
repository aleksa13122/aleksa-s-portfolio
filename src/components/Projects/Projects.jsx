import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // komponenta za prikaz ikonica
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // konkretna ikonica
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-item">
          <div className="project-image-container">
            <img src="/slikamoja.jpeg" className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <button className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src="/slikamoja.jpeg" className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <button className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src="/slikamoja.jpeg" className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <button className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image-container">
            <img src="/slikamoja.jpeg" className="project-img" />
          </div>
          <div className="project-info">
            <h3>Portfolio</h3>
            <button className="tech-btn-link">
              View project <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="tech-btn-container">
            <button className="tech-btn">JavaScript</button>
            <button className="tech-btn">JavaScript</button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Projects;
