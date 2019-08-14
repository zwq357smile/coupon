<template>
  <view class="goods-list-col">
    <view class="tag"></view>
    <image class="pic" src="https://img.alicdn.com/i1/2273776315/O1CN01HWy7Mp1wWJhBxhUu8_!!2273776315.jpg_400x400"></image>
    <view class="info-area">
      <view class="title">
          <text class="tag-icon iconfont">&#xe600;</text>
          <text class="tag-icon iconfont" v-show="false"></text>
          嗨吃家整箱装6桶重庆正宗酸辣粉
        </view>
      <view class="item-wrap"></view>
      <view class="item-wrap">
          <view>原价 ￥9.9</view>
          <view>月销 1231</view>
        </view>
      <view class="coupon_money">
          <view>折后<text class="value">￥9.9</text></view>
          <view class="coupon"><text class="quan_num">券后9.9</text></view>
        </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "GoodsListCol"
  }
</script>

<style lang="scss">
  .goods-list-col{
    width: 750rpx;
    height: 250rpx;
    position: relative;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    margin-bottom: 10rpx;
    .tag{
      position: absolute;
      top: 0;
      left: 0;
      width: 66rpx;
      height: 66rpx;
    }
    .pic{
      width: 250rpx;
      height: 250rpx;
    }
    .info-area{
      width: 480rpx;
      height: 250rpx;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .title{
        font-size: 28rpx;
        color: #444;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 480rpx !important;
        padding: 12rpx;
        box-sizing: border-box;
        .tag-icon{
          font-size: 30rpx;
          color: #ff4c2c;
        }
      }
      .item-wrap{
        color: #999;
        font-size: 24rpx;
        height: 32rpx;
        line-height: 32rpx;
        display: flex;
        padding: 12rpx;
        justify-content: space-between;
      }
      .coupon_money{
        display: flex;
        justify-content: space-between;
        font-size: 22rpx;
        color: #ff4c2c;
        padding: 12rpx 12rpx;
        .value{
          font-size: 42rpx;
          font-weight: bold;
        }
        .coupon{
          background-image: url('http://ms1.sqkb.com/dist/image/before/quan_bg-1748afdb99.png');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          color: #fff;
          width: 180rpx;
          line-height: 52rpx;
          font-size: 24rpx;
        }
      }
    }
  }
</style>
