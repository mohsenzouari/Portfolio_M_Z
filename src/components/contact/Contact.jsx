import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lj7zjxt",
        "template_fzey2t9",
        formRef.current,
        "lx-fSp-qAvEZhlFCS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2 >Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            // style={{ backgroundColor: darkMode && "#333" }}
            type="text"
            placeholder="Name"
            name="user_name"
          />
          <input
            // style={{ backgroundColor: darkMode && "#333" }}
            type="text"
            placeholder="Subject"
            name="user_subject"
          />
          <input
            // style={{ backgroundColor: darkMode && "#333" }}
            type="text"
            placeholder="Email"
            name="user_email"
          />
          <textarea
            // style={{ backgroundColor: darkMode && "#333" }}
            rows="5"
            placeholder="Message"
            name="message"
          />
          <button>Submit</button>
          {done && " Thank you :) ..."}
        </form>
      </div>
    </div>
  );
}
