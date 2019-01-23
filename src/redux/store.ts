import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/root';

declare const window: any;

const getEnhancer = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return composeEnhancers(applyMiddleware(thunk));
};

// @ts-ignore
export const store = createStore(
  rootReducer,
  getEnhancer(),
);
