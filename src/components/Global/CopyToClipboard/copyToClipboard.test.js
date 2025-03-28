import React from 'react';
import Component from '.';
import { checkProps } from '@/utils/testUtils';
import { render } from '@testing-library/react';

const url = 'https/mockedUrl';
const text = 'Invite your team';
const DEFAULT_PROPS = {
  url,
  text,
};

describe('CopyToClipboard', () => {
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
  describe('Rendering', () => {
    it('it renders with out crashing', () => {
      const { container } = render(<Component {...DEFAULT_PROPS} />);
      expect(container).toMatchSnapshot();
    });
  });
});
