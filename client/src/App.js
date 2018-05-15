import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NoMatch} /> */}
            </Switch>
          </div>
        
    </Router>
    );
  }
}

export default App;
