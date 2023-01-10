import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  LoginContainer,
  RegisterContainer,
} from '../features/authentication/container'
import { ProductPage } from '../features/product/ProductPage'
import { HOME_ROUTE } from '../constants'
import { ROUTES } from '../features/authentication/constants'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: HOME_ROUTE,
      element: <ProductPage />,
    },
    {
      path: ROUTES.login,
      element: <LoginContainer />,
    },
    {
      path: ROUTES.register,
      element: <RegisterContainer />,
    },
  ])

  return <RouterProvider router={router} />
}
