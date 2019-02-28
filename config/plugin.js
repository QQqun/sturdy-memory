'use strict';

// had enabled by egg
// exports.static = true;
// exports.mysql = {
//   enabled: true,
//   package: 'egg-mysql',
// };

exports.sequelize = {
  enabled: true,
  package: 'egg-sequelize',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
