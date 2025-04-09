import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";

import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <div className="main-container">
        <Navigation />
        <Header />
      </div>

      <p className="primarna">Aleksa's portfolio page</p>
    </div>
  );
}

export default App;
