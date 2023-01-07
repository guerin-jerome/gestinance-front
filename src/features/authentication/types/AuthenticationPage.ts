import { MouseEventHandler, FormEventHandler, ChangeEventHandler } from 'react'

export type AuthenticationPage = {
  handleClickOtherMode: MouseEventHandler<HTMLElement>
  handleChangeValue: ChangeEventHandler<HTMLInputElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
  isLoading: boolean
  fieldsOnError: Array<string>
}
