import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <h1 className="display-4 d-inline-block">
              <i className="fas fa-calendar-check p-2 display-4" />
              Event Finder
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item mr-2">
                <Link to="/" className="nav-link">
                  <h5 className="text-white d-inline-block">Home</h5>
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link to="/event/add" className="nav-link">
                  <i className="fas fa-plus mr-2 text-white" />
                  <h5 className="text-white d-inline-block">Create Event</h5>
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-user mr-2 text-white" />
                  <h5 className="text-white d-inline-block">About</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
