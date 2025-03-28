import React from 'react';
import App from '.';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { testStore } from '@/utils/testUtils';

const store = testStore({});

describe('App root', () => {
  it('App main div renders', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    exopect(container).toMatchSnapshot();
  });
});
