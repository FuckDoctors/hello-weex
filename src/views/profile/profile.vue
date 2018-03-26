<template>
  <div class="wrapper">
    <nav-bar title="我的"></nav-bar>
    <div class="page-wrapper">
      <text class="greeting">Hello Weex!</text>
      <text class="message">我的主页</text>
      <text class="message" @click="logout()">注销</text>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';

import helper from '@/utils/helper';
import {
  USER_KEY,
} from '@/config';

const storage = weex.requireModule('storage');

export default {
  components: {
    NavBar,
  },
  data() {
    return {
    };
  },
  methods: {
    logout() {
      storage.removeItem(USER_KEY, (e) => {
        if (e.result === 'success') {
          // 注销
          helper.replace('views/login/login');
        }
      });
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
  /* justify-content:center;普通web中默认水平居中，
   但weex中flex-direction中为column。所以使用这个就成了垂直居中了。
   flexbox中没有特别说明为横轴，纵轴，而是为主轴（main axis）和侧轴（cross axis），
   主要由flex-direction来觉得。
   个人理解，不知道对不对。
   */
  /* justify-content: center; */
  align-items: center;
  align-content: center;
}
.page-wrapper {
  flex: 1;
}
.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41B883;
  text-align: center;
}
.message {
  margin-top: 30px;
  font-size: 32px;
  color: #727272;
  text-align: center;
}
</style>
