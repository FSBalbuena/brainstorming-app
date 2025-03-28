import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
  SET_BRAINSTORMING_STEP,
  SET_BRAINSTORMING_IDEAS,
} from '@/data/actionsConstants';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export default (state = initialState, action) => {
  let data = {};
  let ideas = [];
  switch (action.type) {
    case SET_BRAINSTORMING_SESSION:
      return { ...state, data: action.payload };
    case SET_BRAINSTORMING_URL:
      data = { ...state.data, url: action.payload };
      return { ...state, data };
    case SET_BRAINSTORMING_STEP:
      data = { ...state.data, step: action.payload };
      return { ...state, data };
    case SET_BRAINSTORMING_IDEAS:
      ideas = action.payload;
      data = { ...state.data, ideas };
      return { ...state, data };
    default:
      return state;
  }
};
