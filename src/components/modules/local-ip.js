/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

// https://stackoverflow.com/questions/3653065/get-local-ip-address-in-node-js
const os = require('os');

const ifaces = os.networkInterfaces();

// en0 192.168.1.101
// eth0 10.0.0.101

function address(ver) {
  const addr = [];
  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      if (iface.family !== `IP${ver}` || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1)
        return;
      }
      addr.push(iface.address);
    });
  });

  return addr;
}

function v4List() {
  return address('v4');
}

function v6List() {
  return address('v6');
}

function v4() {
  const addr = address('v4');
  return addr.length > 0 ? addr[0] : null;
}

function v6() {
  const addr = address('v6');
  return addr.length > 0 ? addr[0] : null;
}

// 使用export提示错误
// SyntaxError: Unexpected token export
// export default {
//   v4,
//   v6,
// };
module.exports = {
  v4,
  v6,
  v4List,
  v6List,
};
