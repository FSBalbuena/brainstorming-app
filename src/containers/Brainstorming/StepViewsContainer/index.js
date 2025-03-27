import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  createIdea,
  suscribeToIdeas,
  unsuscribeToIdeas,
  suscribeToStep,
  unsuscribeToSteps,
} from '@/store/actions/brainstorming';
import { IdeaTable, IdeaForm } from '@/components/Brainstorming';
import { Download } from '@/containers/Brainstorming';
import { headers } from '@/factory/brainstorming';
import styles from '@/components/Brainstorming/brainstorming.module.scss';

const StepViewsContainer = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const {
    data: { step, ideas, id, adminId },
  } = useSelector(state => state.brainstorming);
  const authId = useSelector(state => state.auth.id);

  const isSessionAdmin = authId === adminId;

  useEffect(() => {
    dispatch(suscribeToIdeas(id));
    dispatch(suscribeToStep(id));
    return () => {
      dispatch(unsuscribeToIdeas(id));
      dispatch(unsuscribeToSteps(id));
    };
  }, [id, dispatch]);

  const canRate = isSessionAdmin && step === 2;

  const handleSubmit = e => {
    e.preventDefault();
    if (value && value.trim()) {
      const newIdea = {
        text: value,
      };
      dispatch(createIdea(id, newIdea));
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
      {[3].includes(step) && <Download />}
    </section>
  );
};

export default StepViewsContainer;
