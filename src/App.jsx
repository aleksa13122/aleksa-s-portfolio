import React from "react";

import gridImage from "./images/hexagonGray.png";
import Navigation from "./components/navigation";
import Info from "./components/Info";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <div className="main-container">
        <img src={gridImage} className="backgroundImg" alt="Grid background" />
        <Navigation />
        <Info />
      </div>

      <p className="primarna">Aleksa's portfolio page</p>
    </div>
  );
}

export default App;
