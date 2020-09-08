import React, { Component } from "react";
import Event from "./Event";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/eventActions";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  state = {
    keyword: "",
  };
  render() {
    const { events } = this.props;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Event</span> List
        </h1>

        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search event"
            onChange={(event) => {
              this.setState({
                keyword: event.target.value,
              });
            }}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" style={{ cursor: "pointer" }}>
              <i className="fas fa-search" />
            </span>
          </div>
        </div>

        {events.map((event) =>
          event.name.toLowerCase().search(this.state.keyword.toLowerCase()) >
          -1 ? (
            <Event key={event.id} event={event} />
          ) : null
        )}
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
  getEvents: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  events: state.event.events,
});

export default connect(mapStateToProps, { getEvents })(Events);
