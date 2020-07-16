import { GET_LOGIN } from '../actions/actionTypes';

const initialState = {
  login: {
    gravatarEmail: '',
    name: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        login: {
          gravatarEmail: action.email,
          name: action.name,
        },
      };
    default:
      return state;
  }
};
