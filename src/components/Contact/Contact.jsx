import "./Contact.css";
import { forwardRef } from "react";
import { useState } from "react";

const Contact = forwardRef((props, ref) => {
  const [showPopup, setShowPoput] = useState(false);

  function Popup() {
    setShowPoput(true);
    navigator.clipboard.writeText("subotinaleksa366@gmail.com");

    setTimeout(() => {
      setShowPoput(false);
    }, 2000);
  }

  return (
    <div className="contacts-container" ref={ref} id="contact">
      <div className="contacts-item1">
        Like what you see?
        <br /> Contact me to {""}
        <a href="https://www.linkedin.com/in/aleksa-subotin/" className="colab">
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
          <h5>Contact</h5>
          <a href="https://github.com/aleksa13122">Github</a>
          <a href="https://www.linkedin.com/in/aleksa-subotin/">Linkedin</a>
          <a onClick={Popup}>Email</a>
          {showPopup && <div className="popup">Copied Email!</div>}
        </div>
        <div className="contacts-item2-items">
          <h5>Projects</h5>
          <a>Portfolio</a>
        </div>
      </div>
    </div>
  );
});
export default Contact;
