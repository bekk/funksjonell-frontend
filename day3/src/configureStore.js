import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import DevTools from './containers/DevTools';

const storeEnhancer = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
);

export default function (initialState) {
  return createStore(rootReducer, initialState, storeEnhancer);
}
