import React from "react";
import "./Navigation.css";

export default function Navigation({ skillsRef }) {
  function HomeScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function AboutScroll() {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="nav">
      <button className="nav-div" onClick={HomeScroll}>
        Home
      </button>
      <button className="nav-div" onClick={AboutScroll}>
        About
      </button>
      <button className="nav-div">Projects</button>
      <button className="nav-div">Contact</button>
    </div>
  );
}
