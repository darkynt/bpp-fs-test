const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const proxy = require('koa-proxies')
const Router = require('koa-router')
const router = new Router()

const {
  UI_HOST
} = process.env

/* Webpack dev proxy redirect - avoid CORS and api related coding */
const liveProxy = proxy('/*', {
  target: `http://${UI_HOST}`,
  changeOrigin: false,
  logs: true,
})

const websocketProxy = (req, socket, head) => {
  proxy.proxy.ws(req, socket, head, {
    target: `ws://${UI_HOST}`,
  })
}

/* Assemble router middleware */
const userRouter = require('./routes/user')
router.use('/user', userRouter.routes(), userRouter.allowedMethods())

const {
  APP_PORT = 3000
} = process.env

const app = new Koa()

/* Enrol app middleware */
app.use(bodyparser())
app.use(router.routes(), router.allowedMethods())
app.use(liveProxy)

const server = app.listen(APP_PORT)
server.on('upgrade', websocketProxy)
