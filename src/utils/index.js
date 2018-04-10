import { Utils } from 'weex-ui';

const utils = {
  getNavHeight() {
    // const navHeight = Utils.env.isWeb() ? 0 : ( ? 176 : 132);
    let navHeight = 0;
    if (Utils.env.isWeb()) {
      navHeight = 0;
    } else if (Utils.env.isIPhoneX()) {
      navHeight = 176;
    } else {
      navHeight = 132;
    }

    return navHeight;
  },

  /* eslint-disable */
  /*
    作者：FREAKFILTH
    链接：https://juejin.im/post/58abe531128fe1006a510e44
    来源：掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  */

  // 函数节流(Throttling)
  throttle(fn, interval) { // fn为要执行的函数，interval为延迟时间
    var _self = fn,  // 保存需要被延迟执行的函数引用
        timer,  // 定时器
        firstTime = true; // 是否第一次调用

    return function() { // 返回一个函数，形成闭包，持久化变量
      var args = arguments, // 缓存变量
          _me = this;

      if(firstTime) { // 如果是第一次调用，不用延迟执行
        _self.apply(_me, args);
        return firstTime = false;
      }

      if(timer) { // 如果定时器还在，说明上一次延迟执行还没有完成
        return false;
      }

      timer = setTimeout(function() { // 延迟一段时间执行
        clearTimeout(timer);
        timer = null;
        _self.apply(_me, args);
      }, interval || 500);
    };
  },

  // 函数防抖(Debouncing)
  debounce(fn, interval, immediate) {
    // fn为要执行的函数
    // interval为等待的时间
    // immediate判断是否立即执行
    var timeout;  //定时器

    return function() { // 返回一个闭包
      var context = this, args = arguments; // 先把变量缓存
      var later = function() {  // 把稍后要执行的代码封装起来
        timeout = null; // 成功调用后清除定时器
        if(!immediate) fn.apply(context, args); // 不立即执行时才可以调用
      };

      var callNow = immediate && !timeout;  // 判断是否立即调用，并且如果定时器存在，则不立即调用
      clearTimeout(timeout);  // 不管什么情况，先清除定时器，这是最稳妥的
      timeout = setTimeout(later, interval);  // 延迟执行
      if(callNow) fn.apply(context, args);  // 如果是第一次触发，并且immediate为true，则立即执行
    };
  },
  /* eslint-enable */
};

export default utils;
