import React from "react";
import "./Navigation.css";

export default function Navigation({ skillsRef, projectsRef, contactsRef }) {
  function HomeScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function AboutScroll() {
    if (skillsRef.current) {
      const offsetSkills = skillsRef.current.offsetTop;
      window.scrollTo({
        top: offsetSkills - 120, // izmena ovde – pomera 50px ispod vrha
        behavior: "smooth", // izmena ovde – omogućava glatko skrolovanje
      });
    }
  }

  function ProjectsScroll() {
    if (projectsRef.current) {
      const offsetProjects = projectsRef.current.offsetTop;
      window.scrollTo({
        top: offsetProjects - 120, // izmena ovde – pomera 50px ispod vrha
        behavior: "smooth", // izmena ovde – omogućava glatko skrolovanje
      });
    }
  }

  function ContactsScroll() {
    if (contactsRef.current) {
      const offsetContact = contactsRef.current.offsetTop;
      window.scrollTo({
        top: offsetContact - 120,
        behavior: "smooth",
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
      <button className="nav-div" onClick={ContactsScroll}>
        Contact
      </button>
    </div>
  );
}
