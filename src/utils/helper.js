/* eslint no-underscore-dangle: ["error", { "allow": ["_push", "_url"] }] */

import getBaseUrl from './base-url';

const navigator = weex.requireModule('navigator');
// const modal = weex.requireModule('modal');

/**
 * object 转 URL 参数，已拼接问号“？”。
 */
function createQuery(obj) {
  let url = '?';
  // for (const key in obj) {
  //   if (obj[key] !== null) {
  //     url += (`${key}=${encodeURIComponent(obj[key])}&`);
  //   }
  // }
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== null) {
      url += (`${key}=${encodeURIComponent(obj[key])}&`);
    }
  });

  return url.substring(0, url.lastIndexOf('&'));
}

/**
 * 'xxx.js?name=aa' 转 {name: 'aa'}
 * @param {*} url
 */
function getQueryData(url) {
  // ?_wx_tpl=xxx的要除外，这个是用来做Native的。
  // url = url.substring(url.indexOf('.js?') + 3);
  const _url = url.substring(url.indexOf('?_wx_tpl'));
  const result = {};
  if (_url.indexOf('?') !== -1) {
    const str = _url.substr(1);
    const strs = str.split('&');
    for (let i = 0; i < strs.length; i += 1) {
      result[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
    }
  }
  return result;
}

/**
 * 获取hash
 * @param {*} url
 */
function getHash(url) {
  /* get hash */
  const hashIndex = url.indexOf('#');
  const hash = hashIndex > 0 ? url.substring(hashIndex, url.length) : '';

  const queryIndex = url.indexOf('?');
  const result = queryIndex > 0 ? hash.substring(0, queryIndex) : hash;

  return result;
}

function _push(to, params, isNavi, callback) {
  const baseUrl = getBaseUrl(isNavi);
  const query = getQueryData(weex.config.bundleUrl);

  let allQuery = createQuery(query);
  if (params) {
    allQuery = createQuery(Object.assign({}, query, params));
  }

  if (WXEnvironment.platform === 'Web' || typeof window === 'object') {
    // web
    window.location.href = `${baseUrl}${to}.html${allQuery}`;
  } else {
    // modal.alert({
    //   message: `${baseUrl}${to}.js${allQuery}`
    // });
    // native
    navigator.push({
      // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
      url: `${baseUrl}${to}.js${allQuery}`,
      animated: 'true',
    }, (event) => {
      if (callback) {
        callback(event);
      }
      // modal.alert({
      //   message: event
      // });
    });
  }
}

function push(to, params, callback) {
  _push(to, params, true, callback);
}

function gotoTab(to, params, callback) {
  _push(to, params, false, callback);
}

function gotoH5(url, params, callback) {
  const query = getQueryData(url);

  let allQuery = createQuery(query);
  if (params) {
    allQuery = createQuery(Object.assign({}, query, params));
  }

  const queryIndex = url.indexOf('?');
  const target = queryIndex > 0 ? url.substring(0, queryIndex) : url;

  if (WXEnvironment.platform === 'Web' || typeof window === 'object') {
    // web
    window.location.href = `${target}${allQuery}`;
  } else {
    // native
    navigator.push({
      // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
      url: `${target}${allQuery}`,
      animated: 'true',
    }, (event) => {
      if (callback) {
        callback(event);
      }
      // modal.alert({
      //   message: `${target}${allQuery}`
      // });
    });
  }
}

function back() {
  if (WXEnvironment.platform === 'Web' || typeof window === 'object') {
    // web
    // window.history.go(-1);
    window.history.back();
  } else {
    // native
    navigator.pop();
  }
}

export default {
  createQuery,
  getQueryData,
  getHash,
  push,
  gotoTab,
  gotoH5,
  back,
};
