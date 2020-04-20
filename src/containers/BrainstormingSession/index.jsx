import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSomeAction } from 'store/actions/exampleAction';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

const BrainstormingSession = ({ session }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSomeAction());
  }, []);

  return <Header>Brainstorming</Header>;
};

BrainstormingSession.defaultProps = {
  session: {},
};

BrainstormingSession.propTypes = {
  session: PropTypes.shape({
    admin: PropTypes.string,
    sessionTitle: PropTypes.string,
    goal: PropTypes.string,
  }),
};

export default BrainstormingSession;
