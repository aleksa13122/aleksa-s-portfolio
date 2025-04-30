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
    }, 10000);
  }

  return (
    <div className="contacts-wrapper">
      <div className="contacts-container" ref={ref} id="contact">
        <div className="contacts-item1">
          Like what you see?
          <br /> Contact me to {""}
          <a href="https://www.linkedin.com/in/aleksa-s1/" className="colab">
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
            <a onClick={Popup} className="email-copy">
              Email
            </a>
            <a href="https://www.linkedin.com/in/aleksa-s1/">Linkedin</a>
            <a href="https://github.com/aleksa13122">Github</a>
            {showPopup && <div className="popup">Copied Email!</div>}
          </div>
          <div className="contacts-item2-items">
            <h5>Projects</h5>
            <a className="portfolio-anchor" href="/portfolio">
              Portfolio
            </a>
            <a className="portfolio-anchor" href="/obssesed">
              Obssesed
            </a>
            <a className="portfolio-anchor" href="/dvm">
              DVM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Contact;
