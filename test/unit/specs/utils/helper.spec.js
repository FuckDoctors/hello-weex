import helper from '../../../../src/utils/helper';

describe('utils/helper.js', () => {
  it('createQuery', () => {
    const params = {
      a: 'a1',
      b: 'b1',
    };

    const queryString = helper.createQuery(params);
    expect(queryString).to.eq('?a=a1&b=b1');
  });

  it('getQueryData', () => {
    const url = 'http://192.168.1.86:8081/index.html?_wx_tpl=http%3A%2F%2F192.168.1.86%3A8081%2Fdist%2Findex.js';
    const query = helper.getQueryData(url);
    expect(query._wx_tpl).to.eq('http://192.168.1.86:8081/dist/index.js');

    const bundleUrl = 'http://192.168.1.86:8081/dist/views/test/hello.js?a=a1&b=b1';
    const queryBundle = helper.getQueryData(bundleUrl);
    expect(queryBundle.a).to.eq('a1');
    expect(queryBundle.b).to.eq('b1');
  });
});
