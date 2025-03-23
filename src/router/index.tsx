import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/Login';
import Header from '../components/Header';
import Dashboard from '../pages/dashboard/Dashboard';
import Tables from '../pages/tables/Tables';
import TableFile from '../pages/tableFiles/TableFiles';
import Upload from '../pages/Upload/Upload';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/tables',
        element: <Tables />,
      },
      {
        path: '/files',
        element: <TableFile />,
      },
      {
        path: '/uploadDB',
        element: <Upload />,
      },
    ],
  },
  {
    path: '/dashboarda',
    element: <Header />,
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
