/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const localIp = require('./local-ip');
// 使用import提示错误
// SyntaxError: Unexpected token import
// import localIp from './local-ip';

// 运行 node test/unit/lib/local-ip-test.js
console.log(localIp.v4());
console.log(localIp.v6());
