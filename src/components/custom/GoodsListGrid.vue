<template>
  <view class="grid-list">
    <image class="cover" :src="src" lazy-load="true"></image>
    <view class="title">
      <text class="iconfont baoyou">&#xe680;</text>
      <text class="name">{{name}}</text>
    </view>
  </view>

</template>

<script>
  // import LazyLoad from './LazyLoad'
  export default {
    name: "GoodsListGrid",
    props:['src', 'name'],
    components: {
      // LazyLoad
    }
  }
</script>

<style lang="scss">
  .grid-list{
    display: flex;
    flex-direction: column;
    .cover{
      width: 360rpx;
      height: 360rpx;
    }
    .baoyou{
      color: #ff4c2c;
      margin-right: 10rpx;
      font-size: 54rpx;
    }
    .title{
      font-size: 26rpx;
      line-height: 28rpx;
      text-align: left;
      padding: 12rpx 12rpx;
      align-items: first;
      width: 360rpx;
      height: 90rpx;
      box-sizing: border-box;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .name{
      vertical-align: super;
    }
  }

</style>
