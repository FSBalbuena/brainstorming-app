import { v4 as makeId } from 'uuid';

import { actionCreator } from 'utils/storeActions';
import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
  SET_BRAINSTORMING_STEP,
  CREATE_BRAINSTORMING_IDEA,
  UPDATE_BRAINSTORMING_IDEA,
} from 'data/actionsConstants';

import { BrainstormingApi } from 'service';

export const setBrainstormingSession = actionCreator(SET_BRAINSTORMING_SESSION);
export const setBrainstormingUrl = actionCreator(SET_BRAINSTORMING_URL);
export const setBrainstormingStep = actionCreator(SET_BRAINSTORMING_STEP);
export const createBrainstormingIdea = actionCreator(CREATE_BRAINSTORMING_IDEA);
export const updateBrainstormingIdea = actionCreator(UPDATE_BRAINSTORMING_IDEA);

export const setSession = body => dispatch => {
  const initialSession = {
    id: makeId(),
    admin: '',
    title: '',
    goal: '',
    step: 1,
    ideas: [],
  };
  const newSession = { ...initialSession, ...body };
  console.log('dispatch(ON_SET_BRAINSTORMIN_SESSION)');
  return BrainstormingApi.createNewSession(newSession)
    .then(() => {
      dispatch(setBrainstormingSession(newSession));
      return newSession.id;
    })
    .catch(err => {
      console.log('dispatch(ERROR_ON_SET_BRAINSTORMING_SESSION)');
      return Promise.reject(err);
    });
};

export const getSession = (id, url) => dispatch => {
  return BrainstormingApi.getSession(id).then(session => {
    const withUrl = { ...session, url, ideas: [] };
    dispatch(setBrainstormingSession(withUrl));
  });
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

export const ideasSuscriptionCallback = () => null;

export const suscribeToIdeas = id => dispatch => {
  //suscribe to session's ideas
  //dispatch(updateSessionIdeas(ideas))
};

export const unsuscribeToIdeas = id => dispatch => {
  //unsuscribe to session's ideas
};
