'use strict';

const Controller = require('egg').Controller;

class SellController extends Controller {
  async sellAdd() {
    this.ctx.body = await this.ctx.service.sell.sellAdd(this.ctx.request.body);
  }

  async sellList() {
    this.ctx.body = await this.ctx.service.sell.sellList(this.ctx.query);
  }

  async sellEdit() {
    this.ctx.body = await this.ctx.service.sell.sellEdit(this.ctx.params.id, this.ctx.request.body);
  }

  async sellDestroy() {
    this.ctx.body = await this.ctx.service.sell.sellDestroy(this.ctx.params.id);
  }

  async sellFinish() {
    this.ctx.body = await this.ctx.service.sell.sellFinish(this.ctx.params.id, this.ctx.request.body);
  }
}

module.exports = SellController;
