<template>
  <tab-bar ref="tab-bar" style="flex: 1;"
            :selected="3"
            :tab-titles="tabTitles"
            :tab-styles="tabStyles">
    <home slot="tab-page-0"></home>
    <explore slot="tab-page-1"></explore>
    <message slot="tab-page-2"></message>
    <profile slot="tab-page-3"></profile>
  </tab-bar>
</template>

<script>
  import TabBar from '../../components/tab-bar';
  import config from './config';

  import Home from '../home/home';
  import Explore from '../explore/explore';
  import Message from '../message/message';
  import Profile from '../profile/profile';

  export default {
    components: {
      TabBar,
      Home,
      Explore,
      Message,
      Profile
    },
    data () {
      return {
        tabTitles: config.tabTitles,
        tabStyles: config.tabStyles
      }
    },
    mounted() {
      // set the third page
      // this.$refs['tab-bar'].setPage(2)

      // set the third page with no animation
      // this.$refs['tab-bar'].setPage(2,null,false);
    },
    methods: {

    },
  }
</script>

<style scoped>

</style>
