import { actionCreator } from 'utils/storeActions';

import {
  SOME_ACTION_REQUEST,
  SOME_ACTION_SUCCEDED,
  SOME_ACTION_FAILED,
} from 'data/actionsConstants';

export const actionRequest = actionCreator(SOME_ACTION_REQUEST);
export const actionSucceded = actionCreator(SOME_ACTION_SUCCEDED);
export const actionFailed = actionCreator(SOME_ACTION_FAILED);

export const fetchSomeAction = () => dispatch => {
  dispatch(actionRequest());
};
