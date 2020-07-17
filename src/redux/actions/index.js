import { GET_LOGIN, GET_DATA } from "./actionTypes";
import { getQuestions } from "../../service";

export function getLogin(email, name) {
  return { type: GET_LOGIN, email, name}
}

export function getData(data) {
  return { type: GET_DATA, data }
}

export function fetchData(token) {
  console.log('token', token)
  getQuestions(token).then(data => console.log(data))
  return (dispatch) => getQuestions(token).then((data) => dispatch(getData(data)))
}
