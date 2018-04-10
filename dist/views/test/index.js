// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=169)}({0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(3),s=o(a),l={UrlParser:s.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===l._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":i(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];if(!n.length)return e;var i=n.shift();if(l.isObject(e)&&l.isObject(i))for(var a in i)l.isObject(i[a])?(e[a]||Object.assign(e,r({},a,{})),l.mergeDeep(e[a],i[a])):Object.assign(e,r({},a,i[a]));return l.mergeDeep.apply(l,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new s.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new l.UrlParser(e,!0),i=l.appendProtocol(r.toString());o.push({url:l.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":i(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return l.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":i(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):l.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return l.env.isTmall()||l.env.isTrip()||l.env.isTaobao()},getPageHeight:function(){var e=weex.config.env,t=l.env.isWeb()?0:l.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t},getScreenHeight:function(){var e=weex.config.env;return e.deviceHeight/e.deviceWidth*750}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var a=~~o[i],s=~~n[i];if(a<s)return!0;if(a>s)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,o){return o%t==0?e.slice(o,o+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",a=/[^\x00-\xff]/g,s=e.replace(a,"**").length,l=0;l<s&&(i=e.charAt(l).toString(),null!==i.match(a)?o+=2:o++,!(o>t));l++)r+=i;return n&&s>t&&(r+="..."),r},animation:{pageTransitionAnimation:function(e,t,n,o){weex.requireModule("animation").transition(e,{styles:{transform:t},duration:n?250:300,timingFunction:n?"ease-in":"ease-out",delay:0},function(){o&&o()})}},uiStyle:{pageTransitionAnimationStyle:function(e){return"push"===e?{left:"750px",top:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:"model"===e?{top:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px",left:"0px",height:weex.config.env.deviceHeight/weex.config.env.deviceWidth*750+"px"}:{}}}};t.default=l},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEV_DOMAIN="192.168.1.86:8081",t.DOMAIN="fuckdoctors.github.io/hello-weex",t.ENABLE_HTTPS=!0,t.DIST="/dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png",t.WHITE_LIST=["index","views/login/login","views/login/register","views/error","views/about"],t.USER_KEY="USER",t.GEO_KEY="GEO",t.GEO_MORE_KEY="GEO_MORE"},10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},11:function(e,t,n){var o,r,i=[];i.push(n(12)),o=n(13);var a=n(14);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-02c8f810",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},12:function(e,t){e.exports={"wxc-minibar":{width:"750",height:"90",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#009ff0"},left:{width:"180",paddingLeft:"32"},"middle-title":{fontSize:"30",color:"#ffffff",height:"36",lineHeight:"34"},right:{width:"180",paddingRight:"32",alignItems:"flex-end"},"left-button":{width:"21",height:"36"},"right-button":{width:"32",height:"32"},"icon-text":{fontSize:"28",color:"#ffffff"}}},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("navigator");t.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var e=this;e.useDefaultReturn&&o.pop({},function(e){}),e.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var e=this;(e.rightText||e.rightButton)&&e.$emit("wxcMinibarRightButtonClicked",{})}}}},14:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:["wxc-minibar"],style:{backgroundColor:e.backgroundColor}},[n("div",{staticClass:["left"],attrs:{ariaLabel:"返回",accessible:!0},on:{click:e.leftButtonClicked}},[e._t("left",[e.leftButton&&!e.leftText?n("image",{staticClass:["left-button"],attrs:{src:e.leftButton}}):e._e(),e.leftText?n("text",{staticClass:["icon-text"],style:{color:e.textColor}},[e._v(e._s(e.leftText))]):e._e()])],2),e._t("middle",[n("text",{staticClass:["middle-title"],style:{color:e.textColor}},[e._v(e._s(e.title))])]),n("div",{staticClass:["right"],on:{click:e.rightButtonClicked}},[e._t("right",[e.rightButton&&!e.rightText?n("image",{staticClass:["right-button"],attrs:{src:e.rightButton,ariaHidden:!0}}):e._e(),e.rightText?n("text",{staticClass:["icon-text"],style:{color:e.textColor}},[e._v(e._s(e.rightText))]):e._e()])],2)],2):e._e()},staticRenderFns:[]}},15:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),a={getNavHeight:function(){return i.default.env.isWeb()?0:i.default.env.isIPhoneX()?176:132}};t.default=a},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={leftArrow:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"}},169:function(e,t,n){var o,r,i=[];i.push(n(170)),o=n(171);var a=n(172);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-d755f372",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},17:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["nav-wrapper"],style:e.wrapperStyle,attrs:{showBack:e.showBack}},[n("wxc-minibar",{attrs:{title:e.title,backgroundColor:e.backgroundColor,textColor:e.textColor,leftButton:e.leftButtonForDisplay,rightText:e.rightText,rightButton:e.rightButton},on:{wxcMinibarLeftButtonClicked:e.minibarLeftButtonClick,wxcMinibarRightButtonClicked:e.minibarRightButtonClick}},[e.$slots.cleft&&e.$slots.cleft.length>0?n("template",{slot:"left"},[e._t("cleft")],2):e._e(),e.$slots.cmiddle&&e.$slots.cmiddle.length>0?n("template",{slot:"middle"},[e._t("cmiddle")],2):e._e(),e.$slots.cright&&e.$slots.cright.length>0?n("template",{slot:"right"},[e._t("cright")],2):e._e()],2)],1)},staticRenderFns:[]}},170:function(e,t){e.exports={wrapper:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#ffffff",justifyContent:"center"},info:{width:"750",textAlign:"left",fontSize:"25",paddingTop:"15",paddingBottom:"15",paddingLeft:"15",paddingRight:"15",color:"#606060",backgroundColor:"#E8E8E8"},list:{flex:1},card:{width:"650",borderWidth:"4",borderStyle:"solid",borderColor:"#E8E8E8",borderRadius:"20",marginTop:"50",marginBottom:"50",marginLeft:"50",marginRight:"50"},"card-title":{textAlign:"center",justifyContent:"center",fontSize:"40",color:"#888888",backgroundColor:"#F5F5F5",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",paddingRight:"12",borderBottomWidth:"2",borderBottomStyle:"solid",borderBottomColor:"#E0E0E0"},"card-body":{height:"200",justifyContent:"center"},"card-description":{textAlign:"center",fontSize:"30",color:"#1FB5FC",paddingTop:"5",paddingRight:"5",paddingBottom:"5",paddingLeft:"5"},mute:{color:"#888888"}}},171:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(79),s=o(a),l=n(2),u=o(l),c=n(39),f=o(c),d=weex.requireModule("modal"),p=weex.requireModule("storage");t.default={components:{NavBar:i.default,NoPgNavbar:s.default},data:function(){return{leftButton:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png",result:null,message:null,pages:[{id:"hello",title:"Hello 跳转",path:"views/test/hello",params:null,description:"跳转测试"},{id:"hello-params",title:"Hello 带参跳转",path:"views/test/hello",params:{a:"a1",b:"b1"},description:"带参跳转测试"},{id:"hello-channel",title:"BroadcastChannel传参",path:"views/test/hello",params:{a:"broadcast",b:"channel"},broadcastChannel:!0,description:"BroadcastChannel带参跳转测试"},{id:"hello-global-event",title:"GlobalEvent传参",path:"views/test/hello",params:{a:"global",b:"event"},globalEvent:!0,description:"GlobalEvent带参跳转测试"},{id:"hello-storage",title:"storage传参",path:"views/test/hello",params:{a:"hello",b:"storage"},globalEvent:!0,storage:!0,description:"storage带参跳转测试"},{id:"hello-weex-ui",title:"Hello Weex UI",path:"views/test/weex-ui",description:"Weex UI测试"},{id:"test-ep-slider",title:"weex-ui ep-slider",path:"views/test/ep-slider",description:"Weex UI Ep-Slider测试"},{id:"test-slider",title:"weex slider",path:"views/test/slider",description:"Weex Slider测试"}]}},mounted:function(){var e=this;this.result=u.default.getParams(),this.channel=new BroadcastChannel("TEST"),this.message={type:null,data:null},this.channel.onmessage=function(t){e.message=t.data}},methods:{jump:function(e){var t=this;this.result={},e.globalEvent?(f.default.addEventListener("hello-return",function(e){t.result=e,d.toast({message:"addEventListener callback (hello-return), result: "+JSON.stringify(e)}),f.default.removeEventListener("hello-return")}),e.storage?e.params?p.setItem("hello-storage",JSON.stringify(e.params),function(t){"success"===t.result&&u.default.goto(e.path)}):u.default.goto(e.path):u.default.goto(e.path,e.params)):e.broadcastChannel?(this.sendMessage("hello","Hello from "+e.title),u.default.goto(e.path)):e.params?u.default.goto(e.path,e.params):u.default.goto(e.path)},sendMessage:function(e,t){this.message={type:e,data:t},this.channel.postMessage(this.message)},getMessage:function(){return this.message},back:function(){u.default.back()}}}},172:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("no-pg-navbar"),n("nav-bar",{attrs:{title:"测试主页",leftButton:e.leftButton,leftButtonClick:e.back}}),e.result?n("text",{staticClass:["info"]},[e._v("点击标题跳转，返回值: "+e._s(e.result))]):e._e(),n("list",{staticClass:["list"]},e._l(e.pages,function(t,o){return n("cell",{key:o,appendAsTree:!0,attrs:{append:"tree"}},[n("div",{staticClass:["card"]},[n("div",{staticClass:["card-header"],on:{click:function(n){e.jump(t)}}},[n("text",{staticClass:["card-title"]},[e._v(e._s(t.title))])]),n("div",{staticClass:["card-body"]},[n("text",{staticClass:["card-description"]},[e._v(e._s(t.description))])])])])})),n("text",{staticClass:["info"]},[e._v("底部信息没遮挡，证明list组件是自适应高度的。web端不是自适应的，需要手动设置flex:1。")])],1)},staticRenderFns:[]}},18:function(e,t,n){var o,r,i=[];i.push(n(8)),o=n(9);var a=n(17);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-508f37e4",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},2:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if(void 0===e||null===e)return"";var t="?";return Object.keys(e).forEach(function(n){null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&")}),t.substring(0,t.lastIndexOf("&"))}function a(e){var t=e.indexOf("?_wx_tpl");-1===t&&(t=e.indexOf(".js?"),e.indexOf(".js?")>-1?t+=3:t=e.indexOf(".html?")+5);var n=e.substring(t),o={};if(-1!==n.indexOf("?"))for(var r=n.substr(1),i=r.split("&"),a=0;a<i.length;a+=1)o[i[a].split("=")[0]]=decodeURIComponent(i[a].split("=")[1]);return o}function s(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",o=e.indexOf("?");return o>0?n.substring(0,o):n}function l(e,t,n){var o=a(e),r=i(o);t&&(r=i(Object.assign({},o,t)));var s=e.indexOf("?"),l=s>0?e.substring(0,s):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window))?window.location.href=""+l+r:E.push({url:""+l+r,animated:"true"},function(e){n&&n(e)})}function u(e,t,n,o){var r=/\/\/([^\/]+?)\//.exec(e);if(r&&r.length>=2)return void l(e,t,o);var s=(0,w.default)(n),u=a(weex.config.bundleUrl),c=i(u);t&&(c=i(Object.assign({},u,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window))?window.location.href=""+s+e+".html"+c:E.push({url:""+s+e+".js"+c,animated:"true"},function(e){o&&o(e)})}function c(e,t,n){u(e,t,!0,n)}function f(e,t,n){u(e,t,!1,n)}function d(e,t,n){var o="http"+(x.ENABLE_HTTPS?"s":"")+"://"+x.DOMAIN,r="";t&&(r=i(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window))?window.location.href=o+"/"+e+".html"+r:E.push({url:""+o+x.DIST+"/"+e+".js"+r,animated:"true"},function(e){n&&n(e)})}function p(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window))?window.history.back():E.pop()}function h(){return a(weex.config.bundleUrl)}function g(e,t,n){var o=function(){};E.close(e||{},t||o,n||o)}function v(e,t,n){if("Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window))){var o="http"+(x.ENABLE_HTTPS?"s":"")+"://"+x.DOMAIN,r="";t&&(r=i(t)),window.location.replace(o+"/"+e+".html"+r)}else{var s=(0,w.default)(!0),l=a(weex.config.bundleUrl),u=i(l);t&&(u=i(Object.assign({},l,t))),E.push({url:""+s+e+".js"+u,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&C?C.removeBefore():g(),n&&n(e)})}}function m(e,t,n){var o="http"+(x.ENABLE_HTTPS?"s":"")+"://"+x.DOMAIN,r="";if(t&&(r=i(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":y(window)))window.location.replace(o+"/"+e+".html"+r);else{var s=a(weex.config.bundleUrl);r=i(s),t&&(r=i(Object.assign({},s,t))),E.push({url:""+o+x.DIST+"/"+e+".js"+r,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&C?C.removeBefore():g(),n&&n(e)})}}Object.defineProperty(t,"__esModule",{value:!0});var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=n(6),w=r(b),_=n(1),x=o(_),E=weex.requireModule("myNavigator")||weex.requireModule("navigator"),C=weex.requireModule("myNavigatorEvent");t.default={createQuery:i,getQueryData:a,getHash:s,push:c,goto:d,gotoTab:f,gotoH5:l,back:p,getParams:h,replace:v,replaceOnline:m,close:g}},3:function(e,t,n){"use strict";function o(e){e=e||global.location||{};var t,n={},o=void 0===e?"undefined":u(e);if("blob:"===e.protocol)n=new a(unescape(e.pathname),{});else if("string"===o){n=new a(e,{});for(t in g)delete n[t]}else if("object"===o){for(t in e)t in g||(n[t]=e[t]);void 0===n.slashes&&(n.slashes=p.test(e.href))}return n}function r(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function a(e,t,n){if(!(this instanceof a))return new a(e,t,n);var s,l,d,p,g,v,m=h.slice(),y=void 0===t?"undefined":u(t),b=this,w=0;for("object"!==y&&"string"!==y&&(n=t,t=null),n&&"function"!=typeof n&&(n=f.parse),t=o(t),l=r(e||""),s=!l.protocol&&!l.slashes,b.slashes=l.slashes||s&&t.slashes,b.protocol=l.protocol||t.protocol||"",e=l.rest,l.slashes||(m[2]=[/(.*)/,"pathname"]);w<m.length;w++)p=m[w],d=p[0],v=p[1],d!==d?b[v]=e:"string"==typeof d?~(g=e.indexOf(d))&&("number"==typeof p[2]?(b[v]=e.slice(0,g),e=e.slice(g+p[2])):(b[v]=e.slice(g),e=e.slice(0,g))):(g=d.exec(e))&&(b[v]=g[1],e=e.slice(0,g.index)),b[v]=b[v]||(s&&p[3]?t[v]||"":""),p[4]&&(b[v]=b[v].toLowerCase());n&&(b.query=n(b.query)),s&&t.slashes&&"/"!==b.pathname.charAt(0)&&(""!==b.pathname||""!==t.pathname)&&(b.pathname=i(b.pathname,t.pathname)),c(b.port,b.protocol)||(b.host=b.hostname,b.port=""),b.username=b.password="",b.auth&&(p=b.auth.split(":"),b.username=p[0]||"",b.password=p[1]||""),b.origin=b.protocol&&b.host&&"file:"!==b.protocol?b.protocol+"//"+b.host:"null",b.href=b.toString()}function s(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||f.parse)(t)),o[e]=t;break;case"port":o[e]=t,c(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var r="pathname"===e?"/":"#";o[e]=t.charAt(0)!==r?r+t:t}else o[e]=t;break;default:o[e]=t}for(var i=0;i<h.length;i++){var a=h[i];a[4]&&(o[a[1]]=o[a[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function l(e){e&&"function"==typeof e||(e=f.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,t="object"===u(n.query)?e(n.query):n.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(4),f=n(5),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};a.prototype={set:s,toString:l},a.extractProtocol=r,a.location=o,a.qs=f,e.exports=a},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("globalEvent"),r=weex.requireModule("myGlobalEvent");t.default={addEventListener:function(e,t){"Web"===WXEnvironment.platform?document.addEventListener(e,t,!1):o.addEventListener(e,t)},removeEventListener:function(e,t){"Web"===WXEnvironment.platform?document.removeEventListener(e,t):o.removeEventListener(e)},fireGlobalEvent:function(e,t,n){if("Web"===WXEnvironment.platform){var o=new Event(e);o.data=t,document.dispatchEvent(o),n&&n()}else if(r&&r.fireGlobalEvent)r.fireGlobalEvent(e,t,n);else{var i=weex.requireModule("event");i&&i.fireNativeGlobalEvent&&i.fireNativeGlobalEvent(e,n)}}}},4:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},48:function(e,t){e.exports={}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){try{var e=weex.requireModule("navigationBar");e&&e.showTitleBar&&e.showTitleBar(!1);var t=weex.requireModule("titleBar");t&&t.showTitleBar&&t.showTitleBar("false")}catch(e){}}}},5:function(e,t,n){"use strict";function o(e){return decodeURIComponent(e.replace(/\+/g," "))}function r(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);r[o(t[1])]=o(t[2]));return r}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)a.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var a=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=r},50:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}})},staticRenderFns:[]}},6:function(e,t,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){var t=weex.config.bundleUrl,n=void 0,o=void 0,r=t.indexOf("file://assets/")>=0,a=t.indexOf("file:///")>=0&&t.indexOf(s.APP_NAME+".app")>0;if(r)n="file://assets"+s.DIST+"/";else if(a)n=t.substring(0,t.lastIndexOf("/")+1);else{var l=s.DOMAIN;n="http"+(s.ENABLE_HTTPS?"s":"")+"://"+l+s.DIST+"/",o="http"+(s.ENABLE_HTTPS?"s":"")+"://"+l+"/"}o=e?"http"+(s.ENABLE_HTTPS?"s":"")+"://"+s.DOMAIN+"/":"/";var u=n;return"object"===("undefined"==typeof window?"undefined":i(window))&&(u=o),u}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var a=n(1),s=o(a)},7:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(18);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},79:function(e,t,n){var o,r,i=[];i.push(n(48)),o=n(49);var a=n(50);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,r._scopeId="data-v-5a13b9cc",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},8:function(e,t){e.exports={"nav-wrapper":{position:"relative",top:0,left:0,right:0,width:"750",alignItems:"flex-start"}}},9:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=o(r),a=n(10),s=o(a),l=n(15),u=o(l),c=n(16),f=o(c);t.default={components:{WxcMinibar:s.default},props:{title:{type:String,default:"Title here..."},showBack:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{leftButtonForDisplay:""}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:i.default.env.isWeb()?"auto":u.default.getNavHeight(),paddingTop:i.default.env.isWeb()?0:u.default.getNavHeight()-90},this.leftButton&&""!==this.leftButton?this.leftButtonForDisplay=this.leftButton:this.showBack&&(this.leftButtonForDisplay=f.default.leftArrow)},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}}});