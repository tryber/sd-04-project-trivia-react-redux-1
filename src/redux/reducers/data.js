import {
  GET_DATA,
  REQUEST_DATA,
} from '../actions/actionTypes';

const initialState = {
  questionsData: [],
  receivedData: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        receivedData: false,
      };
    case GET_DATA:
      return {
        ...state,
        questionsData: action.data,
        receivedData: true,
      };
    default:
      return state;
  }
};

export default dataReducer;
