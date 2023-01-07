import { useNavigate } from 'react-router-dom'
import { Register } from '../components'
import { LOGIN_ROUTE } from '../constants'

export const RegisterContainer = () => {
  const navigate = useNavigate()

  function onClickOtherMode() {
    navigate(LOGIN_ROUTE)
  }

  return <Register handleClickOtherMode={onClickOtherMode} />
}
