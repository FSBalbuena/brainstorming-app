import React from 'react';
import Component from '.';
import { checkProps } from '@/utils/testUtils';
import { fireEvent, render, screen } from '@testing-library/react';

let firstStepClickHandler = jest.fn();
let secondStepClickHandler = jest.fn();
let thirdStepClickHandler = jest.fn();

const mockSteps = [
  {
    step: 1,
    title: 'Make Ideas!',
    description:
      'your team adds ideas until you decide to pass to the next step',
    active: false,
    completed: false,
    disabled: false,
    onClick: firstStepClickHandler,
  },
  {
    step: 2,
    title: 'Score',
    description:
      'Go deeper with your ideas, think pros and cons, and rate them.',
    active: false,
    completed: false,
    disabled: false,
    onClick: secondStepClickHandler,
  },
  {
    step: 3,
    title: 'finish and share',
    active: false,
    completed: false,
    disabled: false,
    onClick: thirdStepClickHandler,
  },
];

const DEFAULT_PROPS = {
  steps: mockSteps,
};

describe('SessionSteps', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        steps: mockSteps,
      };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeUndefined();
    });
    it('should fire a warning if there is no props', () => {
      let expectedProps = {};
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Testing Render', () => {
    it('renders with out crashing', () => {
      const { container } = render(<Component {...DEFAULT_PROPS} />);
      expect(container).toMatchSnapshot();
    });
    it('it renders a empty state if no props are given', () => {
      const { container } = render(<Component {...DEFAULT_PROPS} />);
      expect(container).toMatchSnapshot();
    });
  });
  /*
   * ----------------------------------
   */
  describe('events', () => {
    describe('when user clicks on a step', () => {
      it('Should call its onClick method', () => {
        render(<Component {...DEFAULT_PROPS} />);
        expect(firstStepClickHandler).not.toHaveBeenCalled();
        let step = screen.getByText(mockSteps[0].title);
        fireEvent.click(step);
        expect(firstStepClickHandler).toHaveBeenCalledTimes(1);
      });
    });
  });
});
