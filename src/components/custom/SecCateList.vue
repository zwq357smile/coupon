<template>
  <view class="sec-cate-list">
    <view class="list-item" v-for="item in list">
      <view class="cover" :style="{backgroundImage: `url(${item.pic})`}"></view>
      <view class="name">{{item.title}}</view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "SecCateList",
    data() {
      return {
        list: [
          {
            pic: 'http://file.17gwx.com/sqkb/element/2018/09/03/237585b8d1605db4df.jpg',
            title: '底妆'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/791595b8d12871ae37.jpg",
            title: '唇装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/185335b8d143118d32.jpg",
            title: '眼装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/873875b8d1440bd562.jpg",
            title: '眉装'
          },{
            pic: 'http://file.17gwx.com/sqkb/element/2018/09/03/237585b8d1605db4df.jpg',
            title: '底妆'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/791595b8d12871ae37.jpg",
            title: '唇装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/185335b8d143118d32.jpg",
            title: '眼装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/873875b8d1440bd562.jpg",
            title: '眉装'
          },{
            pic: 'http://file.17gwx.com/sqkb/element/2018/09/03/237585b8d1605db4df.jpg',
            title: '底妆'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/791595b8d12871ae37.jpg",
            title: '唇装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/185335b8d143118d32.jpg",
            title: '眼装'
          }, {
            pic: "http://file.17gwx.com/sqkb/element/2018/09/03/873875b8d1440bd562.jpg",
            title: '眉装'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .sec-cate-list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20rpx;
    background-color: #fff;
    .list-item{
      width: 187.5rpx;
    }
    .cover{
      height: 130rpx;
      opacity: 1;
      background: #fff bottom no-repeat;
      background-size: 100rpx 100rpx;
    }
    .name{
      text-align: center;
      line-height: 40rpx;
      font-size: 24rpx;
    }
  }
</style>
