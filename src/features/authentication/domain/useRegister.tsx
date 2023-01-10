import { ChangeEvent, MouseEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FORM_FIELDS, PASSWORD_NOT_EQUAL, ROUTES } from '../constants'
import { isBlank, isNotBlank } from '../../../utils/string'
import { getCheckboxValue, getInputValue } from '../../../utils/form'
import { RegisterData } from '../types/Register'

function getRegisterFormValues(
  event: FormEvent<HTMLFormElement>
): RegisterData {
  const { currentTarget } = event
  return {
    username: getInputValue(currentTarget, FORM_FIELDS.username.name),
    password: getInputValue(currentTarget, FORM_FIELDS.password.name),
    retapePassword: getInputValue(
      currentTarget,
      FORM_FIELDS.retapePassword.name
    ),
    channelOfCommunication: getInputValue(
      currentTarget,
      FORM_FIELDS.channelOfCommunication.name
    ),
    phone: getInputValue(currentTarget, FORM_FIELDS.phone.name),
    email: getInputValue(currentTarget, FORM_FIELDS.email.name),
    agreement: getCheckboxValue(currentTarget, FORM_FIELDS.agreement.name),
  }
}

function getFieldErrorsOnSubmit(data: RegisterData) {
  const invalidFiels = []
  if (isBlank(data.username)) invalidFiels.push(FORM_FIELDS.username.name)
  if (isBlank(data.password)) invalidFiels.push(FORM_FIELDS.password.name)
  if (isBlank(data.retapePassword))
    invalidFiels.push(FORM_FIELDS.retapePassword.name)
  if (!data.agreement) invalidFiels.push(FORM_FIELDS.agreement.name)
  if (
    isBlank(data.email) &&
    data.channelOfCommunication === FORM_FIELDS.email.name
  )
    invalidFiels.push(FORM_FIELDS.email.name)
  if (
    isBlank(data.phone) &&
    data.channelOfCommunication === FORM_FIELDS.phone.name
  )
    invalidFiels.push(FORM_FIELDS.phone.name)
  if (data.password !== data.retapePassword)
    invalidFiels.push(PASSWORD_NOT_EQUAL)
  return invalidFiels
}

export const useRegister = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Array<string>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onClickOtherMode() {
    navigate(ROUTES.login)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const formValues = getRegisterFormValues(event)
    event.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      const invalidFiels = getFieldErrorsOnSubmit(formValues)
      setErrors(invalidFiels)
      setIsLoading(false)
      if (invalidFiels.length === 0) {
        navigate('/')
      }
    }, 1000)
  }

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget
    let errorsUpdated = [...errors]
    if (isNotBlank(value)) {
      if (
        name === FORM_FIELDS.password.name ||
        name === FORM_FIELDS.retapePassword.name
      ) {
        errorsUpdated = errorsUpdated.filter(
          (error) => error !== PASSWORD_NOT_EQUAL
        )
      }
      if (errors.includes(name)) {
        errorsUpdated = errorsUpdated.filter((error) => error !== name)
      }
    }
    setErrors(errorsUpdated)
  }

  function onClickAgreement(event: MouseEvent<HTMLElement>) {
    if (
      errors.includes(FORM_FIELDS.agreement.name) &&
      (event.currentTarget as HTMLInputElement).checked
    ) {
      setErrors(errors.filter((error) => error !== FORM_FIELDS.agreement.name))
    }
  }

  return {
    errors,
    isLoading,
    onClickOtherMode,
    onSubmit,
    onChangeValue,
    onClickAgreement,
  }
}
