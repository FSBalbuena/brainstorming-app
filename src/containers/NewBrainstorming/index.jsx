import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setBrainstormingSession } from 'store/actions/brainstormingActions';
import CompleteModal from 'components/CompleteModal';
import BrainstormingFormContainer from 'containers/BrainstormingFormContainer';

const NewBrainstorming = ({ history }) => {
  const dispatch = useDispatch();
  const formRef = useRef();

  const handleCreate = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = values => {
    dispatch(setBrainstormingSession(values));
    goBackToHome();
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
      <BrainstormingFormContainer {...formProps} />
    </CompleteModal>
  );
};

export default withRouter(NewBrainstorming);
