import React from 'react';
import App from '.';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '@/utils/test';

describe('App root test', () => {
  let wrapper = shallow(<App />);
  it('App main div renders', () => {
    const app = findByTestAtrr(wrapper, 'app');
    expect(app.length).toBe(1);
  });
});
