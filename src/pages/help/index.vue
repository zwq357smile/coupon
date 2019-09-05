<template>
  <view class="help">
    <view class="help-item">
      <view class="item-left">
      <view class="introduction icon">&#xe61d;</view>
      <view class="color-orange title">APP简介</view>
    </view>
      <view class="item-right">
      <view class="block-item" @tap="showDetail('1')">好货优惠券介绍</view>
      <view class="block-item" @tap="showDetail('2')">优惠券介绍</view>
      <view class="block-item" @tap="showDetail('3')">代理模式介绍</view>
      <view class="block-item" @tap="showDetail('4')">名词解释</view>
    </view>
    </view>
    <view class="help-item">
      <view class="item-left">
        <view class="teach icon">&#xe685;</view>
        <view class="color-blue title">使用教程</view>
      </view>
      <view class="item-right">
        <view class="block-item">如何领券购买</view>
        <view class="block-item">如何分享APP</view>
        <view class="block-item">如何分享商品</view>
        <view class="block-item">优惠券失效</view>
      </view>
    </view>
    <view class="help-item">
      <view class="item-left">
        <view class="spread icon">&#xe720;</view>
        <view class="color-deep title">推广教程</view>
      </view>
      <view class="item-right">
        <view class="block-item">如何推广赚钱</view>
        <view class="block-item">如何发展下级</view>
        <view class="block-item">订单后台没显示</view>
        <view class="block-item">订单状态解读</view>
      </view>
    </view>
    <view class="help-item">
      <view class="item-left">
        <view class="cashier icon">&#xe6e2;</view>
        <view class="color-purple title">提现问题<!--<view class="icon-right">&#xe6cc;</view>--></view>
      </view>
      <view class="item-right">
        <view class="block-item">如何提现</view>
        <view class="block-item">结算到账时间</view>
        <view class="block-item">提现门槛</view>
        <view class="block-item">到账时间</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
      }
    },
    methods: {
      showDetail(type) {
        console.log('%ctype:%o', 'font-size: 22px; color: #38AAFF', type);
        uni.navigateTo({
          url: `/pages/help/detail?type=${type}`
        });
      }
    }
  }
</script>

<style lang="scss">
  .help{
    height: 100vh;
    background-color: #fff;
    .help-item{
      display: flex;
      height: 200rpx;
      color: #717171;
      border-bottom: 6rpx solid #eee;
      .item-left{
        width: 170rpx;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-right: 1rpx solid #eee;
        .introduction{
          background-color: #ff953e;
        }
        .teach{
          background-color: #1bc3d9;
        }
        .spread{
          background-color: #538cff;
        }
        .cashier{
          background-color: #ff52a2;
        }
        .icon{
          font-family: iconfont;
          font-size: 80rpx;
          width: 100rpx;
          height: 100rpx;
          line-height: 100rpx;
          border-radius: 50%;
          color: #fff;
          text-align: center;
        }
        .color-blue{
          color: #1bc3d9;
        }
        .color-orange{
          color: #ff953e;
        }
        .color-deep{
          color: #538cff;
        }
        .color-purple{
          color: #ff52a2;
        }
        .title{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          align-content: center;
          font-size: 24rpx;
          margin-top: 18rpx;
          .icon-right{
            font-family: iconfont;
            margin-left: 10rpx;
            font-size: 24rpx;
          }
        }
      }
      .item-right{
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        .block-item{
          flex: 1 0 50%;
          height: 100rpx;
          line-height: 100rpx;
          text-align: center;
          font-size: 24rpx;
          border-bottom: 1rpx solid #eee;
          border-right: 1rpx solid #eee;
          box-sizing: border-box;
        }
        .block-item:nth-of-type(2n){
          border-right: none;
        }
        .block-item:nth-of-type(n + 3){
          border-bottom: none;
        }
      }
    }
  }
</style>
