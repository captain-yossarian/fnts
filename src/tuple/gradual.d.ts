export type Gradual<T extends any[]> = T extends [...infer R, any]
  ? R['length'] extends 0
    ? T
    : T | Gradual<R>
  : T
