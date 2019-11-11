import * as actions from '../user.actions'

describe('user actions', () => {
  it('should create an action to set the current user', () => {
    const user = {
      id: 'userId',
      displayName: 'John Doe',
      email: 'john.doe@test.com',
      createdAt: 1573392580,
    }
    const expectedAction = {
      type: actions.SET_CURRENT_USER,
      user,
    }
    expect(actions.setCurrentUser(user)).toEqual(expectedAction)
  })
})
