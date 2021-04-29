import { curry2 } from '../.internal/curry-2'
import { curry3 } from '../.internal/curry-3'

export interface SplitFn {
  (separator: string): (string: string) => string[]

  (string: string, separator: string): string[]
}

export const split = curry2(
  (string: string, separator: string): string[] => {
    return string.split(separator)
  },
) as SplitFn

export interface SplitToFn {
  (separator: string, limit: number): (string: string) => string[]

  (string: string, separator: string, limit: number): string[]
}

export const splitTo = curry3(
  (string: string, separator: string, limit: number): string[] => {
    return string.split(separator, limit)
  },
) as SplitToFn
