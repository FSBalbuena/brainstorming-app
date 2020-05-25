import React, { useEffect } from 'react';
import { Divider } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { setUrl } from 'store/actions/brainstorming';
import { Session } from 'components/Brainstorming';
import {
  HeaderContainer,
  StepsContainer,
  StepViewsContainer,
} from 'containers/Brainstorming';

const SessionContainer = () => {
  const dispatch = useDispatch();
  const { data: session } = useSelector(state => state.brainstorming);
  useEffect(() => {
    const url = window.location.href;
    dispatch(setUrl(url));
  }, []);
  return (
    <Session>
      <HeaderContainer />
      <Divider />
      <StepsContainer />
      <StepViewsContainer currentStep={session.step} />
    </Session>
  );
};

export default SessionContainer;
