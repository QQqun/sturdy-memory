'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543809936425_517';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'egg_example',
    username: 'root',
    password: 'qwer',
  };

  config.bodyParser = {
    // ignore: [ '/proxy/*', '/backend/*' ],
    formLimit: '10mb',
    jsonLimit: '10mb',
  };

  // 统一错误处理
  config.onerror = {
    json(err, ctx) {
      const error = {
        status: 1,
        error: {
          code: err.code || '500',
          message: err.message || err,
        },
      };
      ctx.body = error;
      ctx.status = ctx.status === 401 ? 401 : 200;
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    // csrf: {
    //   useSession: true, // 默认为 false，当设置为 true 时，将会把 csrf token 保存到 Session 中
    //   cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
    //   sessionName: 'csrfToken', // Session 中的字段名，默认为 csrfToken
    // },
  };

  return config;
};
