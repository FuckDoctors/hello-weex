webpackJsonp([11],{0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEV_DOMAIN="192.168.1.86:8081",t.DOMAIN="fuckdoctors.github.io/hello-weex",t.ENABLE_HTTPS=!0,t.DIST="/dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png",t.WHITE_LIST=["index","views/login/login","views/login/register","views/error","views/about"],t.USER_KEY="USER",t.GEO_KEY="GEO",t.GEO_MORE_KEY="GEO_MORE"},11:function(e,t,n){function i(e){n(12)}var o=n(1)(n(14),n(21),i,"data-v-dfb5509a",null);e.exports=o.exports},12:function(e,t,n){var i=n(13);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("351eafc2",i,!0,{})},13:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".nav-wrapper[data-v-dfb5509a]{position:relative;top:0;left:0;right:0;width:10rem;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}",""])},14:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=i(o),l=n(22),a=i(l),u=n(19),s=i(u),f=n(20),c=i(f);t.default={components:{WxcMinibar:a.default},props:{title:{type:String,default:"Title here..."},showBack:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{leftButtonForDisplay:""}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:r.default.env.isWeb()?"auto":s.default.getNavHeight(),paddingTop:r.default.env.isWeb()?0:s.default.getNavHeight()-90},this.leftButton&&""!==this.leftButton?this.leftButtonForDisplay=this.leftButton:this.showBack&&(this.leftButtonForDisplay=c.default.leftArrow)},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},15:function(e,t,n){var i=n(16);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("0b40505c",i,!0,{})},16:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".wxc-minibar[data-v-3776603e]{width:10rem;height:1.2rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#009ff0}.left[data-v-3776603e]{width:2.4rem;padding-left:.42667rem}.middle-title[data-v-3776603e]{font-size:.4rem;color:#fff;height:.48rem;line-height:.45333rem}.right[data-v-3776603e]{width:2.4rem;padding-right:.42667rem;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.left-button[data-v-3776603e]{width:.28rem;height:.48rem}.right-button[data-v-3776603e]{width:.42667rem;height:.42667rem}.icon-text[data-v-3776603e]{font-size:.37333rem;color:#fff}",""])},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("navigator");t.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var e=this;e.useDefaultReturn&&i.pop({},function(e){}),e.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var e=this;(e.rightText||e.rightButton)&&e.$emit("wxcMinibarRightButtonClicked",{})}}}},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"wxc-minibar weex-ct weex-div",style:{backgroundColor:e.backgroundColor},attrs:{"weex-type":"div"}},[n("div",{staticClass:"left weex-ct weex-div",attrs:{"aria-label":"返回",accessible:!0,"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.leftButtonClicked(t)}}},[e._t("left",[e.leftButton&&!e.leftText?n("figure",{staticClass:"left-button weex-el weex-image",attrs:{src:e.leftButton,"data-img-src":e.leftButton,"weex-type":"image"}}):e._e(),e._v(" "),e.leftText?n("p",{staticClass:"icon-text weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.leftText))]):e._e()],{})],2),e._v(" "),e._t("middle",[n("p",{staticClass:"middle-title weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.title))])],{}),e._v(" "),n("div",{staticClass:"right weex-ct weex-div",attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.rightButtonClicked(t)}}},[e._t("right",[e.rightButton&&!e.rightText?n("figure",{staticClass:"right-button weex-el weex-image",attrs:{src:e.rightButton,"aria-hidden":!0,"data-img-src":e.rightButton,"weex-type":"image"}}):e._e(),e._v(" "),e.rightText?n("p",{staticClass:"icon-text weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.rightText))]):e._e()],{})],2)],2):e._e()},staticRenderFns:[]}},185:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(9),r=i(o),l=n(10),a=i(l),u=n(5),s=i(u);r.default.mixin(s.default),a.default.init(r.default);var f=n(80);new r.default(r.default.util.extend({el:"#root"},f))},19:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=i(o),l={getNavHeight:function(){return r.default.env.isWeb()?0:r.default.env.isIPhoneX()?176:132}};t.default=l},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={leftArrow:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"}},21:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrapper weex-ct weex-div",style:e._px2rem(e.wrapperStyle,75),attrs:{"show-back":e.showBack,"weex-type":"div"}},[n("wxc-minibar",{attrs:{title:e.title,"background-color":e.backgroundColor,"text-color":e.textColor,"left-button":e.leftButtonForDisplay,"right-text":e.rightText,"right-button":e.rightButton,"data-evt-wxcMinibarLeftButtonClicked":"","data-evt-wxcMinibarRightButtonClicked":""},on:{wxcMinibarLeftButtonClicked:e.minibarLeftButtonClick,wxcMinibarRightButtonClicked:e.minibarRightButtonClick}},[e.$slots.cleft&&e.$slots.cleft.length>0?n("template",{attrs:{},slot:"left"},[e._t("cleft",null,{})],2):e._e(),e._v(" "),e.$slots.cmiddle&&e.$slots.cmiddle.length>0?n("template",{attrs:{},slot:"middle"},[e._t("cmiddle",null,{})],2):e._e(),e._v(" "),e.$slots.cright&&e.$slots.cright.length>0?n("template",{attrs:{},slot:"right"},[e._t("cright",null,{})],2):e._e()],2)],1)},staticRenderFns:[]}},23:function(e,t,n){function i(e){n(15)}var o=n(1)(n(17),n(18),i,"data-v-3776603e",null);e.exports=o.exports},4:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(void 0===e||null===e)return"";var t="?";return Object.keys(e).forEach(function(n){null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&")}),t.substring(0,t.lastIndexOf("&"))}function l(e){var t=e.indexOf("?_wx_tpl");-1===t&&(t=e.indexOf(".js?"),e.indexOf(".js?")>-1?t+=3:t=e.indexOf(".html?")+5);var n=e.substring(t),i={};if(-1!==n.indexOf("?"))for(var o=n.substr(1),r=o.split("&"),l=0;l<r.length;l+=1)i[r[l].split("=")[0]]=decodeURIComponent(r[l].split("=")[1]);return i}function a(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",i=e.indexOf("?");return i>0?n.substring(0,i):n}function u(e,t,n){var i=l(e),o=r(i);t&&(o=r(Object.assign({},i,t)));var a=e.indexOf("?"),u=a>0?e.substring(0,a):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=""+u+o:E.push({url:""+u+o,animated:"true"},function(e){n&&n(e)})}function s(e,t,n,i){var o=/\/\/([^\/]+?)\//.exec(e);if(o&&o.length>=2)return void u(e,t,i);var a=(0,h.default)(n),s=l(weex.config.bundleUrl),f=r(s);t&&(f=r(Object.assign({},s,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=""+a+e+".html"+f:E.push({url:""+a+e+".js"+f,animated:"true"},function(e){i&&i(e)})}function f(e,t,n){s(e,t,!0,n)}function c(e,t,n){s(e,t,!1,n)}function d(e,t,n){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";t&&(o=r(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=i+"/"+e+".html"+o:E.push({url:""+i+_.DIST+"/"+e+".js"+o,animated:"true"},function(e){n&&n(e)})}function p(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.history.back():E.pop()}function v(){return l(weex.config.bundleUrl)}function g(e,t,n){var i=function(){};E.close(e||{},t||i,n||i)}function w(e,t,n){if("Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";t&&(o=r(t)),window.location.replace(i+"/"+e+".html"+o)}else{var a=(0,h.default)(!0),u=l(weex.config.bundleUrl),s=r(u);t&&(s=r(Object.assign({},u,t))),E.push({url:""+a+e+".js"+s,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&k?k.removeBefore():g(),n&&n(e)})}}function x(e,t,n){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";if(t&&(o=r(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window)))window.location.replace(i+"/"+e+".html"+o);else{var a=l(weex.config.bundleUrl);o=r(a),t&&(o=r(Object.assign({},a,t))),E.push({url:""+i+_.DIST+"/"+e+".js"+o,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&k?k.removeBefore():g(),n&&n(e)})}}Object.defineProperty(t,"__esModule",{value:!0});var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=n(6),h=o(b),y=n(0),_=i(y),E=weex.requireModule("myNavigator")||weex.requireModule("navigator"),k=weex.requireModule("myNavigatorEvent");t.default={createQuery:r,getQueryData:l,getHash:a,push:f,goto:d,gotoTab:c,gotoH5:u,back:p,getParams:v,replace:w,replaceOnline:x,close:g}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("globalEvent"),o=weex.requireModule("myGlobalEvent");t.default={addEventListener:function(e,t){"Web"===WXEnvironment.platform?document.addEventListener(e,t,!1):i.addEventListener(e,t)},removeEventListener:function(e,t){"Web"===WXEnvironment.platform?document.removeEventListener(e,t):i.removeEventListener(e)},fireGlobalEvent:function(e,t,n){if("Web"===WXEnvironment.platform){var i=new Event(e);i.data=t,document.dispatchEvent(i),n&&n()}else if(o&&o.fireGlobalEvent)o.fireGlobalEvent(e,t,n);else{var r=weex.requireModule("event");r&&r.fireNativeGlobalEvent&&r.fireNativeGlobalEvent(e,n)}}}},5:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(4),l=i(r);t.default={created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=weex.requireModule("storage");this.checkWhiteList()||e.getItem(o.USER_KEY,function(e){"success"===e.result&&void 0!==e.data||l.default.push("views/login/login")})},checkWhiteList:function(){var e=weex.config.bundleUrl,t=/\/\/([^\/]+?)\/([^\\.]+)/.exec(e),n=null;return t&&t.length>=3&&(n=t[2]),null!=n&&o.WHITE_LIST.some(function(e){return n.indexOf(e)>-1})}}}},6:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){var t=weex.config.bundleUrl,n=void 0,i=void 0,o=t.indexOf("file://assets/")>=0,l=t.indexOf("file:///")>=0&&t.indexOf(a.APP_NAME+".app")>0;if(o)n="file://assets"+a.DIST+"/";else if(l)n=t.substring(0,t.lastIndexOf("/")+1);else{var u=a.DOMAIN,s=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(s&&s.length>=2){var f=s[1].indexOf(":"),c=f>0?s[1].substr(0,f):s[1];u=u.indexOf(c)>-1?u:s[1]}n="http"+(a.ENABLE_HTTPS?"s":"")+"://"+u+a.DIST+"/",i="http"+(a.ENABLE_HTTPS?"s":"")+"://"+u+"/"}i=e?"http"+(a.ENABLE_HTTPS?"s":"")+"://"+a.DOMAIN+"/":"/";var d=n;return"object"===("undefined"==typeof window?"undefined":r(window))&&(d=i),d}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var l=n(0),a=i(l)},8:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(o).default}})},80:function(e,t,n){function i(e){n(81)}var o=n(1)(n(83),n(84),i,"data-v-02330034",null);e.exports=o.exports},81:function(e,t,n){var i=n(82);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("0eb72103",i,!0,{})},82:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".wrapper[data-v-02330034]{position:absolute;top:0;bottom:0;left:0;right:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center}.greeting[data-v-02330034]{margin-top:.93333rem;font-size:.66667rem;color:#41b883}.message[data-v-02330034]{margin-top:.4rem;font-size:.42667rem;color:#727272}",""])},83:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=i(o),l=n(46),a=i(l),u=n(4),s=i(u),f=n(0),c=weex.requireModule("modal");t.default={components:{NavBar:r.default},data:function(){return{}},methods:{jump:function(e){"Web"===WXEnvironment.platform?s.default.gotoH5("http"+(f.ENABLE_HTTPS?"s":"")+"://"+f.DOMAIN+"/"+e+".html"):s.default.gotoH5("http"+(f.ENABLE_HTTPS?"s":"")+"://"+f.DOMAIN+f.DIST+"/"+e+".js")},jumpWithParams:function(e){var t={a:"a1",b:"b1"};s.default.goto(e,t)},jumpGlobalEvent:function(e,t){a.default.addEventListener("hello-return",function(e){c.toast({message:"addEventListener callback (hello-return), result: "+JSON.stringify(e)}),a.default.removeEventListener("hello-return")}),s.default.goto(e,t)}},beforeDestroy:function(){a.default.removeEventListener("hello-return")}}},84:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},[n("nav-bar",{attrs:{title:"推荐"}}),e._v(" "),n("p",{staticClass:"greeting weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("Hello Weex!")]),e._v(" "),n("p",{staticClass:"message weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("特别推荐")]),e._v(" "),n("p",{staticClass:"message weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.jump("env")}}},[e._v("环境参数")]),e._v(" "),n("p",{staticClass:"message weex-el weex-text",attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.jump("views/test/index")}}},[e._v("测试页面一览")])],1)},staticRenderFns:[]}}},[185]);
//# sourceMappingURL=explore.13d924930b57c9fdba47.bundle.map