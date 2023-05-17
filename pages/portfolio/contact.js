import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

import { useState } from "react";

export default function Contact() {
  const [submitMessage, setSubmitMessage] = useState(null);
  const messageReceieved = (message) => setSubmitMessage(message);

  const renderSubmitMessage = () => {
    if (submitMessage === null) {
      return <div>zzzzzzzzzzz</div>;
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
        <h2>Contact Me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label>Your Name</label>
        <input type="text" name="from_name" style={{ color: "black" }} />
        <label>Your Email</label>
        <input type="email" name="user_email" style={{ color: "black" }} />
        <label>Message</label>
        <textarea name="message" style={{ color: "black" }} />
        <div>
          <input
            type="submit"
            value="Send Contact!"
            className={styles.submitButton}
            style={{ color: "white" }}
          />
        </div>
      </form>
      {renderSubmitMessage()}
    </>
  );
}
