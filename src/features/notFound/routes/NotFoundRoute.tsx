import { useNavigate } from 'react-router-dom';
import { AUTHENTICATE_ROUTES } from '../../../constants';
import { NotFound } from '../components';

export const NotFoundRoute = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(AUTHENTICATE_ROUTES);
  }

  return <NotFound onClick={handleClick} />;
};
