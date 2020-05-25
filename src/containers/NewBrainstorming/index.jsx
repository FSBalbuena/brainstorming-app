import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { FormContainer } from 'containers/Brainstorming';
import { CompleteModal } from 'components/Global';

const NewBrainstorming = ({ history, setSession }) => {
  const formRef = useRef();

  const handleCreate = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = values => {
    setSession(values);
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

NewBrainstorming.propTypes = {
  history: PropTypes.object,
  setSession: PropTypes.func,
};

export default withRouter(NewBrainstorming);
