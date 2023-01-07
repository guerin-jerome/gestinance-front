import { Nullable } from '../types/Nullable'

export function isNotBlank(string: Nullable<string>): boolean {
  return string != null && string != undefined && string.trim() !== ''
}

export function isBlank(string: Nullable<string>) {
  return !isNotBlank(string)
}
