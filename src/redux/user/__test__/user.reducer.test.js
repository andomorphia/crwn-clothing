import reducer from '../user.reducer'
import * as actions from '../user.actions'
import { INITIAL_STATE } from '../user.reducer'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ currentUser: null })
  })

  it('should handle SET_CURRENT_USER', () => {
    const user = {
      id: 'userId',
      displayName: 'John Doe',
      email: 'john.doe@test.com',
      createdAt: 1573392580,
    }

    expect(
      reducer(INITIAL_STATE, {
        type: actions.SET_CURRENT_USER,
        user,
      })
    ).toEqual({
      currentUser: user,
    })

    expect(
      reducer(
        {
          currentUser: user,
        },
        {
          type: actions.SET_CURRENT_USER,
          user: null,
        }
      )
    ).toEqual({ currentUser: null })
  })
})
