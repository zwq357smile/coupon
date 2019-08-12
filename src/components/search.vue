<template>
  <view class="search-tab">
      <a class="search">
        <view class="icon-search iconfont">&#xe68b;</view>
        <view class="search-tips">搜索优惠券</view>
      </a>
      <view class="sex">
        <p class="text">女版</p>
        <p class="icon-arrow iconfont">&#xe6cc;</p>
      </view>
    </view>
</template>

<script>

  export default {
    name: "IndexSearch"
  }
</script>

<style lang="scss">
.search-tab{
  width: 750upx;
  height: 96upx;
  background-image: linear-gradient(to right,#ff7438,#ff1f1f);
  padding: 0 30upx;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .search{
    width: 560upx;
    height: 60upx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.31);
    .search-tips{
      line-height: 60upx;
      font-size: 20upx;
      display: inline-block;
    }
  }
  .sex{
    display: flex;
    font-size: 28upx;
    align-items: center;
  }
}
</style>
