'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, DOUBLE } = app.Sequelize;

  const Good = app.model.define('good',
    {
      // id
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 名称
      good_name: STRING(50),
      // 类型
      good_type: STRING(50),
      // 价格
      good_price: DOUBLE(10),
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

  return Good;
};
