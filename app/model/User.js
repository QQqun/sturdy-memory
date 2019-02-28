'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user_account',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      account: STRING(50),
      password: STRING(50),
      authority: STRING(50),
      create_time: DATE,
      update_time: DATE,
      is_delete: INTEGER(1),
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};
