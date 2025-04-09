import React from "react";

import Navigation from "./components/Navigation";
import Info from "./components/Info";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <div className="main-container">
        <Navigation />
        <Info />
      </div>

      <p className="primarna">Aleksa's portfolio page</p>
    </div>
  );
}

export default App;
