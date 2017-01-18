import { combineReducers } from 'redux';
import getName from './getname';
import getID from './getid';

const rootReducer = combineReducers({
  name: getName,
  id: getID
});

export default rootReducer;
