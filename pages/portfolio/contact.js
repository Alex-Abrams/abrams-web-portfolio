import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
          console.log(result);
        },
        (error) => {
          // show the user an error
          console.log(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="from_name" style={{ color: "black" }} />
      <label>Your Email</label>
      <input type="email" name="user_email" style={{ color: "black" }} />
      <label>Message</label>
      <textarea name="message" style={{ color: "black" }} />
      <input type="submit" value="Send" />
    </form>
  );
}
