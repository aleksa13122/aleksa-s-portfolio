import React from "react";
import "./Navigation.css";

export default function Navigation({ skillsRef, projectsRef }) {
  function HomeScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function AboutScroll() {
    skillsRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function ProjectsScroll() {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
    console.log(projectsRef.current);
  }

  return (
    <div className="nav">
      <button className="nav-div" onClick={HomeScroll}>
        Home
      </button>
      <button className="nav-div" onClick={AboutScroll}>
        About
      </button>
      <button className="nav-div" onClick={ProjectsScroll}>
        Projects
      </button>
      <button className="nav-div">Contact</button>
    </div>
  );
}
