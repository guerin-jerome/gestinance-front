import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FORM_FIELD_PASSWORD,
  FORM_FIELD_USERNAME,
  REGISTER_ROUTE,
} from '../constants'
import { isBlank, isNotBlank } from '../../../utils/string'
import { getInputValue } from '../../../utils/form'

export const useLogin = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState<Array<string>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function onClickOtherMode() {
    navigate(REGISTER_ROUTE)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const { currentTarget } = event
    setIsLoading(true)
    let invalidFiels = []
    if (isBlank(getInputValue(currentTarget, FORM_FIELD_USERNAME)))
      invalidFiels.push(FORM_FIELD_USERNAME)
    if (isBlank(getInputValue(currentTarget, FORM_FIELD_PASSWORD)))
      invalidFiels.push(FORM_FIELD_PASSWORD)
    setErrors(invalidFiels)
    setIsLoading(false)
    if (invalidFiels.length === 0) {
      navigate('/')
    }
  }

  function onChangeValue(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.currentTarget
    if (isNotBlank(value) && errors.includes(name)) {
      setErrors(errors.filter((error) => error !== name))
    }
  }

  return { errors, isLoading, onClickOtherMode, onSubmit, onChangeValue }
}
