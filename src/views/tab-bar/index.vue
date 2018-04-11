<template>
  <tab-bar-comp ref="tab-bar" class="tab-bar-comp"
            :selected="0"
            :tab-titles="tabTitles"
            :tab-styles="tabStyles">
    <home slot="tab-page-0"></home>
    <explore slot="tab-page-1"></explore>
    <message slot="tab-page-2"></message>
    <profile slot="tab-page-3"></profile>
  </tab-bar-comp>
</template>

<script>
import TabBarComp from '../../components/tab-bar';
import config from './config';

import Home from '../home/home';
import Explore from '../explore/explore';
import Message from '../message/message';
import Profile from '../profile/profile';

export default {
  components: {
    TabBarComp,
    Home,
    Explore,
    Message,
    Profile,
  },
  created() {
    this.tabTitles = config.tabTitles;
    this.tabStyles = config.tabStyles;
  },
  data() {
    return {
      // tabTitles: config.tabTitles,
      // tabStyles: config.tabStyles
    };
  },
  mounted() {
    // set the third page
    // this.$refs['tab-bar'].setPage(2)

    // set the third page with no animation
    // this.$refs['tab-bar'].setPage(2,null,false);
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
