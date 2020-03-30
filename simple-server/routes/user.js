const Router = require("koa-router");
const setUser = require("../middleware/set-user");
const { userToJwtString } = require("../services/fake-auth");
const userRouter = new Router();

router.get("/me", setUser, (ctx, next) => {
  if (!ctx.user) ctx.throw(401, "Not Authorized");
  if (ctx.user) {
    ctx.status = 200;
    ctx.body = ctx.user;
  }
});

router.post("/me", async ctx => {
  const { user, email } = ctx.request.body;
  ctx.cookies.set("bearer", userToJwtString({ user, email }), {
    overwrite: true,
    secure: true,
    httpOnly: true,
    maxAge: JWT_EXPIRY_MS
  });
});
