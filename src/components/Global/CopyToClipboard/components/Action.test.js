import React from 'react';
import Action from './Action';
import { fireEvent, render, screen } from '@testing-library/react';

const open = false;
const onClick = jest.fn();

const DEFAULT_PROPS = {
  open,
  onClick,
};

describe('Action', () => {
  describe('rendering', () => {
    it('should render the button', () => {
      render(<Action {...DEFAULT_PROPS} />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
    it('should not render the popup', () => {
      render(<Action {...DEFAULT_PROPS} />);
      const alert = screen.queryByText('Copied!');
      expect(alert).toBe(null);
    });
    describe('when open is true', () => {
      it('should render the poopup', () => {
        render(<Action {...DEFAULT_PROPS} open={true} />);
        const alert = screen.getByText('Copied!');
        expect(alert).toBeInTheDocument();
      });
    });
  });
  describe('events', () => {
    afterAll(() => {
      jest.clearAllMocks();
    });
    describe('when user clicks on button', () => {
      beforeEach(() => {
        onClick.mockClear();
      });
      it('should call onClick', () => {
        render(<Action {...DEFAULT_PROPS} />);
        expect(onClick).not.toHaveBeenCalled();
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
