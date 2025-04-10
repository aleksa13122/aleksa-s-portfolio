import "./Header.css";
import HeaderLoc from "./HeaderLocation";
import React from "react";
import { useState } from "react";

const words = [
  "Hello",
  "Здраво",
  "Hola",
  "你好",
  "Bonjour",
  "Привет",
  "Γειά σου",
  "Aloha",
  "مرحبًا",
];

export default function HeaderJob() {
  const [word, setWord] = useState(words[0]);

  function changeWord() {}

  return (
    <div className="job-container">
      <div className="job-title">
        <p className="greeting"> ,Im Aleksa</p>
        FRONTEND <br />
        <div className="second-row">
          <span className="sekundarna">DEVELOPER</span>
          <HeaderLoc />
        </div>
      </div>
    </div>
  );
}
