import React, { useRef } from "react";
import "./App.css";
import "./index.css";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
  const skillsRef = useRef(null);

  return (
    <div>
      <div className="main-container">
        <Navigation skillsRef={skillsRef} />
        <Header skillsRef={skillsRef} />
      </div>
      <About ref={skillsRef} />
    </div>
  );
}

export default App;
