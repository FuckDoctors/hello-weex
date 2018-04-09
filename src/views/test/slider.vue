<template>
  <div class="wrapper">
    <nav-bar title="内置slider测试" :show-back="true" :left-button-click="back"></nav-bar>

    <slider class="slider" interval="3000" auto-play="true" :index="2">
      <div class="slider-item" v-for="(item, index) in sliders" :key="index">
        <image class="slider-image" :src="item.img" />
      </div>
      <indicator class="slider-indicator"
                style="itemSize: 10px; itemSelectedColor: #ffffff">
      </indicator>
    </slider>

    <wx-slider :selected="3" :show-indicators="false">
      <div class="slider-item" v-for="(item, index) in sliders" :key="index">
        <image class="slider-image" :src="item.img" />
      </div>
    </wx-slider>

    <wx-slider :slider-style="{width: '750px', height: '360px'}"
                :indicatorStyle="{itemSize: '15px', itemSelectedColor: '#000000'}"
                :auto-play="false">
      <div class="slider-item" v-for="(item, index) in sliders" :key="index">
        <image class="slider-image-large" :src="item.img" />
      </div>
    </wx-slider>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar';
import WxSlider from '@/components/wx-slider';
import helper from '@/utils/helper';

export default {
  components: {
    NavBar,
    WxSlider,
  },
  data() {
    return {
      sliders: [
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
      ],
    };
  },
  methods: {
    back() {
      helper.back();
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
  background-color: #ffffff;
}

.slider {
  position: relative;
  width: 750px;
  height: 320px;
}
.slider-item {
  flex: 1;
  flex-direction: row;
}
.slider-image {
  width: 750px;
  height: 320px;
}
.slider-indicator {
  /* absolute在web下正常，在native不显示，必须显示的设置高度才行。 */
  /* 详见“注意1” http://weex-project.io/cn/references/components/indicator.html */
  position: absolute;
  height: 15px;
  left: 0;
  right: 0;
  bottom: 10px;
}

.slider-image-large {
  width: 750px;
  height: 360px;
}
</style>
