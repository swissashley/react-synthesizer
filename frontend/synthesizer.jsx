import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={configureStore()} />, root);
});

window.store = configureStore;
