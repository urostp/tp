import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./About";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>This should be a exercisse in creating and managing Git Repos</h1>
        <p>To enter add your git handle !</p>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <ul>
          <li>@ukaric</li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
