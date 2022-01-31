import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import metricsReducer from './metrics/metrics';

const reducer = combineReducers({ metricsReducer });

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
