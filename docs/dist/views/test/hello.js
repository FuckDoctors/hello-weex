// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=73)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOMAIN="fuckdoctors.github.io/hello-weex",e.DIST="dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(4),u=o(a),s={UrlParser:u.default,_typeof:function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},isPlainObject:function(t){return"object"===s._typeof(t)},isString:function(t){return"string"==typeof t},isNonEmptyArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t&&t.length>0&&Array.isArray(t)&&void 0!==t},isObject:function(t){return t&&"object"===(void 0===t?"undefined":i(t))&&!Array.isArray(t)},isEmptyObject:function(t){return 0===Object.keys(t).length&&t.constructor===Object},decodeIconFont:function(t){var e=/&#x[a-z|0-9]{4,5};?/g;return e.test(t)?t.replace(new RegExp(e,"g"),function(t){var e=t.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(e)}):t},mergeDeep:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(!n.length)return t;var i=n.shift();if(s.isObject(t)&&s.isObject(i))for(var a in i)s.isObject(i[a])?(t[a]||Object.assign(t,r({},a,{})),s.mergeDeep(t[a],i[a])):Object.assign(t,r({},a,i[a]));return s.mergeDeep.apply(s,[t].concat(n))},appendProtocol:function(t){if(/^\/\//.test(t)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+t}return t},encodeURLParams:function(t){return new u.default(t,!0).toString()},goToH5Page:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new s.UrlParser(t,!0),i=s.appendProtocol(r.toString());o.push({url:s.encodeURLParams(i),animated:e.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var t=weex.config.env.appName;return"Boat"===t||"BoatPlayground"===t},isWeb:function(){var t=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===t.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var t=weex.config.env.deviceHeight;return s.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):s.env.isIOS()&&2436===t},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return s.env.isTmall()||s.env.isTrip()||s.env.isTaobao()},supportsEB:function(){var t=weex.config.env.weexVersion||"0",e=s.compareVersion(t,"0.10.1.4")&&(s.env.isIOS()||s.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&e},supportsEBForAndroid:function(){return s.env.isAndroid()&&s.env.supportsEB()},supportsEBForIos:function(){return s.env.isIOS()&&s.env.supportsEB()},getPageHeight:function(){var t=weex.config.env,e=s.env.isWeb()?0:s.env.isIPhoneX()?176:132;return t.deviceHeight/t.deviceWidth*750-e}},compareVersion:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(t===e)return!0;for(var n=t.split("."),o=e.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var a=~~o[i],u=~~n[i];if(a<u)return!0;if(a>u)return!1}return!1},arrayChunk:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return t&&t.length>0&&(n=t.map(function(n,o){return o%e==0?t.slice(o,o+e):null}).filter(function(t){return t})),n},truncateString:function(t,e){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",a=/[^\x00-\xff]/g,u=t.replace(a,"**").length,s=0;s<u&&(i=t.charAt(s).toString(),null!==i.match(a)?o+=2:o++,!(o>e));s++)r+=i;return n&&u>e&&(r+="..."),r}};e.default=s},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){var e="?";for(var n in t)null!==t[n]&&(e+=n+"="+encodeURIComponent(t[n])+"&");return e.substring(0,e.lastIndexOf("&"))}function i(t){t=t.substring(t.indexOf("?_wx_tpl"));var e={};if(-1!=t.indexOf("?"))for(var n=t.substr(1),o=n.split("&"),r=0;r<o.length;r++)e[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return e}function a(t){var e=t.indexOf("#"),n=e>0?t.substring(e,t.length):"",o=t.indexOf("?");return o>0?n.substring(0,o):n}function u(t,e,n,o){var a=(0,h.default)(n),u=i(weex.config.bundleUrl),s=r(u);e&&(s=r(Object.assign({},u,e))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+a+t+".html"+s:g.push({url:""+a+t+".js"+s,animated:"true"},function(t){o&&o()})}function s(t,e,n){u(t,e,!0,n)}function c(t,e,n){u(t,e,!1,n)}function f(t,e,n){var o=i(t),a=r(o);e&&(a=r(Object.assign({},o,e)));var u=t.indexOf("?"),s=u>0?t.substring(0,u):t;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+s+a:g.push({url:""+s+a,animated:"true"},function(t){n&&n()})}function l(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():g.pop()}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=n(3),h=o(p),g=(n(0),weex.requireModule("navigator"));weex.requireModule("modal");e.default={createQuery:r,getQueryData:i,getHash:a,push:s,gotoTab:c,gotoH5:f,back:l}},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function r(t){var e,n,o=weex.config.bundleUrl,r=o.indexOf("file://assets/")>=0,a=o.indexOf("file:///")>=0&&o.indexOf(u.APP_NAME+".app")>0;if(r)e="file://assets/"+u.DIST+"/";else if(a)e=o.substring(0,o.lastIndexOf("/")+1);else{var s=u.DOMAIN,c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(c&&c.length>=2){var f=c[1].indexOf(":"),l=f>0?c[1].substr(0,f):c[1];s=s.indexOf(l)>-1?s:c[1]}e="http://"+s+"/"+u.DIST+"/",n="http://"+s}n=t?"http://"+u.DOMAIN+"/":"/";var d=e;return"object"===("undefined"==typeof window?"undefined":i(window))&&(d=n),d}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=r;var a=n(0),u=o(a)},function(t,e,n){"use strict";function o(t){t=t||global.location||{};var e,n={},o=void 0===t?"undefined":c(t);if("blob:"===t.protocol)n=new a(unescape(t.pathname),{});else if("string"===o){n=new a(t,{});for(e in g)delete n[e]}else if("object"===o){for(e in t)e in g||(n[e]=t[e]);void 0===n.slashes&&(n.slashes=p.test(t.href))}return n}function r(t){var e=d.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function i(t,e){for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function a(t,e,n){if(!(this instanceof a))return new a(t,e,n);var u,s,d,p,g,y,v=h.slice(),b=void 0===e?"undefined":c(e),m=this,w=0;for("object"!==b&&"string"!==b&&(n=e,e=null),n&&"function"!=typeof n&&(n=l.parse),e=o(e),s=r(t||""),u=!s.protocol&&!s.slashes,m.slashes=s.slashes||u&&e.slashes,m.protocol=s.protocol||e.protocol||"",t=s.rest,s.slashes||(v[2]=[/(.*)/,"pathname"]);w<v.length;w++)p=v[w],d=p[0],y=p[1],d!==d?m[y]=t:"string"==typeof d?~(g=t.indexOf(d))&&("number"==typeof p[2]?(m[y]=t.slice(0,g),t=t.slice(g+p[2])):(m[y]=t.slice(g),t=t.slice(0,g))):(g=d.exec(t))&&(m[y]=g[1],t=t.slice(0,g.index)),m[y]=m[y]||(u&&p[3]?e[y]||"":""),p[4]&&(m[y]=m[y].toLowerCase());n&&(m.query=n(m.query)),u&&e.slashes&&"/"!==m.pathname.charAt(0)&&(""!==m.pathname||""!==e.pathname)&&(m.pathname=i(m.pathname,e.pathname)),f(m.port,m.protocol)||(m.host=m.hostname,m.port=""),m.username=m.password="",m.auth&&(p=m.auth.split(":"),m.username=p[0]||"",m.password=p[1]||""),m.origin=m.protocol&&m.host&&"file:"!==m.protocol?m.protocol+"//"+m.host:"null",m.href=m.toString()}function u(t,e,n){var o=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||l.parse)(e)),o[t]=e;break;case"port":o[t]=e,f(e,o.protocol)?e&&(o.host=o.hostname+":"+e):(o.host=o.hostname,o[t]="");break;case"hostname":o[t]=e,o.port&&(e+=":"+o.port),o.host=e;break;case"host":o[t]=e,/:\d+$/.test(e)?(e=e.split(":"),o.port=e.pop(),o.hostname=e.join(":")):(o.hostname=e,o.port="");break;case"protocol":o.protocol=e.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(e){var r="pathname"===t?"/":"#";o[t]=e.charAt(0)!==r?r+e:e}else o[t]=e;break;default:o[t]=e}for(var i=0;i<h.length;i++){var a=h[i];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function s(t){t&&"function"==typeof t||(t=l.stringify);var e,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,e="object"===c(n.query)?t(n.query):n.query,e&&(r+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(r+=n.hash),r}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=n(5),l=n(6),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:u,toString:s},a.extractProtocol=r,a.location=o,a.qs=l,t.exports=a},function(t,e,n){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,n){"use strict";function o(t){return decodeURIComponent(t.replace(/\+/g," "))}function r(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,r={};e=n.exec(t);r[o(e[1])]=o(e[2]));return r}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var o in t)a.call(t,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(t[o]));return n.length?e+n.join("&"):""}var a=Object.prototype.hasOwnProperty;e.stringify=i,e.parse=r},function(t,e){t.exports={"nav-wrapper":{width:"750",alignItems:"flex-start"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=o(r),a=n(9),u=o(a),s=n(14),c=o(s);e.default={components:{WxcMinibar:u.default},props:{title:{type:String,default:"Title here..."},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:i.default.env.isWeb()?"auto":c.default.getNavHeight(),paddingTop:i.default.env.isWeb()?0:c.default.getNavHeight()-90}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(10);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(11)),o=n(12);var a=n(13);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-283913b6",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},function(t,e){t.exports={"wxc-minibar":{width:"750",height:"90",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#009ff0"},left:{width:"180",paddingLeft:"32"},"middle-title":{fontSize:"30",color:"#ffffff",height:"36",lineHeight:"34"},right:{width:"180",paddingRight:"32",alignItems:"flex-end"},"left-button":{width:"21",height:"36"},"right-button":{width:"32",height:"32"},"icon-text":{fontSize:"28",color:"#ffffff"}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&o.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:["wxc-minibar"],style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:["left"],attrs:{ariaLabel:"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?n("image",{staticClass:["left-button"],attrs:{src:t.leftButton}}):t._e(),t.leftText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("middle",[n("text",{staticClass:["middle-title"],style:{color:t.textColor}},[t._v(t._s(t.title))])]),n("div",{staticClass:["right"],on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?n("image",{staticClass:["right-button"],attrs:{src:t.rightButton,ariaHidden:!0}}):t._e(),t.rightText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=o(r),a={getNavHeight:function(){return i.default.env.isWeb()?0:i.default.env.isIPhoneX()?176:132}};e.default=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["nav-wrapper"],style:t.wrapperStyle},[n("wxc-minibar",{attrs:{title:t.title,backgroundColor:t.backgroundColor,textColor:t.textColor,leftButton:t.leftButton,rightText:t.rightText,rightButton:t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(37);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(r).default}})},function(t,e,n){var o,r,i=[];i.push(n(7)),o=n(8);var a=n(15);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-1a842022",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o,r,i=[];i.push(n(74)),o=n(75);var a=n(76);if(r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-39abe952",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"object"==typeof weex&&weex&&weex.document)try{weex.document.registerStyleSheets(r._scopeId,i)}catch(t){}t.exports=o,t.exports.el="true",new Vue(t.exports)},function(t,e){t.exports={wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#ffffff"}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=o(r),a=n(2),u=o(a);e.default={components:{NavBar:i.default},data:function(){return{leftButton:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"}},mounted:function(){},methods:{back:function(){u.default.back()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["wrapper"]},[n("nav-bar",{attrs:{title:"Hello",leftButton:t.leftButton,leftButtonClick:t.back}}),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("text",[t._v("。。。")])])}]}}]);