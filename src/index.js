import React from 'react';
import ReactDOM from 'react-dom/client';
/**
 * ---- Components
 */
import App from '@/components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '@/store';

/**
 * needed for styling
 */
import 'semantic-ui-less/semantic.less';
import './index.css';
import '@/data/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
