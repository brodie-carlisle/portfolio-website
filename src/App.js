import React from "react";
import "./App.css";
import pic from "./picsmall.jpg";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Routing from "./Routing";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="top">
          <h1 className="title"> Brodie Carlisle</h1>

          <Nav className="Navbar" />
        </div>
        <div className="imgFlex">
          <div className="image">
            <img src={pic} alt="pic" />
          </div>

          <Routing />
        </div>
      </Router>
      <div className="flexfooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
