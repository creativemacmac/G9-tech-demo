/* eslint-disable*/
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger'

import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './Redux/reducers';

// Styles
import './index.css';

const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
