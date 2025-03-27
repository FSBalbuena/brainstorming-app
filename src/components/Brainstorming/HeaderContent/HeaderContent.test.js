import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '@/utils/test';

describe('HeaderContent test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        title: 'Title',
        goal: 'Goal',
      };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeUndefined();
    });
    it('should fire a warning if text is not a string', () => {
      let expectedProps = {
        title: 6,
        goal: null,
      };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Testing Render for session Title', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'session-title');
      expect(component.length).toBe(1);
    });
    it('it renders a default text if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-title');
      let text = component.contains('Brainstorming');
      expect(text).toBe(true);
    });
  });

  describe('Testing Render for session Goal', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'session-goal');
      expect(component.length).toBe(1);
    });
    it('it renders a default text if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-goal');
      let text = component.contains('This is your Goal');
      expect(text).toBe(true);
    });
  });
});
