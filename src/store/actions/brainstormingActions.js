import { actionCreator } from 'utils/storeActions';

import { SET_BRAINSTORMING_SESSION } from 'data/actionsConstants';

export const setSession = actionCreator(SET_BRAINSTORMING_SESSION);

export const setBrainstormingSession = body => dispatch => {
  dispatch(setSession(body));
};
