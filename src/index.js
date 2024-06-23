import React from 'react'
import { render } from 'react-dom'
import Routes from './routes';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom';
import AppRoutes from './routes';

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);