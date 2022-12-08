import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AUTHENTICATE_ROUTES } from '../constants';
import { NotFoundRoute } from '../features/notFound';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Accueil</div>,
    },
    {
      path: AUTHENTICATE_ROUTES,
      element: <div>Authenticate</div>,
    },
    {
      path: '*',
      element: <NotFoundRoute />,
    },
  ]);

  return <RouterProvider router={router} />;
};
