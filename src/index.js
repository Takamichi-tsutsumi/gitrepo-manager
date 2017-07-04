import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import axios from 'axios';
import App from './containers/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducers, applyMiddleware(thunk, logger));

// configure axios header here
axios.defaults.headers.common['Authorization'] = `token ${process.env.REACT_APP_API_TOKEN}`;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();

