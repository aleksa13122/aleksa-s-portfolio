import React, { useRef } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Routes/Portfolio";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  function goToProjects() {
    if (projectsRef.current) {
      const offsetProjects = projectsRef.current.offsetTop;
      window.scrollTo({
        top: offsetProjects - 60, // izmena ovde – pomera 50px ispod vrha
        behavior: "smooth", // izmena ovde – omogućava glatko skrolovanje
      });
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactsRef={contactsRef}
              />
              <div className="main-container">
                <Header goToProjects={goToProjects} />
              </div>
              <About ref={skillsRef} />
              <Projects ref={projectsRef} />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Contact ref={contactsRef} />
    </BrowserRouter>
  );
}

export default App;
