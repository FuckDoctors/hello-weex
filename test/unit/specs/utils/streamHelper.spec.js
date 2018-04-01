import streamHelper from '@/utils/streamHelper';

const url = 'https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=36.672652&longitude=117.133606';

const stream = weex.requireModule('stream');

// 下面几个测试用例一直能正常通过，而其实是错误了。
// 原因是使用了异步请求，expect的用法不对。
// 异步请求的用法参考下面的文档。
// https://mochajs.org/#asynchronous-code
describe('utils/streamHelper.js', () => {
  it('stream.fetch', (done) => {
    stream.fetch({
      method: 'GET',
      url,
      type: 'json',
    }, (ret) => {
      expect(ret.ok).to.eq(true);
      const data = ret.data;
      expect(data.name).to.eq('齐鲁软件园');
      done();
    });
  });

  it('fetch(options)', () => {
    const p = streamHelper.fetch({
      method: 'GET',
      url,
      type: 'json',
    });

    // promise测试
    // https://stackoverflow.com/questions/26571328/how-do-i-properly-test-promises-with-mocha-and-chai
    // http://harttle.land/2016/07/12/async-test-with-chai-as-promised.html
    return p.then((ret) => {
      expect(ret.ok).to.eq(true);
    });
  });

  it('fetch(options, true)', () => {
    const p = streamHelper.fetch2({
      method: 'GET',
      url,
      type: 'json',
    }, true);

    return p.then((response) => {
      // expect(response).to.have.property('readyState');
      expect(response).to.have.property('ok');
    }).then((ret) => {
      expect(ret.ok).to.eq(true);
    });
  });
});
