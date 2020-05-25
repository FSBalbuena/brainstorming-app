import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import SessionContainer from 'containers/Brainstorming/SessionContainer';
import { NewBrainstorming } from 'containers';

const Brainstorming = () => {
  const [session, setSession] = useState({});

  return isEmpty(session) ? (
    <NewBrainstorming setSession={setSession} />
  ) : (
    <SessionContainer session={session} setSession={setSession} />
  );
};

export default Brainstorming;
