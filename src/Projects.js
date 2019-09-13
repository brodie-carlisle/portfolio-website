import React from "react";
import "./App.css";
import resume from "./resume-website.pdf"
import pic from "./pic.jpg"

function Projects() {
  return (
    <div className="resume">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <i class="fa fa-file-pdf-o" style={{ fontSize: "48px", color: "black" }}></i>
      <a href={resume} download={resume}>Download Resume pdf
      
      </a>
    </div>
  );
}
export default Projects;