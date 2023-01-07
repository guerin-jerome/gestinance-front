export function getInputValue(
  target: EventTarget & HTMLFormElement,
  fieldName: string
) {
  return (target.elements.namedItem(fieldName) as HTMLInputElement)?.value
}
