import { GET_LOGIN, GET_DATA } from '../actions/actionTypes';

const initialState = {
  data:[],
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
        data: action.data,
        login: {
          gravatarEmail: action.email,
          name: action.name,
        },
      };
    case GET_DATA:
      return{
        ...state,
        data: action.data,
      }
    default:
      return state;
  }
};
