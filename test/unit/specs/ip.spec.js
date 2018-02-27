const ip = require('ip').address();

describe('ip', () => {
  it('get ip', () => {
    expect(ip).to.equal('192.168.1.86');
  });
});
