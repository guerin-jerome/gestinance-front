export function getInputValue(
  target: EventTarget & HTMLFormElement,
  fieldName: string
) {
  return (target.elements.namedItem(fieldName) as HTMLInputElement)?.value
}

export function getCheckboxValue(
  target: EventTarget & HTMLFormElement,
  fieldName: string
) {
  return (target.elements.namedItem(fieldName) as HTMLInputElement)?.checked
}

export function statusError(
  errors: Array<string>,
  fieldName: string
): 'error' | '' {
  return errors.includes(fieldName) ? 'error' : ''
}
