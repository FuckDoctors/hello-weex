<template>
  <div class="tab-bar-wrapper">
    <wxc-tab-bar ref="wxc-tab-bar" :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div class="item-container" :style="contentStyle"><text>首页</text></div>
      <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>
      <div class="item-container" :style="contentStyle"><text>消息中心</text></div>
      <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
    </wxc-tab-bar>
  </div>

</template>

<style scoped>
  .tab-bar-wrapper {
    flex: 1;
  }
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  import { WxcTabBar, Utils } from 'weex-ui';
  import Config from './config'
  export default {
    components: { WxcTabBar },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    methods: {
      setPage (page, url = null, animated = true) {
        this.$refs['wxc-tab-bar'].setPage(page, url, animated);
      },
      wxcTabBarCurrentTabSelected (e) {
        this.$emit('currentTabSelected', e);
      }
    }
  };
</script>
