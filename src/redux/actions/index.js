import {
  GET_LOGIN,
  GET_DATA,
  NEXT_QUESTION,
  REQUEST_DATA,
  HANDLE_SCORE,
} from './actionTypes';
import { getQuestions } from '../../service';

export function getLogin(email, name) {
  return { type: GET_LOGIN, email, name };
}

export function getData(data) {
  return { type: GET_DATA, data };
}

export function fetchData(token) {
  return (dispatch) => {
    dispatch(requestData);
    getQuestions(token).then((data) => dispatch(getData(data)));
  };
}

export function nextQuestion() {
  return { type: NEXT_QUESTION };
}

export function requestData() {
  return { type: REQUEST_DATA };
}

export function handleScore(answer, timeLeft, difficulty) {
  return {
    type: HANDLE_SCORE,
    answer,
    timeLeft,
    difficulty,
  };
}
