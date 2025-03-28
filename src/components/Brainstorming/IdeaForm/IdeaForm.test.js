import { checkProps } from '@/utils/testUtils';

import Component from './index';

const DEFAULT_PROPS = {
  value: '',
  handleSubmit: () => null,
  handleChange: () => null,
};

describe('IdeaForm', () => {
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
});
