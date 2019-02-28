'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Sell = app.model.define('sell',
    {
      // id
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      // 买家姓名
      buyer: STRING(50),
      // 是否结清
      is_finish: STRING(1),
      // 创建人
      create_person: STRING(50),
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

  Sell.associate = function() {
    Sell.hasMany(app.model.SellGood, { foreignKey: 'sell_id' });
  };
  return Sell;
};
