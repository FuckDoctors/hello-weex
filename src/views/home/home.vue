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
        <wx-slider :slider-style="{width: '750px', height: '320px'}"
              :auto-play="true">
          <div class="slider-item" v-for="(item, index) in bannerSliders" :key="index">
            <image class="banner-slider-image" :src="item.img" />
          </div>
        </wx-slider>
      </div>

      <div class="shortcuts-container">
        <wx-slider :auto-play="false"
                :indicator-style="{itemSize: '10px', itemSelectedColor: '#000000'}">
          <div class="slider-item">
            <div class="shortcut-page"
                  v-for="n in pageRange(shortcuts.length, shortcutsPageSize)" :key="n">
              <div class="shortcut-wrapper"
                  v-for="i in pageRecordsRange(shortcuts.length, shortcutsPageSize, n)" :key="i">
                <image :src="shortcuts[i].icon" class="shortcut-icon" />
                <text class="shortcut-title">{{shortcuts[i].title}}</text>
              </div>
            </div>
          </div>
        </wx-slider>
      </div>

    </scroller>
  </div>
</template>

<script>
import {
  WxcIcon,
  // BindEnv, // 引入这个就报错，而且报的错有点奇怪。。。
} from 'weex-ui';

import TopArea from '@/components/top-area';
import SearchBar from '@/components/search-bar';
import WxSlider from '@/components/wx-slider';

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

      // shortcuts
      this.initShortcuts();
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
    initShortcuts() {
      /* eslint-disable */
      this.shortcuts = [
        {
          title: '美食',
          icon: '//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '商超便利',
          icon: '//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '夜宵',
          icon: '//fuss10.elemecdn.com/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '果蔬生鲜',
          icon: '//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '医药健康',
          icon: '//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '大牌5折',
          icon: '//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '浪漫鲜花',
          icon: '//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '麻辣烫',
          icon: '//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        {
          title: '地方菜系',
          icon: '//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        },
        // {
        //   title: '披萨意面',
        //   icon: '//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        // },
        // {
        //   title: '地方小吃',
        //   icon: '//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
        // },

        /* eslint-enable */
      ];
    },
    pageRange(totalRecords, pageSize) {
      // 想实现v-for range效果
      // https://github.com/vuejs/vue/issues/3641
      // 分页计算公式：总页数=（总记录数+每页显示数-1）/每页显示数
      // 或者下面的形式
      // 更多参考https://blog.csdn.net/u014424628/article/details/50553002
      let totalPages = ((totalRecords - 1) / pageSize) + 1;
      // js计算后得到小数，所以做了一些转换。
      totalPages = parseInt(totalPages, 10);
      return Array(totalPages).fill(0).map((value, index) => index + 1);
    },
    pageRecordsRange(totalRecords, pageSize, page) {
      // 更多分页相关计算参考这个：https://blog.csdn.net/imhxl/article/details/52774996
      const pageStart = (page - 1) * pageSize;
      let pageEnd = pageStart + pageSize;
      if (pageEnd > totalRecords) {
        pageEnd = pageStart + (totalRecords % pageSize);
      }

      // 返回当前页的范围
      const arr = Array(pageEnd - pageStart).fill(0).map((value, index) => pageStart + index);
      console.log(arr);
      return arr;
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
  height: 320px;
}
.banner-item {
  flex: 1;
}
.banner-slider-image {
  width: 750px;
  height: 320px;
}

.shortcuts-container {
  background-color: #ffffff;
}
.shortcut-page {
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
}
.shortcut-wrapper {
  flex-basis: 145px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.shortcut-icon {
  width: 90px;
  height: 90px;
}
.shortcut-title {
  font-size: 24px;
  color: #666666;
  margin-top: 10px;
}
</style>
