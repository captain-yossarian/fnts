import { isLeft } from '../guards'
import type { Either } from '../../either'
import conditional from '../../../conditional'
import type { Map } from '../../../.internal/map'
import permutationOf3 from '../../../.internal/permutation-of-3'

import first from './first'
import second from './second'

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export default function bimap<
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
> (
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): (
  monad: Either<LeftValue, RightValue>
) => Either<NextLeftValue, NextRightValue>

/**
 * Maps left and right values of the provided `monad` to a new `Either` monad.
 */
export default function bimap<
  LeftValue,
  RightValue,
  NextLeftValue,
  NextRightValue
> (
  monad: Either<LeftValue, RightValue>,
  mapLeft: Map<LeftValue, NextLeftValue>,
  mapRight: Map<RightValue, NextRightValue>,
): Either<NextLeftValue, NextRightValue>

export default function bimap (...args: [any, any, any?]): any {
  return permutationOf3(
    <
      LeftValue,
      RightValue,
      NextLeftValue,
      NextRightValue
    >(
      monad: Either<LeftValue, RightValue>,
      mapLeft: Map<LeftValue, NextLeftValue>,
      mapRight: Map<RightValue, NextRightValue>,
    ): Either<NextLeftValue, NextRightValue> => {
      return conditional(
        isLeft,
        first(mapLeft) as Map<typeof monad, Either<NextLeftValue, NextRightValue>>,
        second(mapRight) as Map<typeof monad, Either<NextLeftValue, NextRightValue>>,
      )(monad)
    }
  )(...args)
}
