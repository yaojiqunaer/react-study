import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App'
import GlobalRouter from './router'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App />,

  <BrowserRouter>
    <GlobalRouter />
  </BrowserRouter>,
);
