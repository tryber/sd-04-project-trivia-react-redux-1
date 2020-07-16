import { GET_LOGIN, GET_DATA } from "./actionTypes";
import { getQuestions } from "../../service";

export function getLogin(email, name) {
  return { type: GET_LOGIN, email, name}
}

export function getData(data) {
  return { type: GET_DATA, data }
}

export function fetchData() {
  return (dispatch) => getQuestions().then((data) => dispatch(getData(data)))
}
