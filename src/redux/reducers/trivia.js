import { NEXT_QUESTION, HANDLE_SCORE } from '../actions/actionTypes';

const initialState = {
  question: 0,
  score: 0,
  assertions: 0,
};

const triviaReducer = (state = initialState, action) => {
  const d = action.difficulty;
  const dValue = d === 'hard' ? 3 : d === 'medium' ? 2 : 1;
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        question: state.question + 1,
      };
    case HANDLE_SCORE:
      return {
        ...state,
        score: action.answer
          ? state.score + dValue * action.timeLeft
          : state.score,
        assertions: action.answer ? state.assertions + 1 : state.assertions,
      };
    default:
      return state;
  }
};

export default triviaReducer;
