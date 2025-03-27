import React from 'react';
import Component from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '@/utils/test';

describe('SessionSteps test', () => {
  describe('Checking Proptypes', () => {
    it('shouldn`t fire a warning if good props are passed', () => {
      let expectedProps = {
        steps: [
          {
            step: 1,
            title: 'Idear',
            description:
              'Tu equipo suma ideas hasta que decidas pasar al siguiente paso',
            active: false,
            completed: false,
            disabled: false,
            onClick: () => null,
          },
        ],
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
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Component />);
    });
    it('it renders with out crashing if no props are given', () => {
      let component = findByTestAtrr(wrapper, 'session-step-group');
      expect(component.length).toBe(1);
    });
  });
  /*
   * ----------------------------------
   */
  describe('Test Click', () => {
    //i have to spy on this
    let spy = jest.fn();
    let spy2 = jest.fn();
    let spy3 = jest.fn();

    let props = {
      steps: [
        {
          step: 1,
          title: 'Idear',
          description:
            'Tu equipo suma ideas hasta que decidas pasar al siguiente paso',
          active: false,
          completed: false,
          disabled: false,
          onClick: spy,
        },
        {
          step: 2,
          title: 'Puntuar',
          description: 'Se puntuan las mejores ideas',
          active: false,
          completed: false,
          disabled: false,
          onClick: spy2,
        },
        {
          step: 3,
          title: 'Terminar y descargar',
          active: false,
          completed: false,
          disabled: false,
          onClick: spy3,
        },
      ],
    };

    let wrapper = shallow(<Component {...props} />);

    it('First step click calls its onClick method', () => {
      let component = findByTestAtrr(wrapper, 'session-step');
      component.at(0).simulate('click');
      expect(spy.mock.calls.length).toBe(1);
    });

    it('Second step click calls its onClick method', () => {
      let component = findByTestAtrr(wrapper, 'session-step');
      component.at(1).simulate('click');
      expect(spy2.mock.calls.length).toBe(1);
    });
    it('Third step click calls its onClick method', () => {
      let component = findByTestAtrr(wrapper, 'session-step');
      component.at(2).simulate('click');
      expect(spy3.mock.calls.length).toBe(1);
    });
  });
});
