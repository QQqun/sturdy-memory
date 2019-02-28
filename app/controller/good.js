'use strict';

const Controller = require('egg').Controller;

class GoodController extends Controller {
  // 查询商品
  async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.good.list(ctx.query);
  }

  async add() {
    const { ctx } = this;
    const result = await ctx.service.good.add(ctx.request.body);
    ctx.body = result;
  }

  async edit() {
    const { ctx } = this;
    ctx.body = await ctx.service.good.edit(ctx.params.id, ctx.request.body);
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.good.destroy(ctx.params.id);
  }
}

module.exports = GoodController;

