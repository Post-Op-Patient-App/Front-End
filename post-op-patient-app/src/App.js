import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Patient from "./components/Patient/Patient.js";
import Home from "./components/Home.js";
import Nurse from "./components/Nurse/Nurse.js";

function App(props) {
  return (
    <main>
    <header>
    <h1>Post-Op Friend!</h1>
    </header>
    <Router>
      <div className="nav-tabs">
        <Link className="links" to="/">Log In</Link>
        <Link className="links" to="/patient/">Patient Info</Link>
      </div>
      <Switch>
        <Route path={`/patient/`}>
          <Patient id={props.id}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
      <footer>Copyright 2020 Lam_Da_Boiz Hacklahoma2020</footer>
    </main>
  );
}

export default App;
