import React from 'react';
import { Form } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from 'components/Brainstorming/brainstorming.module.scss';

const BrainstormingForm = ({ formikProps, formRef, fields }) => (
  <Formik {...formikProps} data-test="form">
    {({ handleSubmit, errors, touched }) => (
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          {fields.map(({ Component, error, ...rest }) => (
            <Field
              as={Component}
              key={rest.name}
              error={error(errors, touched)}
              {...rest}
            />
          ))}
        </div>
      </Form>
    )}
  </Formik>
);

BrainstormingForm.propTypes = {
  formRef: PropTypes.object,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  formikProps: PropTypes.shape({
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func,
  }).isRequired,
};

export default BrainstormingForm;
