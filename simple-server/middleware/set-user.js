const {
  userFromJwtString
} = require('../services/fake-auth')

module.exports = async (ctx, next) => {
  const userData = ctx.cookies.get('bearer')
  ctx.user = await userFromJwtString(userData)
    .catch(console.error)
  return next()
}
