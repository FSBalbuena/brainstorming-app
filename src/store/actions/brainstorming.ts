import { v4 as makeId } from 'uuid';

import { actionCreator } from '@/utils/storeActions';
import {
  SET_BRAINSTORMING_SESSION,
  SET_BRAINSTORMING_URL,
  SET_BRAINSTORMING_STEP,
  SET_BRAINSTORMING_IDEAS,
  UPDATE_BRAINSTORMING_IDEA,
} from '@/data/actionsConstants';

import { BrainstormingApi } from '@/service';
import { onValue, off } from 'firebase/database';


export const setBrainstormingSession = actionCreator(SET_BRAINSTORMING_SESSION);
export const setBrainstormingUrl = actionCreator(SET_BRAINSTORMING_URL);
export const setBrainstormingStep = actionCreator(SET_BRAINSTORMING_STEP);
export const setBrainstormingIdeas = actionCreator(SET_BRAINSTORMING_IDEAS);
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
  return BrainstormingApi.createNewSession(newSession)
    .then(() => {
      dispatch(setBrainstormingSession(newSession));
      return newSession.id;
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

export const getSession = (id, url) => dispatch => {
  return BrainstormingApi.getSession(id).then(session => {
    const ideas = session.ideas ? Object.entries(session.ideas).map(([id, idea]) => ({
      id,
      ...idea,
    })) : [];
    ideas.sort((a, b) => a.createdAt - b.createdAt);
    const withUrl = { ...session,ideas, url };
    dispatch(setBrainstormingSession(withUrl));
  })
};

export const setUrl = urlString => dispatch => {
  dispatch(setBrainstormingUrl(urlString));
};
export const setStep = (sessionId, stepNumber) => () => {
  return BrainstormingApi.setStep(sessionId, stepNumber);
};

export const createIdea = (sessionId, body) => () => {
  const initialIdea = {
    id: makeId(),
    createdAt: new Date().getTime(),
    text: '',
    rating: 0,
    pros: '',
    cons: '',
  };
  const newIdea = { ...initialIdea, ...body };
  return BrainstormingApi.setIdea(sessionId, newIdea);
};
export const updateIdea = (sessionId, ideaObject) => () => {
  return BrainstormingApi.setIdea(sessionId, ideaObject);
};

export const suscribeToIdeas = sessionId => dispatch => {
  const ideasRef = BrainstormingApi.sessionIdeas(sessionId)
  return onValue(ideasRef, data => {
    const ideasObject = data.val();
    if (ideasObject) {
      const ideas = Object.entries(ideasObject).map(([id, idea]) => ({
        id,
        ...idea,
      }));
      ideas.sort((a, b) => a.createdAt - b.createdAt);
      dispatch(setBrainstormingIdeas(ideas));
    }
  });
};

export const unsuscribeToIdeas = sessionId => () => {
  off(BrainstormingApi.sessionIdeas(sessionId));
};

export const suscribeToStep = sessionId => dispatch => {
  const stepsRef = BrainstormingApi.sessionSteps(sessionId)
  return onValue(stepsRef, data => {
    const step = data.val();
    if (step) {
      dispatch(setBrainstormingStep(step));
    }
  });
};

export const unsuscribeToSteps = sessionId => () => {
  off(BrainstormingApi.sessionSteps(sessionId));
};
