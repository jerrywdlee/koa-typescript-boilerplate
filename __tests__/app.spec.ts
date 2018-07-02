import { Utility } from '../src/lib'

describe('greeter function', () => {
  // Read more about fake timers: http://facebook.github.io/jest/docs/en/timer-mocks.html#content
  jest.useFakeTimers()
  const label: string = 'foobar'
  let _label: string

  // Act before assertions
  beforeAll(async () => {
    const p = Utility.Delay(1000, label)
    jest.runOnlyPendingTimers()
    _label = await p
  })

  // Assert if setTimeout was called properly
  it('delays 1 seconds', () => {
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect((setTimeout as Function as jest.Mock).mock.calls[0][1]).toBe(1000)
  })

  it('return label after delayed', () => {
    expect(_label).toBe(label)
  })

})
