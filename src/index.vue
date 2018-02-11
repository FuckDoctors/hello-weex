<template>
  <div class="wrapper">
    <nav-bar></nav-bar>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import NavBar from './components/nav-bar';
import TabBar from './views/tab-bar';

export default {
  components: {
    NavBar,
    TabBar
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {}
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
