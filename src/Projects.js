import React from "react";
import "./App.css";
import resume from "./resume-website.pdf";

function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <h2>Contact List</h2>
        <p>
          <b>Description:</b> React Application for sales representatives to
          view and manage their business contacts.
        </p>
        <p>
          <b>Technologies Used: </b>React.js, Javascript, CSS, Git.
        </p>
        <br />
        <br />

        <a
          href="https://contact-list-tech-asmt.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa fa-external-link"
            style={{ fontSize: "48px", color: "black" }}
          ></i>
          Link to project
        </a>
      </div>
      <div className="project">
        <h2>To-Do List</h2>
        <p>
          <b>Description: </b>To-do list web application where tasks are input
          and a due date is selected. Input is sent to a database and "CRUD" can
          be utilized.
        </p>
        <p>
          <b>Technologies Used: </b>React.js, CSS, MongoDB, Express API, Mongo
          Atlas.
        </p>

        <a
          href="https://helio-todo-ui.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa fa-external-link"
            style={{ fontSize: "48px", color: "black" }}
          ></i>
          Link to project
        </a>
      </div>
      <br />
      <div className="project">
        <h2>Resume</h2>
        <br />
        <br />

        <a href={resume} download={resume}>
          <i
            className="fa fa-file-pdf-o"
            style={{ fontSize: "48px", color: "black" }}
          ></i>
          Download Resume pdf
        </a>
      </div>
      <div className="project">
        <h2>Exercisms</h2>
        <p>
          <b>Description:</b> Javascript practice exercises
        </p>

        <br />
        <br />

        <a
          href="https://github.com/brodie-carlisle/Exercisms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fa fa-github"
            style={{ fontSize: "48px", color: "black" }}
          ></i>
          Link to Github repository
        </a>
      </div>
    </div>
  );
}
export default Projects;
