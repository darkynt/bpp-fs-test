const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const Router = require('koa-router')
const router = new Router()

const userRouter = require('./routes/user')

router.use('/user', userRouter.routes(), userRouter.allowedMethods())

const {
  APP_PORT = 3000
} = process.env

const app = new Koa()

app.use(bodyparser())
app.use(router.routes(), router.allowedMethods())

const server = app.listen(APP_PORT)