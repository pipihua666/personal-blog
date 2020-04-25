/*
 * @Descripttion: 用户校验中间件
 * @Author: zhaokh
 * @Date: 2020-02-23 21:43:36
 */
module.exports = options => {
  return async function auth(ctx, next) {
    console.log("options", options);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.throw(401, "身份验证错误");
    }
  };
};
