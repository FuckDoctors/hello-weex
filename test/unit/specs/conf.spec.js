// 使用这个得到的是127.0.0.1
// const ip = require('ip').address();
const localIp = require('../lib/local-ip');

// 用node test/unit/lib/local-ip-test.js的方式跑出来是能取到ip的，
// 但是用npm run test方式取不到，结果为null
const ip = localIp.v4();

describe('process.env', () => {
  it('DOAMIN', () => {
    expect(process.env.DOMAIN).to.equal(`${ip}:8081`);
  });
  it('ENABLE_HTTPS', () => {
    expect(process.env.ENABLE_HTTPS).to.equal(false);
  });
});
