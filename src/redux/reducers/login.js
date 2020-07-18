import { GET_LOGIN } from '../actions/actionTypes';

const initialState = {
  gravatarEmail: '',
  name: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN:
      return {
        ...state,
        gravatarEmail: action.email,
        name: action.name,
      };
    default:
      return state;
  }
};

export default loginReducer;
