webpackJsonp([18],{0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DEV_DOMAIN="192.168.1.86:8081",t.DOMAIN="fuckdoctors.github.io/hello-weex",t.ENABLE_HTTPS=!0,t.DIST="/dist",t.APP_NAME="WeexDemo",t.LOGO="https://gw.alicdn.com/tfs/TB1JpgJRFXXXXc7XpXXXXXXXXXX-800-800.png",t.WHITE_LIST=["index","views/login/login","views/login/register","views/error","views/about"],t.USER_KEY="USER",t.GEO_KEY="GEO",t.GEO_MORE_KEY="GEO_MORE"},100:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" weex-ct weex-div",style:e._px2rem(e.containerS,75),attrs:{"weex-type":"div"}},[n("div",{ref:"sliderCtn_"+e.sliderId,staticClass:" weex-ct weex-div",style:{width:e._px2rem(e.cardWidth+"px",75),height:e._px2rem(e.cardS.height+"px",75),transform:e._px2rem("translateX(-"+e.currentIndex*(e.cardS.width+e.cardS.spacing)+"px)",75)},attrs:{"weex-type":"div","data-evt-panstart":"","data-evt-panmove":"","data-evt-panend":"","data-evt-horizontalpan":""},on:{panstart:function(t){t.stopPropagation(),e.onPanStart(t)},panmove:function(t){t.stopPropagation(),e.onPanMove(t)},panend:function(t){t.stopPropagation(),e.onPanEnd(t)},horizontalpan:e.onEpPanStart}},e._l(e.cardList,function(t,i){return n("div",{ref:"card"+i+"_"+e.sliderId,refInFor:!0,staticClass:"slider weex-ct weex-div",style:{transform:e._px2rem("scale("+(i===e.currentIndex?1:e.cardS.scale)+")",75),left:e._px2rem(i*(e.cardS.width+e.cardS.spacing)+"px",75),marginLeft:e._px2rem((e.containerS.width-e.cardS.width)/2+"px",75),width:e._px2rem(e.cardS.width+"px",75),height:e._px2rem(e.cardS.height+"px",75)},attrs:{"weex-type":"div"}},[e._t("card"+i+"_"+e.sliderId,null,{})],2)}))])},staticRenderFns:[]}},110:function(e,t,n){function i(e){n(111)}var r=n(1)(n(113),n(115),i,"data-v-1f10af4d",null);e.exports=r.exports},111:function(e,t,n){var i=n(112);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("2b90a06b",i,!0,{})},112:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".slider-wrapper[data-v-1f10af4d]{position:relative}.indicator-wrapper[data-v-1f10af4d]{position:absolute;left:0;right:0;bottom:.13333rem;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.indicator[data-v-1f10af4d]{width:.2rem;height:.2rem;border-radius:.06667rem;border:.02667rem solid #fff;background-color:transparent;margin-left:.13333rem}.indicator-checked[data-v-1f10af4d]{background-color:#fff}",""])},113:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(95),s=i(r);t.default={components:{WxcEpSlider:s.default},props:{sliders:{type:Array,default:function(){return[]}},sliderId:{type:Number,default:1},autoPlay:{type:Boolean,default:!0},showIndicator:{type:Boolean,default:!0},containerStyle:{type:Object,default:function(){return{flexDirection:"row",position:"relative",width:750,height:320}}},cardSize:{type:Object,default:function(){return{height:320,width:750,spacing:0,scale:1}}},interval:{type:Number,default:2e3}},data:function(){return{selectedIndex:0}},created:function(){},mounted:function(){},computed:{cardLength:function(){return this.sliders.length}},methods:{sliderIndexSelected:function(e){this.selectedIndex=e.currentIndex,this.$emit("sliderSelected",e)},changePage:function(e){this.$refs["ep-slider"].manualSetPage(e)}}}},114:function(e,t,n){function i(e){n(96)}var r=n(1)(n(98),n(100),i,"data-v-396d1488",null);e.exports=r.exports},115:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},[n("wxc-ep-slider",{ref:"ep-slider",attrs:{"slider-id":e.sliderId,"card-length":e.cardLength,"container-s":e.containerStyle,"card-s":e.cardSize,interval:e.interval,"auto-play":e.autoPlay,"data-evt-wxcEpSliderCurrentIndexSelected":""},on:{wxcEpSliderCurrentIndexSelected:e.sliderIndexSelected}},[e._l(e.sliders,function(t,i){return n("template",{attrs:{},slot:"card"+i+"_"+e.sliderId},[e._t("slider-item-"+i,null,{})],2)})],2),e._v(" "),e.showIndicator?n("div",{staticClass:"indicator-wrapper weex-ct weex-div",attrs:{"weex-type":"div"}},e._l(e.sliders,function(t,i){return n("p",{key:i,staticClass:" weex-el weex-text",class:["indicator",i===e.selectedIndex&&"indicator-checked"],attrs:{"weex-type":"text","data-evt-click":""},on:{click:e.$stopOuterA,weex$tap:function(t){t.stopPropagation(),e.changePage(i)}}})})):e._e()],1)},staticRenderFns:[]}},146:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r=n(9),s=i(r),a=n(10),o=i(a),d=n(5),c=i(d);s.default.mixin(c.default),o.default.init(s.default);var l=n(110);new s.default(s.default.util.extend({el:"#root"},l))},4:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function s(e){if(void 0===e||null===e)return"";var t="?";return Object.keys(e).forEach(function(n){null!==e[n]&&(t+=n+"="+encodeURIComponent(e[n])+"&")}),t.substring(0,t.lastIndexOf("&"))}function a(e){var t=e.indexOf("?_wx_tpl");-1===t&&(t=e.indexOf(".js?"),e.indexOf(".js?")>-1?t+=3:t=e.indexOf(".html?")+5);var n=e.substring(t),i={};if(-1!==n.indexOf("?"))for(var r=n.substr(1),s=r.split("&"),a=0;a<s.length;a+=1)i[s[a].split("=")[0]]=decodeURIComponent(s[a].split("=")[1]);return i}function o(e){var t=e.indexOf("#"),n=t>0?e.substring(t,e.length):"",i=e.indexOf("?");return i>0?n.substring(0,i):n}function d(e,t,n){var i=a(e),r=s(i);t&&(r=s(Object.assign({},i,t)));var o=e.indexOf("?"),d=o>0?e.substring(0,o):e;"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=""+d+r:I.push({url:""+d+r,animated:"true"},function(e){n&&n(e)})}function c(e,t,n,i){var r=/\/\/([^\/]+?)\//.exec(e);if(r&&r.length>=2)return void d(e,t,i);var o=(0,y.default)(n),c=a(weex.config.bundleUrl),l=s(c);t&&(l=s(Object.assign({},c,t))),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=""+o+e+".html"+l:I.push({url:""+o+e+".js"+l,animated:"true"},function(e){i&&i(e)})}function l(e,t,n){c(e,t,!0,n)}function u(e,t,n){c(e,t,!1,n)}function f(e,t,n){var i="http"+(S.ENABLE_HTTPS?"s":"")+"://"+S.DOMAIN,r="";t&&(r=s(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.location.href=i+"/"+e+".html"+r:I.push({url:""+i+S.DIST+"/"+e+".js"+r,animated:"true"},function(e){n&&n(e)})}function h(){"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))?window.history.back():I.pop()}function p(){return a(weex.config.bundleUrl)}function x(e,t,n){var i=function(){};I.close(e||{},t||i,n||i)}function v(e,t,n){if("Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window))){var i="http"+(S.ENABLE_HTTPS?"s":"")+"://"+S.DOMAIN,r="";t&&(r=s(t)),window.location.replace(i+"/"+e+".html"+r)}else{var o=(0,y.default)(!0),d=a(weex.config.bundleUrl),c=s(d);t&&(c=s(Object.assign({},d,t))),I.push({url:""+o+e+".js"+c,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&_?_.removeBefore():x(),n&&n(e)})}}function w(e,t,n){var i="http"+(S.ENABLE_HTTPS?"s":"")+"://"+S.DOMAIN,r="";if(t&&(r=s(t)),"Web"===WXEnvironment.platform||"object"===("undefined"==typeof window?"undefined":m(window)))window.location.replace(i+"/"+e+".html"+r);else{var o=a(weex.config.bundleUrl);r=s(o),t&&(r=s(Object.assign({},o,t))),I.push({url:""+i+S.DIST+"/"+e+".js"+r,animated:"true"},function(e){"ios"===WXEnvironment.platform.toLowerCase()&&_?_.removeBefore():x(),n&&n(e)})}}Object.defineProperty(t,"__esModule",{value:!0});var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=n(6),y=r(g),b=n(0),S=i(b),I=weex.requireModule("myNavigator")||weex.requireModule("navigator"),_=weex.requireModule("myNavigatorEvent");t.default={createQuery:s,getQueryData:a,getHash:o,push:l,goto:f,gotoTab:u,gotoH5:d,back:h,getParams:p,replace:v,replaceOnline:w,close:x}},5:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),s=n(4),a=i(s);t.default={created:function(){this.checkLogin()},methods:{checkLogin:function(){var e=weex.requireModule("storage");this.checkWhiteList()||e.getItem(r.USER_KEY,function(e){"success"===e.result&&void 0!==e.data||a.default.push("views/login/login")})},checkWhiteList:function(){var e=weex.config.bundleUrl,t=/\/\/([^\/]+?)\/([^\\.]+)/.exec(e),n=null;return t&&t.length>=3&&(n=t[2]),null!=n&&r.WHITE_LIST.some(function(e){return n.indexOf(e)>-1})}}}},6:function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){var t=weex.config.bundleUrl,n=void 0,i=void 0,r=t.indexOf("file://assets/")>=0,a=t.indexOf("file:///")>=0&&t.indexOf(o.APP_NAME+".app")>0;if(r)n="file://assets"+o.DIST+"/";else if(a)n=t.substring(0,t.lastIndexOf("/")+1);else{var d=o.DOMAIN,c=/\/\/([^\/]+?)\//.exec(weex.config.bundleUrl);if(c&&c.length>=2){var l=c[1].indexOf(":"),u=l>0?c[1].substr(0,l):c[1];d=d.indexOf(u)>-1?d:c[1]}n="http"+(o.ENABLE_HTTPS?"s":"")+"://"+d+o.DIST+"/",i="http"+(o.ENABLE_HTTPS?"s":"")+"://"+d+"/"}i=e?"http"+(o.ENABLE_HTTPS?"s":"")+"://"+o.DOMAIN+"/":"/";var f=n;return"object"===("undefined"==typeof window?"undefined":s(window))&&(f=i),f}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var a=n(0),o=i(a)},96:function(e,t,n){var i=n(97);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(3)("fcc136de",i,!0,{})},97:function(e,t,n){t=e.exports=n(2)(!1),t.push([e.i,".slider[data-v-396d1488]{position:absolute;top:0}",""])},98:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),s=i(r),a=n(99),o=i(a),d=n(56),c=i(d),l=weex.requireModule("swipeBack"),u=weex.requireModule("animation");t.default={props:{sliderId:{type:[String,Number],default:1},panOffset:{type:Number,default:80},cardLength:{type:Number,default:1},selectIndex:{type:Number,default:0},enableSwipe:{type:Boolean,default:!0},containerS:{type:Object,default:function(){return{position:"relative",width:750,height:352}}},cardS:{type:Object,default:function(){return{width:360,height:300,spacing:0,scale:.75}}},autoPlay:{type:Boolean,default:!1},interval:{type:[Number,String],default:1200}},data:function(){return{isMoving:!1,gesToken:0,startX:0,startTime:0,currentIndex:0,autoPlayTimer:null}},computed:{cardList:function(){return new Array(this.cardLength+1).join().split("")},cardWidth:function(){return(this.cardLength-1)*this.cardS.width+this.containerS.width+235+"px"}},created:function(){this.currentIndex=this.selectIndex},mounted:function(){var e=this;l&&l.forbidSwipeBack&&l.forbidSwipeBack(!0),setTimeout(function(){var t=e.$refs["sliderCtn_"+e.sliderId];o.default.supportsEB()&&t&&t.ref&&c.default.prepare&&c.default.prepare({anchor:t.ref,eventType:"pan"})},20),this.checkNeedAutoPlay()},methods:{onPanStart:function(e){o.default.supportsEB()||(this.clearAutoPlay(),this.startX=e.changedTouches[0].clientX,this.startTime=Date.now())},onPanMove:function(e){if(!o.default.supportsEB()){var t=e.changedTouches[0].clientX-this.startX,n=this.loopedIndex(this.currentIndex,this.cardLength),i=this.cardLength,r=this.currentIndex*(this.cardS.width+this.cardS.spacing),s=this.$refs["sliderCtn_"+this.sliderId];if(s&&u.transition(s,{styles:{transform:"translateX("+(t-r)+"px)"},timingFunction:"ease",delay:0,duration:0},function(){}),1!==this.cardS.scale){var a=this.$refs["card"+this.loopedIndex(n,i)+"_"+this.sliderId][0];a&&u.transition(a,{styles:{transform:"scale("+(1-Math.abs(t)/this.cardS.width*(1-this.cardS.scale))+")"},timingFunction:"ease",delay:0,duration:0},function(){});var d=this.$refs["card"+this.loopedIndex(n-1,i)+"_"+this.sliderId][0];d&&0!==n&&u.transition(d,{styles:{transform:"scale("+(1-Math.abs(t-this.cardS.width)/this.cardS.width*(1-this.cardS.scale))+")"},timingFunction:"ease",delay:0,duration:0},function(){});var c=this.$refs["card"+this.loopedIndex(n+1,i)+"_"+this.sliderId][0];c&&u.transition(c,{styles:{transform:"scale("+(1-Math.abs(this.cardS.width+t)/this.cardS.width*(1-this.cardS.scale))+")"},timingFunction:"ease",delay:0,duration:0},function(){})}}},onEpPanStart:function(e){var t=this;o.default.supportsEB()&&"start"===e.state&&(this.clearAutoPlay(),setTimeout(function(){var e=t.$refs["sliderCtn_"+t.sliderId];t.bindExp(e)},0))},onPanEnd:function(e){o.default.supportsEB()||this.panEnd(e)},panEnd:function(e){var t=this;this.isMoving=!0;var n=e.deltaX;s.default.env.isWeb()&&(n=e.changedTouches[0].clientX-this.startX);var i=this.currentIndex,r=i,a=Date.now()-this.startTime,o=this.panOffset||this.cardS.width/2;n<-o||n<-10&&a<200?r!==this.cardLength-1&&r++:(n>o||n>10&&a<500)&&0!==r&&r--,this.slideTo(i,r),setTimeout(function(){t.checkNeedAutoPlay()},3e3)},slideTo:function(e,t){var n=this,i=1,r=this.cardS.scale,s=this.cardS.scale,a=0===t&&e===this.cardLength-1?1e-5:300;this.$emit("wxcEpSliderCurrentIndexSelected",{currentIndex:t}),e<t?(i=this.cardS.scale,r=1):e>t&&(i=this.cardS.scale,s=1);var o=this.$refs["card"+this.loopedIndex(e,this.cardLength)+"_"+this.sliderId][0];o&&u.transition(o,{styles:{transform:"scale("+i+")"},timingFunction:"ease",duration:a},function(){});var d=this.$refs["card"+this.loopedIndex(e-1,this.cardLength)+"_"+this.sliderId][0];this.isMoving&&d&&0!==e&&u.transition(d,{styles:{transform:"scale("+s+")"},timingFunction:"ease",duration:a},function(){});var c=this.$refs["card"+this.loopedIndex(e+1,this.cardLength)+"_"+this.sliderId][0];c&&e!==this.cardLength-1&&u.transition(c,{styles:{transform:"scale("+r+")"},timingFunction:"ease",duration:a},function(){});var l=this.$refs["sliderCtn_"+this.sliderId];l&&u.transition(l,{styles:{transform:"translateX(-"+t*(this.cardS.width+this.cardS.spacing)+"px)"},timingFunction:"ease",duration:a},function(){n.isMoving=!1,e!==t&&(n.currentIndex=t)})},loopedIndex:function(e,t){return e<0&&(e+=(1-e/t)*t),e%t},bindExp:function(e){var t=this;if(e&&e.ref){if(this.isMoving&&0!==this.gesToken)return c.default.unbind({eventType:"pan",token:this.gesToken}),void(this.gesToken=0);this.startTime=Date.now();var n=this.loopedIndex(this.currentIndex,this.cardLength),i=this.$refs["sliderCtn_"+this.sliderId],r=this.$refs["card"+n+"_"+this.sliderId][0],s=null,a=null,o=this.currentIndex*(this.cardS.width+this.cardS.spacing),d="x - "+o,l=[{element:i.ref,property:"transform.translateX",expression:d}];if(1!==this.cardS.scale){var u="1-abs(x)/"+this.cardS.width+"*"+(1-this.cardS.scale),f="1-abs(x-"+this.cardS.width+")/"+this.cardS.width+"*"+(1-this.cardS.scale),h="1-abs("+this.cardS.width+"+x)/"+this.cardS.width+"*"+(1-this.cardS.scale);l.push({element:r.ref,property:"transform.scale",expression:u}),0===n&&this.$refs["card"+(n+1)+"_"+this.sliderId]?(s=this.$refs["card"+(n+1)+"_"+this.sliderId][0],l.push({element:s.ref,property:"transform.scale",expression:h})):n===this.cardLength-1&&this.$refs["card"+(n-1)+"_"+this.sliderId]?(a=this.$refs["card"+(n-1)+"_"+this.sliderId][0],l.push({element:a.ref,property:"transform.scale",expression:f})):this.$refs["card"+(n-1)+"_"+this.sliderId]&&(a=this.$refs["card"+(n-1)+"_"+this.sliderId][0],l.push({element:a.ref,property:"transform.scale",expression:f}),s=this.$refs["card"+(n+1)+"_"+this.sliderId][0],l.push({element:s.ref,property:"transform.scale",expression:h}))}var p=c.default.bind({anchor:e.ref,eventType:"pan",props:l},function(e){t.isMoving||"end"!==e.state&&"cancel"!==e.state&&"exit"!==e.state||t.panEnd(e)});this.gesToken=p.token}},checkNeedAutoPlay:function(){var e=this;this.autoPlay&&(this.clearAutoPlay(),this.autoPlayTimer=setInterval(function(){e.slideTo(e.currentIndex,e.loopedIndex(e.currentIndex+1,e.cardLength))},parseInt(this.interval)))},clearAutoPlay:function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},rebind:function(){var e=this.$refs["sliderCtn_"+this.sliderId];e&&e.ref&&(c.default.unbind({eventType:"pan",token:this.gesToken}),this.gesToken=0,this.bindExp(e))},manualSetPage:function(e){var t=this;this.clearAutoPlay();var n=this.currentIndex<e?1:-1;this.slideTo(this.loopedIndex(e-n,this.cardLength),e),setTimeout(function(){t.checkNeedAutoPlay()},3e3)}}}}},[146]);
//# sourceMappingURL=index.8afcf194e6d01fc46eb7.bundle.map