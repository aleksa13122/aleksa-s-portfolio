import { motion } from "framer-motion";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav">
      <button className="nav-div">Homes</button>
      <button className="nav-div ">Abouts</button>
      <button className="nav-div ">Projects</button>
      <button className="nav-div">Contacts</button>
    </div>
  );
}
