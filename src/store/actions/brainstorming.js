import { actionCreator } from 'utils/storeActions';

import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
} from 'data/actionsConstants';

export const setSession = actionCreator(SET_BRAINSTORMING_SESSION);

export const placeUrl = actionCreator(SET_BRAINSTORMING_URL);

export const setBrainstormingSession = body => dispatch => {
  dispatch(setSession(body));
};

/**
 * @description Sets session`s url to be sheare.
 * @param {string} url
 */
export const placeSessionUrl = url => dispatch => {
  dispatch(placeUrl(url));
};
