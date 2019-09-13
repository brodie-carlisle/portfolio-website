import React from "react";

function Footer() {
  return (
    <div className="footer">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <a href="https://github.com/brodie-carlisle" target="_blank">
        <i
          class="fa fa-github"
          style={{ fontSize: "48px", color: "black" }}
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/brodie-carlisle/" target="_blank">
        <i
          class="fa fa-linkedin-square"
          style={{ fontSize: "48px", color: "blue" }}
        ></i>
      </a>
    </div>
  );
}

export default Footer;
