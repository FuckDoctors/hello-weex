import * as config from '../config';

/**
 * 得到base url。
 * @param {*} isnav H5使用。true:导航，使用返回绝对路径；false:tabbar等返回相对路径。
 */
export default function getBaseURL(isnav) {
  const bundleUrl = weex.config.bundleUrl;
  let nativeBase;
  let h5Base;
  // var isAndroidAssets = bundleUrl.indexOf(config.DOMAIN) >= 0 || bundleUrl.indexOf('file://assets/')>=0;
  const isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
  const isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf(`${config.APP_NAME}.app`) > 0;
  if (isAndroidAssets) {
    nativeBase = `file://assets${config.DIST}/`;
  } else if (isiOSAssets) {
    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
  } else {
    // hot reload之后config.DOMAIN为undefined，process.env.DOMAIN丢失了？
    let host = config.DOMAIN;
    // 这种热加载后就变成http://xxx:8080了，跟设定的8081端口也不一致。。。
    // 下面处理是得到//之后，/之前的东西，比如，第一个得到//192.168.1.1:xxxx/，第二个得到分组192.168.1.1:xxxx
    const matches = /\/\/([^/]+?)\//.exec(weex.config.bundleUrl);
    // if (matches && matches.length >= 2) {
    //   host = matches[1];
    // }
    if (matches && matches.length >= 2) {
      // 上面取出的带端口号，hot reload端口号变了，所以重新设置一下host。
      // 下面是获取host，不带port。
      // 其实是weexpack里使用express起了一个server，把dist目录作为静态资源了，
      // 所以直接使用ws的ip和port也是可以访问dist下的资源。
      // weexpack里的代码如下：
      // // put `dist` file into static server.
      // app.use(express.static(path.join(root, 'dist')));
      const colonIndex = matches[1].indexOf(':');
      const bundleHost = colonIndex > 0 ? matches[1].substr(0, colonIndex) : matches[1];
      // 如果包含本机host的话，就是本机的host，否则就使用匹配得到的host
      host = host.indexOf(bundleHost) > -1 ? host : matches[1];
    }

    nativeBase = `http${config.ENABLE_HTTPS ? 's' : ''}://${host}${config.DIST}/`;
    h5Base = `http${config.ENABLE_HTTPS ? 's' : ''}://${host}/`;
  }

  // 此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
  h5Base = isnav ? `http${config.ENABLE_HTTPS ? 's' : ''}://${config.DOMAIN}/` : '/';

  // in Native
  let base = nativeBase;
  if (typeof window === 'object') {
    // in Browser or WebView
    base = h5Base;
  }

  return base;
}
