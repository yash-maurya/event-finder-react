import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Ab</span>out
        </h1>
        <p>A React app where users can view and promote upcoming events.</p>
        <p>Project made for training ReactJS Training by Simplilearn</p>
        <p>
          Testing JSON Server Hosted at{" "}
          <a
            href="https://my-json-server.typicode.com/yash-maurya/event-finder-json-server/events/"
            target="about_blank"
          >
            https://my-json-server.typicode.com/yash-maurya/event-finder-json-server/events/
          </a>
        </p>
        <p>
          <b>Made by:</b> Yash Maurya
        </p>
      </React.Fragment>
    );
  }
}
export default About;
