import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import reducer from './reducer';
import ajaxMiddleware from '../middlewares/ajax';

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(
    ajaxMiddleware
  ))
);

export default store;