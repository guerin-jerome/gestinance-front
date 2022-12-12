import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AUTHENTICATE_ROUTES } from '../constants';
import { AuthenticationRouter } from '../features/authentication/router';
import { NotFoundContainer } from '../features/notFound';

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Accueil</div>,
    },
    {
      path: AUTHENTICATE_ROUTES,
      element: <AuthenticationRouter />,
    },
    {
      path: '*',
      element: <NotFoundContainer />,
    },
  ]);

  return <RouterProvider router={router} />;
};
