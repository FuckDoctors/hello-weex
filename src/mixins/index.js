const navigator = weex.requireModule('navigator');

import * as config from '@/config';

export default {
  methods: {
    jump (url, callback) {
      navigator.push({
        url: `${config.JS_BUNDLE_PREFIX}/${url}`,
        animated: 'true'
      }, () => callback && callback.call());
    }
  }
}
