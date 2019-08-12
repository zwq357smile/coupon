<template>
  <view class="cate-container">
    <view class="hide-scrollbar">
      <view class="active item">今日精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
    </view>
    <view class="more-cate">0</view>
  </view>
</template>

<script>
  export default {
    name: "CateList"
  }
</script>

<style lang="scss">
.cate-container{
  width: 750upx;
  height: 60upx;
  font-size: 28upx;
  display: flex;
  align-items: center;
  .more-cate{
    text-align: center;
    flex: 1;
  }
  .hide-scrollbar{
    width: 670upx;
    box-sizing: border-box;
    padding: 0 20upx;
    height: 60upx;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar{
    height: 0;
    width: 0;
  }
    align-items: center;
    .item{
      flex: 1 0;
      white-space: nowrap;
      margin: 0 30upx;
    }
  }
}
</style>
