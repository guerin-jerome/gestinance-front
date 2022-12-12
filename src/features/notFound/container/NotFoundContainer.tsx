import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTHENTICATE_LOGIN_ROUTE } from '../../../constants';
import { NotFound } from '../components';

export const NotFoundContainer = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => navigate(AUTHENTICATE_LOGIN_ROUTE), []);

  return <NotFound onClick={handleClick} />;
};
