import React, { useState } from "react";
import ContactImage from "../../../assets/images/contact/contact.jpg";
import { db } from "../../../testBase"
import "./contact.css";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1> Contactez-nous</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Votre nom</label>
          <input name="name"
           placeholder="Entrer votre nom..."
           value={name}
           onChange={(e) => setName(e.target.value)}
           type="text" />

          <label htmlFor="email">Email</label>
          <input name="email"
           placeholder="Entrer votre email..."
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Entrez votre message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            required
          ></textarea>
          <button type="submit" style={{ background: loader ? "#ccc" : " "}}> Envoyer </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;