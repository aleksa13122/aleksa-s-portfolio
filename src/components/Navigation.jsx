import { motion } from "framer-motion";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav">
      <button className="nav-div">Home</button>
      <button className="nav-div ">About</button>
      <button className="nav-div ">Project</button>
      <button className="nav-div">Contact</button>
    </div>
  );
}
