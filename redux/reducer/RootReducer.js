import {combineReducers} from 'redux';
import Reducer from './ApiReducer';
import counterReducer from './counterReducer';

const appReducer = combineReducers({
  mainReducer: Reducer,
  counterReducer: counterReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
