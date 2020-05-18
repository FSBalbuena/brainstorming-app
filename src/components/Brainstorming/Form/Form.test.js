import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from 'utils/test';
import * as yup from 'yup';
describe('ExampleComponent test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        formikProps: {
          initialValues: {
            name: '',
            sessionTitle: '',
            goal: '',
          },
          validationSchema: yup.object().shape({
            name: yup.string().required('Session`s admin required'),
            sessionTitle: yup.string().required('Session`s title required'),
            goal: yup.string().required('Session`s goal required'),
          }),
          onSubmit: () => {},
        },
        formRef: {},
        fields: [{}],
        styles: {},
      };
      const propsErr = checkProps(Component, expectedProps);
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
  describe('Testing Render', () => {
    let expectedProps = {
      formikProps: {
        initialValues: {
          name: '',
          sessionTitle: '',
          goal: '',
        },
        validationSchema: yup.object().shape({
          name: yup.string().required('Session`s admin required'),
          sessionTitle: yup.string().required('Session`s title required'),
          goal: yup.string().required('Session`s goal required'),
        }),
        onSubmit: () => {},
      },
      formRef: {},
      fields: [{}],
      styles: {},
    };
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component {...expectedProps} />);
    });
    it('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'form');
      expect(component.length).toBe(1);
    });
  });
});
