import React, { useRef } from "react";
import "./App.css";
import "./index.css";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div>
      <Navigation skillsRef={skillsRef} projectsRef={projectsRef} />
      <div className="main-container">
        <Header skillsRef={skillsRef} />
      </div>
      <About ref={skillsRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
