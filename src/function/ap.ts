export interface Apply {
  <F extends (arg: any) => any>(arg: Parameters<F>[0]): (f: F) => ReturnType<F>;
  <F extends (...args: any[]) => any>(...args: Parameters<F>): (f: F) => ReturnType<F>;
}

export const ap: Apply = <F extends (...args: any[]) => any>(...args: Parameters<F>) => (f: F): ReturnType<F> => f(...args);
