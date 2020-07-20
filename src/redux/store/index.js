import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const getPersistedState = (key, defaultState) => {
  try {
    const persistedState = localStorage.getItem(key);
    if (persistedState === null) {
      return defaultState;
    }
    return JSON.parse(persistedState);
  } catch (err) {
    console.log(`Não tinha local storage do ${key}`);
    return defaultState;
  }
};

const preloadedState = () => {
  // const trivia = getPersistedState('trivia', {
  // question: 0,
  // score: 0,
  // assertions: 0,
  // });
  const { player } = getPersistedState('state', {
    player: { name: '', gravatarEmail: '' },
  });
  const token = getPersistedState('token', '');
  const data = getPersistedState('data', {
    questionData: [],
    receivedData: false,
  });
  return {
    trivia: { question: 0, score: 0, assertions: 0 },
    login: {
      name: player.name,
      gravatarEmail: player.gravatarEmail,
      token,
    },
    data,
  };
};

const store = createStore(
  reducer,
  preloadedState(),
  composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
  const state = store.getState();
  const playerState = {
    player: {
      name: state.login.name,
      assertions: state.trivia.assertions,
      score: state.trivia.score,
      gravatarEmail: state.login.gravatarEmail,
    },
  };
  const { data } = state;
  localStorage.setItem('state', JSON.stringify(playerState));
  localStorage.setItem('data', JSON.stringify(data));
});

export default store;
