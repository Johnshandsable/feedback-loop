import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

/* REDUCERS */
/*
  TODO - 
    Use one reducer and store each key value pair in 
*/
const feedbackReducer = (state = {}, action) => {
  if (action.type === 'SET_FEEDBACK') {
    return {
      ...state,
      [action.payload.property]: action.payload.value,
    };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
