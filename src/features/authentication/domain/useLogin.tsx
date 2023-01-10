import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FORM_FIELDS, ROUTES } from '../constants'
import { isBlank, isNotBlank } from '../../../utils/string'
import { getInputValue } from '../../../utils/form'
import { HOME_ROUTE } from '../../../constants'

export const useLogin = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Array<string>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onClickOtherMode() {
    navigate(ROUTES.register)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { currentTarget } = event
    setIsLoading(true)
    setTimeout(() => {
      let invalidFiels = []
      if (isBlank(getInputValue(currentTarget, FORM_FIELDS.username.name)))
        invalidFiels.push(FORM_FIELDS.username.name)
      if (isBlank(getInputValue(currentTarget, FORM_FIELDS.password.name)))
        invalidFiels.push(FORM_FIELDS.password.name)
      setErrors(invalidFiels)
      setIsLoading(false)
      if (invalidFiels.length === 0) {
        navigate(HOME_ROUTE)
      }
    }, 1000)
  }

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget
    if (isNotBlank(value) && errors.includes(name)) {
      setErrors(errors.filter((error) => error !== name))
    }
  }

  return { errors, isLoading, onClickOtherMode, onSubmit, onChangeValue }
}
