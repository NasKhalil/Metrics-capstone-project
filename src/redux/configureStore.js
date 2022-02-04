import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import metricsReducer from './metrics/metrics';

const reducer = combineReducers({ metricsReducer });

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
