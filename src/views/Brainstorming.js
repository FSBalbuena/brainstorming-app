import React from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { SessionContainer } from 'containers/Brainstorming';
import { NewBrainstorming } from 'containers';

const Brainstorming = () => {
  const { data: session } = useSelector(state => state.brainstorming);

  return isEmpty(session) ? <NewBrainstorming /> : <SessionContainer />;
};

export default Brainstorming;
