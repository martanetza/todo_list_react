import React from "react";
import List from "../Pages/List/List";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DeletedTasks from "../Pages/DeletedTasks/DeletedTasks";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/deletedTasks">Deleted tasks </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route path="/deletedTasks">
              <DeletedTasks />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
