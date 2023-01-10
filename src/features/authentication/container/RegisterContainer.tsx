import { Register } from '../components'
import { useRegister } from '../domain/useRegister'

export const RegisterContainer = () => {
  const {
    errors,
    isLoading,
    onClickOtherMode,
    onSubmit,
    onChangeValue,
    onClickAgreement,
  } = useRegister()

  return (
    <Register
      handleClickOtherMode={onClickOtherMode}
      handleChangeValue={onChangeValue}
      handleSubmit={onSubmit}
      handleClickAgreement={onClickAgreement}
      isLoading={isLoading}
      fieldsOnError={errors}
    />
  )
}
