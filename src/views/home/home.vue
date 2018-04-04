<template>
  <div class="wrapper">
    <top-area></top-area>

    <div class="top">
      <div class="location">
        <wxc-icon class="location-icon" name="map"
            :icon-style="{color: 'white', fontSize: '28px', fontWeight: 'bold'}"></wxc-icon>
        <text class="geo" @click="changeLocation">{{location}}</text>
      </div>
      <search-bar ref="search-bar"
                  theme="transparent"
                  :disabled="true"
                  @searchbarInputDisabledClicked="searchbarInputDisabledClicked"></search-bar>
    </div>

    <scroller class="scroller">
      <div class="banner">
        <wxc-ep-slider ref="banner-slider"
                        :slider-id="bannerSliderId"
                        :card-length="bannerSliderCardLength"
                        :container-s="bannerSliderContainerStyle"
                        :card-s="bannerSliderCardSize"
                        :interval="bannerSliderInterval"
                        :auto-play="true">
           <wxc-pan-item v-for="(item, index) in bannerSliders" :key="index"
                          :ext-id="index"
                          @wxcPanItemPan="bannerSliderItemPan"
                          @wxcPanItemClicked="bannerSliderItemClicked"
                          :class="['banner-slider']"
                          :slot="`card${index}_${bannerSliderId}`">
            <text>banner {{index}}, title: {{item.title}}</text>
           </wxc-pan-item>
        </wxc-ep-slider>
      </div>
    </scroller>
  </div>
</template>

<script>
import {
  WxcIcon,
  WxcEpSlider,
  WxcPanItem,
  // BindEnv, // 引入这个就报错，而且报的错有点奇怪。。。
} from 'weex-ui';

import TopArea from '@/components/top-area';
import SearchBar from '@/components/search-bar';
import helper from '@/utils/helper';
import storageHelper from '@/utils/storageHelper';

import geoService from '@/services/geoService';

import {
  GEO_KEY,
  GEO_MORE_KEY,
} from '@/config';

const modal = weex.requireModule('modal');

export default {
  components: {
    TopArea,
    SearchBar,
    WxcIcon,
    WxcEpSlider,
    WxcPanItem,
  },
  data() {
    return {
      searchKey: '',
      location: '',
      geo: {},
      bannerSliders: [],
      bannerSliderId: 1,
      bannerSliderCardLength: 3,
      bannerSliderContainerStyle: {},
      bannerSliderCardSize: {},
      bannerSliderInterval: 3000,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // h5.ele.me信息
      // 齐鲁软件园
      this.geo = {
        latitude: 36.672408,
        longitude: 117.134598,
      };
      storageHelper.setItem(GEO_KEY, JSON.stringify(this.geo));
      geoService.reverseGeo(this.geo.latitude, this.geo.longitude)
        .then((ret) => {
          this.location = ret.data.name;
          storageHelper.setItem(GEO_MORE_KEY, JSON.stringify(ret.data));
        });

      // banner
      this.initBannerSlider();
    },
    initBannerSlider() {
      this.bannerSliders = [
        {
          title: '标题1',
          img: 'https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg',
        },
        {
          title: '标题2',
          img: 'https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg',
        },
        {
          title: '标题3',
          img: 'https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg',
        },
        {
          title: '标题4',
          img: 'https://img.alicdn.com/tps/TB1zBLaPXXXXXXeXXXXXXXXXXXX-121-59.svg',
        },
      ];
      this.bannerSliderCardLength = this.bannerSliders.length;

      // 样式
      this.bannerSliderContainerStyle = {
        flex: 1,
        flexDirection: 'row',
      };
      this.bannerSliderCardSize = {
        height: 300,
        width: 750,
        spacing: 0,
        scale: 1,
      };
    },
    bannerSliderItemPan({ element }) {
      console.log(`Panning ${element.extId}`);
      // if (BindEnv.supportsEBForAndroid()) {
      //   this.$refs['banner-slider'].bindExp(element);
      // }
    },
    bannerSliderItemClicked({ extId }) {
      modal.toast({
        message: `点击了第${extId}个Banner...`,
      });
    },
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

.banner {
  width: 750px;
  height: 300px;
}

.banner-slider {
  flex: 1;
  align-items: center;
  justify-content: center;
}

</style>
