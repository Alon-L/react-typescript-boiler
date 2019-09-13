import { combineReducers } from 'redux';
import { bar } from './bar';

export const rootReducer = combineReducers({
  foo: bar
});
