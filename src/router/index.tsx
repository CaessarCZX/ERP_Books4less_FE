import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '/dashboard',
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <h1>Not found</h1>,
    children: [],
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);
