import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  window.store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
})
