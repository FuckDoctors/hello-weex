<template>
  <div class="wrapper">
    <nav-bar></nav-bar>
    <!-- <scroller class="scroller">
      <div class="container">

      </div>
    </scroller> -->
    <tab-bar ref="tab-bar"></tab-bar>
  </div>
</template>

<script>
import NavBar from './components/nav-bar';
import TabBar from './components/tab-bar';

export default {
  components: {
    NavBar,
    TabBar
  },
  data() {
    return {};
  },
  mounted() {
    // set the third page
  // this.$refs['tab-bar'].setPage(2)

  // set the third page with no animation
  this.$refs['tab-bar'].setPage(2,null,false);
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
.scroller {
  flex: 1;
}
.container {
  width: 750px;
  height: 180px;
  align-items: flex-start;
  padding-top: 60px;
}
</style>
