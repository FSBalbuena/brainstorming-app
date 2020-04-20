import React from 'react';
import * as yup from 'yup';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import BrainstormingForm from 'components/Brainstorming/BrainstormingForm';

const BrainstormingFormContainer = ({ formRef, onSubmit }) => {
  const formikProps = {
    initialValues: {
      admin: '',
      sessionTitle: '',
      goal: '',
    },
    validationSchema: yup.object().shape({
      admin: yup.string().required('Session`s admin required'),
      sessionTitle: yup.string().required('Session`s title required'),
      goal: yup.string().required('Session`s goal required'),
    }),
    onSubmit,
  };
  const styles = {
    formGroup: {
      width: '90%',
      margin: '0 auto',
    },
    nameInput: {
      width: '40%',
    },
  };
  const fields = [
    {
      name: 'admin',
      label: 'Name',
      style: styles.nameInput,
      placeholder: 'John Doe',
      Component: Form.Input,
      error: errors =>
        errors.name ? { content: errors.name, pointing: 'left' } : null,
    },
    {
      name: 'sessionTitle',
      label: 'Session`s title',
      fluid: true,
      placeholder: 'John Doe',
      Component: Form.Input,
      error: errors => errors.sessionTitle || null,
    },
    {
      name: 'goal',
      label: 'Main Goal',
      placeholder:
        'Tell us more about the problem this session will help to solve...',
      Component: Form.TextArea,
      error: errors => errors.goal || null,
    },
  ];
  const props = {
    formikProps,
    fields,
    styles,
    formRef,
  };
  return <BrainstormingForm {...props} />;
};

BrainstormingFormContainer.propTypes = {
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default BrainstormingFormContainer;
