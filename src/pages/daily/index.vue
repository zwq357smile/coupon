<template>
  <view>
    <!--#ifdef H5-->
    <UniNavBar
        title="9块9包邮"
        leftIcon="arrowleft"
        right-text=""
        class="nav-bar"
        @click-left="goto('/pages/index/index')"
    >
    </UniNavBar>
    <!--#endif-->
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
  // #ifdef H5
  import UniNavBar from '@/components/uni-nav-bar/uni-nav-bar'
  // #endif
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
          }, {
            thumbnail_pic: "https://img.alicdn.com/bao/uploaded/i4/776151038/O1CN01rjr4CE1JXRfY2AOYs_!!0-item_pic.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i2/684033788/O1CN01CqkAvj1dqwqdypVis_!!684033788.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i3/2319581510/O1CN01jNdiEB1N1cblyIbrc_!!0-item_pic.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i4/2703745507/O1CN01iGvJQ91qYFgK9nFRb_!!2703745507.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://file.17gwx.com/sqkb/coupon/2019/8/14/_1565753552356020424_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i4/1925685154/O1CN01kUgzGw1nwZrLC92jR_!!1925685154.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i2/2944024434/O1CN01GaVzs81icohQefge3_!!2944024434.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i4/755579902/O1CN01LQPBFH2N1AOVFuTVP_!!0-item_pic.jpg_400x400",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i3/2123576851/O1CN01wLuslo20TnzdXQKGm_!!0-item_pic.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i1/3342707507/O1CN01HyrJII25KFog9Z8mh_!!0-item_pic.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/i2/3378345221/O1CN01S2QJtL1oRGNIVZZ37_!!3378345221.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i4/1700566676/O1CN01EDRlk81zBegbnSIt5_!!1700566676.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/bao/uploaded/i3/1656460674/O1CN01kjZXVG1GqjUrl7vxg_!!1656460674.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/bao/uploaded/i1/1656460674/O1CN01tvOBKN1GqjSHPPNxk_!!1656460674.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/tfscom/i2/3871639912/O1CN01oOVTdz2N5kLqyqA0d_!!0-item_pic.jpg_800x800",
            title: "美瞳年抛正品大牌清货",
            item_final_price_desc: '6.1折',
            final_price: "59.9",
            origin_price: "99",
            month_sales: 207
          }, {
            thumbnail_pic: "https://img.alicdn.com/bao/uploaded/i4/1656460674/O1CN01TVSmjE1GqjUxjzyrl_!!1656460674.jpg_800x800",
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
      // #ifdef H5
      UniNavBar,
      // #endif
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
    /* #ifdef MP-WEIXIN*/
    height: calc(100vh - 80rpx);
    /* #endif*/
    /* #ifndef MP-WEIXIN*/
    height: calc(100vh - 168rpx);
    /* #endif*/
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
