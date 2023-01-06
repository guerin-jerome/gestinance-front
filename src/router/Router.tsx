import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login, Register } from '../features/authentication'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return <RouterProvider router={router} />
}
