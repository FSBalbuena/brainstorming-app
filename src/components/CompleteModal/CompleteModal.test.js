import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from 'utils/test';

describe('ModalForm test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        header: 'Header',
        cancel: {
          content: 'Cancel',
          color: 'red',
          onClick: () => {},
        },
        create: {
          content: 'Create',
          color: 'green',
          onClick: () => {},
        },
        children: <p></p>,
      };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeUndefined();
    });
    it('should fire a warning if text is not a string', () => {
      let expectedProps = { header: () => {} };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Content Render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('renders modal', () => {
      let component = findByTestAtrr(wrapper, 'modal');
      expect(component.length).toBe(1);
    });
    it('renders header', () => {
      let component = findByTestAtrr(wrapper, 'header');
      expect(component.length).toBe(1);
    });
    it('it renders a default text if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'header');
      let hasText = component.contains('New Brainstorming');
      expect(hasText).toBe(true);
    });
    it('renders cancel button', () => {
      let component = findByTestAtrr(wrapper, 'cancel');
      expect(component.length).toBe(1);
    });
    it('renders create button', () => {
      let component = findByTestAtrr(wrapper, 'create');
      expect(component.length).toBe(1);
    });
  });
  /*
   * ----------------------------------
   */
  describe('Test Click', () => {
    //i have to spy on this
    let spy = jest.fn();
    let spy2 = jest.fn();
    let props = {
      header: 'Header',
      cancel: {
        content: 'Cancel',
        color: 'red',
        onClick: spy,
      },
      create: {
        content: 'Create',
        color: 'green',
        onClick: spy2,
      },
      children: <p></p>,
    };
    let wrapper = shallow(<Component {...props} />);
    it('Onclick fucntion must be called on pressing Cancel button', () => {
      let component = findByTestAtrr(wrapper, 'cancel');
      component.simulate('click');
      expect(spy.mock.calls.length).toBe(1);
    });
    it('Onclick fucntion must be called on pressing Create button', () => {
      let component = findByTestAtrr(wrapper, 'create');
      component.simulate('click');
      expect(spy2.mock.calls.length).toBe(1);
    });
  });
});
