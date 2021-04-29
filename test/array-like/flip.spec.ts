import { flip as sut } from 'fnts/array-like'

describe('flip', () => {
  it('should create reversed copy of the original array', () => {
    expect(
      sut([1, 2, 3]),
    ).toStrictEqual([3, 2, 1])
  })

  it('should create reversed copy of the original string', () => {
    expect(
      sut('abc'),
    ).toStrictEqual('cba')
  })
})
