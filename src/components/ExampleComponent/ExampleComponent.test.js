import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '@/utils/test';

xdescribe('ExampleComponent test', () => {
  describe('Checking Proptypes', () => {
    xit('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {};
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeUndefined();
    });
    xit('should fire a warning if text is not a string', () => {
      let expectedProps = {};
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Testing Render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    xit('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'component');
      expect(component.length).toBe(1);
    });
    xit('it renders a default text if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'component');
      let text = component.text();
      expect(text).toBe('Search');
    });
  });
  /*
   * ----------------------------------
   */
  describe('Test Click', () => {
    //i have to spy on this
    let spy = jest.fn();
    let props = {
      text: 'Post',
      handleClick: spy,
    };
    let wrapper = shallow(<Component {...props} />);
    xit('handleClick props must be called when i click', () => {
      let component = findByTestAtrr(wrapper, 'component');
      component.simulate('click');
      expect(spy.mock.calls.length).toBe(2);
    });
  });
});
