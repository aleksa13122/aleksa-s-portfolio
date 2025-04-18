import React from "react";
import "./Navigation.css";

export default function Navigation({ skillsRef, projectsRef }) {
  function HomeScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function AboutScroll() {
    if (skillsRef.current) {
      const offsetSkills = skillsRef.current.offsetTop;
      window.scrollTo({
        top: offsetSkills - 80, // izmena ovde – pomera 50px ispod vrha
        behavior: "smooth", // izmena ovde – omogućava glatko skrolovanje
      });
    }
  }

  function ProjectsScroll() {
    if (projectsRef.current) {
      const offsetProjects = projectsRef.current.offsetTop;
      window.scrollTo({
        top: offsetProjects - 60, // izmena ovde – pomera 50px ispod vrha
        behavior: "smooth", // izmena ovde – omogućava glatko skrolovanje
      });
    }
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
