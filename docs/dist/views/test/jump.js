// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=77)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DOMAIN="fuckdoctors.github.io/hello-weex",t.DIST="dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},2:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e){var t="?";for(var n in e)null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t.substring(0,t.lastIndexOf("&"))}function r(e){e=e.substring(e.indexOf("?_wx_tpl"));var t={};if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),i=0;i<o.length;i++)t[o[i].split("=")[0]]=decodeURIComponent(o[i].split("=")[1]);return t}function u(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function s(e,t,n,o){var u=(0,m.default)(n),s=r(weex.config.bundleUrl),a=i(s);t&&(a=i(Object.assign({},s,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+u+e+".html"+a:g.push({url:""+u+e+".js"+a,animated:"true"},function(e){o&&o()})}function a(e,t,n){s(e,t,!0,n)}function f(e,t,n){s(e,t,!1,n)}function c(e,t,n){var o=r(e),u=i(o);t&&(u=i(Object.assign({},o,t)));var s=e.indexOf("?"),a=s>0?e.substring(0,s):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+a+u:g.push({url:""+a+u,animated:"true"},function(e){n&&n()})}function l(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():g.pop()}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=n(3),m=o(p),g=(n(0),weex.requireModule("navigator"));weex.requireModule("modal");t.default={createQuery:i,getQueryData:r,getHash:u,push:a,gotoTab:f,gotoH5:c,back:l}},3:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){var t,n,o=weex.config.bundleUrl,i=o.indexOf("file://assets/")>=0,u=o.indexOf("file:///")>=0&&o.indexOf(s.APP_NAME+".app")>0;if(i)t="file://assets/"+s.DIST+"/";else if(u)t=o.substring(0,o.lastIndexOf("/")+1);else{var a=s.DOMAIN,f=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(f&&f.length>=2){var c=f[1].indexOf(":"),l=c>0?f[1].substr(0,c):f[1];a=a.indexOf(l)>-1?a:f[1]}t="http://"+a+"/"+s.DIST+"/",n="http://"+a}n=e?"http://"+s.DOMAIN+"/":"/";var d=t;return"object"===("undefined"==typeof window?"undefined":r(window))&&(d=n),d}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=i;var u=n(0),s=o(u)},77:function(e,t,n){var o,i,r=[];r.push(n(78)),o=n(79);var u=n(80);if(i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=u.render,i.staticRenderFns=u.staticRenderFns,i._scopeId="data-v-63e38bde",i.style=i.style||{},r.forEach(function(e){for(var t in e)i.style[t]=e[t]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(i._scopeId,r)}catch(e){}e.exports=o,e.exports.el="true",new Vue(e.exports)},78:function(e,t){e.exports={wrapper:{justifyContent:"center",alignItems:"center"},logo:{width:"424",height:"200"},greeting:{marginTop:"70",fontSize:"50",color:"#41B883"},message:{marginTop:"30",marginRight:"30",marginBottom:"30",marginLeft:"30",fontSize:"32",color:"#727272"}}},79:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=o(i),u=n(0),s=weex.requireModule("navigator"),a=weex.requireModule("modal");t.default={data:function(){return{logo:"https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png"}},methods:{jump:function(e){s.push({url:"http://192.168.1.86:8081/dist/views/home/home.js",animated:"true"},function(e){a.alert({message:e})})},jump2:function(e){r.default.push(e)},jump3:function(e){r.default.gotoH5("http://"+u.DOMAIN+"/"+u.DIST+"/"+e+".js")},jump4:function(e){r.default.gotoH5("http://"+u.DOMAIN+"/"+e+".html")}}}},80:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("image",{staticClass:["logo"],attrs:{src:e.logo}}),n("text",{staticClass:["greeting"]},[e._v("The environment is ready!")]),n("text",{staticClass:["message"]},[e._v("Now, let's use Vue.js to build your Weex app.")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump("views/home/home.js")}}},[e._v("Jump")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump2("views/home/home")}}},[e._v("helper")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump3("views/home/home")}}},[e._v("helper url native")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump4("views/home/home")}}},[e._v("helper url html")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump2("views/test/weex-ui")}}},[e._v("weex ui")]),n("text",{staticClass:["message"],on:{click:function(t){e.jump3("views/test/weex-ui")}}},[e._v("weex ui native")])])},staticRenderFns:[]}}});