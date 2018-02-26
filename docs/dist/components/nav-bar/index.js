// { "framework": "Vue"} 

!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=61)}({1:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n(4),s=r(a),u={UrlParser:s.default,_typeof:function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},isPlainObject:function(t){return"object"===u._typeof(t)},isString:function(t){return"string"==typeof t},isNonEmptyArray:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t&&t.length>0&&Array.isArray(t)&&void 0!==t},isObject:function(t){return t&&"object"===(void 0===t?"undefined":i(t))&&!Array.isArray(t)},isEmptyObject:function(t){return 0===Object.keys(t).length&&t.constructor===Object},decodeIconFont:function(t){var e=/&#x[a-z|0-9]{4,5};?/g;return e.test(t)?t.replace(new RegExp(e,"g"),function(t){var e=t.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(e)}):t},mergeDeep:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!n.length)return t;var i=n.shift();if(u.isObject(t)&&u.isObject(i))for(var a in i)u.isObject(i[a])?(t[a]||Object.assign(t,o({},a,{})),u.mergeDeep(t[a],i[a])):Object.assign(t,o({},a,i[a]));return u.mergeDeep.apply(u,[t].concat(n))},appendProtocol:function(t){if(/^\/\//.test(t)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+t}return t},encodeURLParams:function(t){return new s.default(t,!0).toString()},goToH5Page:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=weex.requireModule("navigator"),o=new u.UrlParser(t,!0),i=u.appendProtocol(o.toString());r.push({url:u.encodeURLParams(i),animated:e.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var t=weex.config.env.appName;return"Boat"===t||"BoatPlayground"===t},isWeb:function(){var t=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===t.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var t=weex.config.env.deviceHeight;return u.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):u.env.isIOS()&&2436===t},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return u.env.isTmall()||u.env.isTrip()||u.env.isTaobao()},supportsEB:function(){var t=weex.config.env.weexVersion||"0",e=u.compareVersion(t,"0.10.1.4")&&(u.env.isIOS()||u.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&e},supportsEBForAndroid:function(){return u.env.isAndroid()&&u.env.supportsEB()},supportsEBForIos:function(){return u.env.isIOS()&&u.env.supportsEB()},getPageHeight:function(){var t=weex.config.env,e=u.env.isWeb()?0:u.env.isIPhoneX()?176:132;return t.deviceHeight/t.deviceWidth*750-e}},compareVersion:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(t===e)return!0;for(var n=t.split("."),r=e.split("."),o=Math.max(n.length,r.length),i=0;i<o;i++){var a=~~r[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return t&&t.length>0&&(n=t.map(function(n,r){return r%e==0?t.slice(r,r+e):null}).filter(function(t){return t})),n},truncateString:function(t,e){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0,o="",i="",a=/[^\x00-\xff]/g,s=t.replace(a,"**").length,u=0;u<s&&(i=t.charAt(u).toString(),null!==i.match(a)?r+=2:r++,!(r>e));u++)o+=i;return n&&s>e&&(o+="..."),o}};e.default=u},10:function(t,e,n){var r,o,i=[];i.push(n(11)),r=n(12);var a=n(13);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-56d624ab",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r},11:function(t,e){t.exports={"wxc-minibar":{width:"750",height:"90",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#009ff0"},left:{width:"180",paddingLeft:"32"},"middle-title":{fontSize:"30",color:"#ffffff",height:"36",lineHeight:"34"},right:{width:"180",paddingRight:"32",alignItems:"flex-end"},"left-button":{width:"21",height:"36"},"right-button":{width:"32",height:"32"},"icon-text":{fontSize:"28",color:"#ffffff"}}},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&r.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:["wxc-minibar"],style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:["left"],attrs:{ariaLabel:"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?n("image",{staticClass:["left-button"],attrs:{src:t.leftButton}}):t._e(),t.leftText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.leftText))]):t._e()])],2),t._t("middle",[n("text",{staticClass:["middle-title"],style:{color:t.textColor}},[t._v(t._s(t.title))])]),n("div",{staticClass:["right"],on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?n("image",{staticClass:["right-button"],attrs:{src:t.rightButton,ariaHidden:!0}}):t._e(),t.rightText?n("text",{staticClass:["icon-text"],style:{color:t.textColor}},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},14:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),a={getNavHeight:function(){return i.default.env.isWeb()?0:i.default.env.isIPhoneX()?176:132}};e.default=a},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:["nav-wrapper"],style:t.wrapperStyle},[n("wxc-minibar",{attrs:{title:t.title,backgroundColor:t.backgroundColor,textColor:t.textColor,leftButton:t.leftButton,rightText:t.rightText,rightButton:t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},4:function(t,e,n){"use strict";function r(t){t=t||global.location||{};var e,n={},r=void 0===t?"undefined":c(t);if("blob:"===t.protocol)n=new a(unescape(t.pathname),{});else if("string"===r){n=new a(t,{});for(e in g)delete n[e]}else if("object"===r){for(e in t)e in g||(n[e]=t[e]);void 0===n.slashes&&(n.slashes=d.test(t.href))}return n}function o(t){var e=p.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function i(t,e){for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),r=n.length,o=n[r-1],i=!1,a=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),a++):a&&(0===r&&(i=!0),n.splice(r,1),a--);return i&&n.unshift(""),"."!==o&&".."!==o||n.push(""),n.join("/")}function a(t,e,n){if(!(this instanceof a))return new a(t,e,n);var s,u,p,d,g,v,y=h.slice(),b=void 0===e?"undefined":c(e),m=this,w=0;for("object"!==b&&"string"!==b&&(n=e,e=null),n&&"function"!=typeof n&&(n=f.parse),e=r(e),u=o(t||""),s=!u.protocol&&!u.slashes,m.slashes=u.slashes||s&&e.slashes,m.protocol=u.protocol||e.protocol||"",t=u.rest,u.slashes||(y[2]=[/(.*)/,"pathname"]);w<y.length;w++)d=y[w],p=d[0],v=d[1],p!==p?m[v]=t:"string"==typeof p?~(g=t.indexOf(p))&&("number"==typeof d[2]?(m[v]=t.slice(0,g),t=t.slice(g+d[2])):(m[v]=t.slice(g),t=t.slice(0,g))):(g=p.exec(t))&&(m[v]=g[1],t=t.slice(0,g.index)),m[v]=m[v]||(s&&d[3]?e[v]||"":""),d[4]&&(m[v]=m[v].toLowerCase());n&&(m.query=n(m.query)),s&&e.slashes&&"/"!==m.pathname.charAt(0)&&(""!==m.pathname||""!==e.pathname)&&(m.pathname=i(m.pathname,e.pathname)),l(m.port,m.protocol)||(m.host=m.hostname,m.port=""),m.username=m.password="",m.auth&&(d=m.auth.split(":"),m.username=d[0]||"",m.password=d[1]||""),m.origin=m.protocol&&m.host&&"file:"!==m.protocol?m.protocol+"//"+m.host:"null",m.href=m.toString()}function s(t,e,n){var r=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||f.parse)(e)),r[t]=e;break;case"port":r[t]=e,l(e,r.protocol)?e&&(r.host=r.hostname+":"+e):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=e,r.port&&(e+=":"+r.port),r.host=e;break;case"host":r[t]=e,/:\d+$/.test(e)?(e=e.split(":"),r.port=e.pop(),r.hostname=e.join(":")):(r.hostname=e,r.port="");break;case"protocol":r.protocol=e.toLowerCase(),r.slashes=!n;break;case"pathname":case"hash":if(e){var o="pathname"===t?"/":"#";r[t]=e.charAt(0)!==o?o+e:e}else r[t]=e;break;default:r[t]=e}for(var i=0;i<h.length;i++){var a=h[i];a[4]&&(r[a[1]]=r[a[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r}function u(t){t&&"function"==typeof t||(t=f.stringify);var e,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var o=r+(n.slashes?"//":"");return n.username&&(o+=n.username,n.password&&(o+=":"+n.password),o+="@"),o+=n.host+n.pathname,e="object"===c(n.query)?t(n.query):n.query,e&&(o+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(o+=n.hash),o}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=n(5),f=n(6),p=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,d=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:s,toString:u},a.extractProtocol=o,a.location=r,a.qs=f,t.exports=a},5:function(t,e,n){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},6:function(t,e,n){"use strict";function r(t){return decodeURIComponent(t.replace(/\+/g," "))}function o(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,o={};e=n.exec(t);o[r(e[1])]=r(e[2]));return o}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var r in t)a.call(t,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return n.length?e+n.join("&"):""}var a=Object.prototype.hasOwnProperty;e.stringify=i,e.parse=o},61:function(t,e,n){var r,o,i=[];i.push(n(7)),r=n(8);var a=n(15);o=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(o=r=r.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-7c18f329",o.style=o.style||{},i.forEach(function(t){for(var e in t)o.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(o._scopeId,i),t.exports=r,t.exports.el="true",new Vue(t.exports)},7:function(t,e){t.exports={"nav-wrapper":{width:"750",alignItems:"flex-start"}}},8:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),i=r(o),a=n(9),s=r(a),u=n(14),c=r(u);e.default={components:{WxcMinibar:s.default},props:{title:{type:String,default:"Title here..."},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:i.default.env.isWeb()?"auto":c.default.getNavHeight(),paddingTop:i.default.env.isWeb()?0:c.default.getNavHeight()-90}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},9:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(10);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r(o).default}})}});