import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from 'store/actions/brainstorming';

import { SessionSteps } from 'components/Brainstorming';
import { makeSteps } from 'factory/brainstorming';

const StepsContainer = () => {
  const dispatch = useDispatch();
  const {
    data: { step },
  } = useSelector(state => state.brainstorming);

  const onStepClick = (_, data) => dispatch(setStep(data.step));
  const steps = makeSteps(step, onStepClick);
  return <SessionSteps steps={steps} />;
};

export default StepsContainer;
