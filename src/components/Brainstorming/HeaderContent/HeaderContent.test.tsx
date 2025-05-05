import React from 'react';
import Component from '.';
import { render, screen } from '@testing-library/react';
import { checkProps } from '@/utils/testUtils';

const DEFAULT_PROPS = {
  title: 'Title',
  goal: 'Goal',
};

describe('HeaderContent test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      const propsErr = checkProps(Component, DEFAULT_PROPS);
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
  describe('Rendering', () => {
    it('it renders with out crashing', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let header = screen.getByRole('heading', { name: DEFAULT_PROPS.title });
      expect(header).toBeInTheDocument();
    });
    it('it renders a default text if no props are given', () => {
      render(<Component {...DEFAULT_PROPS} title={undefined} />);
      let header = screen.getByRole('heading', { name: 'Brainstorming' });
      expect(header).toBeInTheDocument();
    });
  });

  describe('Testing Render for session Goal', () => {
    it('it renders with out crashing', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let header = screen.getByRole('heading', { name: DEFAULT_PROPS.goal });
      expect(header).toBeInTheDocument();
    });
    it('it renders a default text if no props are given', () => {
      render(<Component {...DEFAULT_PROPS} goal={undefined} />);
      let header = screen.getByRole('heading', { name: 'This is your Goal' });
      expect(header).toBeInTheDocument();
    });
  });
});
