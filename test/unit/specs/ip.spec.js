// 获取ip的问题，参考https://github.com/webpack/webpack-dev-server/pull/901
const ip = require('ip').address();
// 加入internal-ip又报错。。。版本跟webpackDevServer依赖的版本有冲突。
// 直接使用webpackDevServer下的internal-ip，也一直为127.0.0.1
// const internalIp = require('../../../node_modules/webpack-dev-server/node_modules/internal-ip');

// const actualIp = internalIp.v4();
// 直接使用config里的host也为127.0.0.1，webpackDevServer内部做了处理？
const actualIp = require('../../../configs/config').dev.host;

describe('ip', () => {
  it('get ip', () => {
    // 使用require('ip')得到的ip始终是127.0.0.1，而不是真实的ip，而npm start时，却得到了真实的ip。。。
    // 不知道怎么回事啊。。。难道跟webpackDevServer有关？
    expect(ip).to.equal('127.0.0.1');
    expect(actualIp).to.match(/192\.168\.\d+\.\d+/);
  });
});
