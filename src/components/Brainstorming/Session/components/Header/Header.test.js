import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from 'utils/test';
import AdminBox from './components/AdminBox';
describe('Brainstorm Header test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        admin: 'John Doe',
        sessionTitle: 'Brainstorming session`s title',
        goal: 'Want to test copy-to-clipboard click',
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
  describe('adminBox renders', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AdminBox />);
    });
    it('I can see an admin', () => {
      let component = findByTestAtrr(wrapper, 'session-admin-name');
      expect(component.length).toBe(1);
    });
    it('it renders a default admin if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-admin-name');
      let admin = component.contains('John Doe');
      expect(admin).toBe(true);
    });
  });
  describe('All sections must render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('Header renders ok', () => {
      let component = findByTestAtrr(wrapper, 'header');
      expect(component.length).toBe(1);
    });
    it('i can see the session`s title', () => {
      let component = findByTestAtrr(wrapper, 'session-title');
      expect(component.length).toBe(1);
    });
    it('it renders a default title if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-title');
      let text = component.contains('Brainstorming session`s title');
      expect(text).toBe(true);
    });
    it('I can see the session`s goal', () => {
      let component = findByTestAtrr(wrapper, 'session-goal');
      expect(component.length).toBe(1);
    });
    it('it renders a default goal if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-goal');
      let description = component.contains(
        'This session will help you to find solutions'
      );
      expect(description).toBe(true);
    });
    it('I can see the session`s url', () => {
      let component = findByTestAtrr(wrapper, 'session-url');
      expect(component.length).toBe(1);
    });
  });
  /*
   * ----------------------------------
   */
});
