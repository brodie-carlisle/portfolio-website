import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/brodie-carlisle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa fa-github"
          style={{ fontSize: "48px", color: "black" }}
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/brodie-carlisle/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="fa fa-linkedin-square"
          style={{ fontSize: "48px", color: "black" }}
        ></i>
      </a>
    </div>
  );
}

export default Footer;
