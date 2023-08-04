import { Route } from 'app/app.interface';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import DashboardLayout from 'layouts/dashboardLayout/DashboardLayout';
import Error404 from 'pages/error404/Error404';
import Intro from 'pages/intro/Intro';
import Login from 'pages/login/Login';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsAuthenticated } from 'slices/user/userSlice';
import { useAppSelector } from './store';

export default function PrivateRoute() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export const routes: Route[] = [
  {
    path: '/login',
    element: <AuthLayout />,

    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="/intro" />,
          },
          {
            path: 'intro',
            element: <Intro />,
          },
        ],
      },
    ],
  },

  {
    path: '*',
    element: <Error404 />,
  },
];
