import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.scss'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from '@/router'
import store from '@/store'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
