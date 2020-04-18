import {
  SOME_ACTION_REQUEST,
  SOME_ACTION_SUCCEDED,
  SOME_ACTION_FAILED,
} from 'data/actionsConstants';

const initialState = {
  isLoading: false,
  data: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION_REQUEST:
      return state;
    case SOME_ACTION_SUCCEDED:
      return state;
    case SOME_ACTION_FAILED:
      return state;
    default:
      return state;
  }
};
