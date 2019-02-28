/* eslint-disable array-bracket-spacing */
'use strict';

const Service = require('egg').Service;

class GoodService extends Service {
  // 查询
  async list(query) {
    const result = await this.ctx.model.Good.findAndCountAll({
      attributes: ['id', 'good_name', 'good_type', 'good_price'],
      where: { good_name: { like: `%${query.good_name ? query.good_name : ''}%` }, is_delete: '0' },
      limit: (parseInt(query.page) - 1) * parseInt(query.size) + parseInt(query.size),
      offset: (parseInt(query.page) - 1) * parseInt(query.size),
      order: [['good_name', 'desc'], ['good_type', 'asc']],
    });

    return {
      data: { items: result.rows, totalNum: result.count },
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 新增
  async add(values) {
    // 查询商品是否已存在
    const good = await this.ctx.model.Good.findOne({
      where: {
        good_name: values.good_name,
        good_type: values.good_type,
        is_delete: '0',
      },
    });

    if (good) {
      return {
        data: {},
        result: { msg: '该商品已存在' },
        status: 1,
      };
    }

    // 新增
    await this.ctx.model.Good.create({
      good_name: values.good_name,
      good_type: values.good_type,
      good_price: values.good_price,
      create_time: new Date(),
    });

    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 修改
  async edit(id, values) {
    const good = await this.ctx.model.Good.findById(id);

    if (!good) {
      return {
        data: {},
        result: { msg: '该商品不存在' },
        status: 1,
      };
    }

    await good.update({
      good_name: values.good_name,
      good_type: values.good_type,
      good_price: values.good_price,
    });

    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }

  // 删除
  async destroy(id) {
    const good = await this.ctx.model.Good.findOne({
      where: { id, is_delete: '0' },
    });
    if (!good) {
      return {
        data: {},
        result: { msg: '该商品不存在' },
        status: 1,
      };
    }

    await good.update({
      is_delete: '1',
    });
    return {
      data: {},
      result: { msg: '成功' },
      status: 0,
    };
  }
}

module.exports = GoodService;
