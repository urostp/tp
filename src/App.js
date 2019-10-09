import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./About";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <h1>This should be a exercisse in creating and managing Git Repos</h1>
          <p>To enter add your git handle !</p>
        </AppBar>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/about">About</Link>
          </MenuItem>
        </Menu>

        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <ListItemText primary="@ukaric" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="@ZeljkoAndjelic" />
          </ListItem>
        </List>
      </div>
    </Router>
  );
}

export default App;
