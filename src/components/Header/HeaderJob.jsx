import "./Header.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="greetings-container">
        <AnimatePresence mode="wait">
          <motion.p
            key={word.index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="greeting-word"
          >
            {words[word.index]} !
          </motion.p>
        </AnimatePresence>
        <span className="greeting-name">Im Aleksa</span>
      </div>

      <span className="job-title">FRONTEND</span>

      <div className="second-row">
        <span className="job-title" style={{ color: "#367a5c" }}>
          DEVELOPER
        </span>
        <span className="location">Based in Serbia</span>
      </div>
    </div>
  );
}
