import { actionCreator } from 'utils/storeActions';
import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
  SET_BRAINSTORMING_STEP,
  CREATE_BRAINSTORMING_IDEA,
  UPDATE_BRAINSTORMING_IDEA,
} from 'data/actionsConstants';

export const setBrainstormingSession = actionCreator(SET_BRAINSTORMING_SESSION);
export const setBrainstormingUrl = actionCreator(SET_BRAINSTORMING_URL);
export const setBrainstormingStep = actionCreator(SET_BRAINSTORMING_STEP);
export const createBrainstormingIdea = actionCreator(CREATE_BRAINSTORMING_IDEA);
export const updateBrainstormingIdea = actionCreator(UPDATE_BRAINSTORMING_IDEA);

export const setSession = body => dispatch => {
  const initialSession = {
    admin: '',
    title: '',
    goal: '',
    url: '',
    step: 1,
    ideas: [],
  };
  const newSession = { ...initialSession, ...body };
  dispatch(setBrainstormingSession(newSession));
};
export const setUrl = urlString => dispatch => {
  dispatch(setBrainstormingUrl(urlString));
};
export const setStep = stepNumber => dispatch => {
  dispatch(setBrainstormingStep(stepNumber));
};
export const createIdea = body => dispatch => {
  const initialIdea = {
    id: new Date().getTime(),
    text: '',
    rating: 0,
    pros: '',
    cons: '',
  };
  const newIdea = { ...initialIdea, ...body };

  dispatch(createBrainstormingIdea(newIdea));
};
export const updateIdea = ideaObject => dispatch => {
  dispatch(updateBrainstormingIdea(ideaObject));
};
