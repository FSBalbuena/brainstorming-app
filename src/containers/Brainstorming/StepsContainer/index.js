import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '@/store/actions/brainstorming';

import { SessionSteps } from '@/components/Brainstorming';
import { makeSteps } from '@/factory/brainstorming';

const StepsContainer = () => {
  const dispatch = useDispatch();
  const {
    data: { step, id, adminId },
  } = useSelector(state => state.brainstorming);
  const { id: authId } = useSelector(state => state.auth);
  const isSessionAdmin = authId === adminId;

  const onStepClick = (_, data) => {
    if (isSessionAdmin) {
      dispatch(setStep(id, data.step));
    }
  };
  const steps = makeSteps(step, onStepClick, isSessionAdmin);
  return <SessionSteps steps={steps} />;
};

export default StepsContainer;
