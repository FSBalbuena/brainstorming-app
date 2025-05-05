import { SET_AUTH_ID } from '@/data/actionsConstants';

const initialState = {
  isLoading: false,
  id: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
