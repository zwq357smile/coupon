<template>
  <view class="goods-list-col" @tap="goto">
    <view
        class="tag iconfont"
        :class="ranking === 1? 'gold' : ranking === 2? 'sliver' : ranking === 3? 'copper': ''"
        v-if="ranking && ranking<11"
    >
      &#xe684;
      <view class="ranking">{{ranking}}</view>
    </view>
    <LazyImg class="pic" :src="pic"></LazyImg>
    <view class="info-area">
      <view class="title">
          <text class="tag-icon iconfont">&#xe600;</text>
          <text class="tag-icon iconfont" v-show="false"></text>
          {{title}}
        </view>
      <view class="item-wrap"></view>
      <view class="item-wrap">
          <view>原价 ￥{{originPrice}}</view>
          <view>月售 {{monthSales | numberTrans}}</view>
        </view>
      <view class="coupon_money">
          <view v-if="type === 'index'">折后<text class="value">￥{{cutPrice}}</text></view>
          <view v-if="type === 'rank'">券后<text class="value">￥{{cutPrice}}</text></view>
          <view class="coupon" v-if="type === 'index'">
            <text class="quan_num">{{ticket}}</text>
          </view>
          <view class="coupon" v-if="type === 'rankBoard'">
            <text class="quan_num">
              {{ticket? `${ticket}元券` : `${discount}折` }}
            </text>
          </view>
        </view>
    </view>
  </view>
</template>

<script>
  import LazyImg from './LazyImg'
  export default {
    name: "GoodsListCol",
    props: {
      title: String,
      pic: String,
      type: {
        type: String,
        default: 'index'
      },
      // 原价
      originPrice: String,
      // 折后价
      cutPrice: {
        type: String,
        default: '9.9'
      },
      // 折扣
      discount: String,
      // 券；金额
      ticket: [Number, String],
      //月销
      monthSales: Number,
      //名次
      ranking: Number,
      url: String
    },
    filters: {
      numberTrans: function (val) {
        return val >= 10000? (val / 10000).toFixed(1) + '万' : val;
      }
    },
    components: {
      LazyImg
    },
    methods: {
      goto() {
        if(!this.url) return;
        uni.navigateTo({
          url: this.url
        })
      }
    }
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
      top: 2rpx;
      left: 0;
      width: 66rpx;
      height: 66rpx;
      font-size: 60rpx;
      text-align: center;
      color: #1482d1;
      .ranking{
        position: absolute;
        top: 8rpx;
        width: 100%;
        height: 100%;
        font-size: 26rpx;
        color: #fff;
      }
    }
    .gold{
      color: #ffd50e;
    }
    .sliver{
      color: #b0cfe8;
    }
    .copper{
      color: #ff9f84;
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
          text-align: center;
        }
      }
    }
  }
</style>
