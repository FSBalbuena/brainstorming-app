import { actionCreator } from '@/utils/storeActions';
import { v4 as uuidv4 } from 'uuid';

import { SET_AUTH_ID } from '@/data/actionsConstants';

export const setAuthId = actionCreator(SET_AUTH_ID);

export const setId = () => dispatch => {
  let authId = localStorage.getItem('authId');
  console.log(authId);
  if (!authId) {
    authId = uuidv4();
    localStorage.setItem('authId', authId);
  }
  dispatch(setAuthId(authId));
};
