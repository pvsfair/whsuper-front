import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root/root';
import ErrorPage from './pages/ErrorPage/error-page';
import Index from './pages/Index';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
        ],
      },
    ],
  },
]);
