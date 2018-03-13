/* eslint no-underscore-dangle: ["error", { "allow": ["_push", "_url"] }] */

import getBaseUrl from './base-url';
import * as config from '../config';

// const navigator = weex.requireModule('navigator');
const navigator = weex.requireModule('myNavigator') || weex.requireModule('navigator');
// const modal = weex.requireModule('modal');

/**
 * object 转 URL 参数，已拼接问号“？”。
 */
function createQuery(obj) {
  if (obj === undefined || obj === null) {
    return '';
  }

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
  let startIndex = url.indexOf('?_wx_tpl');
  if (startIndex === -1) {
    // 不包含?_wx_tpl=xxx时
    // web端使用的是.html?xxx，native是.js?xxx所以两者分开处理
    startIndex = url.indexOf('.js?');
    if (url.indexOf('.js?') > -1) {
      // native
      startIndex += 3;
    } else {
      // web端
      startIndex = url.indexOf('.html?') + 5;
    }
  }
  const _url = url.substring(startIndex);

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
    // web和native除了后缀不同之外，路径也不同。。。
    // target = target.replace(/(.js)$/, '.html');
    window.location.href = `${target}${allQuery}`;
  } else {
    // native
    // web和native除了后缀不同之外，路径也不同。。。
    // target = target.replace(/(.html)$/, '.js');
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

function _push(to, params, isNavi, callback) {
  const matches = /\/\/([^/]+?)\//.exec(to);
  if (matches && matches.length >= 2) {
    // 如果是绝对地址的话，走gotoH5
    gotoH5(to, params, callback);
    return;
  }

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
    // native
    // 先走本地bundle，本地有问题走线上？js里面使用try-catch无法捕获这个异常，应该在native里做。
    navigator.push({
      // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
      url: `${baseUrl}${to}.js${allQuery}`,
      animated: 'true',
    }, (event) => {
      if (callback) {
        callback(event);
      }
    });
  }
}

/**
 * 跳转到bundle下的相对路径，或者http的绝对路径
 * @param {String} to bundle下的相对路径，或者http的绝对路径
 * @param {Object} params 参数，生成queryString
 * @param {Function} callback 回调
 */
function push(to, params, callback) {
  _push(to, params, true, callback);
}

function gotoTab(to, params, callback) {
  _push(to, params, false, callback);
}

function goto(to, params, callback) {
  const baseUrl = `http${config.ENABLE_HTTPS ? 's' : ''}://${config.DOMAIN}`;

  let allQuery = '';
  if (params) {
    allQuery = createQuery(params);
  }

  if (WXEnvironment.platform === 'Web' || typeof window === 'object') {
    // web
    window.location.href = `${baseUrl}/${to}.html${allQuery}`;
  } else {
    // native
    // 先走本地bundle，本地有问题走线上？js里面使用try-catch无法捕获这个异常，应该在native里做。
    navigator.push({
      // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
      url: `${baseUrl}${config.DIST}/${to}.js${allQuery}`,
      animated: 'true',
    }, (event) => {
      if (callback) {
        callback(event);
      }
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

function getParams() {
  return getQueryData(weex.config.bundleUrl);
}

function close(params, success, failure) {
  const NOOP = () => {};
  navigator.close(params || {}, success || NOOP, failure || NOOP);
}

function replace(to, params, callback) {
  if (WXEnvironment.platform === 'Web' || typeof window === 'object') {
    // web
    const baseUrl = `http${config.ENABLE_HTTPS ? 's' : ''}://${config.DOMAIN}`;

    let allQuery = '';
    if (params) {
      allQuery = createQuery(params);
    }
    window.location.replace(`${baseUrl}/${to}.html${allQuery}`);
  } else {
    // native
    const baseUrl = getBaseUrl(true);
    const query = getQueryData(weex.config.bundleUrl);
    let allQuery = createQuery(query);
    if (params) {
      allQuery = createQuery(Object.assign({}, query, params));
    }
    // // 没有replace，按网上一哥们的说法，先跳转，再快速pop。参考地址忘了。。，
    // // 效果：android端可以，ios端不行，直接显示空白页（index.vue？）
    // navigator.push({
    //   // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
    //   url: `${baseUrl}${to}.js${allQuery}`,
    //   animated: 'true',
    // }, (event) => {
    //   if (callback) {
    //     callback(event);
    //   }
    // });
    // navigator.pop({
    //   animated: 'false',
    // });

    // 后来看源代码发现有close方法，android能看懂，会关掉Activity。ios的没看懂。
    // 实际效果，跑出来android确实也把index给关了。ios的左滑还是显示index。
    navigator.push({
      // route.url为相对地址时，为原生或者绝对地址时需要再单独处理
      url: `${baseUrl}${to}.js${allQuery}`,
      animated: 'true',
    }, (event) => {
      // 关掉之前的页面
      close();
      if (callback) {
        callback(event);
      }
    });
    navigator.pop({
      animated: 'false',
    });
  }
}

export default {
  createQuery,
  getQueryData,
  getHash,
  push,
  goto,
  gotoTab,
  gotoH5,
  back,
  getParams,
  replace,
  close,
};
