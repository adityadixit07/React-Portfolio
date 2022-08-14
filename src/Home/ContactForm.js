import React from "react";
import "./contactform.css";
function ContactForm() {
 
  return (
    <div className="contact-form">
      <h1>Contact me</h1>
      <div className="form-detail">
        <span>Enter Name</span>
        <input type="text" placeholder="enter name" />
        <span>Email</span>
        <input type="Email" placeholder="enter email" />
        <span>Education</span>
        <textarea
          name="education"
          id=""
          cols=""
          rows=""
          placeholder="type.."
        ></textarea>
        <span>Address</span>
        <textarea
          name="address"
          id=""
          cols=""
          rows=""
          placeholder="type.."
        ></textarea>
      </div>
      <button id="btn" type="submit" value="submit">
        Submit
      </button>
    </div>
  );
}

export default ContactForm;
