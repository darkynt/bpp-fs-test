const setUser = require('./set-user')
const { userToJwtString } = require('../services/fake-auth')

const createFakeContext = getFn => ({
  cookies: {
    get: getFn
  }
})

describe('Set-User Middleware', () => {
  it('calls the next middleware, does not set a user if the cookie has not been set', async () => {
    const nextSpy = jest.fn()
    const ctxMock = createFakeContext(() => undefined)

    await setUser(ctxMock, nextSpy)

    expect(nextSpy).toHaveBeenCalled()
    expect(ctxMock.user).toBeUndefined()
  })

  it('calls the next middleware, does not set a user if the cookie is not a valid JWT', async () => {
    const nextSpy = jest.fn()
    const ctxMock = createFakeContext(() => ('asdf'))

    await setUser(ctxMock, nextSpy)

    expect(nextSpy).toHaveBeenCalled()
    expect(ctxMock.user).toBeUndefined()
  })

  it('calls the next middleware, setting the user if the cookie is a valid JWT', async () => {
    const nextSpy = jest.fn()
    const ctxMock = createFakeContext(() => userToJwtString({name: 'David Daveson', email: 'foo@bar.baz'}))

    await setUser(ctxMock, nextSpy)

    expect(nextSpy).toHaveBeenCalled()
    expect(ctxMock.user.name).toEqual('David Daveson')
    expect(ctxMock.user.email).toEqual('foo@bar.baz')
  })
})

