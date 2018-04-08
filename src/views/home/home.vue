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
                        @wxcEpSliderCurrentIndexSelected="bannerSliderIndexSelected"
                        :auto-play="true">
           <wxc-pan-item v-for="(item, index) in bannerSliders" :key="index"
                          :ext-id="index"
                          @wxcPanItemPan="bannerSliderItemPan"
                          @wxcPanItemClicked="bannerSliderItemClicked"
                          :class="['banner-slider']"
                          :slot="`card${index}_${bannerSliderId}`">
            <image :src="item.img" resize="cover" class="banner-slider-image"></image>
            <!-- <text>banner {{index}}, title: {{item.title}}</text> -->
           </wxc-pan-item>
        </wxc-ep-slider>
        <div class="banner-indicator-wrapper">
          <text v-for="(item, index) in bannerSliders" :key="index"
                :class="['banner-indicator',
                  index === bannerIndex && 'banner-indicator-checked']"
                @click="changeBannerPage(index)"></text>
        </div>
      </div>

      <!-- 这种在slider组件内埋入wxc-pan-item的方式，slider显示不正常，
        手动滑动是循环的效果，而且不显示indicator，也不能触发sliderItemClicked事件。
       -->
      <slider2 :sliders="sliders"
              :slider-id="2"
              class="slider-comp"
              @sliderItemClicked="sliderItemClicked">
        <image v-for="(item, index) in sliders" :key="index"
                :src="item.img"
                :style="{width: '750px', height: '320px'}"
                :slot="`slider-item-${index}`"></image>
      </slider2>

      <!-- 这个也不显示indicator，高度不对，估计是组件哪个地方写错了。。。外层出了滚动条 -->
      <!-- <slider :sliders="sliders"
              :slider-id="3"
              class="slider-comp"
              :auto-play="true">
        <wxc-pan-item v-for="(item, index) in sliders" :key="index"
                          @wxcPanItemPan="sliderItemPan(index)"
                          @wxcPanItemClicked="sliderItemClicked(index)"
                          :slot="`slider-item-${index}`">
          <image :src="item.img" :style="{width: '750px', height: '320px'}"></image>
        </wxc-pan-item>
      </slider> -->
      <text>Native没显示indicator...</text>
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
import Slider from '@/components/slider';
import Slider2 from '@/components/slider/slider-with-pan-item';
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
    Slider,
    Slider2,
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
      bannerIndex: 0,
      sliders: [],
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

      // slider test
      this.sliders = [
        {
          text: '花王纸尿裤',
          img: 'https://img1.360buyimg.com/da/jfs/t19219/215/1354604768/135651/2c8150bb/5ac4b50dNf32e5913.jpg!cr_1125x549_0_72',
        },
        {
          text: '好奇纸尿裤',
          img: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t7234/236/3937100355/467052/30cb123b/5ac38c3eNd9f13d4e.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t18673/217/1170508430/427170/b64ee48d/5abd9d7fN87b54c6e.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t19063/225/1080488411/146586/d2df102/5abb4683Nc8f84cfc.jpg!cr_1125x549_0_72!q70.jpg',
        },
        {
          img: 'https://m.360buyimg.com/mobilecms/s828x404_jfs/t18841/5/1285260207/98918/82c8b3be/5ac3459dN292e8395.jpg!cr_1125x549_0_72!q70.jpg',
        },
      ];
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
      ];
      this.bannerSliderCardLength = this.bannerSliders.length;

      // container-s和card-s必须包含特定的那几个属性，不然ep-slider有问题。
      // 样式
      this.bannerSliderContainerStyle = {
        flex: 1,
        flexDirection: 'row',
        // 下面几个是必须的属性
        position: 'relative',
        width: 750,
        height: 312,
      };
      // 下面几个是必须的属性
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
    bannerSliderIndexSelected(e) {
      this.bannerIndex = e.currentIndex;
    },
    changeBannerPage(index) {
      this.$refs['banner-slider'].manualSetPage(index);
    },
    sliderItemPan(index) {
      modal.toast({
        message: `按下了第${index}个slider...`,
      });
    },
    sliderItemClicked(index) {
      modal.toast({
        message: `点击了第${index}个slider...`,
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
  /* background-color: #ffffff; */
}

.banner-slider {
  flex: 1;
  align-items: center;
  justify-content: center;
}

.banner-slider-image {
  /* flex: 1; */
  width: 750px;
  height: 300px;
}

.banner-indicator-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  flex-direction: row;
  justify-content: center;
}
.banner-indicator {
  width: 15px;
  height: 15px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  background-color: transparent;
  margin-left: 10px;
}
.banner-indicator-checked {
  background-color: #ffffff;
}

.slider-comp {
  width: 750px;
  height: 320px;
}
</style>
