// 'use strict';

// module.exports = app => {
//   const { STRING, INTEGER, DATE } = app.Sequelize();

//   const Customer = app.model.define('customer_info',
//     {
//       id: { type: INTEGER, primaryKey: true, autoIncrement: true },
//       customer_name: STRING(50),
//       customer_tel: STRING(20),
//       customer_sex: STRING(1),
//       customer_address: STRING(100),
//       create_time: DATE,
//       update_time: DATE,
//       is_delete: INTEGER(1),
//     },
//     {
//       freezeTableName: true,
//       timestamps: false,
//     }
//   );

//   return Customer;
// };
