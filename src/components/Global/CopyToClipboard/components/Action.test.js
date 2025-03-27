import React from 'react';
import Action from './Action';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '@/utils/test';
describe('ClipBoardAction test', () => {
  describe('Testing Render', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Action />);
    });
    it('it renders with out crashing', () => {
      let component = findByTestAtrr(wrapper, 'copy-button');
      expect(component.length).toBe(1);
    });
  });
});
