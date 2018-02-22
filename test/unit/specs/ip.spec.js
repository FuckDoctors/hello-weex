describe('ip', () => {
  it('get ip', () => {
    const ip = require('ip').address();
    expect(ip).to.equal('192.168.202.84')
  })
})
