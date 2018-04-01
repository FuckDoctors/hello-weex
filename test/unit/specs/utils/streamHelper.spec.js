import streamHelper from '@/utils/streamHelper';

const url = 'https://h5.ele.me/restapi/bgs/poi/reverse_geo_coding?latitude=36.672652&longitude=117.133606';

const stream = weex.requireModule('stream');

describe('utils/streamHelper.js', () => {
  it('stream.fetch', () => {
    stream.fetch({
      method: 'GET',
      url,
      type: 'json',
    }, (ret) => {
      expect(ret.ok).to.eq(true);
      const data = ret.data;
      expect(data.name).to.eq('齐鲁软件园');
    });
  });

  it('fetch(options)', () => {
    const p = streamHelper.fetch({
      method: 'GET',
      url,
      type: 'json',
    });

    p.then((ret) => {
      expect(ret.ok).to.eq(true);
    });
  });

  it('fetch(options, true)', () => {
    const p = streamHelper.fetch({
      method: 'GET',
      url,
      type: 'json',
    }, true);

    p.then((response) => {
      expect(response).to.have.property('readyState');
    }).then((ret) => {
      expect(ret.ok).to.eq(true);
    });
  });
});
