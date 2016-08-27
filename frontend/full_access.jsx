import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('root');
  console.log("in the listener");
  window.store = configureStore();
  ReactDOM.render(<App />, root);
})