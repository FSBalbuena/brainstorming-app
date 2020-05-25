import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from 'utils/test';

import Component from './index';

describe('Idea Form Test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        value: '',
        handleSubmit: () => null,
        handleChange: () => null,
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
});
