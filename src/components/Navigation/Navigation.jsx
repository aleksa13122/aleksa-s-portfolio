import "./Navigation.css";

export default function Navigation() {
  function HomeScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="nav">
      <button className="nav-div" onClick={HomeScroll}>
        Home
      </button>
      <button className="nav-div">About</button>
      <button className="nav-div">Projects</button>
      <button className="nav-div">Contact</button>
    </div>
  );
}
