import { Login } from '../components'
import { useLogin } from '../domain'

export const LoginContainer = () => {
  const { errors, isLoading, onClickOtherMode, onSubmit, onChangeValue } =
    useLogin()

  return (
    <Login
      handleClickOtherMode={onClickOtherMode}
      handleChangeValue={onChangeValue}
      handleSubmit={onSubmit}
      isLoading={isLoading}
      fieldsOnError={errors}
    />
  )
}
