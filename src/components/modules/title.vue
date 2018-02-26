<!-- CopyRight (C) 2017-2022 Alibaba Group Holding Limited. -->
<!-- Created by Tw93 on 17/07/28. -->

<template>
  <div class="wxc-title" :aria-hidden="true">
    <image class="logo" :src="logo"></image>
    <text class="text">{{title}}</text>
  </div>
</template>

<style scoped>
  .wxc-title {
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
  }
  .logo {
    width: 120px;
    height: 120px;
  }
  .text {
    font-size: 30px;
    font-weight: 600;
    color: #000000;
  }
</style>

<script>
import { LOGO } from '../../config';

export default {
  props: {
    logo: {
      type: String,
      default: LOGO,
    },
    title: String,
  },
};
</script>
