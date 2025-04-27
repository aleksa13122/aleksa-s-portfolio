import previewImg from "../../images/desktopFinal.jpg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="project-nav">
        <a className="project-nav-div" href="/">
          Home
        </a>
      </div>
      <div className="container-main">
        <h1 className="project-title">My personal portfolio page</h1>

        <img src={previewImg} className="project-image" />
        <h3>Project overview</h3>
        <div className="project-overview-container">
          <div className="project-btns">
            <div className="project-techstack">
              <button className="tech-btn"> JavaScript</button>
              <button className="tech-btn"> React.js</button>
              <button className="tech-btn"> HTML</button>
              <button className="tech-btn"> CSS</button>
              <button className="tech-btn"> Figma</button>
            </div>
            <div>
              <a className="view-demo-btn">View demo</a>
              <a
                className="source-code-btn"
                href="https://github.com/aleksa13122/aleksa-s-portfolio"
              >
                Source Code
              </a>
            </div>
          </div>
          <p className="project-description">
            This portfolio website features a modern and elegant design,
            emphasizing clarity, functionality, and visual appeal. It highlights
            key skills, past projects, and contact details, all within a fully
            responsive and user-friendly layout. Built with precision and
            aesthetic sensibility, it serves as a comprehensive showcase of my
            skills and expertise.
          </p>
          {/* Staviti ova 2 dugmeta u istu klasu? */}
        </div>
      </div>
    </>
  );
}
