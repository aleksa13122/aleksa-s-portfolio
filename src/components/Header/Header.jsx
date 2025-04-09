import "./Header.css";
import HeaderJob from "./HeaderJob";

export default function Header() {
  return (
    <div className="header-container">
      <HeaderJob />
      <div className="header-links">
        <p>My Work</p>
        <p>Download CV</p>
        <p>Linkedin</p>
        <p>Githab</p>
        <p>Email</p>
      </div>
    </div>
  );
}
