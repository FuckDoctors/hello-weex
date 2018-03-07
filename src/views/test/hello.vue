<template>
  <div class="wrapper">
    <no-pg-navbar />
    <nav-bar title="Hello" :left-button="leftButton" :left-button-click="back"></nav-bar>
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
  </div>
</template>

<script>
import NavBar from '../../components/nav-bar';
import helper from '../../utils/helper';
// weex里必须加后缀.vue，不然报错。
import NoPgNavbar from '../../components/modules/no-pg-navbar';

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
  },
  methods: {
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
  background-color: #888;
}
</style>
