import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store'

// Create the store and add it to the Provider

ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
