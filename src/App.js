// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Reset from "./components/Reset";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/home"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/reset"} className="nav-link">
                  Reset
                </Link>
              </li>
              <li>
                <Link to={"/signIn"} className="nav-link">
                  SignIn
                </Link>
              </li>
              <li>
                <Link to={"/signUp"} className="nav-link">
                  SignUp
                </Link>
              </li>
              <hr />
            </ul>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/reset" component={Reset} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUn" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
