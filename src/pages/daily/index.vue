<template>
  <view>
    <UniNavBar
        title="9快9包邮"
        leftIcon="arrowleft"
        class="nav-bar"
        @click-left="goto('/pages/index/index')"
    >

    </UniNavBar>
    <CateList :list="cateList" @change="changeCate"></CateList>
    <scroll-view
        scroll-y="true"
        show-scrollbar="false"
        :scroll-top="scrollTop"
        class="scroll-view"
    >
      <view class="scroll-wrap">
        <view v-for="item in list" class="list-item">
          <GoodsListGrid :src="item.thumbnail_pic" :name="item.title" line="1"></GoodsListGrid>
          <view class="price-explane">已售：152</view>
          <view class="price-explane price-line">
            <view class="through">原价￥199.00</view>
            <view class="price">￥99.00</view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import UniNavBar from '@/components/uni-nav-bar/uni-nav-bar'
  import CateList from '@/components/custom/CateList'
  import GoodsListGrid from "@/components/custom/GoodsListGrid";

  export default {
    name: "index",
    data() {
      return {
        cateList: Array.from({length: 20}, (item, i) => ({name: '精选' + i, id: i.toString()})),
        scrollTop: 0,
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
    components: {
      UniNavBar,
      CateList,
      GoodsListGrid
    },
    methods: {
      changeCate() {
        this.scrollTop = 1;
        this.$nextTick(() => {
          this.scrollTop = 0;
        })
      },
      goto(url) {
        uni.redirectTo({url});
      }
    }
  }
</script>

<style lang="scss">
  .nav-bar{
    color: #2b3134;
  }
  .scroll-view{
    height: calc(100vh - 168rpx);
    .scroll-wrap{
      padding-bottom: 100rpx;
      display: flex;
      justify-content: space-around;
      flex-flow: row wrap;
      .list-item{
        width: 360rpx;
        background-color: #fff;
        margin-bottom: 14rpx;
        .price-line{
          display: flex;
          justify-content: space-between;
          margin-top: 10rpx;
          .price{
            color: #fd2e32;
            font-size: 35rpx;
            font-weight: bolder;
          }
        }
      }
    }
  }
</style>
