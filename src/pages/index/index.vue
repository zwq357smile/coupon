<template>
	<view class="content">
    <view class="fix-area">
      <IndexSearch @change="openPopup"></IndexSearch>
      <CateList :list="list" shadow="true" @change="chanSecCate"></CateList>
    </view>

    <scroll-view
        class="container"
        scroll-y="true"
        v-if="type === 0"
        @scrolltolower="nextPage"
        :scroll-top="top"
    >
      <swiper :duration="100" style="height: 240rpx">
        <swiper-item class="swiper-item">
          <image class="swiper-img" src="http://file.17gwx.com/sqkb/element/2018/10/09/856605bbc9abf58589.png"></image>
        </swiper-item>
      </swiper>
      <view class="new-fix-area">
        <navigator class="new-fix-area-item" url="/pages/daily/index">
          <view class="text-area">
            <view class="title">9块9包邮</view>
            <view class="subTitle">每日白菜价</view>
          </view>
          <view class="pic-area">
            <image class="img" src="http://ms1.sqkb.com/dist/image/index/index-brand-abec78e019.jpg"></image>
          </view>
        </navigator>
        <navigator class="new-fix-area-item" url="/pages/rankBoard/index">
          <view class="text-area">
            <view class="title">排行榜</view>
            <view class="subTitle">热卖 爆款</view>
          </view>
          <view class="pic-area">
            <image class="img" src="http://ms1.sqkb.com/dist/image/index/index-rank-woman-60bf2a734c.jpg"></image>
          </view>
        </navigator>
      </view>
      <GoodsListCol
          v-for="item in colList"
          :title="item.title"
          :pic="item.pic"
          :cut-price="item.coupon_info && item.coupon_info.final_price"
          :ticket="item.coupon_info && item.coupon_info.item_final_price_desc"
          :originPrice="item.coupon_info && item.coupon_info.origin_price"
          :discount="item.discount"
          :month-sales="item.month_sales"
          :url="`/pages/detail/index?pic=${item.pic}&page=index`"
      >
      </GoodsListCol>
    </scroll-view>

    <scroll-view
        class="container"
        scroll-y="true"
        v-if="type === 1"
        @scrolltolower="nextPage"
        :scroll-top="top"
    >
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

    <view class="fix">
      <image class="img" src=""></image>
      <view class="content">
        <view>打开APP</view>
        <view class="price">买同样的商品，那更大的券</view>
      </view>
      <view class="button">立即打开</view>
    </view>
    <uni-popup :custom="true" ref="popup">
      <view class="sex-select-box">
        <view class="iconfont" @tap="closePopup">&#xe601;</view>
        <view class="text">选择身份</view>
        <view>切换身份之后将会跳转至首页</view>
        <view class="select-content">
          <view class="female"></view>
          <view class="male"></view>
        </view>
      </view>
    </uni-popup>
	</view>
</template>

<script>
  import IndexSearch from '@/components/custom/Search'
  import CateList from '@/components/custom/CateList'
  import SecCateList from '@/components/custom/SecCateList'
  import GoodsList from '@/components/custom/GoodsList'
  import GoodsListCol from '@/components/custom/GoodsListCol'
  import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
    name: 'index',
		data() {
			return {
        list: Array.from({length: 20}, (item, i) => ({name: '精选' + i, id: i.toString()})),
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
        colList: [
          {
            "title": "送枕套专柜正品天然乳胶枕保健枕头",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i3/2200812863033/O1CN010weaDD1YH9ohPDqY5_!!2200812863033.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000000,
            "month_sales": 2712,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "送枕套专柜正品天然乳胶枕保健枕头",
              "url": "https://item.taobao.com/item.htm?id=600120407388",
              "description": "",
              "prepayment": "0",
              "discount": "0.9",
              "pid": "",
              "score": 5403625,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108510380,
                "coupon_start_time": 1565712000,
                "coupon_end_time": 1566316799,
                "coupon_price": 200,
                "start_fee": "219",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=d699ba0f3046492587881b98af3dc3b4&itemId=600120407388&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i1/6000000006426/O1CN01aFKunC1xL9drNPDNm_!!6000000006426-0-tbvideo.jpg_310x310.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2200812863033/p/1/e/6/t/1/225280302534.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 126306121,
              "raw_price": "219.8",
              "zk_price": "19.8",
              "platform_id": 1,
              "item_id": 600120407388,
              "post_free": 1,
              "month_sales": 2712,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i3/2200812863033/O1CN010weaDD1YH9ohPDqY5_!!2200812863033.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/126306121?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/126306121?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 21229,
              "cate_id": 28,
              "cate_id3": 21230,
              "cate_id4": 21234,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "20.1",
              "is_accurate": false,
              "item_final_price_desc": "200元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "219.8",
              "final_price": "19.8",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "嗨吃家整箱装6桶重庆正宗酸辣粉",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/i1/2273776315/O1CN01HWy7Mp1wWJhBxhUu8_!!2273776315.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000001,
            "month_sales": 145279,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "嗨吃家整箱装6桶重庆正宗酸辣粉",
              "url": "https://item.taobao.com/item.htm?id=596604160324",
              "description": "",
              "prepayment": "0",
              "discount": "9.0",
              "pid": "",
              "score": 1219715,
              "stid": "29218152404617792",
              "intv2": 15,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 94404424,
                "coupon_start_time": 1565625600,
                "coupon_end_time": 1569859199,
                "coupon_price": 1,
                "start_fee": "1",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk596604160324&itemId=596604160324&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i1/6000000002556/O1CN01H41EO01UkgtO8Z2CD_!!6000000002556-0-tbvideo.jpg_310x310.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2273776315/p/1/e/6/t/1/232248293203.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 108577078,
              "raw_price": "9.9",
              "zk_price": "8.9",
              "platform_id": 1,
              "item_id": 596604160324,
              "post_free": 1,
              "month_sales": 145279,
              "thumbnail_pic": "https://img.alicdn.com/i1/2273776315/O1CN01HWy7Mp1wWJhBxhUu8_!!2273776315.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/108577078?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/108577078?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 23155,
              "cate_id": 13,
              "cate_id3": 23156,
              "cate_id4": 23161,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 1,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "1.5",
              "is_accurate": false,
              "item_final_price_desc": "1元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "9.9",
              "final_price": "8.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "双耳迷你无线单耳入耳式运动耳机",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i2/735403887/O1CN01qdYttT1eaI39IGQBe_!!735403887.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000002,
            "month_sales": 2854,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "双耳迷你无线单耳入耳式运动耳机",
              "url": "https://item.taobao.com/item.htm?id=598113096144",
              "description": "",
              "prepayment": "0",
              "discount": "0.8",
              "pid": "",
              "score": 914900,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108172652,
                "coupon_start_time": 1565625600,
                "coupon_end_time": 1566230399,
                "coupon_price": 100,
                "start_fee": "101",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=4b3762cf75084abbac73096e9b5834ec&itemId=598113096144&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 123034088,
              "raw_price": "108.9",
              "zk_price": "8.9",
              "platform_id": 1,
              "item_id": 598113096144,
              "post_free": 1,
              "month_sales": 2854,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i2/735403887/O1CN01qdYttT1eaI39IGQBe_!!735403887.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/123034088?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/123034088?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 23391,
              "cate_id": 9,
              "cate_id3": 23393,
              "cate_id4": 23397,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "42",
              "is_accurate": false,
              "item_final_price_desc": "100元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "108.9",
              "final_price": "8.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "限时特价9.9包邮10包家用面巾纸",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/bao/uploaded/i1/2930255252/O1CN01bQFMtu1ofSg7xCgtj_!!0-item_pic.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000003,
            "month_sales": 405765,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "限时特价9.9包邮10包家用面巾纸",
              "url": "https://item.taobao.com/item.htm?id=598088771970",
              "description": "",
              "prepayment": "0",
              "discount": "8.0",
              "pid": "",
              "score": 801942,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 97718811,
                "coupon_start_time": 1565712000,
                "coupon_end_time": 1566143999,
                "coupon_price": 2,
                "start_fee": "9",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk598088771970&itemId=598088771970&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i4/2930255252/O1CN01zMPVrP1ofSgiaMKRX_!!2930255252.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2930255252/p/1/e/6/t/1/233208637260.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 113362443,
              "raw_price": "9.9",
              "zk_price": "7.9",
              "platform_id": 2,
              "item_id": 598088771970,
              "post_free": 1,
              "month_sales": 405765,
              "thumbnail_pic": "https://img.alicdn.com/bao/uploaded/i1/2930255252/O1CN01bQFMtu1ofSg7xCgtj_!!0-item_pic.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/113362443?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/113362443?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 20000,
              "cate_id": 26,
              "cate_id3": 20001,
              "cate_id4": 20002,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 2,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "1.5",
              "is_accurate": false,
              "item_final_price_desc": "2元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "9.9",
              "final_price": "7.9",
              "activity_tag_icon": "",
              "shop_tag": "旗舰店",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "董阿姨柳州螺蛳粉320g*5袋速食",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/i1/3161841792/TB2IxTkFStYBeNjSspaXXaOOFXa_!!3161841792.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000004,
            "month_sales": 3341,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "董阿姨柳州螺蛳粉320g*5袋速食",
              "url": "https://item.taobao.com/item.htm?id=572411246958",
              "description": "",
              "prepayment": "0",
              "discount": "6.7",
              "pid": "",
              "score": 510700,
              "stid": "29218152404617792",
              "intv2": 15,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 47954565,
                "coupon_start_time": 1565452800,
                "coupon_end_time": 1567267199,
                "coupon_price": 10,
                "start_fee": "27",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk572411246958&itemId=572411246958&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 28067270,
              "raw_price": "29.9",
              "zk_price": "19.9",
              "platform_id": 2,
              "item_id": 572411246958,
              "post_free": 1,
              "month_sales": 3341,
              "thumbnail_pic": "https://img.alicdn.com/i1/3161841792/TB2IxTkFStYBeNjSspaXXaOOFXa_!!3161841792.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/28067270?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/28067270?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 23155,
              "cate_id": 13,
              "cate_id3": 23156,
              "cate_id4": 23161,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 1,
              "rec_type": 6,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "2",
              "is_accurate": false,
              "item_final_price_desc": "10元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "29.9",
              "final_price": "19.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "第二件10元!莎曼莉抖音同款面膜",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i1/818783926/O1CN01UK4wuY1es9VFO1WXs_!!0-item_pic.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000005,
            "month_sales": 16399,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "第二件10元!莎曼莉抖音同款面膜",
              "url": "https://item.taobao.com/item.htm?id=599054120056",
              "description": "",
              "prepayment": "0",
              "discount": "2.3",
              "pid": "",
              "score": 446926,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 104603557,
                "coupon_start_time": 1565625600,
                "coupon_end_time": 1566230399,
                "coupon_price": 60,
                "start_fee": "78",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk599054120056&itemId=599054120056&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 122887602,
              "raw_price": "78",
              "zk_price": "18",
              "platform_id": 2,
              "item_id": 599054120056,
              "post_free": 0,
              "month_sales": 16399,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i1/818783926/O1CN01UK4wuY1es9VFO1WXs_!!0-item_pic.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/122887602?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/122887602?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 21381,
              "cate_id": 6,
              "cate_id3": 21402,
              "cate_id4": 21403,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "4",
              "is_accurate": false,
              "item_final_price_desc": "60元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "78",
              "final_price": "18",
              "activity_tag_icon": "",
              "shop_tag": "旗舰店",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "ins超火抖音同款闪粉亮片眼影盘",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/bao/uploaded/i2/2080354486/O1CN019tiM0c1j0dILh8WM5_!!2080354486.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000006,
            "month_sales": 3107,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "ins超火抖音同款闪粉亮片眼影盘",
              "url": "https://item.taobao.com/item.htm?id=593921642276",
              "description": "",
              "prepayment": "0",
              "discount": "0.9",
              "pid": "",
              "score": 438901,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108499999,
                "coupon_start_time": 1565712000,
                "coupon_end_time": 1566316799,
                "coupon_price": 100,
                "start_fee": "108",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=5b38375dd88244e49144a27db25d1822&itemId=593921642276&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 101061688,
              "raw_price": "109.9",
              "zk_price": "9.9",
              "platform_id": 1,
              "item_id": 593921642276,
              "post_free": 1,
              "month_sales": 3107,
              "thumbnail_pic": "https://img.alicdn.com/bao/uploaded/i2/2080354486/O1CN019tiM0c1j0dILh8WM5_!!2080354486.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/101061688?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/101061688?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 21318,
              "cate_id": 6,
              "cate_id3": 21343,
              "cate_id4": 21344,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "20",
              "is_accurate": false,
              "item_final_price_desc": "100元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "109.9",
              "final_price": "9.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          },
          {
            "title": "家用手提式黑色大中小号加厚垃圾袋",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i4/1664945146/O1CN01EPdemB1nsuhKWuODL_!!0-item_pic.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000007,
            "month_sales": 134031,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "家用手提式黑色大中小号加厚垃圾袋",
              "url": "https://item.taobao.com/item.htm?id=596864443374",
              "description": "",
              "prepayment": "0",
              "discount": "4.8",
              "pid": "",
              "score": 363257,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 96354610,
                "coupon_start_time": 1565798400,
                "coupon_end_time": 1566489599,
                "coupon_price": 3,
                "start_fee": "5",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk596864443374&itemId=596864443374&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 111285150,
              "raw_price": "5.8",
              "zk_price": "2.8",
              "platform_id": 2,
              "item_id": 596864443374,
              "post_free": 1,
              "month_sales": 134031,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i4/1664945146/O1CN01EPdemB1nsuhKWuODL_!!0-item_pic.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/111285150?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/111285150?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 20000,
              "cate_id": 26,
              "cate_id3": 20036,
              "cate_id4": 20045,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 2,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "1.5",
              "is_accurate": false,
              "item_final_price_desc": "3元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "5.8",
              "final_price": "2.8",
              "activity_tag_icon": "",
              "shop_tag": "旗舰店",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {
            "title": "宝宝辅食小奶锅煎煮一体煮粥不粘锅",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/i1/2452681422/O1CN01shDWQ31MNJj8glbb0_!!2452681422.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000008,
            "month_sales": 38673,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "宝宝辅食小奶锅煎煮一体煮粥不粘锅",
              "url": "https://item.taobao.com/item.htm?id=592834389565",
              "description": "",
              "prepayment": "0",
              "discount": "3.9",
              "pid": "",
              "score": 351488,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 84156852,
                "coupon_start_time": 1565366400,
                "coupon_end_time": 1567267199,
                "coupon_price": 30,
                "start_fee": "49",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk592834389565&itemId=592834389565&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i3/6000000001299/O1CN01MTHlQY1LSz0vD7lSR_!!6000000001299-0-tbvideo.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2452681422/p/1/e/6/t/1/225202132946.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 92029144,
              "raw_price": "49",
              "zk_price": "19",
              "platform_id": 2,
              "item_id": 592834389565,
              "post_free": 1,
              "month_sales": 38673,
              "thumbnail_pic": "https://img.alicdn.com/i1/2452681422/O1CN01shDWQ31MNJj8glbb0_!!2452681422.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/92029144?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/92029144?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 20202,
              "cate_id": 26,
              "cate_id3": 20203,
              "cate_id4": 20211,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 1,
              "rec_type": 6,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "30",
              "is_accurate": false,
              "item_final_price_desc": "30元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "49",
              "final_price": "19",
              "activity_tag_icon": "",
              "shop_tag": "旗舰店",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {
            "title": "添色榨汁电动便携式迷你家用水果杯",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i2/2200723807329/O1CN01XrKYoy240jJkRdQSA_!!0-item_pic.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000009,
            "month_sales": 21500,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "添色榨汁电动便携式迷你家用水果杯",
              "url": "https://item.taobao.com/item.htm?id=596871231192",
              "description": "",
              "prepayment": "0",
              "discount": "4.4",
              "pid": "",
              "score": 332228,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108108988,
                "coupon_start_time": 1565539200,
                "coupon_end_time": 1565971199,
                "coupon_price": 50,
                "start_fee": "89",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=20d41d794ba04d7f9c760006a154055c&itemId=596871231192&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i3/2200723807329/O1CN01R53Q1s240jJWpqnwy_!!2200723807329.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2200723807329/p/1/e/6/t/1/232126608084.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 108412191,
              "raw_price": "89",
              "zk_price": "39",
              "platform_id": 2,
              "item_id": 596871231192,
              "post_free": 1,
              "month_sales": 21500,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i2/2200723807329/O1CN01XrKYoy240jJkRdQSA_!!0-item_pic.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/108412191?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/108412191?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 23768,
              "cate_id": 10,
              "cate_id3": 23821,
              "cate_id4": 0,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "20.03",
              "is_accurate": false,
              "item_final_price_desc": "50元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "89",
              "final_price": "39",
              "activity_tag_icon": "",
              "shop_tag": "旗舰店",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {
            "title": "南极人外穿夏季高腰小脚显瘦打底裤",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/bao/uploaded/i1/2200711151795/O1CN01ppFN9U1P89REtghEq_!!0-item_pic.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000010,
            "month_sales": 19097,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "南极人外穿夏季高腰小脚显瘦打底裤",
              "url": "https://item.taobao.com/item.htm?id=587425086193",
              "description": "",
              "prepayment": "0",
              "discount": "7.5",
              "pid": "",
              "score": 250051,
              "stid": "29218152404617792",
              "intv2": 15,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108257617,
                "coupon_start_time": 1565712000,
                "coupon_end_time": 1565971199,
                "coupon_price": 5,
                "start_fee": "10",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=ab1c2fdec84d401f8fdd4f48b5a6278f&itemId=587425086193&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": {
                "cover": "https://img.alicdn.com/imgextra/i4/2200711151795/O1CN01CRKsqW1P89US1CyvC_!!2200711151795.jpg",
                "url": "http://cloud.video.taobao.com/play/u/2200711151795/p/1/e/6/t/1/219886641068.mp4"
              },
              "status": 1,
              "accurate": false,
              "coupon_id": 59725573,
              "raw_price": "19.9",
              "zk_price": "14.9",
              "platform_id": 2,
              "item_id": 587425086193,
              "post_free": 1,
              "month_sales": 19097,
              "thumbnail_pic": "https://img.alicdn.com/bao/uploaded/i1/2200711151795/O1CN01ppFN9U1P89REtghEq_!!0-item_pic.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/59725573?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/59725573?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 22309,
              "cate_id": 1,
              "cate_id3": 22311,
              "cate_id4": 0,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 1,
              "rec_type": 6,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "30.02",
              "is_accurate": false,
              "item_final_price_desc": "5元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "19.9",
              "final_price": "14.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {}, {
            "title": "七夕情人节礼925银手镯钥匙扣手链",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i3/68677541/O1CN01clU87X25ZpH2YaHd9_!!68677541.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000011,
            "month_sales": 13249,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "七夕情人节礼925银手镯钥匙扣手链",
              "url": "https://item.taobao.com/item.htm?id=598208726020",
              "description": "",
              "prepayment": "0",
              "discount": "0.8",
              "pid": "",
              "score": 206614,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 108132734,
                "coupon_start_time": 1565625600,
                "coupon_end_time": 1566230399,
                "coupon_price": 120,
                "start_fee": "121",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=cb10c2438d114cc8b65bba7df98cad78&itemId=598208726020&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 116869646,
              "raw_price": "129.9",
              "zk_price": "9.9",
              "platform_id": 1,
              "item_id": 598208726020,
              "post_free": 1,
              "month_sales": 13249,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i3/68677541/O1CN01clU87X25ZpH2YaHd9_!!68677541.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/116869646?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/116869646?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 22483,
              "cate_id": 20,
              "cate_id3": 22484,
              "cate_id4": 0,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 2,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "30",
              "is_accurate": false,
              "item_final_price_desc": "120元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "129.9",
              "final_price": "9.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {
            "title": "口益清清新除渍增白亮白",
            "subtitle": "",
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i1/1855067106/TB21gWNlnlYBeNjSszcXXbwhFXa_!!1855067106.jpg_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000012,
            "month_sales": 1085,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "口益清清新除渍增白亮白",
              "url": "https://item.taobao.com/item.htm?id=45612649370",
              "description": "",
              "prepayment": "0",
              "discount": "2.0",
              "pid": "",
              "score": 187342,
              "stid": "29218152404617792",
              "intv2": 1,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 107718839,
                "coupon_start_time": 1565366400,
                "coupon_end_time": 1565971199,
                "coupon_price": 20,
                "start_fee": "25",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=3375e1148f934929adc47c3a18f5f633&itemId=45612649370&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 1,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 31770250,
              "raw_price": "25",
              "zk_price": "5",
              "platform_id": 1,
              "item_id": 45612649370,
              "post_free": 1,
              "month_sales": 1085,
              "thumbnail_pic": "https://img.alicdn.com/tfscom/i1/1855067106/TB21gWNlnlYBeNjSszcXXbwhFXa_!!1855067106.jpg_400x400",
              "share_url": "http://m.sqkb.com/coupon/31770250?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/31770250?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 24715,
              "cate_id": 24,
              "cate_id3": 24717,
              "cate_id4": 0,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 0,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "40",
              "is_accurate": false,
              "item_final_price_desc": "20元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "25",
              "final_price": "5",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }, {
            "title": "四轮滑板初学者成人男孩女生划板",
            "subtitle": "",
            "description": "",
            "pic": "http://file.17gwx.com/sqkb/coupon/2018/10/9/_1539074737360703313_400x400",
            "url": "http://share.sqkb.com/topic/0/",
            "topic_id": 9000013,
            "month_sales": 79577,
            "topic_type": 0,
            "item_count": 1,
            "is_must_grab": false,
            "is_new": false,
            "is_product_topic": 1,
            "publish_time": 0,
            "coupon_info": {
              "title": "四轮滑板初学者成人男孩女生划板",
              "url": "https://item.taobao.com/item.htm?id=536300465575",
              "description": "",
              "prepayment": "0",
              "discount": "2.5",
              "pid": "",
              "score": 162852,
              "stid": "29218152404617792",
              "intv2": 15,
              "ticket": {
                "status": 1,
                "pid": "",
                "ticket_id": 52310427,
                "coupon_start_time": 1565625600,
                "coupon_end_time": 1565884799,
                "coupon_price": 30,
                "start_fee": "39",
                "ticket_url": "https://uland.taobao.com/coupon/edetail?tj1=1&tj2=1&activityId=etk536300465575&itemId=536300465575&pid=mm_114743487_20902967_71072482&nowake=1&dx=1",
                "apply_url": "",
                "url_type": 2,
                "open_type": 0
              },
              "video": null,
              "status": 1,
              "accurate": false,
              "coupon_id": 17092897,
              "raw_price": "39.9",
              "zk_price": "9.9",
              "platform_id": 2,
              "item_id": 536300465575,
              "post_free": 1,
              "month_sales": 79577,
              "thumbnail_pic": "http://file.17gwx.com/sqkb/coupon/2018/10/9/_1539074737360703313_400x400",
              "share_url": "http://m.sqkb.com/coupon/17092897?channel=333&from_sqkb=1",
              "detail_url": "http://m.sqkb.com/coupon/17092897?channel=11",
              "is_new": false,
              "product_type": 1,
              "subcate_id": 24458,
              "cate_id": 11,
              "cate_id3": 24600,
              "cate_id4": 24601,
              "is_must_grab": false,
              "is_from_tb": false,
              "is_promotion": 0,
              "update_time": 0,
              "apply_commission_type": 0,
              "shop_type": 1,
              "is_improve": 1,
              "rec_type": 5,
              "ali_trace_info": null,
              "is_nine": false,
              "commission_rate": "16",
              "is_accurate": false,
              "item_final_price_desc": "30元券",
              "rebate": null,
              "is_rebate": false,
              "track": null,
              "origin_price": "39.9",
              "final_price": "9.9",
              "activity_tag_icon": "",
              "shop_tag": "",
              "recommend_tags": [],
              "user_has_order": 2
            },
            "rec_type": 0,
            "pass_through": {"render_biz_type": 0}
          }],
        type: 0,
        top: 0
			}
		},
		onLoad() {

		},
		methods: {
      chanSecCate(val) {
        console.log(val);
        this.top = 1;
        switch (val) {
          case '0': this.type = 0; break;
          default: this.type = 1;
        }
        this.$nextTick(() => {
          this.top = 0;
        })
      },
      nextPage() {
        console.log('nextPage');
      },
      openPopup(){
        console.log(this.$refs.popup);
        this.$refs.popup.open()
      },
      closePopup(){
        this.$refs.popup.close()
      },
      goto(url) {
        uni.redirectTo({url});
      }
		},
    components: {
      IndexSearch,
      CateList,
      SecCateList,
      GoodsList,
      GoodsListCol,
      uniPopup
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
  .fix{
    width: 750rpx;
    height: 120rpx;
    background-color: rgba(0, 0, 0, .7);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 28rpx;
    .img{
      width: 72rpx;
      height: 72rpx;
      margin: 0 30rpx;
    }
    .content{
      text-align: left;
      flex: 1;
    }
    .button{
      width: 180rpx;
      height: 60rpx;
      text-align: center;
      border-radius: 8rpx;
      line-height: 60rpx;
      margin-right: 30rpx;
      background: linear-gradient(90deg, rgba(255,78,0,1) 0, rgba(255,169,0,1) 100%);
    }
  }
  .sex-select-box{
    width: 600rpx;
    height: 570rpx;
    background-color: #fff;
    border-radius: 8rpx;
    font-size: 28rpx;
    color: #1e2427;
    .iconfont{
      text-align: right;
      line-height: 80rpx;
      padding-right: 16rpx;
    }
    .text{
      font-size: 40rpx;
      font-weight: bolder;
      line-height: 80rpx;
      color: #1e2427;
    }
    .select-content{
      display: flex;
      justify-content: space-around;
      padding: 20rpx 100rpx 0;
      .female, .male{
        width: 150rpx;
        height: 248rpx;
      }
      .male{
        background: url('http://ms1.sqkb.com/dist/image/before/index-man-ea3ba79688.png') no-repeat;
        background-size: 100% 100%;
      }
      .female{
        background: url('http://ms1.sqkb.com/dist/image/before/index-woman-87a68fc3cb.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
