<template>
  <div class="slider-wrapper">
    <slider class="slider"
            @change="change"
            :style="sliderStyle"
            :interval="interval"
            :auto-play="autoPlay"
            :show-indicators="showIndicators"
            :infinite="infinite"
            :scrollable="scrollable"
            :index="selected">
      <slot></slot>
      <indicator v-if="showIndicators" class="slider-indicator"
                :style="indicatorStyle">
      </indicator>
    </slider>
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  width: 750px;
  height: 320px;
}
.slider-item {
  flex: 1;
  flex-direction: row;
}
.slider-indicator {
  position: absolute;
  height: 15px;
  left: 0;
  right: 0;
  bottom: 10px;
}
</style>

<script>
export default {
  props: {
    sliders: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Number,
      default: 0,
    },
    infinite: {
      type: Boolean,
      default: true,
    },
    scrollable: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    showIndicators: {
      type: Boolean,
      default: true,
    },
    sliderStyle: {
      type: Object,
      default: () => ({
        flexDirection: 'row',
        position: 'relative',
        width: 750,
        height: 320,
      }),
    },
    indicatorStyle: {
      type: Object,
      default: () => ({
        itemSize: '10px',
        itemColor: '#cccccc',
        itemSelectedColor: '#ffffff',
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
  methods: {
    change(e) {
      this.$emit('change', e);
    },
  },

};
</script>
