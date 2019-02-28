/* eslint-disable array-bracket-spacing */
'use strict';

const Service = require('egg').Service;

class SellService extends Service {
  // 新增出货单
  async sellAdd(values) {
    console.log('values', values);

    await this.ctx.model.Sell.create({
      buyer: values.buyer,
      create_person: values.create_person,
      create_time: new Date(),
    });

    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 查询出货单
  async sellList(query) {
    console.log('query==========', query);
    const result = await this.ctx.model.Sell.findAndCountAll({
      where: { create_time: { $gte: query.startDate, $lte: query.endDate }, is_delete: '0' },
      include: [
        { model: this.ctx.model.SellGood },
      ],
      limit: (parseInt(query.page) - 1) * parseInt(query.size) + parseInt(query.size),
      offset: (parseInt(query.page) - 1) * parseInt(query.size),
      order: [['create_time', 'desc']],
    });

    return {
      data: { items: result.rows, totalNum: result.count },
      result: { msg: '成功' },
      status: 0,
    };

  }

  // 出货单修改
  async sellEdit(id, values) {
    const sell = await this.ctx.model.Sell.findById(id);

    if (!sell) {
      return {
        data: {},
        result: { msg: '该数据不存在' },
        status: 1,
      };
    }

    await sell.update({
      buyer: values.buyer,
    });

    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 出货单删除
  async sellDestroy(id) {
    const sell = await this.ctx.model.Sell.findOne({
      where: { id, is_delete: '0' },
    });
    if (!sell) {
      return {
        data: {},
        result: { msg: '该数据不存在' },
        status: 1,
      };
    }

    if (sell.is_finish === '0') {
      return {
        data: {},
        result: { msg: '该数据暂未结清' },
        status: 1,
      };
    }

    await sell.update({
      is_delete: '1',
    });
    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 出货单结清
  async sellFinish(id, values) {
    const sell = await this.ctx.model.Sell.findById(id);

    if (!sell) {
      return {
        data: {},
        result: { msg: '该数据不存在' },
        status: 1,
      };
    }

    await sell.update({
      is_finish: values.finish,
    });

    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }
}

module.exports = SellService;
