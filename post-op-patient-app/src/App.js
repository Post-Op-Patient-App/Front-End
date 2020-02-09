import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.scss';
import Patient from "./components/Patient/Patient.js";
import Home from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

function App(props) {
  return (
    <main>
    <Router class="container">
      <div className="nav-tabs">
        <Link className="links" to="/login">Log In</Link>
        <Link className="links" to="/patient/">Patient Info</Link>
      </div>
      <Switch>
        <Route path={`/patient/`}>
          <Patient id={props.id}/>
        </Route>
        <Route path="/login">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
      </Router>
    </main>
  );
}

export default App;
