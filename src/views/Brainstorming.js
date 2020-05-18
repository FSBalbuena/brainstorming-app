import React from 'react';
import { useSelector } from 'react-redux';

import SessionContainer from 'containers/Brainstorming/SessionContainer';
import { NewBrainstorming } from 'containers';

const Brainstorming = () => {
  const brainstorming = useSelector(state => state.brainstorming);

  return brainstorming ? <SessionContainer /> : <NewBrainstorming />;
};

export default Brainstorming;
