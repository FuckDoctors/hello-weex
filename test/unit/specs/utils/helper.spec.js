import helper from '../../../../src/utils/helper';

describe('utils/helper.js', () => {
  it('getQueryData', () => {
    const url = 'http://192.168.1.86:8081/index.html?_wx_tpl=http%3A%2F%2F192.168.1.86%3A8081%2Fdist%2Findex.js';
    const query = helper.getQueryData(url);
    expect(query._wx_tpl).to.eq('http://192.168.1.86:8081/dist/index.js');
  });
});
