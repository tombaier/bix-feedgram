import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();