import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Patient from "./components/Patient/Patient.js";
import Home from "./components/Home.js";

function App(props) {
  return (
    <main>
    <Router>
      <div className="nav-tabs">
        <Link className="links" to="/">Log In</Link>
      </div>
      <Switch>
        <Route path={`/patient/:${props.id}`}>
          <Patient id={props.id}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
    </main>
  );
}

export default App;
