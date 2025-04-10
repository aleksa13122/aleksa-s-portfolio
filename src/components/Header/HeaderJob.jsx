import "./Header.css";
import HeaderLoc from "./HeaderLocation";

export default function HeaderJob() {
  return (
    <div className="job-container">
      <div className="job-title">
        <p className="greeting">Hi Im Aleksa</p>
        FRONTEND <br />
        <div className="second-row">
          <span className="sekundarna">DEVELOPER</span>
          <HeaderLoc />
        </div>
      </div>
    </div>
  );
}
