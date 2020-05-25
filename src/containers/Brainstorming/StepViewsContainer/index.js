import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { IdeaTable, IdeaForm } from 'components/Brainstorming';
import { headers } from 'factory/brainstorming';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const StepViewsContainer = ({ currentStep }) => {
  const [value, setValue] = useState('');
  const [ideas, setideas] = useState([]);
  const canRate = currentStep === 2;

  const handleSubmit = e => {
    e.preventDefault();
    if (!!value.trim()) {
      const newIdea = {
        id: new Date().getTime(),
        text: value,
        rating: 0,
      };
      setideas([newIdea, ...ideas]);
      setValue('');
    }
  };
  const handleChange = (_, { value }) => setValue(value);

  const handleRate = (_, { id, rating }) => {
    const updatedIdeas = ideas
      .slice()
      .map(idea => (idea.id === id ? { ...idea, rating } : idea));
    setideas(updatedIdeas);
  };

  const tableProps = {
    headers,
    canRate,
    ideas,
    handleRate,
  };
  const formProps = {
    handleChange,
    handleSubmit,
    value,
  };
  return (
    <section className={styles.stepsDisplay}>
      {[1, 2].includes(currentStep) && <IdeaTable {...tableProps} />}
      {[1].includes(currentStep) && <IdeaForm {...formProps} />}
      {[3].includes(currentStep) && <p>Este es el 3er paso</p>}
    </section>
  );
};

StepViewsContainer.propTypes = {
  currentStep: PropTypes.number,
};

export default StepViewsContainer;
