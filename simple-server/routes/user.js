const Router = require("koa-router");
const setUser = require("../middleware/set-user");
const { userToJwtString, JWT_EXPIRY_MS } = require("../services/fake-auth");
const userRouter = new Router();

userRouter.get("/me", setUser, (ctx, next) => {
  if (!ctx.user) ctx.throw(401, "Not Authorized");
  if (ctx.user) {
    ctx.status = 200;
    ctx.body = ctx.user;
  }
});

userRouter.post("/me", async ctx => {
  const { user, email } = ctx.request.body;
  ctx.cookies.set("bearer", userToJwtString({ user, email }), {
    overwrite: true,
    httpOnly: true,
    maxAge: JWT_EXPIRY_MS
  });
  ctx.status = 200;
  ctx.body = { msg: "ok" };
});

module.exports = userRouter;
