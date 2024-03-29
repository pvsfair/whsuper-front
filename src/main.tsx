import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.scss';
import { RouterProvider } from 'react-router';
import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
