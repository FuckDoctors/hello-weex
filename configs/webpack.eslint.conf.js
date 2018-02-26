// this will compile all the subsequent required files to ES5 on the fly
require('babel-register');

module.exports = require('./webpack.common.conf.js');
