<template>
	<view class="content">
    <view class="fix-area">
      <IndexSearch></IndexSearch>
      <CateList :list="list" shadow="true" @change="chanSecCate"></CateList>
    </view>

    <scroll-view class="container" scroll-y="true" v-if="type === 0">
      <swiper :duration="100" style="height: 240rpx">
        <swiper-item class="swiper-item">
          <image class="swiper-img" src="http://file.17gwx.com/sqkb/element/2018/10/09/856605bbc9abf58589.png"></image>
        </swiper-item>
      </swiper>
      <view class="new-fix-area">
        <navigator class="new-fix-area-item">
          <view class="text-area">
            <view class="title">9块9包邮</view>
            <view class="subTitle">每日白菜价</view>
          </view>
          <view class="pic-area">
            <image class="img" src="http://ms1.sqkb.com/dist/image/index/index-brand-abec78e019.jpg"></image>
          </view>
        </navigator>
        <navigator class="new-fix-area-item">
          <view class="text-area">
            <view class="title">排行榜</view>
            <view class="subTitle">热卖 爆款</view>
          </view>
          <view class="pic-area">
            <image class="img" src="http://ms1.sqkb.com/dist/image/index/index-rank-woman-60bf2a734c.jpg"></image>
          </view>
        </navigator>
      </view>
      <GoodsListCol v-for="item in 10"></GoodsListCol>
    </scroll-view>
    <scroll-view class="container" scroll-y="true" v-else>
      <swiper :duration="100" style="height: 240rpx">
        <swiper-item class="swiper-item">
          <image class="swiper-img" src="http://file.17gwx.com/sqkb/element/2018/10/09/856605bbc9abf58589.png"></image>
        </swiper-item>
      </swiper>
      <SecCateList></SecCateList>
      <view class="line"></view>
      <CateList :list="listCate" line="none" @change="chanSecCate"></CateList>
      <view class="line"></view>
      <GoodsList :list="goodsList"></GoodsList>
    </scroll-view>
	</view>
</template>

<script>
  import IndexSearch from '@/components/custom/Search'
  import CateList from '@/components/custom/CateList'
  import SecCateList from '@/components/custom/SecCateList'
  import GoodsList from '@/components/custom/GoodsList'
  import GoodsListCol from '@/components/custom/GoodsListCol'
	export default {
		data() {
			return {
        list: Array.from({length: 20}, (item, i) => ({name: '精选' + i, id: i})),
        listCate: [
          {
            name: '推荐',
            id: 1
          }, {
            name: '最新',
            id: 2
          }, {
            name: '销量',
            id: 3
          }
        ],
        goodsList: [

        ],
        type: 0
			}
		},
		onLoad() {

		},
		methods: {
      chanSecCate(val) {
        console.log(val);
        switch (val) {
          case '0': this.type = 0; break;
          default: this.type = 1;
        }
      }
		},
    components: {
      IndexSearch,
      CateList,
      SecCateList,
      GoodsList,
      GoodsListCol
    }
  }
</script>

<style lang="scss">
  .secActive{
    color: #ff4c2c;
  }
  .fix-area{
    position: fixed;
    top: 0;
    left: 0;
    width: 750upx;
    height: 168upx;
    z-index: 55555;

  }
  .container{
    margin-top: 168rpx;
    height: calc(100vh - 168rpx);
    .new-fix-area{
      height: 190rpx;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10rpx;
      .new-fix-area-item{
        height: 190rpx;
        width: 373rpx;
        display: flex;
        justify-content: space-between;
        .text-area{
          flex: 1 0;
          display: flex;
          justify-content: center;
          flex-direction: column;
          background-color: #fff;
          .title{
            color: #ff4900;
            font-size: 36rpx;
          }
          .subTitle{
            color: #666;
            font-size: 24rpx;
          }
        }
        .pic-area{
          width: 190rpx;
          height: 190rpx;
          .img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
	.content {
		text-align: center;
    overflow: hidden;
	}
  .swiper-item{
    height: 240rpx !important;
    .swiper-img{
      width: 750rpx;
      height: 100%;
    }
  }
  .line{
    width: 750rpx;
    height: 10rpx;
  }
</style>
