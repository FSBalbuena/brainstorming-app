import React from 'react';
import PropTypes from 'prop-types';

import { SessionSteps } from 'components/Brainstorming';
import { makeSteps } from 'factory/brainstorming';

const StepsContainer = ({ currentStep, onStepClick }) => {
  const steps = makeSteps(currentStep, onStepClick);
  return <SessionSteps steps={steps} />;
};

StepsContainer.propTypes = {
  currentStep: PropTypes.number,
  onStepClick: PropTypes.func,
};

export default StepsContainer;
