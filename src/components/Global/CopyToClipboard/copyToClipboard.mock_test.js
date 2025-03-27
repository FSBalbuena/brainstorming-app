import React from 'react';
import Component from '.';
import Action from './components/Action';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '@/utils/testUtils';

describe('ExampleComponent test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        url: 'https...',
        text: 'Invite Friends',
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
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'copy');
      expect(component.length).toBe(1);
    });
  });
});
