// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
// 👉 DO NOT CHANGE THIS FILE 👈
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/reset.css';
import './styles/styles.css';
import store from './state/store';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
