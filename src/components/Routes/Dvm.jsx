import dvmImg from "../../images/dvmMockup.jpg";
import "./CombinedProjects.css";

export default function Dvm() {
  return (
    <>
      <div className="project-nav">
        <a className="project-nav-div" href="/">
          Home
        </a>
      </div>
      <div className="container-main">
        <h1 className="project-title">DVM Renovatie – Company website</h1>

        <img src={dvmImg} className="project-image" />
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
              <a
                className="source-code-btn"
                href="https://www.dvmrenovatie.com/home"
              >
                View project
              </a>
            </div>
          </div>
          <p className="project-description">
            DVM Renovatie is a business website for a home renovation company,
            built using React. I handled the final front-end implementation
            based on provided designs and instructions. While the visual layout
            follows client preferences, my focus was on clean code structure,
            component logic, and responsiveness.
          </p>
        </div>
      </div>
    </>
  );
}
