import "./Contact.css";

export default function Contact() {
  return (
    <div className="contacts-container">
      <div className="contacts-item1">
        Like what you see?
        <br /> Contact me to {""}
        <a href="" className="colab">
          collaborate
        </a>
        !
        <p className="name-and-copyr">
          Aleksa Subotin
          <br /> © 2025 | All rights reserved.
        </p>
      </div>
      <div className="contacts-item2">
        <div className="contacts-item2-items">
          <h5>Navigation</h5>
          <a>Home</a>
          <a>About</a>
          <a>Projects</a>
        </div>
        <div className="contacts-item2-items">
          <h5>Contact</h5>
          <a>Github</a>
          <a>Linkedin</a>
          <a>Email</a>
        </div>
      </div>
    </div>
  );
}
