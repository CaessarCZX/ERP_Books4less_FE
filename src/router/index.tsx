import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
import Login from '../pages/login/Login';
// import Header from '../components/Header';
import DefaultLayout from '../Layouts/DefaultLayout/DefaultLayout';
import GeneratorPO from '../pages/GeneratePO/Generator';
// import Dashboard from '../pages/dashboard/Dashboard';
// import Tables from '../pages/tables/Tables';
// import TableFile from '../pages/tableFiles/TableFiles';
// import Upload from '../pages/Upload/Upload';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>,
    // children: [
    //   {
    //     path: '/dashboard',
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: '/tables',
    //     element: <Tables />,
    //   },
    //   {
    //     path: '/files',
    //     element: <TableFile />,
    //   },
    //   {
    //     path: '/uploadDB',
    //     element: <Upload />,
    //   },
    // ],
  },
  {
    path: '/system',
    element: <DefaultLayout />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: '/systemGeneratePO',
        element: <GeneratorPO />,
      },
    ],
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
