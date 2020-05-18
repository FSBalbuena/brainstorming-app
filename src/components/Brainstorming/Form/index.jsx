import React from 'react';
import { Form } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

const BrainstormingForm = ({ formikProps, formRef, fields, styles }) => (
  <Formik {...formikProps} data-test="form">
    {({ handleSubmit, errors }) => (
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          {fields.map(({ Component, error, ...rest }) => (
            <Field
              as={Component}
              key={rest.name}
              error={error(errors)}
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
  styles: PropTypes.object,
};

export default BrainstormingForm;
