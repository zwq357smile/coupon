<template>
  <view class="goods-list">
    <view class="list-item" v-for="item in list">
      <GoodsListGrid :src="item.thumbnail_pic" :name="item.title"></GoodsListGrid>
      <view class="product-tmallnumber">
        <text>原价￥{{item.origin_price}}</text>
        <text>月销{{item.month_sales}}</text>
      </view>
      <view class="coupon_money">
        <view>折后￥<text class="value">{{item.final_price}}</text></view>
        <view class="coupon"><text class="quan_num">{{item.item_final_price_desc}}</text></view>
      </view>
    </view>
  </view>
</template>

<script>
  import GoodsListGrid from './GoodsListGrid'
  export default {
    name: "goodsList",
    data() {
      return {
        list: [
          {
            thumbnail_pic: "http://file.17gwx.com/sqkb/coupon/2019/5/27/_1558952556345883423_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i2/2200711151795/O1CN016fY61O1P89THRjFGo_!!2200711151795.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/bao/uploaded/i1/3866044824/O1CN013Bb8sM1lVR84s6il7_!!0-item_pic.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i4/1645517654/O1CN01unLOhG26Pa1gXpmre_!!1645517654.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i3/1751096580/O1CN011yTga1u6ITYuMsU_!!1751096580.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i3/2642000333/O1CN01f3e2qK1EKYROBlcHE_!!0-item_pic.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }
        ]
      }
    },
    onLoad: function() {
      console.log('onLoad')
    },
    created: function() {
      console.log('created')
    },
    onReady: function() {
      console.log('onReady')
    },
    methods: {

    },
    components: {
      GoodsListGrid
    }
  }
</script>

<style lang="scss">
  .goods-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 100rpx;
    .list-item{
      background-color: #fff;
      margin-bottom: 10rpx;
      border-radius: 4rpx;
    }
    .product-tmallnumber{
      font-size: 20rpx;
      color: #999;
      display: flex;
      justify-content: space-between;
      line-height: 30rpx;
      padding: 6rpx 12rpx;
    }
    .coupon_money{
      display: flex;
      justify-content: space-between;
      font-size: 22rpx;
      color: #ff4c2c;
      padding: 12rpx 12rpx;
      .value{
        font-size: 28rpx;
        font-weight: bold;
      }
    }
    .coupon{
      background-image: url('/static/image/quan_bg.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: #fff;
      width: 128rpx;
      line-height: 40rpx;
    }
  }
</style>
