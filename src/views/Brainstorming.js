import React from 'react';
import { NewBrainstorming, BrainstormingSession } from 'containers';
import { useSelector } from 'react-redux';
const Brainstorming = () => {
  const brainstorming = useSelector(state => state.brainstorming);

  return brainstorming ? (
    <BrainstormingSession session={brainstorming} />
  ) : (
    <NewBrainstorming />
  );
};

export default Brainstorming;
