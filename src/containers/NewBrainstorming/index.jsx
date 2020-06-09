import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as routes from 'data/routes';
import { FormContainer } from 'containers/Brainstorming';
import { CompleteModal } from 'components/Global';

import { setId } from 'store/actions/auth';
import { setSession } from 'store/actions/brainstorming';

const NewBrainstorming = ({ history }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const adminId = useSelector(state => state.auth.id);

  useEffect(() => {
    dispatch(setId());
  }, []);

  const handleCreate = () => {
    formRef.current.handleSubmit();
  };

  const handleSubmit = values => {
    const session = { ...values, adminId };
    dispatch(setSession(session)).then(sessionId =>
      history.push(`${routes.BRAINSTORMING}/${sessionId}`)
    );
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
