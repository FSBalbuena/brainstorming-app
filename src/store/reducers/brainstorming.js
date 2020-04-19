import { SET_BRAINSTORMING_SESSION } from 'data/actionsConstants';

const initialState = {
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BRAINSTORMING_SESSION:
      return { data: action.payload };
    default:
      return state;
  }
};
