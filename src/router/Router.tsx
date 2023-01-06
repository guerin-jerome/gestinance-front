import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'
import { Login } from '../features'

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="login">Login</Link>
        </div>
      ),
    },
    {
      path: '/login',
      element: <Login />,
    },
  ])

  return <RouterProvider router={router} />
}
