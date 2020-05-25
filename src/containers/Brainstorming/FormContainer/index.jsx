import React from 'react';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

import { BrainstormingForm } from 'components/Brainstorming';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const FormContainer = ({ formRef, onSubmit, adminid }) => {
  const formikProps = {
    initialValues: {
      adminid,
      admin: '',
      title: '',
      goal: '',
    },
    validationSchema: yup.object().shape({
      admin: yup.string().required('Session`s admin required'),
      title: yup.string().required('Session`s title required'),
      goal: yup.string().required('Session`s goal required'),
    }),
    onSubmit,
  };

  const fields = [
    {
      name: 'admin',
      label: 'Name',
      className: styles.nameInput,
      placeholder: 'John Doe',
      Component: Form.Input,
      error: (errors, touched) =>
        errors.admin && touched.admin ? errors.admin : null,
    },
    {
      name: 'title',
      label: 'Session`s title',
      fluid: true,
      placeholder: 'John Doe',
      Component: Form.Input,
      error: (errors, touched) =>
        errors.title && touched.title ? errors.title : null,
    },
    {
      name: 'goal',
      label: 'Main Goal',
      placeholder:
        'Tell us more about the problem this session will help to solve...',
      Component: Form.TextArea,
      error: (errors, touched) =>
        errors.goal && touched.goal ? errors.goal : null,
    },
  ];
  const props = {
    formikProps,
    fields,
    formRef,
  };
  return <BrainstormingForm {...props} />;
};

FormContainer.propTypes = {
  adminid: PropTypes.string,
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default FormContainer;
