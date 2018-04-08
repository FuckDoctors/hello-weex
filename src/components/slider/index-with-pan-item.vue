<template>
  <div class="slider-wrapper">
    <wxc-ep-slider ref="ep-slider"
                    :slider-id="sliderId"
                    :card-length="cardLength"
                    :container-s="containerStyle"
                    :card-s="cardSize"
                    :interval="interval"
                    @wxcEpSliderCurrentIndexSelected="sliderIndexSelected"
                    :auto-play="autoPlay">
      <template v-for="(item, index) in sliders" :slot="`card${index}_${sliderId}`">
        <wxc-pan-item :key="index"
                      :class="['slider-item']"
                      @wxcPanItemPan="sliderItemPan"
                      @wxcPanItemClicked="sliderItemClicked">
          <slot :name="`slider-item-${index}`"></slot>
        </wxc-pan-item>
      </template>
    </wxc-ep-slider>
    <div class="indicator-wrapper" v-if="showIndicator">
      <text v-for="(item, index) in sliders" :key="index"
            :class="['indicator',
              index === selectedIndex && 'indicator-checked']"
            @click="changePage(index)"></text>
    </div>
  </div>
</template>

<style scoped>
.slider-wrapper {
  position: relative;
}
.indicator-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  flex-direction: row;
  justify-content: center;
}
.indicator {
  width: 15px;
  height: 15px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  border-color: #ffffff;
  background-color: transparent;
  margin-left: 10px;
}
.indicator-checked {
  background-color: #ffffff;
}
</style>

<script>
import {
  WxcEpSlider,
  WxcPanItem,
} from 'weex-ui';

export default {
  components: {
    WxcEpSlider,
    WxcPanItem,
  },
  props: {
    sliders: {
      type: Array,
      default: () => [],
    },
    // cardLength: {
    //   type: Number,
    //   default: 0,
    // },
    sliderId: {
      type: Number,
      default: 1,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
    containerStyle: {
      type: Object,
      default: () => ({
        // flex: 1,
        flexDirection: 'row',
        // 下面几个是必须的属性
        position: 'relative',
        width: 750,
        height: 320,
      }),
    },
    cardSize: {
      type: Object,
      default: () => ({
        height: 320,
        width: 750,
        spacing: 0,
        scale: 1,
      }),
    },
    interval: {
      type: Number,
      default: 2000,
    },
  },
  data: () => ({
    // cardLength: this.sliders.length, // data里不能有计算。
    selectedIndex: 0,
  }),
  created() {

  },
  mounted() {
    // 将cardLength从data挪到mounted也不行。
    // this.cardLength = this.sliders.length;
  },
  computed: {
    cardLength() {
      // 上面的字段计算cardLength的方法不行，然后放computed里了
      return this.sliders.length;
    },
  },
  methods: {
    sliderIndexSelected(e) {
      this.selectedIndex = e.currentIndex;
      this.$emit('sliderSelected', e);
    },
    changePage(index) {
      this.$refs['ep-slider'].manualSetPage(index);
    },
    sliderItemPan() {
      this.$emit('sliderItemPan', this.selectedIndex);
    },
    sliderItemClicked() {
      this.$emit('sliderItemClicked', this.selectedIndex);
    },
  },

};
</script>
