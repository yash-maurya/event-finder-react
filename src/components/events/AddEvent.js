import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEvent } from "../../actions/eventActions";
import DateTimePicker from "react-datetime-picker";
import classnames from "classnames";
import "./AddEventStyle.css";
import { v4 as uuid } from "uuid";

class AddEvent extends Component {
  state = {
    id: uuid(),
    name: "",
    date: new Date(),
    details: "",
    errors: {},
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { id, name, date, details } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (date === "") {
      this.setState({ errors: { date: "Date is required" } });
      return;
    }

    if (details === "") {
      this.setState({ errors: { details: "Details are required" } });
      return;
    }

    const newEvent = {
      id,
      name,
      date,
      details,
    };

    this.props.addEvent(newEvent);

    this.setState({
      id: uuid(),
      name: "",
      date: "",
      details: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, date, details, errors } = this.state;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Create</span> Event
        </h1>
        <div className="card mb-3">
          <div className="card-header">Add Event</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />

              <div className="form-group">
                <label htmlFor={date}>Date:</label>
                <DateTimePicker
                  onChange={(date) => this.setState({ date })}
                  value={this.state.date}
                  className="form-control form-control-lg"
                  minDate={new Date()}
                  dateFormat="dddd, MMMM Do YYYY"
                  timeFormat="h:mm:ss a"
                  clearIcon={null}
                />
              </div>

              <div className="form-group">
                <label htmlFor="details">Details:</label>
                <br />
                <textarea
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.details,
                  })}
                  value={details}
                  onChange={this.onChange}
                  label="Details"
                  name="details"
                ></textarea>
                {errors.details && (
                  <div className="invalid-feedback">{errors.details}</div>
                )}
              </div>
              <input
                type="submit"
                value="Add Event"
                className="btn btn-block btn-danger"
                style={{ cursor: "pointer" }}
              />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(AddEvent);
