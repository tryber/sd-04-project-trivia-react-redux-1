import { GET_LOGIN } from "./actionTypes";

export function getLogin(email, name) {
  return { type: GET_LOGIN, email, name}
}
