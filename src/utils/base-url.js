import * as config from '../config';

/**
 * 得到base url。
 * @param {*} isnav H5使用。true:导航，使用返回绝对路径；false:tabbar等返回相对路径。
 */
export default function getBaseURL(isnav) {
  var bundleUrl = weex.config.bundleUrl;
  var nativeBase;
  var h5Base;
  // var isAndroidAssets = bundleUrl.indexOf(config.DOMAIN) >= 0 || bundleUrl.indexOf('file://assets/')>=0;
  var isAndroidAssets = bundleUrl.indexOf('file://assets/')>=0;
  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf(`${config.APP_NAME}.app`) > 0;
  if (isAndroidAssets) {
    nativeBase = `file://assets/${config.DIST}/`;
  } else if (isiOSAssets) {
    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
  } else {
    var host = config.DOMAIN;
    // 这种热加载后就变成http://xxx:8080了，跟设定的8081端口也不一致。。。
    // 下面处理是得到//之后，/之前的东西，比如，第一个得到//192.168.1.1:xxxx/，第二个得到分组192.168.1.1:xxxx
    var matches = /\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);
    if (matches && matches.length >= 2) {
      const colonIndex = matches[1].indexOf(':') ;
      const _bundleHost = colonIndex > 0 ? matches[1].substr(0, colonIndex) : matches[1];
      host = host.indexOf(_bundleHost) > -1 ? host : matches[1];
    }

    nativeBase = `http://${host}/${config.DIST}/`;
    h5Base = `http://${host}`;
  }

  //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
  h5Base = isnav ? `http://${config.DOMAIN}/` : `/`;

  // in Native
  var base = nativeBase;
  if (typeof window === 'object') {
    // in Browser or WebView
    base = h5Base;
  }

  return base
};
