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
        <wx-slider :slider-style="{width: '750px', height: '260px'}"
              :auto-play="true">
          <div class="slider-item" v-for="(item, index) in bannerSliders" :key="index">
            <image class="banner-slider-image" :src="item.img" />
          </div>
        </wx-slider>
      </div>

      <!-- shortcuts -->
      <shortcuts></shortcuts>

      <!-- 分割线 -->
      <separator text="推荐商家"
                text-background-color="#f2f3f4"
                font-size="36px"
                :line-width="300"
                line-color="#999999"
                :line-size="3"
                :height="60">
      </separator>

    </scroller>
  </div>
</template>

<script>
import {
  WxcIcon,
  // BindEnv, // 引入这个就报错，而且报的错有点奇怪。。。
} from 'weex-ui';

// BindEnv改用下面的方式引用
// import BindEnv from 'weex-ui/packages/utils/bind-env';

import TopArea from '@/components/top-area';
import SearchBar from '@/components/search-bar';
import WxSlider from '@/components/wx-slider';
import Separator from '@/components/separator';

import Shortcuts from '@/views/include/shortcuts';

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
    WxSlider,
    Shortcuts,
    Separator,
  },
  data() {
    return {
      searchKey: '',
      location: '',
      geo: {},
      bannerSliders: [],
      shortcuts: [],
      shortcutsPageSize: 10,
    };
  },
  created() {
    // 放在mounted里shortcuts取不到东西，所以挪到created里。
    this.init();
  },
  mounted() {
    // this.init();
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
          title: '花王纸尿裤',
          img: 'https://img1.360buyimg.com/da/jfs/t19219/215/1354604768/135651/2c8150bb/5ac4b50dNf32e5913.jpg!cr_1125x549_0_72',
        },
        {
          title: '好奇纸尿裤',
          img: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t7234/236/3937100355/467052/30cb123b/5ac38c3eNd9f13d4e.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          title: '标题3',
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t18673/217/1170508430/427170/b64ee48d/5abd9d7fN87b54c6e.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          title: '标题4',
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t19063/225/1080488411/146586/d2df102/5abb4683Nc8f84cfc.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t18841/5/1285260207/98918/82c8b3be/5ac3459dN292e8395.jpg!cr_1125x549_0_72!q70.jpg',
        },
      ];
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
  /* height: 320px; */
}
.banner-item {
  flex: 1;
}
.banner-slider-image {
  width: 750px;
  height: 280px;
}

</style>
