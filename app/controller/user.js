'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.login(ctx.query);
    ctx.body = userInfo;

    // ctx.session = { userInfo };

    // // 调用 rotateCsrfSecret 刷新用户的 CSRF token
    // ctx.rotateCsrfSecret();

    // ctx.body = { success: true };
  }
}

module.exports = UserController;
