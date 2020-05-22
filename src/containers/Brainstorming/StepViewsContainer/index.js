import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IdeaTable from 'components/Brainstorming/IdeaTable';
import IdeaForm from 'components/Brainstorming/IdeaForm';

const StepViewsContainer = ({ currentStep }) => {
  const [value, setValue] = useState('');
  const [ideas, setideas] = useState([]);
  const canRate = currentStep === 2;

  const handleSubmit = e => {
    e.preventDefault();
    const newIdea = {
      id: new Date().getTime(),
      text: value,
      rating: 0,
    };
    setideas([newIdea, ...ideas]);
    setValue('');
  };
  const handleChange = (_, { value }) => setValue(value);
  const handleRate = (_, { id, rating }) => {
    const updatedIdeas = ideas
      .slice()
      .map(idea => (idea.id === id ? { ...idea, rating } : idea));
    setideas(updatedIdeas);
  };

  const tableProps = {
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
    <section style={{ display: 'flex' }}>
      <IdeaTable {...tableProps} />
      {currentStep === 1 && <IdeaForm {...formProps} />}
    </section>
  );
};

StepViewsContainer.propTypes = {
  currentStep: PropTypes.number,
};

export default StepViewsContainer;
