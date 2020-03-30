const jwt = require('jsonwebtoken')
const {
  JWT_SIGNING_STRING = 'demo',
  JWT_EXPIRY_MS = `${6 * 60 * 60 * 1000}`,
} = process.env

const userToJwtString = ({name, email}) => jwt.sign({name, email}, JWT_SIGNING_STRING, {expiresIn: JWT_EXPIRY_MS})

const userFromJwtString = token => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SIGNING_STRING, (err, user) => {
    if (err) return reject(err)
    resolve(user)
  })
})

module.exports = {
  JWT_EXPIRY_MS,
  userToJwtString,
  userFromJwtString,
}
