import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

import { useState } from "react";

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState(null);
  const messageReceieved = (message) => setSubmitMessage(message);

  const renderSubmitMessage = () => {
    if (submitMessage === null) {
      return null;
    } else if (submitMessage === true) {
      return <div>Message Successfully Sent!</div>;
    } else {
      return <div>Message error occured!</div>;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_zs884kj",
        "template_67ogsdq",
        form.current,
        "8ivyb34V-oqYlFsdq"
      )
      .then(
        (result) => {
          // show the user a success message
          messageReceieved(true);
          console.log(result);
        },
        (error) => {
          // show the user an error
          messageReceieved(false);
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className={styles.topInfo}>
        <h1>Let's make something together.</h1>
        <h2>Get In Touch</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <div>
          {/* <label>Your Name</label> */}
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            style={{ color: "black" }}
          />
        </div>
        <div>
          {/* <label>Your Email</label> */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            style={{ color: "black" }}
          />
        </div>
        <div>
          {/* <label>Message</label> */}
          <textarea
            name="message"
            style={{ color: "black" }}
            placeholder="Your Message"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit!"
            className={styles.submitButton}
            style={{ color: "white" }}
          />
        </div>
      </form>
      {renderSubmitMessage()}
    </>
  );
}
