<template>
<!--  #ifdef H5-->
    <img v-lazy="src">
<!--  #endif-->
<!--  #ifndef H5-->
    <image class="img" :src="src" lazy-load="true"></image>
<!--  #endif-->
</template>

<script>
  // #ifdef H5
    import Vue from 'vue'
    import VueLazyload from 'vue-lazyload'
    Vue.use(VueLazyload);
  // #endif

  export default {
    name: "lazy-img",
    props: ['src']
  }
</script>

<style scoped>
  .img{
    width: 100%;
    height: 100%;
  }
</style>
