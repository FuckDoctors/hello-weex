webpackJsonp([0],[,,,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.DOMAIN="fuckdoctors.github.io/hello-weex",e.ENABLE_HTTPS=!0,e.DIST="dist",e.APP_NAME="WeexDemo",e.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png"},,,,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function s(t){var e="?";return Object.keys(t).forEach(function(o){null!==t[o]&&(e+=o+"="+encodeURIComponent(t[o])+"&")}),e.substring(0,e.lastIndexOf("&"))}function n(t){var e=t.substring(t.indexOf("?_wx_tpl")),o={};if(-1!==e.indexOf("?"))for(var i=e.substr(1),s=i.split("&"),n=0;n<s.length;n+=1)o[s[n].split("=")[0]]=decodeURIComponent(s[n].split("=")[1]);return o}function a(t){var e=t.indexOf("#"),o=e>0?t.substring(e,t.length):"",i=t.indexOf("?");return i>0?o.substring(0,i):o}function r(t,e,o,i){var a=(0,y.default)(o),r=n(weex.config.bundleUrl),l=s(r);e&&(l=s(Object.assign({},r,e))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":f(window))?window.location.href=""+a+t+".html"+l:v.push({url:""+a+t+".js"+l,animated:"true"},function(t){i&&i(t)})}function l(t,e,o){r(t,e,!0,o)}function c(t,e,o){r(t,e,!1,o)}function d(t,e,o){var i=n(t),a=s(i);e&&(a=s(Object.assign({},i,e)));var r=t.indexOf("?"),l=r>0?t.substring(0,r):t;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":f(window))?window.location.href=""+l+a:v.push({url:""+l+a,animated:"true"},function(t){o&&o(t)})}function u(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":f(window))?window.history.back():v.pop()}Object.defineProperty(e,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=o(8),y=i(p),v=weex.requireModule("navigator");e.default={createQuery:s,getQueryData:n,getHash:a,push:l,gotoTab:c,gotoH5:d,back:u}},function(t,e,o){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function s(t){var e=weex.config.bundleUrl,o=void 0,i=void 0,s=e.indexOf("file://assets/")>=0,a=e.indexOf("file:///")>=0&&e.indexOf(r.APP_NAME+".app")>0;if(s)o="file://assets/"+r.DIST+"/";else if(a)o=e.substring(0,e.lastIndexOf("/")+1);else{var l=r.DOMAIN,c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(c&&c.length>=2){var d=c[1].indexOf(":"),u=d>0?c[1].substr(0,d):c[1];l=l.indexOf(u)>-1?l:c[1]}o="http"+(r.ENABLE_HTTPS?"s":"")+"://"+l+"/"+r.DIST+"/",i="http"+(r.ENABLE_HTTPS?"s":"")+"://"+l}i=t?"http"+(r.ENABLE_HTTPS?"s":"")+"://"+r.DOMAIN+"/":"/";var f=o;return"object"===("undefined"==typeof window?"undefined":n(window))&&(f=i),f}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=s;var a=o(3),r=i(a)},,function(t,e,o){function i(t){o(11)}var s=o(0)(o(13),o(19),i,"data-v-dfb5509a",null);t.exports=s.exports},function(t,e,o){var i=o(12);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("351eafc2",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".nav-wrapper[data-v-dfb5509a]{width:750px;-ms-flex-align:start;align-items:flex-start}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(6),n=i(s),a=o(50),r=i(a),l=o(18),c=i(l);e.default={components:{WxcMinibar:r.default},props:{title:{type:String,default:"Title here..."},backgroundColor:{type:String,default:"#009ff0"},textColor:{type:String,default:"#FFFFFF"},leftButton:{type:String,default:""},rightButton:{type:String,default:""},rightText:{type:String,default:""}},data:function(){return{}},created:function(){this.wrapperStyle={backgroundColor:this.backgroundColor,height:n.default.env.isWeb()?"auto":c.default.getNavHeight(),paddingTop:n.default.env.isWeb()?0:c.default.getNavHeight()-90}},methods:{minibarLeftButtonClick:function(){this.$emit("leftButtonClick")},minibarRightButtonClick:function(){this.$emit("rightButtonClick")}}}},function(t,e,o){var i=o(15);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("0b40505c",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wxc-minibar[data-v-3776603e]{width:750px;height:90px;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;background-color:#009ff0}.left[data-v-3776603e]{width:180px;padding-left:32px}.middle-title[data-v-3776603e]{font-size:30px;color:#fff;height:36px;line-height:34px}.right[data-v-3776603e]{width:180px;padding-right:32px;-ms-flex-align:end;align-items:flex-end}.left-button[data-v-3776603e]{width:21px;height:36px}.right-button[data-v-3776603e]{width:32px;height:32px}.icon-text[data-v-3776603e]{font-size:28px;color:#fff}",""])},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("navigator");e.default={props:{backgroundColor:{type:String,default:"#FFC900"},leftButton:{type:String,default:"https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png"},textColor:{type:String,default:"#3D3D3D"},rightButton:{type:String,default:""},title:{type:String,default:"标题"},leftText:{type:String,default:""},rightText:{type:String,default:""},useDefaultReturn:{type:Boolean,default:!0},show:{type:Boolean,default:!0}},methods:{leftButtonClicked:function(){var t=this;t.useDefaultReturn&&i.pop({},function(t){}),t.$emit("wxcMinibarLeftButtonClicked",{})},rightButtonClicked:function(){var t=this;(t.rightText||t.rightButton)&&t.$emit("wxcMinibarRightButtonClicked",{})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("div",{staticClass:"wxc-minibar",staticStyle:t.$processStyle(void 0),style:t.$processStyle({backgroundColor:t.backgroundColor})},[o("div",{staticClass:"left",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{"aria-label":"返回",accessible:!0},on:{click:t.leftButtonClicked}},[t._t("left",[t.leftButton&&!t.leftText?o("image",{staticClass:"left-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.leftButton}}):t._e(),t._v(" "),t.leftText?o("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.leftText))]):t._e()])],2),t._v(" "),t._t("middle",[o("text",{staticClass:"middle-title",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"right",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:t.rightButtonClicked}},[t._t("right",[t.rightButton&&!t.rightText?o("image",{staticClass:"right-button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{src:t.rightButton,"aria-hidden":!0}}):t._e(),t._v(" "),t.rightText?o("text",{staticClass:"icon-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({color:t.textColor})},[t._v(t._s(t.rightText))]):t._e()])],2)],2):t._e()},staticRenderFns:[]}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(6),n=i(s),a={getNavHeight:function(){return n.default.env.isWeb()?0:n.default.env.isIPhoneX()?176:132}};e.default=a},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav-wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(t.wrapperStyle)},[o("wxc-minibar",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{title:t.title,"background-color":t.backgroundColor,"text-color":t.textColor,"left-button":t.leftButton,"right-text":t.rightText,"right-button":t.rightButton},on:{wxcMinibarLeftButtonClicked:t.minibarLeftButtonClick,wxcMinibarRightButtonClicked:t.minibarRightButtonClick}})],1)},staticRenderFns:[]}},function(t,e,o){function i(t){o(21)}var s=o(0)(o(23),o(28),i,"data-v-6efc3ea5",null);t.exports=s.exports},function(t,e,o){var i=o(22);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("3a2b5fba",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".tab-bar-wrapper[data-v-6efc3ea5]{-ms-flex:1;flex:1}.item-container[data-v-6efc3ea5]{width:750px;background-color:#f2f3f4}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(6),n=i(s),a=o(57),r=i(a);e.default={props:{tabTitles:{type:Array,default:function(){return[]}},tabStyles:{type:Object,default:function(){return{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10}}},selected:{type:Number,default:0}},components:{WxcTabBar:r.default},data:function(){return{}},created:function(){var t=n.default.env.getPageHeight(),e=this.tabStyles;this.contentStyle={height:t-e.height+"px"}},mounted:function(){this.tabTitles&&this.tabTitles.length>0&&this.selected&&this.setPage(this.selected,null,!1)},methods:{setPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.$refs["wxc-tab-bar"].setPage(t,e,o)},wxcTabBarCurrentTabSelected:function(t){this.$emit("currentTabSelected",t)}}}},function(t,e,o){var i=o(25);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("094f0c4c",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wxc-tab-page[data-v-33d292c0]{position:absolute;top:0;left:0;right:0;bottom:0}.tab-title-list[data-v-33d292c0]{-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around}.title-item[data-v-33d292c0]{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-bottom-style:solid}.tab-page-wrap[data-v-33d292c0]{width:750px;-ms-flex:1;flex:1;overflow:hidden}.tab-container[data-v-33d292c0]{-ms-flex:1;flex:1;-ms-flex-direction:row;flex-direction:row;position:absolute}.tab-text[data-v-33d292c0]{lines:1;text-overflow:ellipsis}.desc-tag[data-v-33d292c0]{right:20px;border-bottom-right-radius:14px;border-bottom-left-radius:0;border-top-left-radius:14px;border-top-right-radius:14px;height:26px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;padding-left:6px;padding-right:6px}.desc-tag[data-v-33d292c0],.dot[data-v-33d292c0]{position:absolute;top:10px;background-color:#ff5e00}.dot[data-v-33d292c0]{width:12px;height:12px;border-bottom-right-radius:12px;border-bottom-left-radius:12px;border-top-left-radius:12px;border-top-right-radius:12px;right:40px}.desc-text[data-v-33d292c0]{font-size:18px;color:#fff}.icon-font[data-v-33d292c0]{margin-bottom:8px}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(6),n=i(s),a=weex.requireModule("dom"),r=weex.requireModule("animation");e.default={props:{tabTitles:{type:Array,default:function(){return[]}},tabStyles:{type:Object,default:function(){return{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,activeBottomColor:"#FFC900",activeBottomWidth:120,activeBottomHeight:6,textPaddingLeft:10,textPaddingRight:10}}},titleType:{type:String,default:"icon"},titleUseSlot:{type:Boolean,default:!1},isTabView:{type:Boolean,default:!0},duration:{type:[Number,String],default:300},timingFunction:{type:String,default:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},wrapBgColor:{type:String,default:"#f2f3f4"}},data:function(){return{currentPage:0,translateX:0}},created:function(){var t=this.titleType,e=this.tabStyles;"iconFont"===t&&e.iconFontUrl&&a.addRule("fontFace",{fontFamily:"wxcIconFont",src:"url('"+e.iconFontUrl+"')"}),this.isIPhoneX=n.default.env.isIPhoneX()},methods:{next:function(){var t=this.currentPage;t<this.tabTitles.length-1&&t++,this.setPage(t)},prev:function(){var t=this.currentPage;t>0&&t--,this.setPage(t)},setPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!this.isTabView)return void this.jumpOut(e);var i=this.currentPage,s=this.$refs["wxc-tab-title-"+t][0],n=this.tabStyles.width,r=parseInt(750/n),l=this.tabTitles.length,c=t>r?-(750-n)/2:2*-n;r<l&&((i>r||t>1)&&a.scrollToElement(s,{offset:c,animated:o}),t<=1&&i>t&&a.scrollToElement(s,{offset:-n*t,animated:o})),this.currentPage=t,this._animateTransformX(t,o),this.$emit("wxcTabBarCurrentTabSelected",{page:t})},jumpOut:function(t){t&&n.default.goToH5Page(t)},_animateTransformX:function(t,e){var o=this.duration,i=this.timingFunction,s=e?o:1e-5,n=this.$refs["tab-container"],a=750*t;r.transition(n,{styles:{transform:"translateX("+-a+"px)"},duration:s,timingFunction:i,delay:0},function(){})}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wxc-tab-page",staticStyle:t.$processStyle(void 0),style:t.$processStyle({backgroundColor:t.wrapBgColor})},[o("div",{ref:"tab-page-wrap",staticClass:"tab-page-wrap",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("div",{ref:"tab-container",staticClass:"tab-container",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._t("default")],2)]),t._v(" "),o("div",{staticClass:"tab-title-list",staticStyle:t.$processStyle(void 0),style:t.$processStyle({backgroundColor:t.tabStyles.bgColor,height:t.tabStyles.height+(t.isIPhoneX?78:0)+"px",paddingBottom:t.isIPhoneX?"78px":"0"})},t._l(t.tabTitles,function(e,i){return o("div",{key:i,ref:"wxc-tab-title-"+i,refInFor:!0,staticClass:"title-item",staticStyle:t.$processStyle(void 0),style:t.$processStyle({width:t.tabStyles.width+"px",height:t.tabStyles.height+"px",backgroundColor:t.currentPage==i?t.tabStyles.activeBgColor:t.tabStyles.bgColor}),attrs:{accessible:!0,"aria-label":""+(e.title?e.title:"标签"+i)},on:{click:function(o){t.setPage(i,e.url)}}},["icon"!==t.titleType||t.titleUseSlot?t._e():o("image",{staticStyle:t.$processStyle(void 0),style:t.$processStyle({width:t.tabStyles.iconWidth+"px",height:t.tabStyles.iconHeight+"px"}),attrs:{src:t.currentPage==i?e.activeIcon:e.icon}}),t._v(" "),"iconFont"===t.titleType&&e.codePoint&&!t.titleUseSlot?o("text",{staticClass:"icon-font",staticStyle:t.$processStyle(void 0),style:t.$processStyle({fontFamily:"wxcIconFont",fontSize:t.tabStyles.iconFontSize+"px",color:t.currentPage==i?t.tabStyles.activeIconFontColor:t.tabStyles.iconFontColor})},[t._v(t._s(e.codePoint))]):t._e(),t._v(" "),t.titleUseSlot?t._e():o("text",{staticClass:"tab-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle({fontSize:t.tabStyles.fontSize+"px",fontWeight:t.currentPage==i&&t.tabStyles.isActiveTitleBold?"bold":"normal",color:t.currentPage==i?t.tabStyles.activeTitleColor:t.tabStyles.titleColor,paddingLeft:t.tabStyles.textPaddingLeft+"px",paddingRight:t.tabStyles.textPaddingRight+"px"})},[t._v(t._s(e.title))]),t._v(" "),e.badge&&!t.titleUseSlot?o("div",{staticClass:"desc-tag",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("text",{staticClass:"desc-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v(t._s(e.badge))])]):t._e(),t._v(" "),!e.dot||e.badge||t.titleUseSlot?t._e():o("div",{staticClass:"dot",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)}),t._v(" "),t.titleUseSlot?t._t("tab-title-"+i):t._e()],2)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tab-bar-wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("wxc-tab-bar",{ref:"wxc-tab-bar",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{"tab-titles":t.tabTitles,"tab-styles":t.tabStyles,"is-tab-view":!0,"title-type":"icon"},on:{wxcTabBarCurrentTabSelected:t.wxcTabBarCurrentTabSelected}},t._l(t.tabTitles,function(e,i){return o("div",{key:i,ref:"tab-page-"+i,refInFor:!0,staticClass:"item-container",staticStyle:t.$processStyle(void 0),style:t.$processStyle(t.contentStyle)},[t._t("tab-page-"+i,[o("text",[t._v(t._s(e.title))])])],2)}))],1)},staticRenderFns:[]}},function(t,e,o){function i(t){o(30)}var s=o(0)(o(32),o(33),i,"data-v-58272e1e",null);t.exports=s.exports},function(t,e,o){var i=o(31);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("0cd6d366",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wrapper[data-v-58272e1e]{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.greeting[data-v-58272e1e]{margin-top:70px;font-size:50px;color:#41b883}.message[data-v-58272e1e]{margin:30px;font-size:32px;color:#727272}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(7),n=i(s),a=o(3);e.default={data:function(){return{}},methods:{jump:function(t){"Web"===WXEnvironment.platform?n.default.gotoH5("http"+(a.ENABLE_HTTPS?"s":"")+"://"+a.DOMAIN+"/"+t+".html"):n.default.gotoH5("http"+(a.ENABLE_HTTPS?"s":"")+"://"+a.DOMAIN+"/"+a.DIST+"/"+t+".js")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("text",{staticClass:"greeting",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Hello Weex!")]),t._v(" "),o("text",{staticClass:"message",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Home page.")]),t._v(" "),o("text",{staticClass:"message",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:function(e){t.jump("views/test/hello")}}},[t._v("跳转")])])},staticRenderFns:[]}},function(t,e,o){function i(t){o(35)}var s=o(0)(o(37),o(38),i,"data-v-02330034",null);t.exports=s.exports},function(t,e,o){var i=o(36);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("0eb72103",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wrapper[data-v-02330034]{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.greeting[data-v-02330034]{margin-top:70px;font-size:50px;color:#41b883}.message[data-v-02330034]{margin:30px;font-size:32px;color:#727272}",""])},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("text",{staticClass:"greeting",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Hello Weex!")]),t._v(" "),o("text",{staticClass:"message",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("特别推荐")])])},staticRenderFns:[]}},function(t,e,o){function i(t){o(40)}var s=o(0)(o(42),o(43),i,"data-v-762422ce",null);t.exports=s.exports},function(t,e,o){var i=o(41);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("0e3efcc2",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wrapper[data-v-762422ce]{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.greeting[data-v-762422ce]{margin-top:70px;font-size:50px;color:#41b883}.message[data-v-762422ce]{margin:30px;font-size:32px;color:#727272}",""])},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("text",{staticClass:"greeting",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Hello Weex!")]),t._v(" "),o("text",{staticClass:"message",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("消息中心")])])},staticRenderFns:[]}},function(t,e,o){function i(t){o(45)}var s=o(0)(o(47),o(48),i,"data-v-cb639bdc",null);t.exports=s.exports},function(t,e,o){var i=o(46);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("1555f766",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wrapper[data-v-cb639bdc]{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.greeting[data-v-cb639bdc]{margin-top:70px;font-size:50px;color:#41b883}.message[data-v-cb639bdc]{margin:30px;font-size:32px;color:#727272}",""])},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("text",{staticClass:"greeting",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Hello Weex!")]),t._v(" "),o("text",{staticClass:"message",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("我的主页")])])},staticRenderFns:[]}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(10);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(s).default}})},,function(t,e,o){function i(t){o(14)}var s=o(0)(o(16),o(17),i,"data-v-3776603e",null);t.exports=s.exports},function(t,e,o){function i(t){o(53)}var s=o(0)(o(55),o(60),i,"data-v-04929aa6",null);t.exports=s.exports},function(t,e,o){var i=o(54);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("09d40b60",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,"",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(56),n=i(s),a=o(59),r=i(a),l=o(29),c=i(l),d=o(34),u=i(d),f=o(39),p=i(f),y=o(44),v=i(y);e.default={components:{TabBarComp:n.default,Home:c.default,Explore:u.default,Message:p.default,Profile:v.default},created:function(){this.tabTitles=r.default.tabTitles,this.tabStyles=r.default.tabStyles},data:function(){return{}},mounted:function(){},methods:{}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(20);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(s).default}})},,function(t,e,o){function i(t){o(24)}var s=o(0)(o(26),o(27),i,"data-v-33d292c0",null);t.exports=s.exports},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={tabTitles:[{title:"首页",icon:"https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png"},{title:"特别推荐",icon:"https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"},{title:"消息中心",icon:"https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png",badge:5},{title:"我的主页",icon:"https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",activeIcon:"https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png",dot:!0}],tabStyles:{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,iconWidth:70,iconHeight:70,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10},tabIconFontTitles:[{title:"首页",codePoint:""},{title:"特别推荐",codePoint:""},{title:"消息中心",codePoint:"",badge:5},{title:"我的主页",codePoint:"",dot:!0}],tabIconFontStyles:{bgColor:"#FFFFFF",titleColor:"#666666",activeTitleColor:"#3D3D3D",activeBgColor:"#FFFFFF",isActiveTitleBold:!0,width:160,height:120,fontSize:24,textPaddingLeft:10,textPaddingRight:10,iconFontSize:50,iconFontColor:"#333333",activeIconFontColor:"red",iconFontUrl:"//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf"}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tab-bar-comp",{ref:"tab-bar",staticClass:"tab-bar-comp",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{selected:3,"tab-titles":t.tabTitles,"tab-styles":t.tabStyles}},[o("home",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{slot:"tab-page-0"},slot:"tab-page-0"}),t._v(" "),o("explore",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{slot:"tab-page-1"},slot:"tab-page-1"}),t._v(" "),o("message",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{slot:"tab-page-2"},slot:"tab-page-2"}),t._v(" "),o("profile",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{slot:"tab-page-3"},slot:"tab-page-3"})],1)},staticRenderFns:[]}},,,,,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=o(4),n=i(s);i(o(5)).default.init(n.default);var a=o(69);new n.default(n.default.util.extend({el:"#root"},a))},,,,function(t,e,o){function i(t){o(70)}var s=o(0)(o(73),o(78),i,"data-v-1fba0911",null);t.exports=s.exports},function(t,e,o){var i=o(71);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("43bf0f54",i,!0,{})},function(t,e,o){e=t.exports=o(1)(!1),e.push([t.i,".wrapper[data-v-1fba0911]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:#fff}",""])},,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(49),n=i(s),a=o(77),r=i(a);e.default={components:{NavBar:n.default,TabBar:r.default},data:function(){return{}},mounted:function(){},methods:{}}},,,,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(52);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i(s).default}})},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[o("nav-bar",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{title:"Hello Weex"}}),t._v(" "),o("tab-bar")],1)},staticRenderFns:[]}}],[65]);
//# sourceMappingURL=app.64c33f766d820b5668de.bundle.map