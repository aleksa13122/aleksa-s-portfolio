import obssesedImg from "../../images/obssesedMockup.jpg";
import "./CombinedProjects.css";

export default function Obssesed() {
  return (
    <>
      <div className="project-nav">
        <a className="project-nav-div" href="/">
          Home
        </a>
      </div>
      <div className="container-main">
        <h1 className="project-title">Obssesed - Online store</h1>

        <img src={obssesedImg} className="project-image" />
        <h3>Project overview</h3>
        <div className="project-overview-container">
          <div className="project-btns">
            <div className="project-techstack">
              <button className="tech-btn"> JavaScript</button>
              <button className="tech-btn"> React.js</button>
              <button className="tech-btn"> HTML</button>
              <button className="tech-btn"> CSS</button>
            </div>
            <div className="project-action">
              <a className="source-code-btn" href="https://obsessed.rs/">
                View project
              </a>
            </div>
          </div>
          <p className="project-description">
            Obsessed Store is a fitness clothing, e-commerce website built with
            React. I was responsible for final UI polishing, responsive layout
            adjustments, and optimizing reusable components to improve user
            experience and maintainability.
          </p>
        </div>
      </div>
    </>
  );
}
