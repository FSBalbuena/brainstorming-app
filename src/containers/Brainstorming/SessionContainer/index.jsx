import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'semantic-ui-react';

import { placeSessionUrl } from 'store/actions/brainstorming';
import Session from 'components/Brainstorming/Session';
import HeaderContainer from '../HeaderContainer';
import StepsContainer from '../StepsContainer';

const SessionContainer = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const onStepClick = (_, data) => setCurrentStep(data.step);

  useEffect(() => {
    const url = window.location.href;
    dispatch(placeSessionUrl(url));
  }, [dispatch]);

  return (
    <Session>
      <HeaderContainer />
      <Divider />
      <StepsContainer currentStep={currentStep} onStepClick={onStepClick} />
      {/*<StepViewsContainer currentStep={currentStep}/>*/}
    </Session>
  );
};

export default SessionContainer;
