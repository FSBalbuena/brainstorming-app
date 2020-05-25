import { actionCreator } from 'utils/storeActions';
import { v4 as uuidv4 } from 'uuid';

import { SET_AUTH_ID } from 'data/actionsConstants';

export const setAuthId = actionCreator(SET_AUTH_ID);

export const setId = () => dispatch => {
  const id = uuidv4();
  dispatch(setAuthId(id));
};
