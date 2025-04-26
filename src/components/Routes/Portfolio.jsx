import previewImg from "../../images/desktopFinal.jpg";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="container-main">
      <h1 className="project-title">Portfolio project</h1>
      <img src={previewImg} className="project-image" />
      <div className="project-overview-container">
        <h3>Project overview</h3>
        <div className="project-techstack"></div>
        <p className="project-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          recusandae sequi, voluptas et facere quod fugiat officia explicabo
          numquam aut porro aspernatur velit ipsa soluta sint commodi.
          Voluptate, sunt ipsa.
        </p>
        {/* Staviti ova 2 dugmeta u istu klasu? */}
        <button className="view-demo-btn">View demo</button>
        <button className="source-code-btn">Source code</button>
      </div>
    </div>
  );
}
