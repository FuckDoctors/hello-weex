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
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  import { WxcTabBar, Utils } from 'weex-ui';
  // import Config from './config';
  export default {
    props: {
      tabTitles: {
        type: Array,
        default: () => ([])
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
          textPaddingRight: 10
        })
      },
      selected: {
        type: Number,
        default: 0
      }
    },
    components: { WxcTabBar },
    data: () => ({
      // tabTitles: Config.tabTitles,
      // tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
    },
    mounted() {
      if (this.tabTitles && this.tabTitles.length > 0 && this.selected) {
        this.setPage(this.selected, null, false);
      }
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
