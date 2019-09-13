import React from "react";
import "./App.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form className="form">
        <input type="text" placeHolder="Enter Name" /><br/>
        <input type="email" placeHolder="email address" /><br/>
        <textarea rows="4" cols="50" placeHolder="type message"></textarea><br/>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
