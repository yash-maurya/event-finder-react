import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Events from "./components/events/Events";
import AddEvent from "./components/events/AddEvent";
import About from "./components/layout/About";

import { Provider } from "react-redux";
import store from "./store";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
