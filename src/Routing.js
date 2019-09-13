import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import Bio from "./Bio"
import Contact from "./Contact"
import Projects from "./Projects"

function Routing (){
  return(
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Bio" component={Bio}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Projects" component={Projects}/>
    </Switch>
    
  )
}

export default Routing;