import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.scss';
import Patient from "./components/Patient/Patient.js";
import Home from "./components/Login/Home.js";
import Nurse from "./components/Nurse/Nurse.js";
import Register from "./components/Register/Register.js";


function App(props) {
  return (
    <main>
    <header>
    <h1>Post-Op Friend!</h1>
    </header>
    <Router class="container">
      <div className="nav-tabs">
        <Link className="links" to="/login">Log In</Link>
        <Link className="links" to="/patient/">Patient Info</Link>
        {/*to be removed*/}
        <Link className="links" to="/nurse/">Nurse Info</Link>
      </div>
      <Switch>
        <Route path={`/patient/`}>
          <Patient id={props.id}/>
        </Route>
        <Route path={`/nurse/`}>
          <Nurse />
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
