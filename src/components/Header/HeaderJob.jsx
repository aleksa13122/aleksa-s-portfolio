import "./Header.css";
import HeaderLoc from "./HeaderLocation";
import React, { useEffect } from "react";
import { useState } from "react";

const words = [
  "Hello",
  "Здраво",
  "Hola",
  "Ciao",
  "你好",
  "Bonjour",
  "Привет",
  "Γειά σου",
  "Aloha",
  "مرحبًا",
];

export default function HeaderJob() {
  const [word, setWord] = useState({ index: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWord((prevState) => ({
        index: (prevState.index + 1) % words.length,
      }));
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="job-container">
      <div className="job-title">
        <p className="greeting">{words[word.index]} ! Im Aleksa</p>
        FRONTEND <br />
        <div className="second-row">
          <span className="sekundarna">DEVELOPER</span>
          <HeaderLoc />
        </div>
      </div>
    </div>
  );
}
