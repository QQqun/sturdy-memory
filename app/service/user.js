'use strict';
const Service = require('egg').Service;

class UserSercice extends Service {
  async login(query) {
    const result = await this.ctx.model.User.findAll({
      where: {
        account: query.account,
        password: query.password,
      },
    });

    let userInfo;
    if (result && result.length > 0) {
      userInfo = {
        data: { item: result, totalNum: result.length },
        result: { msg: '成功' },
        status: 0,
      };
    } else {
      userInfo = {
        data: { item: result, totalNum: result.length },
        result: { msg: '账号或密码错误' },
        status: 1,
      };
    }
    return userInfo;
  }
}

module.exports = UserSercice;
