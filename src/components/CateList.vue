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
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
      <view class="item">精选</view>
    </view>
    <view class="icon-more-cate iconfont">&#xe603;</view>
  </view>
</template>

<script>
  export default {
    name: "CateList",
    data(){
      return {
        test: 'test'
      }
    }
  }
</script>

<style lang="scss">
.cate-container{
  width: 750upx;
  height: 60upx;
  font-size: 28upx;
  display: flex;
  align-items: center;
  padding: 0 10upx;
  box-sizing: border-box;
  .icon-more-cate{
    text-align: center;
    flex: 1;
    color: #ff1f1f;
    font-size: 36upx;
  }
  .scroll-wrap{
    width: 670upx;
    box-sizing: border-box;
    padding: 0 20upx 0 0;
  }
  .hide-scrollbar{
    width: 670upx;
    height: 60upx;
    overflow-x: auto;
    display: flex;
    align-items: center;
    &::-webkit-scrollbar, &::-webkit-scrollbar-thumb, &::-webkit-scrollbar-track, &::-webkit-scrollbar-track-piece{
      height: 0 !important;
    }
    .item{
      flex: 1 0;
      white-space: nowrap;
      margin: 0 30upx;
    }
  }
}
</style>
