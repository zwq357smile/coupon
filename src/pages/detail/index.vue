<template>
  <view>
    <!--#ifdef H5-->
    <UniNavBar
        title="商品详情"
        leftIcon="arrowleft"
        right-text=""
        class="nav-bar"
        @click-left="goto()"
    >
    </UniNavBar>
    <!--#endif-->
    <swiper
        class="swiper"
        indicator-active-color="#ff4c2c"
        indicator-color="#fff"
        autoplay="true"
        circular="false"
        interval="3000"
        duration="400"
    >
      <swiper-item class="swiper-item" v-for="item, index in list.slice(0, 5)">
        <image class="img" :src="item.thumbnail_pic"></image>
        <view class="content">
          <view>{{item.title}}</view>
          <view class="price">￥{{item.final_price}}</view>
        </view>
        <view class="button">新人免费拿</view>
      </swiper-item>
    </swiper>
    <scroll-view class="scroll-view" scroll-y="true">
      <swiper
          class="detail-pic"
          indicator-active-color="#ff4c2c"
          indicator-color="#fff"
          circular="false"
          duration="400"
          indicator-dots="true"
          style="margin-top: 180rpx"
      >
        <swiper-item>
          <image :src="pic" class="detail-pic"></image>
        </swiper-item>
        <swiper-item>
          <image :src="pic" class="detail-pic"></image>
        </swiper-item>
        <swiper-item>
          <image :src="pic" class="detail-pic"></image>
        </swiper-item>
        <swiper-item>
          <image :src="pic" class="detail-pic"></image>
        </swiper-item>
        <swiper-item>
          <image :src="pic" class="detail-pic"></image>
        </swiper-item>
      </swiper>
      <view class="price-wrap">
        <view class="price">
          ￥19.8
          <view class="content">新用户送10元现金</view>
        </view>
        <view class="price-explane">月销 2673</view>
      </view>
      <view class="title">
        送枕套专柜正品天然乳胶枕太空记忆枕成人家用防螨护颈椎保健枕头
      </view>
      <view style="background-color: #fff; overflow: hidden">
        <view class="coupon">
          <view>新用户送10元现金券</view>
          <view>立即购买</view>
        </view>
      </view>
      <view class="detail-label">宝贝详情</view>
      <LazyImg class="detail-img" src="https://img.alicdn.com/imgextra/i1/2102416983/O1CN01lFKhqu21SGFy7vaVL_!!2102416983.jpg"></LazyImg>
      <view class="open-app">打开APP查看详情</view>
      <view class="recommend-wrap">
        <view class="recommend-title">/ 新用户零元购商城 /</view>
        <view class="recommend-content">
          <view v-for="item in list" class="item">
            <GoodsListGrid :src="item.thumbnail_pic" :name="item.title" line="one-line"></GoodsListGrid>
            <view class="price">
              <view class="through">￥{{item.origin_price}}</view>
              <view class="final">￥0</view>
            </view>
            <view class="btn">免费领</view>
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
  import LazyImg from "@/components/custom/LazyImg";
  import GoodsListGrid from "@/components/custom/GoodsListGrid";
  export default {
    name: "index",
    data() {
      return {
        pic: '',
        page: '',
        list:  [
          {
            "coupon_id": 95634641,
            "title": "airpods2保护套无线新apple防丢绳",
            "subtitle": "airpods2保护套无线新apple防丢绳",
            "item_id": 594306849485,
            "raw_price": 35.8,
            "zk_price": 5.8,
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i2/2454049367/O1CN01HSgcBs2J48TZt5cXj_!!0-item_pic.jpg",
            "post_free": 1,
            "month_sales": 30426,
            "comm_count": 46280,
            "order_count": 10590,
            "platform_id": 2,
            "source_id": 74,
            "cate_id": 9,
            "subcate_id": 23391,
            "product_type": 1,
            "cate_id3": 23393,
            "cate_id4": 23397,
            "op_tag": "1",
            "stage": 1,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 40,
            "is_del": 0,
            "verify_time": 0,
            "price_change_time": 1565849009,
            "white_image": "",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108304621,
              "activity_id": "ebc6e66d2146424c99234f2eb918ede8",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=ebc6e66d2146424c99234f2eb918ede8&itemId=594306849485",
              "coupon_price": 30,
              "start_fee": 31,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565712000,
              "coupon_end_time": 1565971199,
              "remain_num": 83000,
              "total_num": 100000,
              "ticket_source_id": 74,
              "ticket_status": 1
            },
            "brand": {"brand_id": 529378, "brand_name": "朗朵", "brand_alias": ""},
            "shop": {
              "shop_id": 562839,
              "shop_name": "朗朵旗舰店",
              "shop_url": "http://shop117726899.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.7#3|4.7#3|4.7#3",
              "shop_score_avg": 4.7,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/tfscom/i2/2454049367/O1CN01HSgcBs2J48TZt5cXj_!!0-item_pic.jpg_400x400",
            "origin_price": "35.8",
            "final_price": "5.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "2c1fgCRRsjb9Uysg7jFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 32176721,
            "title": "钟情家庭实惠装家用10包批发卫生纸",
            "subtitle": "钟情家庭实惠装家用10包批发卫生纸",
            "item_id": 580535783383,
            "raw_price": 9.9,
            "zk_price": 7.9,
            "description": "",
            "pic": "http://file.17gwx.com/sqkb/coupon/2018/11/10/_1541808243006011838",
            "post_free": 0,
            "month_sales": 387766,
            "comm_count": 99745,
            "order_count": 26528,
            "platform_id": 2,
            "source_id": 72,
            "cate_id": 26,
            "subcate_id": 20000,
            "product_type": 1,
            "cate_id3": 20001,
            "cate_id4": 20002,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 100,
            "commission": 20,
            "commission_rate": 20,
            "is_del": 0,
            "verify_time": 1541816551,
            "price_change_time": 1565798444,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01ouqShF1pixJd2z4IA_!!2-item_pic.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i1/6000000002751/O1CN0145BqMO1WC07ZiqqV2_!!6000000002751-0-tbvideo.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/3190745395/p/1/e/6/t/1/230957966642.mp4",
            "short_title": "",
            "prop_value_ids": "",
            "ticket": {
              "ticket_id": 108496731,
              "activity_id": "896bf93cee04421a8e5e3c6545891738",
              "coupon_price": 2,
              "start_fee": 9,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565798400,
              "coupon_end_time": 1566057599,
              "remain_num": 100000,
              "total_num": 100000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=896bf93cee04421a8e5e3c6545891738&itemId=580535783383",
              "ticket_status": 1
            },
            "brand": {"brand_id": 157700, "brand_name": "钟情", "brand_alias": ""},
            "shop": {
              "shop_id": 166756,
              "shop_name": "钟情家居旗舰店",
              "shop_url": "http://shop239972239.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.8#3|4.8#3",
              "shop_score_avg": 4.8,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "http://file.17gwx.com/sqkb/coupon/2018/11/10/_1541808243006011838_400x400",
            "origin_price": "9.9",
            "final_price": "7.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "1416twzRejbPu9ra7jFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 118679813,
            "title": "背背佳成年男女背部神器儿童矫正器",
            "subtitle": "背背佳成年男女背部神器儿童矫正器",
            "item_id": 598628051401,
            "raw_price": 16.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://img.alicdn.com/i1/2202156255206/O1CN01XYpdpu1oKOSkT8fbD_!!2202156255206.jpg",
            "post_free": 1,
            "month_sales": 43957,
            "comm_count": 8104,
            "order_count": 451,
            "platform_id": 2,
            "source_id": 6,
            "cate_id": 26,
            "subcate_id": 20494,
            "product_type": 1,
            "cate_id3": 20539,
            "cate_id4": 20540,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 40,
            "is_del": 0,
            "verify_time": 1564028761,
            "price_change_time": 1565713345,
            "white_image": "",
            "video_pic_url": "https://img.alicdn.com/imgextra/i2/2202156255206/O1CN014JrCuA1oKOSluPKfN_!!2202156255206.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/2202156255206/p/1/e/6/t/1/231238782963.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108216485,
              "activity_id": "46e936404b4f434787e1bed8d2bd5966",
              "coupon_price": 10,
              "start_fee": 11,
              "coupon_type": 1,
              "url_type": 1,
              "coupon_start_time": 1565712000,
              "coupon_end_time": 1567007999,
              "remain_num": 79052,
              "total_num": 80000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=46e936404b4f434787e1bed8d2bd5966&itemId=598628051401",
              "ticket_status": 1
            },
            "brand": {"brand_id": 4052407, "brand_name": "迈仕龙", "brand_alias": ""},
            "shop": {
              "shop_id": 4878636,
              "shop_name": "迈仕龙个人护理旗舰店",
              "shop_url": "http://shop425140863.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.7#3|4.7#3|4.7#3",
              "shop_score_avg": 4.7,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i1/2202156255206/O1CN01XYpdpu1oKOSkT8fbD_!!2202156255206.jpg_400x400",
            "origin_price": "16.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "137by10G6jbAWxXuyjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 28206876,
            "title": "懒人减肥机震动瘦腿瘦肚瘦身腰带",
            "subtitle": "懒人减肥机震动瘦腿瘦肚瘦身腰带",
            "item_id": 574020193596,
            "raw_price": 31.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "http://file.17gwx.com/sqkb/coupon/2018/9/14/_1536892343127496481",
            "post_free": 1,
            "month_sales": 35402,
            "comm_count": 85681,
            "order_count": 3019,
            "platform_id": 2,
            "source_id": 6,
            "cate_id": 11,
            "subcate_id": 24154,
            "product_type": 1,
            "cate_id3": 24155,
            "cate_id4": 24165,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 96.05,
            "commission": 30.07,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 1547776464,
            "price_change_time": 1565625719,
            "white_image": "https://img.alicdn.com/bao/uploaded/TB1phJUVhjaK1RjSZKzXXXVwXXa.png",
            "video_pic_url": "https://img.alicdn.com/bao/uploaded/i2/TB10HiYczgy_uJjSZKbSutXkXXa.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/1940526436/p/1/e/6/t/1/50058688183.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 52432859,
              "activity_id": "etk574020193596",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?e=tEPngB6iYQEGQASttHIRqXGA03svE7TVAHpNvOsIgXyJBiHzvBsckUUXOdBBfWEJo06NhoF8Oa7mKjpVIM%2FbTc5vsHP6Qff7DfqEFBOhTcyweFpS9Hen4quqPMwzdNc%2BHBx5mTviSfEHYc6CgDDwcAovj958N7NqMXAFUAh2ZtX7J8FmRkgg%2BNboO99VQREJtJtwpJuhjdim5%2Bfl6RVop%2B8gVn9ibU1YnmdlgoDf08Q%3D&traceId=0b14fe5115658495847323657e",
              "coupon_price": 25,
              "start_fee": 30,
              "coupon_type": 0,
              "url_type": 2,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1565971199,
              "remain_num": 15600,
              "total_num": 30000,
              "ticket_source_id": 6,
              "ticket_status": 1
            },
            "brand": {"brand_id": 167224, "brand_name": "欧伊品", "brand_alias": ""},
            "shop": {
              "shop_id": 2739480,
              "shop_name": "欧伊品旗舰店",
              "shop_url": "http://shop108145407.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.8#3",
              "shop_score_avg": 4.77,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "http://file.17gwx.com/sqkb/coupon/2018/9/14/_1536892343127496481_400x400",
            "origin_price": "31.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "38e3ttPO2jbylNp1yjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 28103806,
            "title": "一次性洗脸巾纯棉女柔巾洁面纸巾",
            "subtitle": "一次性洗脸巾纯棉女柔巾洁面纸巾",
            "item_id": 574397813525,
            "raw_price": 8.99,
            "zk_price": 6.99,
            "description": "",
            "pic": "https://img.alicdn.com/i4/23155831/TB2hCxFHACWBuNjy0FaXXXUlXXa_!!23155831.jpg",
            "post_free": 1,
            "month_sales": 31502,
            "comm_count": 117111,
            "order_count": 5145,
            "platform_id": 1,
            "source_id": 70,
            "cate_id": 6,
            "subcate_id": 21318,
            "product_type": 1,
            "cate_id3": 21356,
            "cate_id4": 21359,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 93.98,
            "commission": 20.28,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 1547517298,
            "price_change_time": 1565774422,
            "white_image": "",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108152243,
              "activity_id": "90457a8934714db8889c4fb99f80349f",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=90457a8934714db8889c4fb99f80349f&itemId=574397813525",
              "coupon_price": 2,
              "start_fee": 5,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1566230399,
              "remain_num": 88000,
              "total_num": 100000,
              "ticket_source_id": 74,
              "ticket_status": 1
            },
            "brand": {"brand_id": 93083, "brand_name": "韩蔻丝", "brand_alias": ""},
            "shop": {
              "shop_id": 645011,
              "shop_name": "韩寇丝精品彩妆折扣店",
              "shop_url": "http://shop33127746.taobao.com",
              "shop_rank": 42,
              "shop_score": "4.7#3|4.7#3|4.8#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 6
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i4/23155831/TB2hCxFHACWBuNjy0FaXXXUlXXa_!!23155831.jpg_400x400",
            "origin_price": "8.99",
            "final_price": "6.99",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "7189tF2zyjbcqxUsWjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 39098421,
            "title": "加厚家用一次性批发黑色手提垃圾袋",
            "subtitle": "加厚家用一次性批发黑色手提垃圾袋",
            "item_id": 581266955291,
            "raw_price": 6.8,
            "zk_price": 4.8,
            "description": "",
            "pic": "https://img.alicdn.com/i4/4212415981/O1CN01KwLZSG1u3LPDQaS4Y_!!4212415981.jpg",
            "post_free": 1,
            "month_sales": 75510,
            "comm_count": 1207,
            "order_count": 5823,
            "platform_id": 2,
            "source_id": 67,
            "cate_id": 26,
            "subcate_id": 20000,
            "product_type": 1,
            "cate_id3": 20036,
            "cate_id4": 20045,
            "op_tag": "1",
            "stage": 5,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 2.02,
            "commission_rate": 20,
            "is_del": 0,
            "verify_time": 0,
            "price_change_time": 1564642464,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN011u3LLDVrtwrzwCP_!!4212415981.png",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 105862708,
              "activity_id": "d52ee3adc3294441b8b7441bb6ab1fd0",
              "coupon_price": 2,
              "start_fee": 6,
              "coupon_type": 1,
              "url_type": 1,
              "coupon_start_time": 1564588800,
              "coupon_end_time": 1567267199,
              "remain_num": 0,
              "total_num": 0,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=d52ee3adc3294441b8b7441bb6ab1fd0&itemId=581266955291",
              "ticket_status": 1
            },
            "brand": {"brand_id": 2650195, "brand_name": "Rosa Floweryvale", "brand_alias": "洛施花舍"},
            "shop": {
              "shop_id": 3589915,
              "shop_name": "洛施花舍家居旗舰店",
              "shop_url": "http://shop393238522.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#2|4.8#2|4.8#3",
              "shop_score_avg": 4.8,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i4/4212415981/O1CN01KwLZSG1u3LPDQaS4Y_!!4212415981.jpg_400x400",
            "origin_price": "6.8",
            "final_price": "4.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "e2c6thQkXjb5xRXQbjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 28223755,
            "title": "男女电动硅胶洁面仪",
            "subtitle": "脸部洗脸仪电动洁面仪",
            "item_id": 576201511230,
            "raw_price": 12.9,
            "zk_price": 7.9,
            "description": "",
            "pic": "https://img.alicdn.com/i2/2845317886/O1CN01BjcwNf287puZR2SDp_!!2845317886.jpg",
            "post_free": 1,
            "month_sales": 43007,
            "comm_count": 108878,
            "order_count": 5483,
            "platform_id": 2,
            "source_id": 47,
            "cate_id": 24,
            "subcate_id": 24669,
            "product_type": 1,
            "cate_id3": 24677,
            "cate_id4": 0,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 94.4,
            "commission": 30,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 1560929143,
            "price_change_time": 1565747282,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN010x5b0e287puXw9uge_!!2-item_pic.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i1/2845317886/O1CN01iuuqdg287pvNPuYmq_!!2845317886.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/2845317886/p/1/e/6/t/1/215240668128.mp4",
            "short_title": "男女电动硅胶洁面仪",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108418084,
              "activity_id": "ec6240ee7a2640e4b7cee9e96b6f3e0e",
              "coupon_price": 5,
              "start_fee": 12,
              "coupon_type": 1,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1565971199,
              "remain_num": 98684,
              "total_num": 100000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=ec6240ee7a2640e4b7cee9e96b6f3e0e&itemId=576201511230",
              "ticket_status": 1
            },
            "brand": {"brand_id": 2476709, "brand_name": "百孝先", "brand_alias": ""},
            "shop": {
              "shop_id": 2738057,
              "shop_name": "百孝先电器旗舰店",
              "shop_url": "http://shop151916496.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i2/2845317886/O1CN01BjcwNf287puZR2SDp_!!2845317886.jpg_400x400",
            "origin_price": "12.9",
            "final_price": "7.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "a995ttRpdjbbxkIHAjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 28118570,
            "title": "五芳斋礼盒装蛋黄莲蓉豆沙团购月饼",
            "subtitle": "五芳斋礼盒装蛋黄莲蓉豆沙团购月饼",
            "item_id": 574115768605,
            "raw_price": 75.9,
            "zk_price": 75.9,
            "description": "",
            "pic": "https://img.alicdn.com/i1/190903296/O1CN01tqscLi1aDbz4Vi67K_!!190903296.jpg",
            "post_free": 1,
            "month_sales": 425614,
            "comm_count": 224315,
            "order_count": 656,
            "platform_id": 2,
            "source_id": 26,
            "cate_id": 13,
            "subcate_id": 22611,
            "product_type": 2,
            "cate_id3": 22696,
            "cate_id4": 22700,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 2.5,
            "commission": 2,
            "commission_rate": 35,
            "is_del": 0,
            "verify_time": 1565753847,
            "price_change_time": 1565838663,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01V7wjdv1aDbyiThijg_!!2-item_pic.png",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": null,
            "brand": {"brand_id": 169500, "brand_name": "五芳斋", "brand_alias": ""},
            "shop": {
              "shop_id": 179304,
              "shop_name": "五芳斋官方旗舰店",
              "shop_url": "http://shop57302978.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#1|4.8#1|4.8#1",
              "shop_score_avg": 4.8,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i1/190903296/O1CN01tqscLi1aDbz4Vi67K_!!190903296.jpg_400x400",
            "origin_price": "75.9",
            "final_price": "75.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "8091tFKXvjbyD0i01jFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 120984576,
            "title": "手持迷你静音办公室桌上随身小风扇",
            "subtitle": "手持迷你静音办公室桌上随身小风扇",
            "item_id": 599151366364,
            "raw_price": 16.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://img.alicdn.com/i1/2414383203/O1CN01ztIkHf1ZX18yR2vR4_!!2414383203.jpg",
            "post_free": 0,
            "month_sales": 46506,
            "comm_count": 9988,
            "order_count": 991,
            "platform_id": 2,
            "source_id": 70,
            "cate_id": 26,
            "subcate_id": 20073,
            "product_type": 1,
            "cate_id3": 20175,
            "cate_id4": 20181,
            "op_tag": "1",
            "stage": 1,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 0,
            "price_change_time": 1565452839,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01xNIzgE1ZX194Pd70j_!!2-item_pic.png",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 107883463,
              "activity_id": "522ec94aa1e944d3b1dfd6730d74ee1c",
              "coupon_price": 10,
              "start_fee": 16,
              "coupon_type": 1,
              "url_type": 1,
              "coupon_start_time": 1565452800,
              "coupon_end_time": 1565971199,
              "remain_num": 75000,
              "total_num": 100000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=522ec94aa1e944d3b1dfd6730d74ee1c&itemId=599151366364",
              "ticket_status": 1
            },
            "brand": {"brand_id": 103040, "brand_name": "锐秀", "brand_alias": ""},
            "shop": {
              "shop_id": 109380,
              "shop_name": "锐秀旗舰店",
              "shop_url": "http://shop116693736.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.7#3|4.7#3|4.7#3",
              "shop_score_avg": 4.7,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i1/2414383203/O1CN01ztIkHf1ZX18yR2vR4_!!2414383203.jpg_400x400",
            "origin_price": "16.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "96ffyDsp6jblnFPGmjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 88111918,
            "title": "星星灯饰网红ins布置卧室装饰品",
            "subtitle": "星星灯饰网红ins布置卧室装饰品",
            "item_id": 580299208626,
            "raw_price": 3.8,
            "zk_price": 2.8,
            "description": "",
            "pic": "https://img.alicdn.com/bao/uploaded/i3/4175363531/O1CN011bxEyiOLZ48sS7Y_!!0-item_pic.jpg",
            "post_free": 1,
            "month_sales": 22102,
            "comm_count": 57168,
            "order_count": 1077,
            "platform_id": 2,
            "source_id": 74,
            "cate_id": 26,
            "subcate_id": 20403,
            "product_type": 1,
            "cate_id3": 20404,
            "cate_id4": 20415,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 2,
            "is_del": 0,
            "verify_time": 1562313241,
            "price_change_time": 1565835348,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN0159rc4j1bxEynF1BQe_!!4175363531.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i2/4175363531/O1CN011bxEyhsoM3LiYNa_!!4175363531.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/4175363531/p/1/e/6/t/1/212058663231.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 82853742,
              "activity_id": "etk580299208626",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?e=5ptiz5YDIosGQASttHIRqWef1OcmQBBgql8okWS%2FvcMh4%2FBFCEkLWNq8I3ChCmCUKMt%2BVif3RyNlXbpqWB4n93YR9Cs9XjFgDfqEFBOhTcyweFpS9Hen4quqPMwzdNc%2BHBx5mTviSfEHYc6CgDDwcAovj958N7NqMXAFUAh2ZtX7J8FmRkgg%2BNboO99VQREJtJtwpJuhjdgN9wvJnBL3pOA6YMTBtIK9Qy7GhFDcL4fc%2FiQc8kv2JaJ7%2BkHL3AEW&traceId=0b0ffa0d15658508300478957e",
              "coupon_price": 1,
              "start_fee": 3,
              "coupon_type": 0,
              "url_type": 2,
              "coupon_start_time": 1565798400,
              "coupon_end_time": 1566143999,
              "remain_num": 19800,
              "total_num": 20000,
              "ticket_source_id": 79,
              "ticket_status": 1
            },
            "brand": {"brand_id": 2524824, "brand_name": "项一芳", "brand_alias": ""},
            "shop": {
              "shop_id": 4261456,
              "shop_name": "项一芳旗舰店",
              "shop_url": "http://shop197722957.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#1|4.8#1|4.8#1",
              "shop_score_avg": 4.8,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": {"start_time": 0, "end_time": 0, "online_time": 0, "activity_type": 0, "activity_price": 0},
            "thumbnail_pic": "https://img.alicdn.com/bao/uploaded/i3/4175363531/O1CN011bxEyiOLZ48sS7Y_!!0-item_pic.jpg_400x400",
            "origin_price": "3.8",
            "final_price": "2.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "833fgMblHjbPJOvfzjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 35777268,
            "title": "s925纯银男女日韩简约对戒情侣戒指",
            "subtitle": "s925纯银男女日韩简约对戒情侣戒指",
            "item_id": 582250707420,
            "raw_price": 97.8,
            "zk_price": 7.8,
            "description": "",
            "pic": "https://img.alicdn.com/i2/3703715869/O1CN01KtPyK01tE2z6aNelK_!!3703715869.jpg",
            "post_free": 0,
            "month_sales": 6136,
            "comm_count": 18547,
            "order_count": 23,
            "platform_id": 2,
            "source_id": 74,
            "cate_id": 20,
            "subcate_id": 22483,
            "product_type": 1,
            "cate_id3": 22487,
            "cate_id4": 0,
            "op_tag": "1,4",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 100,
            "commission": 30,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 1544527627,
            "price_change_time": 1565775173,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01QwEDtK1tE2zCexsJQ_!!3703715869.png",
            "video_pic_url": "//img.alicdn.com/sns_album/TB14bq0uCzqK1RjSZPxwu34tVXa.png",
            "video_url": "http://cloud.video.taobao.com/play/u/3703715869/p/1/e/6/t/1/229470646619.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108169021,
              "activity_id": "e905584fec06426095bc23ca0f46700c",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=e905584fec06426095bc23ca0f46700c&itemId=582250707420",
              "coupon_price": 90,
              "start_fee": 95,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1565884799,
              "remain_num": 99772,
              "total_num": 100000,
              "ticket_source_id": 47,
              "ticket_status": 1
            },
            "brand": {"brand_id": 2805830, "brand_name": "仕艳", "brand_alias": ""},
            "shop": {
              "shop_id": 3246844,
              "shop_name": "仕艳旗舰店",
              "shop_url": "http://shop260983452.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i2/3703715869/O1CN01KtPyK01tE2z6aNelK_!!3703715869.jpg_400x400",
            "origin_price": "97.8",
            "final_price": "7.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "9362t3AmGjbo44LHPjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 116429813,
            "title": "红豆薏米茶赤小豆薏苡仁茯苓组合茶",
            "subtitle": "红豆薏米茶赤小豆薏苡仁茯苓组合茶",
            "item_id": 598075362886,
            "raw_price": 56.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://file.17gwx.com/sqkb/coupon/2019/8/2/_1564747348388402349",
            "post_free": 1,
            "month_sales": 282947,
            "comm_count": 43949,
            "order_count": 4295,
            "platform_id": 2,
            "source_id": 26,
            "cate_id": 13,
            "subcate_id": 23194,
            "product_type": 1,
            "cate_id3": 23263,
            "cate_id4": 23266,
            "op_tag": "1",
            "stage": 1,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 60.01,
            "is_del": 0,
            "verify_time": 0,
            "price_change_time": 1565798543,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01imJt7I1wmnxZwvbPo_!!2-item_pic.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i4/3423116351/O1CN01Fthj2H1wmnxw51DUB_!!3423116351.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/3423116351/p/1/e/6/t/1/233148126665.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 99554136,
              "activity_id": "etk598075362886",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?e=fZdEOoEHJDgNfLV8niU3RwXoB%2BDaBK5LQS0Flu%2FfbSp4QsdWMikAalrisGmre1Id522H2TxuqpJ%2BGMcYYMl7hmGcUs1Tu5WtQBDOcCOBLyzXPsPQRdKd2xcIazYqkS8DS7ueA1JMHb6Ry4T4DCZUF4FSqYiRBsKF89MKD641nyTGR%2Ba8oK%2BzBeKzrzZThBNQCsTX31Fe8vH%2BO0s7EIRp1VVusqqnhify&&app_pvid=59590_11.8.104.100_16307_1565850202514&ptl=floorId:2836;app_pvid:59590_11.8.104.100_16307_1565850202514;tpp_pvid:100_11.231.235.78_52353_6361565850202518992&xId=9yUGuClNHG9rB19Z0JrbxguyEzAzg9NuEmWzN8kimcvNZM79v53caDqKUR9DioM0CSOfXPpZwuLDiCcNBorD17&union_lens=lensId:0b086864_0d96_16c93f1f1a1_db52",
              "coupon_price": 50,
              "start_fee": 56,
              "coupon_type": 0,
              "url_type": 2,
              "coupon_start_time": 1565798400,
              "coupon_end_time": 1566057599,
              "remain_num": 98000,
              "total_num": 100000,
              "ticket_source_id": 67,
              "ticket_status": 1
            },
            "brand": {"brand_id": 3816523, "brand_name": "佰叶传奇", "brand_alias": ""},
            "shop": {
              "shop_id": 4426784,
              "shop_name": "佰叶传奇旗舰店",
              "shop_url": "http://shop305378434.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.9#1|4.8#1|4.8#1",
              "shop_score_avg": 4.83,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://file.17gwx.com/sqkb/coupon/2019/8/2/_1564747348388402349_400x400",
            "origin_price": "56.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "be6bynNZ7jbAIoWqHjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 94637696,
            "title": "男士自动扣牛皮正品中年潮真皮腰带",
            "subtitle": "男士自动扣牛皮正品中年潮真皮腰带",
            "item_id": 593722626626,
            "raw_price": 9.8,
            "zk_price": 6.8,
            "description": "",
            "pic": "https://img.alicdn.com/i2/2259557633/O1CN01z1RYVG26FxhJ3NWMh_!!2259557633.jpg",
            "post_free": 1,
            "month_sales": 285047,
            "comm_count": 264283,
            "order_count": 3490,
            "platform_id": 2,
            "source_id": 72,
            "cate_id": 20,
            "subcate_id": 22520,
            "product_type": 1,
            "cate_id3": 22530,
            "cate_id4": 0,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 70,
            "is_del": 0,
            "verify_time": 1558671725,
            "price_change_time": 1565837813,
            "white_image": "",
            "video_pic_url": "https://img.alicdn.com/imgextra/i1/2259557633/O1CN01r0BidN26FxhglNcrL_!!2259557633.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/2259557633/p/1/e/6/t/1/227622622852.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108205856,
              "activity_id": "84c1d628b04b4e9ca9c6861a0418f9d9",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=84c1d628b04b4e9ca9c6861a0418f9d9&itemId=593722626626",
              "coupon_price": 3,
              "start_fee": 9,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1565884799,
              "remain_num": 89000,
              "total_num": 100000,
              "ticket_source_id": 71,
              "ticket_status": 1
            },
            "brand": {"brand_id": 578969, "brand_name": "DSOG", "brand_alias": ""},
            "shop": {
              "shop_id": 2670940,
              "shop_name": "dsog旗舰店",
              "shop_url": "http://shop114136044.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#2|4.8#2|4.8#2",
              "shop_score_avg": 4.8,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": {"start_time": 0, "end_time": 0, "online_time": 0, "activity_type": 0, "activity_price": 0},
            "thumbnail_pic": "https://img.alicdn.com/i2/2259557633/O1CN01z1RYVG26FxhJ3NWMh_!!2259557633.jpg_400x400",
            "origin_price": "9.8",
            "final_price": "6.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "96d7ghNnVjbdmNIc8jFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 100069992,
            "title": "种植土通用型多肉绿萝包邮土壤",
            "subtitle": "种植土通用型多肉绿萝包邮土壤",
            "item_id": 593549202640,
            "raw_price": 6.9,
            "zk_price": 3.9,
            "description": "",
            "pic": "https://file.17gwx.com/sqkb/coupon/2019/8/6/_1565056757555015106",
            "post_free": 0,
            "month_sales": 70976,
            "comm_count": 9614,
            "order_count": 404,
            "platform_id": 2,
            "source_id": 48,
            "cate_id": 26,
            "subcate_id": 20604,
            "product_type": 1,
            "cate_id3": 20605,
            "cate_id4": 0,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 40.01,
            "is_del": 0,
            "verify_time": 1565056810,
            "price_change_time": 1565840018,
            "white_image": "",
            "video_pic_url": "https://img.alicdn.com/imgextra/i3/6000000003888/O1CN01mxqgHl1eakS9RZj5I_!!6000000003888-0-tbvideo.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/3435210686/p/1/e/6/t/1/232905843138.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108130922,
              "activity_id": "df4a04edef0b44eab205db66dc3b765f",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=df4a04edef0b44eab205db66dc3b765f&itemId=593549202640",
              "coupon_price": 3,
              "start_fee": 6,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565539200,
              "coupon_end_time": 1566057599,
              "remain_num": 83000,
              "total_num": 100000,
              "ticket_source_id": 48,
              "ticket_status": 1
            },
            "brand": {"brand_id": 3169250, "brand_name": "朵儿美", "brand_alias": ""},
            "shop": {
              "shop_id": 3019229,
              "shop_name": "小师兄家居专营店",
              "shop_url": "http://shop409865312.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 3
            },
            "activity": null,
            "thumbnail_pic": "https://file.17gwx.com/sqkb/coupon/2019/8/6/_1565056757555015106_400x400",
            "origin_price": "6.9",
            "final_price": "3.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "51e8IxKoHjbdzTJR4jFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 109883677,
            "title": "【加强版】迷你小型手持家用缝纫机",
            "subtitle": "【加强版】迷你小型手持家用缝纫机",
            "item_id": 596900729637,
            "raw_price": 9.8,
            "zk_price": 6.8,
            "description": "",
            "pic": "https://img.alicdn.com/i3/834211768/O1CN012cBr031OvmmbKq6D0_!!834211768.jpg",
            "post_free": 1,
            "month_sales": 15245,
            "comm_count": 14287,
            "order_count": 2275,
            "platform_id": 1,
            "source_id": 6,
            "cate_id": 26,
            "subcate_id": 20073,
            "product_type": 1,
            "cate_id3": 20183,
            "cate_id4": 20187,
            "op_tag": "1",
            "stage": 5,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 30.03,
            "is_del": 0,
            "verify_time": 0,
            "price_change_time": 1565636108,
            "white_image": "",
            "video_pic_url": "",
            "video_url": "",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108115329,
              "activity_id": "fed3d29ecf7e479194f2b0ad6b404bfc",
              "coupon_price": 3,
              "start_fee": 5,
              "coupon_type": 1,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1566230399,
              "remain_num": 20000,
              "total_num": 20000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=fed3d29ecf7e479194f2b0ad6b404bfc&itemId=596900729637",
              "ticket_status": 1
            },
            "brand": {"brand_id": 2972892, "brand_name": "Spring come", "brand_alias": ""},
            "shop": {
              "shop_id": 2750500,
              "shop_name": "千千奇日用商城",
              "shop_url": "http://shop70626022.taobao.com",
              "shop_rank": 41,
              "shop_score": "4.6#3|4.7#3|4.7#3",
              "shop_score_avg": 4.67,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 6
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i3/834211768/O1CN012cBr031OvmmbKq6D0_!!834211768.jpg_400x400",
            "origin_price": "9.8",
            "final_price": "6.8",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "3415INgHzjb3X7DwCjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 43376807,
            "title": "植护无心学生宿舍家用卫生纸卷纸",
            "subtitle": "植护无心学生宿舍家用卫生纸卷纸",
            "item_id": 571779250754,
            "raw_price": 9.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://img.alicdn.com/i1/3710127639/O1CN01Tbk6zX26Ii5x8zbJ4_!!3710127639.png",
            "post_free": 1,
            "month_sales": 11746,
            "comm_count": 1937,
            "order_count": 1874,
            "platform_id": 2,
            "source_id": 72,
            "cate_id": 26,
            "subcate_id": 20000,
            "product_type": 1,
            "cate_id3": 20001,
            "cate_id4": 20003,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 20,
            "is_del": 0,
            "verify_time": 1565437373,
            "price_change_time": 1565712031,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01G3k8uX26Ii5ymJQPW_!!2-item_pic.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i3/3710127639/O1CN01TeF5cv26Ii605v5jV_!!3710127639.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/3710127639/p/1/e/6/t/1/50234134689.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108209026,
              "activity_id": "eaa3275c667344b990b3d485614b8bba",
              "coupon_price": 3,
              "start_fee": 9,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565712000,
              "coupon_end_time": 1566143999,
              "remain_num": 28500,
              "total_num": 30000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=eaa3275c667344b990b3d485614b8bba&itemId=571779250754",
              "ticket_status": 1
            },
            "brand": {"brand_id": 8151, "brand_name": "植护", "brand_alias": ""},
            "shop": {
              "shop_id": 3054663,
              "shop_name": "植护素木岭专卖店",
              "shop_url": "http://shop174561107.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 2
            },
            "activity": {"start_time": 0, "end_time": 0, "online_time": 0, "activity_type": 0, "activity_price": 0},
            "thumbnail_pic": "https://img.alicdn.com/i1/3710127639/O1CN01Tbk6zX26Ii5x8zbJ4_!!3710127639.png_400x400",
            "origin_price": "9.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "51eciygofjbqpgv7ejFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 3838688,
            "title": "百佳爱一次性加厚家用学生防水鞋套",
            "subtitle": "百佳爱一次性加厚家用学生防水鞋套",
            "item_id": 546938092007,
            "raw_price": 8.9,
            "zk_price": 5.9,
            "description": "",
            "pic": "https://file.17gwx.com/sqkb/coupon/2019/8/2/_1564713001519030324",
            "post_free": 1,
            "month_sales": 34868,
            "comm_count": 190414,
            "order_count": 812,
            "platform_id": 2,
            "source_id": 26,
            "cate_id": 26,
            "subcate_id": 20073,
            "product_type": 1,
            "cate_id3": 20110,
            "cate_id4": 20116,
            "op_tag": "1",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 87.5,
            "commission": 2.03,
            "commission_rate": 70,
            "is_del": 0,
            "verify_time": 1564713007,
            "price_change_time": 1565815586,
            "white_image": "https://img.alicdn.com/bao/uploaded/TB1.QTMVYrpK1RjSZTEXXcWAVXa.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i4/2234110902/O1CN01ZyfYsk1IX9nqIoBlL_!!2234110902.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/2234110902/p/1/e/6/t/1/50288810874.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108451497,
              "activity_id": "d593800e59894f3ca39b015560efafdb",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=d593800e59894f3ca39b015560efafdb&itemId=546938092007",
              "coupon_price": 3,
              "start_fee": 8,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565798400,
              "coupon_end_time": 1566057599,
              "remain_num": 49500,
              "total_num": 50000,
              "ticket_source_id": 48,
              "ticket_status": 1
            },
            "brand": {"brand_id": 2171432, "brand_name": "百佳爱", "brand_alias": ""},
            "shop": {
              "shop_id": 2356802,
              "shop_name": "百佳爱旗舰店",
              "shop_url": "http://shop113796898.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.9#1|4.8#1|4.8#1",
              "shop_score_avg": 4.83,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://file.17gwx.com/sqkb/coupon/2019/8/2/_1564713001519030324_400x400",
            "origin_price": "8.9",
            "final_price": "5.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "988dPClwjvA1YGxljFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 31431314,
            "title": "vc女补水收缩毛孔定妆喷雾爽肤水",
            "subtitle": "vc女补水收缩毛孔定妆喷雾爽肤水",
            "item_id": 580095823518,
            "raw_price": 7.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://img.alicdn.com/i3/1662240508/O1CN01uopFgV1FchhgzGNLC_!!1662240508.jpg",
            "post_free": 1,
            "month_sales": 8792,
            "comm_count": 25157,
            "order_count": 129,
            "platform_id": 2,
            "source_id": 26,
            "cate_id": 6,
            "subcate_id": 21381,
            "product_type": 1,
            "cate_id3": 21402,
            "cate_id4": 21404,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 83.33,
            "commission": 30,
            "commission_rate": 20,
            "is_del": 0,
            "verify_time": 1560908731,
            "price_change_time": 1565663069,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN011FchfVWmawWgr4U_!!1662240508.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i3/1662240508/O1CN010J1obY1Fchj0HqsxS_!!1662240508.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/1662240508/p/1/e/6/t/1/214405420203.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108173776,
              "activity_id": "fc2f151639ca477d89a35b9ead8b89f6",
              "coupon_price": 1,
              "start_fee": 7,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1566230399,
              "remain_num": 98924,
              "total_num": 100000,
              "ticket_source_id": 77,
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=fc2f151639ca477d89a35b9ead8b89f6&itemId=580095823518",
              "ticket_status": 1
            },
            "brand": {"brand_id": 2656654, "brand_name": "Senana Marina", "brand_alias": "色娜娜"},
            "shop": {
              "shop_id": 2838112,
              "shop_name": "色娜娜旗舰店",
              "shop_url": "http://shop103439631.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#2|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i3/1662240508/O1CN01uopFgV1FchhgzGNLC_!!1662240508.jpg_400x400",
            "origin_price": "7.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "f53etPasOjbQhzIaUjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 59611746,
            "title": "男士祛痘洗面奶男生补水深层清洁",
            "subtitle": "男士祛痘洗面奶男生补水深层清洁",
            "item_id": 583662169827,
            "raw_price": 9.9,
            "zk_price": 6.9,
            "description": "",
            "pic": "https://img.alicdn.com/i3/3367975419/O1CN01GMdzzZ1ptwoAHxSip_!!3367975419.png",
            "post_free": 1,
            "month_sales": 38793,
            "comm_count": 107161,
            "order_count": 3207,
            "platform_id": 2,
            "source_id": 70,
            "cate_id": 6,
            "subcate_id": 21417,
            "product_type": 1,
            "cate_id3": 21418,
            "cate_id4": 21419,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 0,
            "commission": 0,
            "commission_rate": 29.9,
            "is_del": 0,
            "verify_time": 1554104808,
            "price_change_time": 1565645503,
            "white_image": "https://img.alicdn.com/bao/uploaded/O1CN01LJyrIo1ptwlQW4HlA_!!0-item_pic.jpg",
            "video_pic_url": "https://img.alicdn.com/imgextra/i1/3367975419/O1CN01P4FRjE1ptwpZURS8H_!!3367975419.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/3367975419/p/1/e/6/t/1/216820832450.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 108151881,
              "activity_id": "c3e10136fe7849098ac483d353666ab1",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?activityId=c3e10136fe7849098ac483d353666ab1&itemId=583662169827",
              "coupon_price": 3,
              "start_fee": 9,
              "coupon_type": 0,
              "url_type": 1,
              "coupon_start_time": 1565625600,
              "coupon_end_time": 1565884799,
              "remain_num": 18000,
              "total_num": 20000,
              "ticket_source_id": 73,
              "ticket_status": 1
            },
            "brand": {"brand_id": 2496943, "brand_name": "玉致", "brand_alias": ""},
            "shop": {
              "shop_id": 2789588,
              "shop_name": "玉致化妆品旗舰店",
              "shop_url": "http://shop563403079.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#1|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": null,
            "thumbnail_pic": "https://img.alicdn.com/i3/3367975419/O1CN01GMdzzZ1ptwoAHxSip_!!3367975419.png_400x400",
            "origin_price": "9.9",
            "final_price": "6.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "4770JoluDjbRiRxqQjFjjjjjj",
            "activity_type": 1
          }, {
            "coupon_id": 6009063,
            "title": "去黑头收缩毛孔套装导出液神器螨虫",
            "subtitle": "去黑头收缩毛孔套装导出液神器螨虫",
            "item_id": 537445175429,
            "raw_price": 37.9,
            "zk_price": 7.9,
            "description": "",
            "pic": "https://img.alicdn.com/tfscom/i4/816199511/TB2xkbOy3mTBuNjy1XbXXaMrVXa_!!816199511-0-item_pic.jpg",
            "post_free": 1,
            "month_sales": 62686,
            "comm_count": 840222,
            "order_count": 3544,
            "platform_id": 2,
            "source_id": 6,
            "cate_id": 6,
            "subcate_id": 21381,
            "product_type": 1,
            "cate_id3": 21411,
            "cate_id4": 21415,
            "op_tag": "1,2",
            "stage": 15,
            "valid": true,
            "avg_commission_rate": 98.1,
            "commission": 30,
            "commission_rate": 30,
            "is_del": 0,
            "verify_time": 1546511960,
            "price_change_time": 1565830637,
            "white_image": "https://img.alicdn.com/bao/uploaded/TB1WoqwaBKw3KVjSZFOXXarDVXa.png",
            "video_pic_url": "https://img.alicdn.com/imgextra/i3/816199511/O1CN01e1zXoD2K85Ww9yofc_!!816199511.jpg",
            "video_url": "http://cloud.video.taobao.com/play/u/816199511/p/1/e/6/t/1/229313823292.mp4",
            "short_title": "",
            "prop_value_ids": "848",
            "ticket": {
              "ticket_id": 36459541,
              "activity_id": "etk537445175429",
              "coupon_url": "https://uland.taobao.com/coupon/edetail?e=8PJ49Cy63LcGQASttHIRqcaxMFLgB7ltXBYASy1E8ADGVWvbOqykrhDxkpeMagMhTrJ%2FYcU65L1bOehBNDlVoR%2Faf8d12JfiDfqEFBOhTcyweFpS9Hen4quqPMwzdNc%2BHBx5mTviSfEHYc6CgDDwcAovj958N7NqMXAFUAh2ZtX7J8FmRkgg%2BNboO99VQREJtJtwpJuhjdgN9wvJnBL3pOA6YMTBtIK9Qy7GhFDcL4d2b4yhPMXefKJ7%2BkHL3AEW&traceId=0b14e2d315658510819093250e",
              "coupon_price": 30,
              "start_fee": 35,
              "coupon_type": 0,
              "url_type": 2,
              "coupon_start_time": 1565798400,
              "coupon_end_time": 1566403199,
              "remain_num": 78400,
              "total_num": 80000,
              "ticket_source_id": 26,
              "ticket_status": 1
            },
            "brand": {"brand_id": 47779, "brand_name": "好肌汇", "brand_alias": ""},
            "shop": {
              "shop_id": 50832,
              "shop_name": "好肌汇旗舰店",
              "shop_url": "http://shop70173169.taobao.com",
              "shop_rank": 0,
              "shop_score": "4.8#3|4.7#3|4.7#3",
              "shop_score_avg": 4.73,
              "is_del": 0,
              "is_golden": 0,
              "shop_type": 1
            },
            "activity": {
              "start_time": 1534032000,
              "end_time": 1534118399,
              "online_time": 1534032000,
              "activity_type": 0,
              "activity_price": 35.8
            },
            "thumbnail_pic": "https://img.alicdn.com/tfscom/i4/816199511/TB2xkbOy3mTBuNjy1XbXXaMrVXa_!!816199511-0-item_pic.jpg_400x400",
            "origin_price": "37.9",
            "final_price": "7.9",
            "material_type": 0,
            "stid": "28163613717075080",
            "mid": "03cer7CejvrRMJX4jFjjjjjj",
            "activity_type": 1
          }]
      }
    },
    components: {
      // #ifdef H5
      UniNavBar,
      // #endif
      LazyImg,
      GoodsListGrid
    },
    onLoad(data) {
      ({pic: this.pic, page: this.page} = data);
    },
    methods: {
      goto() {
        uni.redirectTo({url: `/pages/${this.page}/index`});
      }
    }
  }
</script>

<style lang="scss">
  .scroll-view{
    /* #ifdef MP-WEIXIN*/
    height: 100vh;
    /* #endif*/
    /* #ifndef MP-WEIXIN*/
    height: calc(100vh - 88rpx);
    /* #endif*/
    .detail-pic{
      width: 750rpx;
      height: 750rpx;
    }
    .price-wrap{
      height: 96rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10rpx;
      background-color: #fff;
      .price{
        color: #fd2e32;
        font-weight: bolder;
        display: flex;
        align-items: flex-end;
        height: 60rpx;
        .content{
          line-height: 50rpx;
          padding: 0 10rpx;
          background-color: #fd2e32;
          color: #fff;
          border-radius: 12rpx;
          border-bottom-left-radius: 0;
          margin-left: 10rpx;
          font-size: 28rpx;
          font-weight: normal;
          text-align: center;
          align-self: flex-start;
        }
      }
    }
    .title{
      font-size: 30rpx;
      padding: 0 10rpx;
      background-color: #fff;
    }
    .coupon{
      width: 690rpx;
      height: 190rpx;
      margin: 16rpx auto;
      background: url("http://ms1.sqkb.com/dist/image/before/coupon_quan_bg-023a252373.png") no-repeat;
      background-color: #fff;
      background-size: 100% 99%;
      color: #fff;
      font-size: 32rpx;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 64rpx 40rpx 0;
      text-align: center;
    }
    .detail-label{
      margin-top: 6rpx;
      text-align: center;
      font-size: 28rpx;
      line-height: 80rpx;
      background-color: #fff;
    }
    .detail-img{
      width: 750rpx;
      height: 100%;
    }
    .open-app{
      line-height: 80rpx;
      margin-top: -14rpx;
      text-align: center;
      background-color: #ff2c52;
      color: #fff;
    }
    .recommend-wrap{
      margin-top: 10rpx;
      background-color: #eb193f;
      padding-bottom: 50rpx;
      .recommend-title{
        color: #fee37b;
        font-size: 32rpx;
        line-height: 88rpx;
        font-weight: 700;
        text-align: center;
      }
      .recommend-content{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 7rpx;
        .item{
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 10rpx;
          background-color: #fff;
          .price{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30rpx;
            background-color: #fff;
            .through{
              font-size: 24rpx;
              color: #797979;
            }
            .final{
              color: #fd2e32;
              font-size: 40rpx;
              font-weight: 700;
            }
          }
          .btn{
            color: #fff;
            width: 244rpx;
            height: 60rpx;
            text-align: center;
            background-color: #eb193f;
            border-radius: 8rpx;
            margin: 16rpx auto;
            font-size: 28rpx;
            line-height: 60rpx;
          }
        }
      }
    }
  }
  .swiper{
    height: 180rpx;
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    z-index: 999;
    /* #ifdef MP-WEIXIN*/
    top: 0;
    /* #endif*/
    /* #ifndef MP-WEIXIN*/
    top: 88rpx;
    /* #endif*/
    position: absolute;
    left: 0;
    width: 750rpx;
    .swiper-item{
      padding: 16rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img{
        width: 124rpx;
        height: 124rpx;
      }
      .content{
        flex: 1 0;
        font-size: 30rpx;
        height: 124rpx;
        padding-left: 10rpx;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        .price{
          color: rgba(255,78,0,1);
          font-size: 32rpx;
          font-weight: bolder;
        }
      }
      .button{
        width: 190rpx;
        flex-shrink: 0;
        text-align: center;
        font-size: 32rpx;
        line-height: 48rpx;
        border-radius: 24rpx;
        background: linear-gradient(90deg, rgba(255,78,0,1) 0, rgba(255,169,0,1) 100%);
      }
    }
  }
</style>
