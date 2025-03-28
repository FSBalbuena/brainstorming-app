import React from 'react';
import Component from '.';
import { checkProps } from '@/utils/testUtils';
import { render } from '@testing-library/react';
import * as yup from 'yup';

const onSubmit = jest.fn();
const DEFAULT_PROPS = {
  formikProps: {
    initialValues: {
      name: '',
      title: '',
      goal: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required('Session`s admin required'),
      title: yup.string().required('Session`s title required'),
      goal: yup.string().required('Session`s goal required'),
    }),
    onSubmit,
  },
  formRef: jest.fn(),
  fields: [
    {
      error: () => {},
      name: 'name',
      label: 'Name',
      className: 'nameInput',
      placeholder: 'John Doe',
      Component: 'input',
    },
  ],
  styles: {},
};

describe('Form', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      const propsErr = checkProps(Component, DEFAULT_PROPS);
      expect(propsErr).toBeUndefined();
    });
    it('should fire a warning if text is not a string', () => {
      let expectedProps = {};
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Rendering', () => {
    it('it renders with out crashing', () => {
      const { container } = render(<Component {...DEFAULT_PROPS} />);
      expect(container).toMatchSnapshot();
    });
  });
});
