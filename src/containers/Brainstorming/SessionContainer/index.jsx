import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';

import { Session } from 'components/Brainstorming';
import {
  HeaderContainer,
  StepsContainer,
  StepViewsContainer,
} from 'containers/Brainstorming';

const SessionContainer = ({ session, setSession }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const onStepClick = (_, data) => setCurrentStep(data.step);

  useEffect(() => {
    const url = window.location.href;
    setSession(session => ({ ...session, url }));
  }, []);
  return (
    <Session>
      <HeaderContainer {...session} />
      <Divider />
      <StepsContainer currentStep={currentStep} onStepClick={onStepClick} />
      <StepViewsContainer currentStep={currentStep} />
    </Session>
  );
};

SessionContainer.propTypes = {
  session: PropTypes.shape({
    admin: PropTypes.string,
    title: PropTypes.string,
    goal: PropTypes.string,
    url: PropTypes.string,
  }),
  setSession: PropTypes.func,
};

export default SessionContainer;
