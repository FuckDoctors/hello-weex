webpackJsonp([8],{102:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=n(4),r=o(i);o(n(5)).default.init(r.default);var s=n(28);s.el="#root",new r.default(s)},28:function(e,t,n){function o(e){n(29)}var i=n(0)(n(31),n(32),o,"data-v-58272e1e",null);e.exports=i.exports},29:function(e,t,n){var o=n(30);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(2)("4f839b6e",o,!0)},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},30:function(e,t,n){t=e.exports=n(1)(!1),t.push([e.i,".wrapper[data-v-58272e1e]{justify-content:center;align-items:center}.greeting[data-v-58272e1e]{margin-top:70px;font-size:50px;color:#41b883}.message[data-v-58272e1e]{margin:30px;font-size:32px;color:#727272}",""])},31:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),r=o(i),s=n(3);t.default={data:function(){return{}},methods:{jump:function(e){"Web"===WXEnvironment.platform?r.default.gotoH5("http://"+s.DOMAIN+"/"+e+".html"):r.default.gotoH5("http://"+s.DOMAIN+"/"+s.DIST+"/"+e+".js")}}}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[n("text",{staticClass:"greeting",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Hello Weex!")]),e._v(" "),n("text",{staticClass:"message",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Home page.")]),e._v(" "),n("text",{staticClass:"message",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:function(t){e.jump("views/test/hello")}}},[e._v("跳转")])])},staticRenderFns:[]}},6:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t="?";for(var n in e)null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t.substring(0,t.lastIndexOf("&"))}function r(e){e=e.substring(e.indexOf("?_wx_tpl"));var t={};if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),i=0;i<o.length;i++)t[o[i].split("=")[0]]=decodeURIComponent(o[i].split("=")[1]);return t}function s(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function u(e,t,n,o){var s=(0,y.default)(n),u=r(weex.config.bundleUrl),l=i(u);t&&(l=i(Object.assign({},u,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+s+e+".html"+l:v.push({url:""+s+e+".js"+l,animated:"true"},function(e){o&&o()})}function l(e,t,n){u(e,t,!0,n)}function f(e,t,n){u(e,t,!1,n)}function a(e,t,n){var o=r(e),s=i(o);t&&(s=i(Object.assign({},o,t)));var u=e.indexOf("?"),l=u>0?e.substring(0,u):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+l+s:v.push({url:""+l+s,animated:"true"},function(e){n&&n()})}function c(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():v.pop()}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=n(7),y=o(p),v=(n(3),weex.requireModule("navigator"));weex.requireModule("modal");t.default={createQuery:i,getQueryData:r,getHash:s,push:l,gotoTab:f,gotoH5:a,back:c}},7:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){var t,n,o=weex.config.bundleUrl,i=o.indexOf("file://assets/")>=0,s=o.indexOf("file:///")>=0&&o.indexOf(u.APP_NAME+".app")>0;if(i)t="file://assets/"+u.DIST+"/";else if(s)t=o.substring(0,o.lastIndexOf("/")+1);else{var l=u.DOMAIN,f=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(f&&f.length>=2){var a=f[1].indexOf(":"),c=a>0?f[1].substr(0,a):f[1];l=l.indexOf(c)>-1?l:f[1]}t="http://"+l+"/"+u.DIST+"/",n="http://"+l}n=e?"http://"+u.DOMAIN+"/":"/";var d=t;return"object"===("undefined"==typeof window?"undefined":r(window))&&(d=n),d}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var s=n(3),u=o(s)}},[102]);
//# sourceMappingURL=home.337791abe79b274e13cc.bundle.map