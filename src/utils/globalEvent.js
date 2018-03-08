const gEvt = weex.requireModule('globalEvent');
const myEvt = weex.requireModule('myGlobalEvent');

/**
 * 需要配合Native.
 * web用这种方式也无法实现多页间传值吧，还是用queryString的形式?
 */
export default {
  /**
   * register global event.
   * @param {string} eventName The name of the event you want to listen to.
   * @param {function} callback the callback function after executing this action.
   */
  addEventListener(eventName, callback) {
    if (WXEnvironment.platform === 'Web') {
      document.addEventListener(eventName, callback, false);
    } else {
      gEvt.addEventListener(eventName, callback);
    }
  },

  /**
   * remove global event
   * @param {string} eventName You no longer need to listen for event names.
   * @param {function} listener The EventListener function of the event handler to remove
   * from the event target.
   * Required for Web.
   */
  removeEventListener(eventName, listener) {
    if (WXEnvironment.platform === 'Web') {
      document.removeEventListener(eventName, listener);
    } else {
      gEvt.removeEventListener(eventName);
    }
  },

  /**
   * fire global event.
   * @param {string} eventName The name of the event you want to fire.
   * @param {*} params event params
   * @param {function} callback callback
   */
  fireGlobalEvent(eventName, params, callback) {
    if (WXEnvironment.platform === 'Web') {
      const evt = new Event(eventName);
      evt.data = params;
      document.dispatchEvent(evt);
      if (callback) {
        callback();
      }
    } else if (myEvt && myEvt.fireGlobalEvent) {
      // 自己实现native
      myEvt.fireGlobalEvent(eventName, params, callback);
    } else {
      // WeexPlayground
      const evt = weex.requireModule('event');
      if (evt && evt.fireNativeGlobalEvent) {
        // WeexPlayground没法传参。
        evt.fireNativeGlobalEvent(eventName, callback);
      }
    }
  },
};
