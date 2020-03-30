const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const {
  APP_PORT = 3000
} = process.env

const app = new Koa()
app.use(bodyparser())

const server = app.listen(APP_PORT)