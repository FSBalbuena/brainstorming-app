import React from 'react';
import Component from '.';
import { checkProps } from '@/utils/testUtils';
import { render, screen, fireEvent } from '@testing-library/react';

const onCancel = jest.fn();
const onCreate = jest.fn();

const DEFAULT_PROPS = {
  header: 'Header',
  cancel: {
    content: 'Cancel',
    color: 'red',
    onClick: onCancel,
  },
  create: {
    content: 'Create',
    color: 'green',
    onClick: onCreate,
  },
  children: <p></p>,
};

describe('CompleteModal', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      const propsErr = checkProps(Component, DEFAULT_PROPS);
      expect(propsErr).toBeUndefined();
    });
    it('should fire a warning if text is not a string', () => {
      let expectedProps = { header: () => {} };
      const propsErr = checkProps(Component, expectedProps);
      expect(propsErr).toBeDefined();
    });
  });
  /*
   * ----------------------------------
   */
  describe('Rendering', () => {
    it('renders modal', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
    it('renders header', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let header = screen.getByText(DEFAULT_PROPS.header);
      expect(header).toBeInTheDocument();
    });
    it('it renders a default text if no props are given', () => {
      render(<Component {...DEFAULT_PROPS} header={undefined} />);
      let header = screen.getByText('New Brainstorming');
      expect(header).toBeInTheDocument();
    });
    it('renders cancel button', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let button = screen.getByRole('button', {
        name: DEFAULT_PROPS.cancel.content,
      });
      expect(button).toBeInTheDocument();
    });
    it('renders create button', () => {
      render(<Component {...DEFAULT_PROPS} />);
      let button = screen.getByRole('button', {
        name: DEFAULT_PROPS.create.content,
      });
      expect(button).toBeInTheDocument();
    });
  });
  /*
   * ----------------------------------
   */
  describe('events', () => {
    describe('when cancel button is clicked', () => {
      it('onCancel function must be called', () => {
        render(<Component {...DEFAULT_PROPS} />);
        expect(onCancel).not.toHaveBeenCalled();
        let button = screen.getByRole('button', {
          name: DEFAULT_PROPS.cancel.content,
        });
        fireEvent.click(button);
        expect(onCancel).toHaveBeenCalled();
      });
    });
    describe('when create button is clicked', () => {
      it('onCreate function must be called', () => {
        render(<Component {...DEFAULT_PROPS} />);
        expect(onCreate).not.toHaveBeenCalled();
        let button = screen.getByRole('button', {
          name: DEFAULT_PROPS.create.content,
        });
        fireEvent.click(button);
        expect(onCreate).toHaveBeenCalled();
      });
    });
  });
});
