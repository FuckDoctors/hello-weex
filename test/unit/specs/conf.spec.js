const ip = require('ip').address();

describe('process.env', () => {
  it('DOAMIN', () => {
    expect(process.env.DOMAIN).to.equal(`${ip}:8081`);
  });
  it('ENABLE_HTTPS', () => {
    expect(process.env.ENABLE_HTTPS).to.equal(false);
  });
});
