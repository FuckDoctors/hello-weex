import {
  USER_KEY,
  WHITE_LIST,
} from '@/config';

import helper from '@/utils/helper';

// storage放在这里，checkLogin里报错，提示storage为undefined。
// 放到checkLogin方法里就OK了。。。
// const storage = weex.requireModule('storage');

export default {
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const storage = weex.requireModule('storage');
      if (!this.checkWhiteList()) {
        storage.getItem(USER_KEY, (e) => {
          if (e.result === 'success' && e.data !== undefined) {
            // 已登录，什么都不做
          } else {
            helper.push('views/login/login');
          }
        });
      }
    },
    checkWhiteList() {
      const bundleUrl = weex.config.bundleUrl;
      // 匹配相对路径，第一个是匹配的全字符串，第二个是第一个分组，第三个是第二个分组
      const matches = /\/\/([^/]+?)\/([^\\.]+)/.exec(bundleUrl);
      let relativePath = null;
      if (matches && matches.length >= 3) {
        relativePath = matches[2];
      }
      if (relativePath == null) {
        return false;
      }
      return WHITE_LIST.some(item => relativePath.indexOf(item) > -1);
    },
  },
};
