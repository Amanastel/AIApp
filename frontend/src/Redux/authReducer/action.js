import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";
import axios from "axios";

export const login = (userdata) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`${api}`, userdata)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};
