<template>
  <div class="wrapper">
    <no-pg-navbar />
    <nav-bar title="Hello" :left-button="leftButton" :left-button-click="back"></nav-bar>
    <scroller>
      <div>
        <text>在Weex Playground中，此页的Weex Playground的导航栏应该不显示。（Android版测试通过）</text>
      </div>
      <div v-if="params">
        <text>Params: {{ params }}</text>
      </div>
      <text class="btn" @click="backWithResult">带返回值（跳转方式）</text>
      <text class="btn" @click="backWithoutResult">无返回值（跳转方式）</text>
      <text>用跳转的形式返回值，会在navigator中留下，使用pop时会出来。Weex中没有vue-router中的replace，不留记录的处理</text>
      <text class="btn" @click="backWithResultByChannal('op1')">BroadcastChannel返回值-操作1</text>
      <text class="btn" @click="backWithResultByChannal('op2')">BroadcastChannel返回值-操作2</text>
      <text>Message: {{ message }}</text>
      <text class="btn" @click="backWithResultByGlobalEvent('op1')">GlobalEvent返回值-操作1</text>
      <text class="btn"
          @click="backWithResultByGlobalEvent('storage')"
      >GlobalEvent返回值-测试storage</text>
      <text>Storage: {{ storage }}</text>
      <text class="btn" @click="testGlobalEvent('page')">GlobalEvent通信-页面内</text>
    </scroller>
  </div>
</template>

<script>
import globalEvent from '@/utils/globalEvent';

import NavBar from '../../components/nav-bar';
import helper from '../../utils/helper';
// weex里必须加后缀.vue，不然报错。
import NoPgNavbar from '../../components/modules/no-pg-navbar';

const modal = weex.requireModule('modal');
const storage = weex.requireModule('storage');

export default {
  components: {
    NavBar,
    NoPgNavbar,
  },
  data() {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
      params: null,
      message: null,
      storage: null,
    };
  },
  mounted() {
    this.params = helper.getParams();
    this.channel = new BroadcastChannel('TEST');
    this.message = {
      type: null,
      data: null,
    };
    this.channel.onmessage = (event) => {
      this.message = event.data;
      this.params = event.data;
    };
    // 这种先触发（传参），后面绑定监听事件（取值）的方式不行。（正向传参）
    // globalEvent.addEventListener('hello-params', (params) => {
    //   console.log(`addEventListener callback (hello-params), result: ${params}`);
    //   this.params = params;
    //   modal.toast({
    //     message: `addEventListener callback (hello-params) in hello.vue.
    //       params: ${JSON.stringify(params)}`,
    //   });
    // });
    this.getStorage();
  },
  methods: {
    getStorage() {
      // 从storage中取值
      storage.getItem('hello-storage', (e) => {
        if (e.result === 'success') {
          this.storage = JSON.parse(e.data);
          // 从storage中移除
          storage.removeItem('hello-storage');
        } else {
          this.storage = null;
        }
      });
    },
    backWithResult() {
      const result = {
        ret1: 'return value 1',
        ret2: 'return value 2',
      };
      helper.goto('views/test/index', result);
    },
    backWithoutResult() {
      helper.goto('views/test/index');
    },
    backWithResultByChannal(op) {
      this.sendMessage(op, `Data from ${op}`);
      helper.back();
    },
    backWithResultByGlobalEvent(op) {
      globalEvent.fireGlobalEvent('hello-return', {
        op,
        data: `Data from ${op}`,
      }, () => {
        modal.toast({
          message: 'fireGlobalEvent callback in hello.vue',
        });
        console.log('fireGlobalEvent callback in hello.vue');
        helper.back();
      });
    },
    testGlobalEvent(op) {
      // globalEvent.removeEventListener('hello-page', (result) => {
      //   console.log(`addEventListener callback (hello-page), result: ${result}`);
      //   this.result = result;
      //   modal.toast({
      //     message: `addEventListener callback (hello-page), result: ${JSON.stringify(result)}`,
      //   });
      //   // web上还是会执行多次callback，应该跟removeEventListener没加后面的listener有关。
      //   globalEvent.removeEventListener('hello-page', listener);
      // });
      // web端移除时需要指定listener所以，改成具名function
      const listener = (result) => {
        console.log(`addEventListener callback (hello-page), result: ${result}`);
        this.result = result;
        modal.toast({
          message: `addEventListener callback (hello-page), result: ${JSON.stringify(result)}`,
        });
        // web上还是会执行多次callback，应该跟removeEventListener没加后面的listener有关。
        globalEvent.removeEventListener('hello-page', listener);
      };
      globalEvent.addEventListener('hello-page', listener);

      // 同页面内也不能触发globalEvent，试试延迟调用。
      setTimeout(() => {
        globalEvent.fireGlobalEvent('hello-page', {
          op,
          data: `Data from ${op}`,
        }, () => {
          modal.toast({
            message: 'fireGlobalEvent callback(hello-page) in hello.vue',
          });
          console.log('fireGlobalEvent callback(hello-page) in hello.vue');
        });
      }, 1000);
    },
    sendMessage(type, data) {
      this.message = {
        type,
        data,
      };
      this.channel.postMessage(this.message);
    },
    getMessage() {
      return this.message;
    },
    back() {
      helper.back();
    },
  },
  beforeDestroy() {
    globalEvent.removeEventListener('hello-params');
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
.btn {
  margin: 15px;
  padding: 15px;
  background-color: #888888;
}
</style>
