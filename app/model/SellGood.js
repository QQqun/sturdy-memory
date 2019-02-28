'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;

  const SellGood = app.model.define('sell_good',
    {
      // id
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 出货单id
      sell_id: INTEGER(50),
      // 商品id
      good_id: INTEGER(50),
      // 商品数量
      good_num: INTEGER,
      // 创建时间
      create_time: DATE,
      // 是否删除
      is_delete: INTEGER(1),
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return SellGood;
};
