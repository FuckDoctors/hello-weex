webpackJsonp([2],{10:function(t,e,n){var o=n(11);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("5c702568",o,!0)},106:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(4),r=o(i);o(n(5)).default.init(r.default);var l=n(107);l.el="#root",new r.default(l)},107:function(t,e,n){function o(t){n(108)}var i=n(0)(n(110),n(111),o,"data-v-b56d55d4",null);t.exports=i.exports},108:function(t,e,n){var o=n(109);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("c4fda39a",o,!0)},109:function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".wrapper[data-v-b56d55d4]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#fff}",""])},11:function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".nav-wrapper[data-v-dfb5509a]{width:750px;align-items:flex-start}",""])},110:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(49),r=o(i),l=n(6),a=o(l),s=n(61),u=o(s);e.default={components:{NavBar:r.default,NoPgNavbar:u.default},data:function(){return{leftButton:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"}},mounted:function(){},methods:{back:function(){a.default.back()}}}},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[n("no-pg-navbar"),t._v(" "),n("nav-bar",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{title:"Hello","left-button":t.leftButton,"left-button-click":t.back}}),t._v(" "),n("div",[n("text",[t._v("。。。")])])],1)},staticRenderFns:[]}},12:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=o(i),l=n(50),a=o(l),s=n(17),u=o(s);e.default={components:{WxcMinibar:a.default},props:{title:{type:String,default:"Title here..."},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:r.default.env.isWeb()?"auto":u.default.getNavHeight(),paddingTop:r.default.env.isWeb()?0:u.default.getNavHeight()-90}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},13:function(t,e,n){var o=n(14);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("50bb94d4",o,!0)},14:function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,".wxc-minibar[data-v-3776603e]{width:750px;height:90px;flex-direction:row;justify-content:space-between;align-items:center;background-color:#009ff0}.left[data-v-3776603e]{width:180px;padding-left:32px}.middle-title[data-v-3776603e]{font-size:30px;color:#fff;height:36px;line-height:34px}.right[data-v-3776603e]{width:180px;padding-right:32px;align-items:flex-end}.left-button[data-v-3776603e]{width:21px;height:36px}.right-button[data-v-3776603e]{width:32px;height:32px}.icon-text[data-v-3776603e]{font-size:28px;color:#fff}",""])},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&o.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},16:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"wxc-minibar",staticStyle:t.$processStyle(void 0),style:t.$processStyle({backgroundColor:t.backgroundColor})},[n("div",{staticClass:"left",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{"aria-label":"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?n("image",{staticClass:"left-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.leftButton}}):t._e(),t._v(" "),t.leftText?n("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.leftText))]):t._e()])],2),t._v(" "),t._t("middle",[n("text",{staticClass:"middle-title",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"right",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?n("image",{staticClass:"right-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.rightButton,"aria-hidden":!0}}):t._e(),t._v(" "),t.rightText?n("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},17:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(8),r=o(i),l={getNavHeight:function(){return r.default.env.isWeb()?0:r.default.env.isIPhoneX()?176:132}};e.default=l},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(t.wrapperStyle)},[n("wxc-minibar",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{title:t.title,"background-color":t.backgroundColor,"text-color":t.textColor,"left-button":t.leftButton,"right-text":t.rightText,"right-button":t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOMAIN="fuckdoctors.github.io/hello-weex",e.DIST="dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},49:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o(i).default}})},51:function(t,e,n){function o(t){n(13)}var i=n(0)(n(15),n(16),o,"data-v-3776603e",null);t.exports=i.exports},6:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){var e="?";for(var n in t)null!==t[n]&&(e+=n+"="+encodeURIComponent(t[n])+"&");return e.substring(0,e.lastIndexOf("&"))}function r(t){t=t.substring(t.indexOf("?_wx_tpl"));var e={};if(-1!=t.indexOf("?"))for(var n=t.substr(1),o=n.split("&"),i=0;i<o.length;i++)e[o[i].split("=")[0]]=decodeURIComponent(o[i].split("=")[1]);return e}function l(t){var e=t.indexOf("#"),n=e>0?t.substring(e,t.length):"",o=t.indexOf("?");return o>0?n.substring(0,o):n}function a(t,e,n,o){var l=(0,v.default)(n),a=r(weex.config.bundleUrl),s=i(a);e&&(s=i(Object.assign({},a,e))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+l+t+".html"+s:y.push({url:""+l+t+".js"+s,animated:"true"},function(t){o&&o()})}function s(t,e,n){a(t,e,!0,n)}function u(t,e,n){a(t,e,!1,n)}function c(t,e,n){var o=r(t),l=i(o);e&&(l=i(Object.assign({},o,e)));var a=t.indexOf("?"),s=a>0?t.substring(0,a):t;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.location.href=""+s+l:y.push({url:""+s+l,animated:"true"},function(t){n&&n()})}function f(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":d(window))?window.history.back():y.pop()}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=n(7),v=o(p),y=(n(3),weex.requireModule("navigator"));weex.requireModule("modal");e.default={createQuery:i,getQueryData:r,getHash:l,push:s,gotoTab:u,gotoH5:c,back:f}},61:function(t,e,n){function o(t){n(62)}var i=n(0)(n(64),n(65),o,"data-v-42226c6b",null);t.exports=i.exports},62:function(t,e,n){var o=n(63);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(2)("18e8893b",o,!0)},63:function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,"",""])},64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},created:function(){try{var t=weex.requireModule("navigationBar");t&&t.showTitleBar&&t.showTitleBar(!1);var e=weex.requireModule("titleBar");e&&e.showTitleBar&&e.showTitleBar("false")}catch(t){}}}},65:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},7:function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){var e,n,o=weex.config.bundleUrl,i=o.indexOf("file://assets/")>=0,l=o.indexOf("file:///")>=0&&o.indexOf(a.APP_NAME+".app")>0;if(i)e="file://assets/"+a.DIST+"/";else if(l)e=o.substring(0,o.lastIndexOf("/")+1);else{var s=a.DOMAIN,u=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(u&&u.length>=2){var c=u[1].indexOf(":"),f=c>0?u[1].substr(0,c):u[1];s=s.indexOf(f)>-1?s:u[1]}e="http://"+s+"/"+a.DIST+"/",n="http://"+s}n=t?"http://"+a.DOMAIN+"/":"/";var d=e;return"object"===("undefined"==typeof window?"undefined":r(window))&&(d=n),d}Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=i;var l=n(3),a=o(l)},9:function(t,e,n){function o(t){n(10)}var i=n(0)(n(12),n(18),o,"data-v-dfb5509a",null);t.exports=i.exports}},[106]);
//# sourceMappingURL=hello.e38038a7776bc0eabf22.bundle.map