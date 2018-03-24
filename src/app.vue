<template>
  <div class="wrapper">
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from './views/tab-bar';

export default {
  components: {
    TabBar,
  },
  data() {
    return {};
  },
  mounted() {

  },
  methods: {},
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
