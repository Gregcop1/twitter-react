import {createStore} from 'redux';
import {rootReducer} from './reducers/root';

// @ts-ignore
export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
