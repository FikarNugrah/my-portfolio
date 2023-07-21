import { useState } from "react";
import "../Style/Contact.css";

export default function Contact() {
  const [isToggled, setIsToggled] = useState(false);
  const [onMouse, setOnMouse] = useState("Contact Me");

  const reSize = () => {
    setIsToggled(!isToggled);
  };

  const hoverIn = () => {
    setOnMouse("Click to Open/close");
  };
  const hoverOut = () => {
    setOnMouse("Contact Me");
  };

  return (
    <>
      <div className="btn-area" id="contact">
        <button
          onClick={reSize}
          className="btn-contact"
          onMouseEnter={hoverIn}
          onMouseLeave={hoverOut}
        >
          {onMouse}
        </button>
      </div>
      <div
        className={
          isToggled ? "contact-content contact-re-size" : "contact-content"
        }
      >
        <h1>Contact me</h1>
        <div className="form-contact">
          <div className="my-info">
            <div className="icon-my-info">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <h3>Address</h3>
                <p>Riau, Pekanbaru</p>
              </div>
            </div>
            <div className="icon-my-info">
              <i class="fa-solid fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>0895 - 6016 - 07972</p>
              </div>
            </div>
            <div className="icon-my-info">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>yafikar06@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="masage">
            <h1>Send Massage</h1>
            <label for="name">
              <input id="name" type="text" placeholder="Your Name" />
            </label>
            <label for="email">
              <input id="email" type="email" placeholder="Your Email" />
            </label>
            <label for="command">
              <textarea
                id="command"
                className="input-text"
                placeholder="input Command"
              />
            </label>

            <button className="btn-send">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
