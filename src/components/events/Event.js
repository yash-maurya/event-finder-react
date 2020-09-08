import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
import Moment from "moment";

class Event extends Component {
  state = {
    showEventInfo: true,
  };

  onDeleteClick = (id) => {
    this.props.deleteEvent(id);
  };

  render() {
    const { id, name, date, details } = this.props.event;
    const { showEventInfo } = this.state;

    return (
      <div className="card mb-3">
        <h5 className="card-header">
          {name}{" "}
          {showEventInfo ? (
            <i
              onClick={() =>
                this.setState({
                  showEventInfo: !this.state.showEventInfo,
                })
              }
              className="fas fa-chevron-up float-right"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <i
              onClick={() =>
                this.setState({
                  showEventInfo: !this.state.showEventInfo,
                })
              }
              className="fas fa-chevron-down float-right"
              style={{ cursor: "pointer" }}
            />
          )}
          <i
            className="fas fa-times text-danger float-right"
            style={{ cursor: "pointer", display: "none" }}
          />
        </h5>
        {showEventInfo ? (
          <div className="card-body">
            <p className="card-text">{details}</p>
            <p className="card-text">
              <b>Timing:</b> {Moment(date).format("dddd, MMMM Do YYYY, h:mm a")}
            </p>
            <button
              className="btn btn-outline-danger"
              data-toggle="modal"
              data-target={"#deleteModal" + id}
            >
              <i className="fas fa-trash-alt mr-1" />
              Delete
            </button>
          </div>
        ) : null}
        <div className="modal fade" id={"deleteModal" + id}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Delete {name}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this event?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={this.onDeleteClick.bind(this, id)}
                >
                  <i className="fas fa-trash-alt mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Event.defaultProps = {
  date: new Date(),
};

Event.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

export default connect(null, { deleteEvent })(Event);
