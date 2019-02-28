'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // 登录
  app.get('/api/login', app.controller.user.login);
  // 商品
  app.get('/api/good/list', app.controller.good.list);
  app.post('/api/good/add', app.controller.good.add);
  app.put('/api/good/edit/:id', app.controller.good.edit);
  app.delete('/api/good/del/:id', app.controller.good.destroy);

  // 出库单
  app.get('/api/sell/sellList', app.controller.sell.sellList);
  app.post('/api/sell/add', app.controller.sell.sellAdd);
  app.put('/api/sell/edit/:id', app.controller.sell.sellEdit);
  app.delete('/api/sell/del/:id', app.controller.sell.sellDestroy);
  app.put('/api/sell/finish/:id', app.controller.sell.sellFinish);
};
