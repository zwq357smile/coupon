<template>
  <view>
    <!--#ifdef H5-->
    <UniNavBar
        title="排行榜"
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
        @scrolltolower="getList"
    >
      <view class="scroll-wrap">
        <GoodsListCol
          v-for="item, index in list"
          type="rankBoard"
          :pic="item.pic"
          :title="item.title"
          :cut-price="item.zk_price"
          :ticket="item.ticket && item.ticket.coupon_price"
          :originPrice="item.raw_price"
          :discount="item.discount"
          :month-sales="item.month_sales"
          :ranking="index + 1"
          :url="`/pages/detail/index?pic=${item.pic}&page=rankBoard`"
        >
        </GoodsListCol>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  // #ifdef H5
  import UniNavBar from '@/components/uni-nav-bar/uni-nav-bar'
  // #endif
  import CateList from '@/components/custom/CateList'
  import GoodsListCol from "@/components/custom/GoodsListCol";
  import getRankData from "@/api/getRankData";

  export default {
    name: "index",
    data() {
      return {
        cateList: Array.from({length: 20}, (item, i) => ({name: '精选' + i, id: i.toString()})),
        scrollTop: 0,
        cateId: 0,
        page: 0,
        pageSize: 50,
        list: []
      }
    },
    components: {
      // #ifdef H5
      UniNavBar,
      // #endif
      CateList,
      GoodsListCol
    },
    mounted() {
      this.getList();
    },
    methods: {
      changeCate() {
        this.scrollTop = 1;
        this.$nextTick(() => {
          this.scrollTop = 0;
        })
      },
      getList() {
        let data = getRankData({cateId: this.cateId, page: this.page, pageSize: this.pageSize});
        this.page++;
        this.list = this.list.concat(data.data.coupon_list);

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
