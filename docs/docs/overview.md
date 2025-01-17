---
id: overview
slug: /
title: Overview
sidebar_position: 0
---

`fnts` is an abbreviation for something like a "functional TypeScript". You could see a similar concept in libraries like [fp-ts](https://github.com/gcanti/fp-ts) or [ramda](https://github.com/ramda/ramda), each endorsing their own implementation of the idea.

Here, the philosophy is to give the small set of functions, the possession of which makes it easier to operate the code in a functional style.

The minimal amount of abstractions not present in the TypeScript itself, or being hard to implement and use, (like HKT, typeclasses, overwhelming amount of iterators and transducers) aims to reduce the learning curve of this seemingly "different" style of programming.

## Tooling

The library basically provides the tools to handily operate the following concepts: monads, currying, composition, guarding, handling side effects and control flows. Nothing more, nothing less.

### [Currying](/concepts/currying)

The `curry` function is here to help with auto-currying of variadic or fixed amount of arguments.

```typescript
import curry from 'fnts/curry';

const sumOfThree = curry(
  (a: number, b: number, c: number): number => {
    return a + b + c;
  }
);

sumOfThree(1, 2, 3) === 
sumOfThree(1, 2)(3) === 
sumOfThree(1)(2, 3) === 
sumOfThree(1)(2)(3);
```

### [Composition](/concepts/composition)

Composition in `fnts` is represented through the `compose` and `pipe` functions. Both are implemented without the overloads, which causes the types to be rather *imposed* than inferred.

```typescript
import compose from 'fnts/compose';

const isTwoDigits = compose(
  (b: boolean) => b ? 'true' : 'false',
  (s: string) => s.length === 2, // argument type imposed from the next function
  (n: number) => `${n}`,
); // will accept only a number as argument

isTwoDigits(5) === 'false';
isTwoDigits(14) === 'true';
```

```typescript
import pipe from 'fnts/pipe';

const isTwoDigits = pipe(
  (n: number) => `${n}`,
  (s: string) => s.length === 2,
  (b: boolean) => b ? 'true' : 'false',
);

isTwoDigits(5) === 'false';
isTwoDigits(14) === 'true';
```

### [Arguments Permutation](/concepts/arguments-permutation)

For non-commutative operations or functions that *can* be applied in the compositional context it is handy to be able to automatically permutate (switch places of) their arguments. For some functions in `fnts` this is already implemented:

```typescript
import { fmap } from 'fnts/maybe/operators';

const mapToNumber = (maybe: Maybe<string>): Maybe<number> => fmap(maybe, (value) => Number(value));
```

Here, `mapToNumber` declaration is equivalent to:

```typescript
import { fmap } from 'fnts/maybe/operators';

const mapToNumber = fmap<string, number>(Number);
```

### [Monads](/concepts/monads)

Out of the variety of monads `fnts` chooses two presumably most suitable ones: `maybe` and `either`. Each have their own constructors and operators (as opposed to classes and methods based approach seen commonly).

```typescript
import maybe from 'fnts/maybe';
import { foldMap } from 'fnts/maybe/operators';

foldMap(
  maybe([1, 2, 3].find((n) => n > 2)),
  (n) => n === 3
); // true
```

```typescript
import either from 'fnts/either';
import { bifoldMap } from 'fnts/either/operators';

bifoldMap(
  await either(
    () => fetch('https://github.com')
  ),
  (error) => console.error(error),
  (data) => data
)
```

```typescript
import eitherSync from 'fnts/either';
import { bifoldMap } from 'fnts/either/operators';

bifoldMap(
  eitherSync(
   () => JSON.parse(localStorage.getItem('context'))
  ),
  (error) => console.error(error),
  (data) => data
);
```

### [Side effects](/concepts/side-effects)

For handling side effects there are a couple of functions, the underlying concept of which is to not interfere with the main execution flow:

```typescript
import inject from 'fnts/inject';

const computeAndLog = inject(
  compute,
  (...args) => console.log('Computing with args: ', args)
);

computeAndLog(1, 2, 3);
```

### [Guarding](/concepts/guarding)

In computing there's a pattern called "guard". Specifically, Haskell has a dedicated [syntax](https://wiki.haskell.org/Pattern_guard) for that, which `fnts` also implemented in a more JavaScripty way:

```typescript
import guard from 'fnts/guard';

guard<(x: number) => number>(
  [(x) => x < 5, (x) => x + 1],
  [(x) => x === 5, (x) => x - 1],
  () => 1
)(5) // 4
```

### Control Flow

A `ternary` function is here to help, when there's a need to add a simple control flow expression which relies on the same argument in a condition and both branches. Additionally, it enforces the same return type for truthy and falsy expressions.

```typescript
import ternary from 'fnts/ternary';

const lt = (b: number) => (a: number) => a < b;

const incr = (a: number) => a + 1;

const decr = (a: number) => a - 1;

ternary(
  lt(5), // condition
  incr, // if true
  decr // if false
)(4);
```

Equivalent to:

```typescript
4 < 5 ? 4 + 1 : 4 - 1;
```

---

For a full overview of the available tools consult with the [API](/api) reference.
