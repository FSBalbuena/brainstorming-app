import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createIdea } from 'store/actions/brainstorming';
import { IdeaTable, IdeaForm } from 'components/Brainstorming';
import { headers } from 'factory/brainstorming';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const StepViewsContainer = () => {
  const dispatch = useDispatch();
  const {
    data: { step, ideas },
  } = useSelector(state => state.brainstorming);

  const [value, setValue] = useState('');
  const canRate = step === 2;

  const handleSubmit = e => {
    e.preventDefault();
    if (!!value.trim()) {
      const newIdea = {
        text: value,
      };
      dispatch(createIdea(newIdea));
      setValue('');
    }
  };
  const handleChange = (_, { value }) => setValue(value);

  const tableProps = {
    headers,
    canRate,
    ideas,
  };
  const formProps = {
    handleChange,
    handleSubmit,
    value,
  };
  return (
    <section className={styles.stepsDisplay}>
      {[1, 2].includes(step) && <IdeaTable {...tableProps} />}
      {[1].includes(step) && <IdeaForm {...formProps} />}
      {[3].includes(step) && <p>Este es el 3er paso</p>}
    </section>
  );
};

export default StepViewsContainer;
