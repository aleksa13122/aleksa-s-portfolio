import "./Header.css";
import HeaderLoc from "./HeaderLocation";
export default function HeaderJob() {
  return (
    <div className="job-container">
      <p className="job-title">
        <HeaderLoc />
        FRONTEND <span className="sekundarna">DEVELOPER</span>
      </p>
      <p className="job-description">
        Hi, I'm Aleksa. I create intuitive, visually stunning, and highly
        functional web applications.
      </p>
    </div>
  );
}
