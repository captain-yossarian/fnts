export interface Functor<A> {
  map<B>(f: (a: A) => B): B;
}
