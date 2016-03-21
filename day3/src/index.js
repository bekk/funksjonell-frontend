import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';
import App from './components/App';
import DevTools from './components/DevTools';

const store = configureStore();

render(
  <Provider store={ store }>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.querySelector('#app')
);
