webpackJsonp([8],{0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEV_DOMAIN="192.168.1.86:8081",t.DOMAIN="fuckdoctors.github.io/hello-weex",t.ENABLE_HTTPS=!0,t.DIST="/dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png",t.WHITE_LIST=["index","views/login/login","views/login/register","views/error","views/about"],t.USER_KEY="USER",t.GEO_KEY="GEO",t.GEO_MORE_KEY="GEO_MORE"},11:function(e,t,n){function i(e){n(12)}var o=n(1)(n(14),n(21),i,"data-v-dfb5509a",null);e.exports=o.exports},12:function(e,t,n){var i=n(13);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("351eafc2",i,!0,{})},13:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".nav-wrapper[data-v-dfb5509a]{position:relative;top:0;left:0;right:0;width:10rem;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}",""])},14:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=i(o),a=n(22),l=i(a),s=n(19),u=i(s),d=n(20),c=i(d);t.default={components:{WxcMinibar:l.default},props:{title:{type:String,default:"Title here..."},showBack:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{leftButtonForDisplay:""}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:r.default.env.isWeb()?"auto":u.default.getNavHeight(),paddingTop:r.default.env.isWeb()?0:u.default.getNavHeight()-90},this.leftButton&&""!==this.leftButton?this.leftButtonForDisplay=this.leftButton:this.showBack&&(this.leftButtonForDisplay=c.default.leftArrow)},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},15:function(e,t,n){var i=n(16);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("0b40505c",i,!0,{})},16:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".wxc-minibar[data-v-3776603e]{width:10rem;height:1.2rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#009ff0}.left[data-v-3776603e]{width:2.4rem;padding-left:.42667rem}.middle-title[data-v-3776603e]{font-size:.4rem;color:#fff;height:.48rem;line-height:.45333rem}.right[data-v-3776603e]{width:2.4rem;padding-right:.42667rem;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.left-button[data-v-3776603e]{width:.28rem;height:.48rem}.right-button[data-v-3776603e]{width:.42667rem;height:.42667rem}.icon-text[data-v-3776603e]{font-size:.37333rem;color:#fff}",""])},17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("navigator");t.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var e=this;e.useDefaultReturn&&i.pop({},function(e){}),e.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var e=this;(e.rightText||e.rightButton)&&e.$emit("wxcMinibarRightButtonClicked",{})}}}},18:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"wxc-minibar weex-ct weex-div",style:{backgroundColor:e.backgroundColor},attrs:{"weex-type":"div"}},[n("div",{staticClass:"left weex-ct weex-div",attrs:{"aria-label":"返回",accessible:!0,"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.leftButtonClicked(t)}}},[e._t("left",[e.leftButton&&!e.leftText?n("figure",{staticClass:"left-button weex-el weex-image",attrs:{src:e.leftButton,"data-img-src":e.leftButton,"weex-type":"image"}}):e._e(),e._v(" "),e.leftText?n("p",{staticClass:"icon-text weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.leftText))]):e._e()],{})],2),e._v(" "),e._t("middle",[n("p",{staticClass:"middle-title weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.title))])],{}),e._v(" "),n("div",{staticClass:"right weex-ct weex-div",attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.rightButtonClicked(t)}}},[e._t("right",[e.rightButton&&!e.rightText?n("figure",{staticClass:"right-button weex-el weex-image",attrs:{src:e.rightButton,"aria-hidden":!0,"data-img-src":e.rightButton,"weex-type":"image"}}):e._e(),e._v(" "),e.rightText?n("p",{staticClass:"icon-text weex-el weex-text",style:{color:e.textColor},attrs:{"weex-type":"text"}},[e._v(e._s(e.rightText))]):e._e()],{})],2)],2):e._e()},staticRenderFns:[]}},19:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=i(o),a={getNavHeight:function(){return r.default.env.isWeb()?0:r.default.env.isIPhoneX()?176:132}};t.default=a},20:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={leftArrow:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png"}},21:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrapper weex-ct weex-div",style:e._px2rem(e.wrapperStyle,75),attrs:{"show-back":e.showBack,"weex-type":"div"}},[n("wxc-minibar",{attrs:{title:e.title,"background-color":e.backgroundColor,"text-color":e.textColor,"left-button":e.leftButtonForDisplay,"right-text":e.rightText,"right-button":e.rightButton,"data-evt-wxcMinibarLeftButtonClicked":"","data-evt-wxcMinibarRightButtonClicked":""},on:{wxcMinibarLeftButtonClicked:e.minibarLeftButtonClick,wxcMinibarRightButtonClicked:e.minibarRightButtonClick}},[e.$slots.cleft&&e.$slots.cleft.length>0?n("template",{attrs:{},slot:"left"},[e._t("cleft",null,{})],2):e._e(),e._v(" "),e.$slots.cmiddle&&e.$slots.cmiddle.length>0?n("template",{attrs:{},slot:"middle"},[e._t("cmiddle",null,{})],2):e._e(),e._v(" "),e.$slots.cright&&e.$slots.cright.length>0?n("template",{attrs:{},slot:"right"},[e._t("cright",null,{})],2):e._e()],2)],1)},staticRenderFns:[]}},221:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(9),r=i(o),a=n(10),l=i(a),s=n(5),u=i(s);r.default.mixin(u.default),l.default.init(r.default);var d=n(222);new r.default(r.default.util.extend({el:"#root"},d))},222:function(e,t,n){function i(e){n(223)}var o=n(1)(n(225),n(226),i,"data-v-2dd36516",null);e.exports=o.exports},223:function(e,t,n){var i=n(224);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("4485add0",i,!0,{})},224:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".wrapper[data-v-2dd36516]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.info[data-v-2dd36516]{width:10rem;text-align:left;font-size:.33333rem;padding:.2rem;color:#606060;background-color:#e8e8e8}.list[data-v-2dd36516]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.card[data-v-2dd36516]{width:8.66667rem;border:.05333rem solid #e8e8e8;border-radius:.26667rem;margin:.66667rem}.card-title[data-v-2dd36516]{text-align:center;font-size:.53333rem;color:#888;background-color:#f5f5f5;padding:.16rem;border-bottom-width:.02667rem;border-bottom-style:solid;border-bottom-color:#e0e0e0}.card-body[data-v-2dd36516],.card-title[data-v-2dd36516]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.card-body[data-v-2dd36516]{height:2.66667rem}.card-description[data-v-2dd36516]{text-align:center;font-size:.4rem;color:#1fb5fc;padding:.06667rem}.mute[data-v-2dd36516]{color:#888}",""])},225:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=i(o),a=n(51),l=i(a),s=n(4),u=i(s),d=n(46),c=i(d),f=weex.requireModule("modal"),p=weex.requireModule("storage");t.default={components:{NavBar:r.default,NoPgNavbar:l.default},data:function(){return{leftButton:"https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png",result:null,message:null,pages:[{id:"hello",title:"Hello 跳转",path:"views/test/hello",params:null,description:"跳转测试"},{id:"hello-params",title:"Hello 带参跳转",path:"views/test/hello",params:{a:"a1",b:"b1"},description:"带参跳转测试"},{id:"hello-channel",title:"BroadcastChannel传参",path:"views/test/hello",params:{a:"broadcast",b:"channel"},broadcastChannel:!0,description:"BroadcastChannel带参跳转测试"},{id:"hello-global-event",title:"GlobalEvent传参",path:"views/test/hello",params:{a:"global",b:"event"},globalEvent:!0,description:"GlobalEvent带参跳转测试"},{id:"hello-storage",title:"storage传参",path:"views/test/hello",params:{a:"hello",b:"storage"},globalEvent:!0,storage:!0,description:"storage带参跳转测试"},{id:"hello-weex-ui",title:"Hello Weex UI",path:"views/test/weex-ui",description:"Weex UI测试"},{id:"test-ep-slider",title:"weex-ui ep-slider",path:"views/test/ep-slider",description:"Weex UI Ep-Slider测试"},{id:"test-slider",title:"weex slider",path:"views/test/slider",description:"Weex Slider测试"}]}},mounted:function(){var e=this;this.result=u.default.getParams(),this.channel=new BroadcastChannel("TEST"),this.message={type:null,data:null},this.channel.onmessage=function(t){e.message=t.data}},methods:{jump:function(e){var t=this;this.result={},e.globalEvent?(c.default.addEventListener("hello-return",function(e){t.result=e,f.toast({message:"addEventListener callback (hello-return), result: "+JSON.stringify(e)}),c.default.removeEventListener("hello-return")}),e.storage?e.params?p.setItem("hello-storage",JSON.stringify(e.params),function(t){"success"===t.result&&u.default.goto(e.path)}):u.default.goto(e.path):u.default.goto(e.path,e.params)):e.broadcastChannel?(this.sendMessage("hello","Hello from "+e.title),u.default.goto(e.path)):e.params?u.default.goto(e.path,e.params):u.default.goto(e.path)},sendMessage:function(e,t){this.message={type:e,data:t},this.channel.postMessage(this.message)},getMessage:function(){return this.message},back:function(){u.default.back()}}}},226:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},[n("no-pg-navbar"),e._v(" "),n("nav-bar",{attrs:{title:"测试主页","left-button":e.leftButton,"left-button-click":e.back}}),e._v(" "),e.result?n("p",{staticClass:"info weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("点击标题跳转，返回值: "+e._s(e.result))]):e._e(),e._v(" "),n("list",{staticClass:"list",attrs:{}},e._l(e.pages,function(t,i){return n("section",{key:i,staticClass:" weex-ct weex-cell",attrs:{"weex-type":"cell"}},[n("div",{staticClass:"card weex-ct weex-div",attrs:{"weex-type":"div"}},[n("div",{staticClass:"card-header weex-ct weex-div",attrs:{"weex-type":"div","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(n){n.stopPropagation(),e.jump(t)}}},[n("p",{staticClass:"card-title weex-el weex-text",attrs:{"weex-type":"text"}},[e._v(e._s(t.title))])]),e._v(" "),n("div",{staticClass:"card-body weex-ct weex-div",attrs:{"weex-type":"div"}},[n("p",{staticClass:"card-description weex-el weex-text",attrs:{"weex-type":"text"}},[e._v(e._s(t.description))])])])])})),e._v(" "),n("p",{staticClass:"info weex-el weex-text",attrs:{"weex-type":"text"}},[e._v("底部信息没遮挡，证明list组件是自适应高度的。web端不是自适应的，需要手动设置flex:1。")])],1)},staticRenderFns:[]}},23:function(e,t,n){function i(e){n(15)}var o=n(1)(n(17),n(18),i,"data-v-3776603e",null);e.exports=o.exports},4:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(void 0===e||null===e)return"";var t="?";return Object.keys(e).forEach(function(n){null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&")}),t.substring(0,t.lastIndexOf("&"))}function a(e){var t=e.indexOf("?_wx_tpl");-1===t&&(t=e.indexOf(".js?"),e.indexOf(".js?")>-1?t+=3:t=e.indexOf(".html?")+5);var n=e.substring(t),i={};if(-1!==n.indexOf("?"))for(var o=n.substr(1),r=o.split("&"),a=0;a<r.length;a+=1)i[r[a].split("=")[0]]=decodeURIComponent(r[a].split("=")[1]);return i}function l(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",i=e.indexOf("?");return i>0?n.substring(0,i):n}function s(e,t,n){var i=a(e),o=r(i);t&&(o=r(Object.assign({},i,t)));var l=e.indexOf("?"),s=l>0?e.substring(0,l):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window))?window.location.href=""+s+o:E.push({url:""+s+o,animated:"true"},function(e){n&&n(e)})}function u(e,t,n,i){var o=/\/\/([^\/]+?)\//.exec(e);if(o&&o.length>=2)return void s(e,t,i);var l=(0,m.default)(n),u=a(weex.config.bundleUrl),d=r(u);t&&(d=r(Object.assign({},u,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window))?window.location.href=""+l+e+".html"+d:E.push({url:""+l+e+".js"+d,animated:"true"},function(e){i&&i(e)})}function d(e,t,n){u(e,t,!0,n)}function c(e,t,n){u(e,t,!1,n)}function f(e,t,n){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";t&&(o=r(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window))?window.location.href=i+"/"+e+".html"+o:E.push({url:""+i+_.DIST+"/"+e+".js"+o,animated:"true"},function(e){n&&n(e)})}function p(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window))?window.history.back():E.pop()}function v(){return a(weex.config.bundleUrl)}function w(e,t,n){var i=function(){};E.close(e||{},t||i,n||i)}function g(e,t,n){if("Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window))){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";t&&(o=r(t)),window.location.replace(i+"/"+e+".html"+o)}else{var l=(0,m.default)(!0),s=a(weex.config.bundleUrl),u=r(s);t&&(u=r(Object.assign({},s,t))),E.push({url:""+l+e+".js"+u,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&k?k.removeBefore():w(),n&&n(e)})}}function h(e,t,n){var i="http"+(_.ENABLE_HTTPS?"s":"")+"://"+_.DOMAIN,o="";if(t&&(o=r(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":x(window)))window.location.replace(i+"/"+e+".html"+o);else{var l=a(weex.config.bundleUrl);o=r(l),t&&(o=r(Object.assign({},l,t))),E.push({url:""+i+_.DIST+"/"+e+".js"+o,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&k?k.removeBefore():w(),n&&n(e)})}}Object.defineProperty(t,"__esModule",{value:!0});var x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=n(6),m=o(b),y=n(0),_=i(y),E=weex.requireModule("myNavigator")||weex.requireModule("navigator"),k=weex.requireModule("myNavigatorEvent");t.default={createQuery:r,getQueryData:a,getHash:l,push:d,goto:f,gotoTab:c,gotoH5:s,back:p,getParams:v,replace:g,replaceOnline:h,close:w}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=weex.requireModule("globalEvent"),o=weex.requireModule("myGlobalEvent");t.default={addEventListener:function(e,t){"Web"===WXEnvironment.platform?document.addEventListener(e,t,!1):i.addEventListener(e,t)},removeEventListener:function(e,t){"Web"===WXEnvironment.platform?document.removeEventListener(e,t):i.removeEventListener(e)},fireGlobalEvent:function(e,t,n){if("Web"===WXEnvironment.platform){var i=new Event(e);i.data=t,document.dispatchEvent(i),n&&n()}else if(o&&o.fireGlobalEvent)o.fireGlobalEvent(e,t,n);else{var r=weex.requireModule("event");r&&r.fireNativeGlobalEvent&&r.fireNativeGlobalEvent(e,n)}}}},5:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=n(4),a=i(r);t.default={created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=weex.requireModule("storage");this.checkWhiteList()||e.getItem(o.USER_KEY,function(e){"success"===e.result&&void 0!==e.data||a.default.push("views/login/login")})},checkWhiteList:function(){var e=weex.config.bundleUrl,t=/\/\/([^\/]+?)\/([^\\.]+)/.exec(e),n=null;return t&&t.length>=3&&(n=t[2]),null!=n&&o.WHITE_LIST.some(function(e){return n.indexOf(e)>-1})}}}},51:function(e,t,n){function i(e){n(52)}var o=n(1)(n(54),n(55),i,"data-v-42226c6b",null);e.exports=o.exports},52:function(e,t,n){var i=n(53);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("d2379c26",i,!0,{})},53:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,"",""])},54:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},created:function(){try{var e=weex.requireModule("navigationBar");e&&e.showTitleBar&&e.showTitleBar(!1);var t=weex.requireModule("titleBar");t&&t.showTitleBar&&t.showTitleBar("false")}catch(e){}}}},55:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:" weex-ct weex-div",staticStyle:{display:"none"},attrs:{"weex-type":"div"}})},staticRenderFns:[]}},6:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){var t=weex.config.bundleUrl,n=void 0,i=void 0,o=t.indexOf("file://assets/")>=0,a=t.indexOf("file:///")>=0&&t.indexOf(l.APP_NAME+".app")>0;if(o)n="file://assets"+l.DIST+"/";else if(a)n=t.substring(0,t.lastIndexOf("/")+1);else{var s=l.DOMAIN,u=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(u&&u.length>=2){var d=u[1].indexOf(":"),c=d>0?u[1].substr(0,d):u[1];s=s.indexOf(c)>-1?s:u[1]}n="http"+(l.ENABLE_HTTPS?"s":"")+"://"+s+l.DIST+"/",i="http"+(l.ENABLE_HTTPS?"s":"")+"://"+s+"/"}i=e?"http"+(l.ENABLE_HTTPS?"s":"")+"://"+l.DOMAIN+"/":"/";var f=n;return"object"===("undefined"==typeof window?"undefined":r(window))&&(f=i),f}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var a=n(0),l=i(a)},8:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(11);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i(o).default}})}},[221]);
//# sourceMappingURL=index.590c64578663fa5ec167.bundle.map