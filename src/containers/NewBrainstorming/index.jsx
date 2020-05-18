import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setBrainstormingSession } from 'store/actions/brainstorming';
import FormContainer from 'containers/Brainstorming/FormContainer';
import CompleteModal from 'components/CompleteModal';

const NewBrainstorming = ({ history }) => {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleCreate = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = values => {
    dispatch(setBrainstormingSession(values));
  };

  const goBackToHome = () => history.push('/');

  const modalProps = {
    header: 'New Brainstorming',
    cancel: {
      content: 'Cancel',
      color: 'red',
      onClick: goBackToHome,
    },
    create: {
      content: 'Create',
      color: 'teal',
      onClick: handleCreate,
      type: 'submit',
    },
  };
  const formProps = {
    formRef,
    onSubmit: handleSubmit,
  };
  return (
    <CompleteModal {...modalProps}>
      <FormContainer {...formProps} />
    </CompleteModal>
  );
};

export default withRouter(NewBrainstorming);
