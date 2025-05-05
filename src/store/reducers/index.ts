import { combineReducers } from 'redux';
import ui from './uiReducer';
import brainstorming from './brainstormingReducer';
import auth from './authReducer';
export default combineReducers({
  brainstorming,
  auth,
  ui,
});
