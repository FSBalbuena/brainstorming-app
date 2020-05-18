import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
} from 'data/actionsConstants';

const initialState = {
  admin: 'Federico Balbuena',
  sessionTitle: 'Brainstorming Session',
  goal:
    'Provide ideas to solve problems due to business, logistics, systems, or products.',
  url:
    'http://ww.short.url/c0opq345678902345678dfghjkertyu345678cfgbjhnkmj-hbdsuybsye45678',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BRAINSTORMING_SESSION:
      return action.payload;
    case SET_BRAINSTORMING_URL:
      return { ...state, url: action.payload };
    default:
      return state;
  }
};
