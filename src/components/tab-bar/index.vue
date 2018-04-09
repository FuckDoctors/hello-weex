<template>
  <div class="tab-bar-wrapper">
    <wxc-tab-bar ref="wxc-tab-bar" :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                :is-tab-view="true"
                title-type="icon"
                @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div class="item-container"
            :style="contentStyle"
            v-for="(v,index) in tabTitles"
           :key="index"
           :ref="'tab-page-'+index"
            >
        <slot :name="`tab-page-${index}`">
          <text>{{v.title}}</text>
        </slot>
      </div>
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
  }
</style>

<script>
import { WxcTabBar, Utils } from 'weex-ui';
// import Config from './config';
export default {
  props: {
    tabTitles: {
      type: Array,
      default: () => ([]),
    },
    tabStyles: {
      type: Object,
      default: () => ({
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        iconWidth: 70,
        iconHeight: 70,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
      }),
    },
    selected: {
      type: Number,
      default: 0,
    },
  },
  components: { WxcTabBar },
  data: () => ({
    // tabTitles: Config.tabTitles,
    // tabStyles: Config.tabStyles
  }),
  created() {
    // 这种获得的高度包含了navbar的高度，本应用没有使用native nav-bar，所以要减去。
    // 不然tabPage会空出一块来。
    // const tabPageHeight = Utils.env.getPageHeight();
    // 这么做还是会空出一小块来，干脆tabPage设置全屏？
    // const tabPageHeight = this.getPageHeightWidthoutNav();
    const { env } = weex.config;
    const pageHeight = (env.deviceHeight / env.deviceWidth) * 750;
    const tabPageHeight = pageHeight;
    const { tabStyles } = this;
    this.contentStyle = { height: `${tabPageHeight - tabStyles.height}px` };
  },
  mounted() {
    if (this.tabTitles && this.tabTitles.length > 0 && this.selected) {
      this.setPage(this.selected, null, false);
    }
  },
  methods: {
    getPageHeightWidthoutNav() {
      const { env } = weex.config;
      // const navHeight = Utils.env.isWeb() ? 0 : (Utils.env.isIPhoneX() ? 176 : 132);
      // return env.deviceHeight / env.deviceWidth * 750 - navHeight;

      let statusBarHeight = 0;
      if (Utils.env.isWeb()) {
        statusBarHeight = 0;
      } else if (Utils.env.isAndroid()) {
        statusBarHeight = 25;
      } else if (Utils.env.isIPhoneX()) {
        statusBarHeight = 44;
      } else {
        statusBarHeight = 20;
      }

      return ((env.deviceHeight / env.deviceWidth) * 750) - statusBarHeight;
    },
    setPage(page, url = null, animated = true) {
      this.$refs['wxc-tab-bar'].setPage(page, url, animated);
    },
    wxcTabBarCurrentTabSelected(e) {
      this.$emit('currentTabSelected', e);
    },
  },
};
</script>
