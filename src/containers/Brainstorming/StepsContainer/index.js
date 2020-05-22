import React from 'react';
import { SessionSteps } from 'components/Brainstorming';
const StepsContainer = ({ currentStep, onStepClick }) => {
  let steps = [
    {
      step: 1,
      title: 'Idear',
      description:
        'Tu equipo suma ideas hasta que decidas pasar al siguiente paso',
    },
    {
      step: 2,
      title: 'Puntuar',
      description: 'Se puntuan las mejores ideas',
    },
    {
      step: 3,
      title: 'Terminar y descargar',
    },
  ];

  steps = steps.map(step => ({
    ...step,
    active: step.step === currentStep,
    completed: step.step < currentStep,
    disabled: step.step === 1 && step.step < currentStep,
    onClick: onStepClick,
  }));

  return <SessionSteps steps={steps} />;
};

export default StepsContainer;
