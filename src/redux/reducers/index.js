import {
  GET_LOGIN,
  GET_DATA,
  NEXT_QUESTION,
  REQUEST_DATA,
  HANDLE_SCORE,
} from '../actions/actionTypes';

const initialState = {
  data: [],
  receivedData: false,
  trivia: { question: 0, score: 0, assertions: 0 },
  login: {
    gravatarEmail: '',
    name: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN:
      console.log('TESTE', action.data);
      return {
        ...state,
        data: action.data,
        login: {
          gravatarEmail: action.email,
          name: action.name,
        },
      };
    case REQUEST_DATA:
      return {
        ...state,
        receivedData: false,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.data,
        receivedData: true,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        trivia: { ...state.trivia, question: state.trivia.question + 1 },
      };
    case HANDLE_SCORE:
      const d = action.difficulty;
      const dValue = d === 'hard' ? 3 : d === 'medium' ? 2 : 1;
      return {
        ...state,
        trivia: {
          ...state.trivia,
          score: action.answer
            ? state.trivia.score + dValue * action.timeLeft
            : state.trivia.score,
          assertions: action.answer
            ? state.trivia.assertions + 1
            : state.trivia.assertions,
        },
      };
    default:
      return state;
  }
};
