<script>
export default {
  data() {
    return {};
  },
  created() {
    try {
      // 这种方式可以隐藏Playground的导航栏，但是状态栏还在。
      // ios
      const navigationBar = weex.requireModule('navigationBar');
      if (navigationBar && navigationBar.showTitleBar) {
        navigationBar.showTitleBar(false);
      }

      // android
      const titleBar = weex.requireModule('titleBar');
      if (titleBar && titleBar.showTitleBar) {
        titleBar.showTitleBar('false');
      }
    } catch (error) {
      // 出错
    }
  },
};
</script>

<style scoped>
</style>

