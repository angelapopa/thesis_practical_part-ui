import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import JsonDataView from "./components/jsondataview";
import UmlRepresentation from "./components/umlrepresentation";

class App extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/json" component={JsonDataView} />
              <Route path="/uml" component={UmlRepresentation} />
              {/* this route must stay last */}
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
