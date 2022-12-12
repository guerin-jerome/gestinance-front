import { Route, Routes } from 'react-router-dom';
import { NotFoundContainer } from '../../notFound';
import { LOGIN_ROUTE } from '../constants';

export const AuthenticationRouter = () => (
  <Routes>
    <Route path="" element={<div>Login</div>} />
    <Route path={LOGIN_ROUTE} element={<div>Login</div>} />
    <Route path="*" element={<NotFoundContainer />} />
  </Routes>
);
