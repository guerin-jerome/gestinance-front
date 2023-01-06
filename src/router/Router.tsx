import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  LoginContainer,
  RegisterContainer,
} from '../features/authentication/container'
import { ProductPage } from '../features/product/ProductPage'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductPage />,
    },
    {
      path: '/login',
      element: <LoginContainer />,
    },
    {
      path: '/register',
      element: <RegisterContainer />,
    },
  ])

  return <RouterProvider router={router} />
}
