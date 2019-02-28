'use strict';

module.exports = () => {
  const config = exports = {};

  // sequelize ORM配置
  config.sequelize = {
    dialect: 'postgres',
    database: 'wood',
    host: '47.98.190.160',
    port: '5432',
    username: 'fontend',
    password: 'fontend',
  };

  // config.redis = {
  //   client: {
  //     port: 6379, // Redis port
  //     host: '192.168.22.218', // Redis host
  //     password: 'zjcdjk',
  //     db: 0,
  //   },
  // };

  return config;
};
