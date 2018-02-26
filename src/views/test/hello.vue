<template>
  <div class="wrapper">
    <no-pg-navbar />
    <nav-bar title="Hello" :left-button="leftButton" :left-button-click="back"></nav-bar>
    <div>
      <text>在Weex Playground中，此页的Weex Playground的导航栏应该不显示。（Android版测试通过）</text>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/nav-bar';
import helper from '../../utils/helper';
// weex里必须加后缀.vue，不然报错。
import NoPgNavbar from '../../components/modules/no-pg-navbar.vue';

export default {
  components: {
    NavBar,
    NoPgNavbar
  },
  data() {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png'
    };
  },
  mounted() {

  },
  methods: {
    back() {
      helper.back();
    }
  }
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
</style>
