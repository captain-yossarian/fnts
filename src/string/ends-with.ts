import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface EndsWithFn {
  (substring: string): (string: string) => boolean

  (string: string, substring: string): boolean
}

export const endsWith = curry2(
  (
    string: string,
    substring: string,
  ): boolean => {
    return string.endsWith(substring)
  },
) as EndsWithFn

export interface EndsWithFromFn {
  (substring: string, endPosition: number): (string: string) => boolean

  (string: string, substring: string, endPosition: number): boolean
}

export const endsWithFrom = curry3(
  (
    string: string,
    substring: string,
    endPosition: number,
  ): boolean => {
    return string.endsWith(substring, endPosition)
  },
) as EndsWithFromFn
