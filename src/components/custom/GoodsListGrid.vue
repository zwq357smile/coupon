<template>
  <view class="grid-list">
<!--    <image class="cover" :src="src" lazy-load="true"></image>-->
    <LazyImg :src="src" class="cover"></LazyImg>
    <view class="title" :class="line === '1'? 'one-line' : 'two-line'">
      <text class="iconfont baoyou">&#xe680;</text>
      <text class="name">{{name}}</text>
    </view>
  </view>

</template>

<script>
  import LazyImg from './LazyImg'
  export default {
    name: "GoodsListGrid",
    props:['src', 'name', 'line'],
    components: {
      // LazyLoad
      LazyImg
    }
  }
</script>

<style lang="scss">
  .grid-list{
    display: flex;
    flex-direction: column;
    background-color: #fff;
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
      box-sizing: border-box;
    }
    .title.two-line{
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 90rpx;
    }
    .title.one-line{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      height: 56rpx;
    }
    .name{
      vertical-align: super;
    }
  }

</style>
