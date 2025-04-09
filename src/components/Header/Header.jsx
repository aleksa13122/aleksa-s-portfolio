import "./Header.css";
import HeaderJob from "./HeaderJob";

export default function Header() {
  return (
    <div className="header-container">
      <HeaderJob />
      <div className="header-links">
        <button class="custom-button">
          <span class="button-content">
            <span class="button-text">My Work</span>
          </span>
          <span class="button-background"></span>
        </button>
        <button className="btn-work">Download CV</button>
        <p>Linkedin</p>
        <p>Githab</p>
        <p>Email</p>
      </div>
    </div>
  );
}
