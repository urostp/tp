import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>This should be a exercisse in creating and managing Git Repos</h1>
        <p>To enter add your git handle !</p>
        <nav>
          <ul>
            <li>
              <link to="/about">About</link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>About</div>
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
