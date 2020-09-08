import { GET_EVENTS, DELETE_EVENT, ADD_EVENT } from "./types";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  const res = await axios.get(
    "https://my-json-server.typicode.com/yash-maurya/event-finder-json-server/events/"
  );
  dispatch({
    type: GET_EVENTS,
    payload: res.data,
  });
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://my-json-server.typicode.com/yash-maurya/event-finder-json-server/events/${id}`
    );
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DELETE_EVENT,
      payload: id,
    });
  }
};

export const addEvent = (event) => async (dispatch) => {
  const response = await axios.post(
    "https://my-json-server.typicode.com/yash-maurya/event-finder-json-server/events/",
    event
  );
  dispatch({
    type: ADD_EVENT,
    payload: response.data,
  });
};
