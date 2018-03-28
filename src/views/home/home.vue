<template>
  <div class="wrapper">
    <top-area></top-area>

    <div class="top">
      <div class="location">
        <wxc-icon class="location-icon" name="map"
            :icon-style="{color: 'white', fontSize: '28px', fontWeight: 'bold'}"></wxc-icon>
        <text class="geo" @click="changeLocation">齐鲁软件园</text>
      </div>
      <search-bar ref="search-bar"
                  theme="transparent"
                  :disabled="true"
                  @searchbarInputDisabledClicked="searchbarInputDisabledClicked"></search-bar>
    </div>

    <scroller class="scroller"></scroller>
  </div>
</template>

<script>
import { WxcIcon } from 'weex-ui';

import TopArea from '@/components/top-area';
import SearchBar from '@/components/search-bar';
import helper from '@/utils/helper';

const modal = weex.requireModule('modal');

export default {
  components: {
    TopArea,
    SearchBar,
    WxcIcon,
  },
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    changeLocation() {
      modal.toast({
        message: '未实现...',
      });
    },
    searchbarInputDisabledClicked() {
      helper.push('views/search/search');
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
}

.top {
  background-color: #009ff0;
  color: #ffffff;
}
.location {
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  font-size: 28px;
  color: #ffffff;
  align-items: center;
}
.location-icon {
  width: 32px;
  font-size: 28px;
}
.geo {
  font-size: 28px;
  color: #ffffff;
  lines: 1;
  font-weight: bold;
}

.scroller {
  flex: 1;
}

</style>
