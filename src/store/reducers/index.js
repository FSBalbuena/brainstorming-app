import { combineReducers } from 'redux';
import ui from './uiReducer';
import brainstorming from './brainstorming';
export default combineReducers({
  brainstorming,
  ui,
});
