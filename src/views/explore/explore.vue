<template>
  <div class="wrapper">
    <nav-bar title="推荐"></nav-bar>

    <text class="greeting">Hello Weex!</text>
    <text class="message">特别推荐</text>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
    };
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
  align-items: center;
  align-content: center;
}
.greeting {
  margin-top: 70px;
  font-size: 50px;
  color: #41B883;
}
.message {
  margin: 30px;
  font-size: 32px;
  color: #727272;
}
</style>
