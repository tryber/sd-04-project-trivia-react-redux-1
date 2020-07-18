import { combineReducers } from 'redux';

import triviaReducer from './trivia';
import loginReducer from './login';
import dataReducer from './data';

const reducer = combineReducers({
  trivia: triviaReducer,
  login: loginReducer,
  data: dataReducer,
});

export default reducer;
