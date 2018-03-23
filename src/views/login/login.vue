<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <image :src="logo" class="logo" />
      <text class="greeting">Hello Weex!</text>
    </div>
    <div class="login-wrapper">
      <input type="text" class="input" placeholder="用户名" v-model="username" />
      <input type="password" class="input" placeholder="密码" v-model="password" />
      <wxc-button text="登录" class="btn" type="red" @wxcButtonClicked="login"></wxc-button>
      <wxc-button text="注册" class="btn" type="normal" @wxcButtonClicked="register"></wxc-button>
    </div>
  </div>
</template>

<script>
import { WxcButton } from 'weex-ui';

import helper from '@/utils/helper';

import {
  USER_KEY,
} from '@/config';

const storage = weex.requireModule('storage');

export default {
  components: {
    WxcButton,
  },
  data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      username: '',
      password: '',
    };
  },
  methods: {
    check() {
      return true;
    },
    login() {
      if (this.check()) {
        const user = {
          username: this.username,
          password: this.password,
        };
        storage.setItem(USER_KEY, user, (e) => {
          if (e.result === 'success') {
            // 在线jsbundle转向本地jsbundle时路径不对，可以修改helper文件，改成原来的样子。
            // 这里省懒事，改成replaceOnline了，但这样首屏加载意义不大了，需要做优化。
            // helper.replace('app');
            helper.replaceOnline('app');
          }
        });
      }
    },
    register() {

    },
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
}
.logo-wrapper {
  margin-top: 150px;
  width: 750px;
  align-items: center;
}
.logo {
  width: 424px;
  height: 200px;
}
.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41B883;
}
/* 不支持这种写法？ */
/*
.login-wrapper {
  width: 750px;
  align-items: center;

  .input {
    width: 700px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    font-size: 14px;
    margin-top: 16px;

    &:focus {
      border-color: #0089dc;
    }
  }
}
*/
.login-wrapper {
  width: 750px;
  align-items: center;
}
.input {
  width: 700px;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 68px;
  font-size: 28px;
  margin-top: 32px;
  padding-left: 20px;
}
.input:focus {
  border-color: #0089dc;
}
.btn {
  margin-top: 32px;
}
</style>
