<template>
  <view class="detail-pop">
    <scroll-view
        scroll-y="true"
        class="scroll-view"
        v-if="type === '1'">
      <view class="stage">好货优惠券介绍</view>
      <view class="stage content">好货优惠券介绍好货优惠券介绍</view>
      <view class="stage content">好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍好货优惠券介绍!</view>
    </scroll-view>
    <scroll-view
        scroll-y="true"
        class="scroll-view"
        v-if="type === '2'">
      <view class="stage">优惠券介绍</view>
      <view class="stage content">优惠券是指淘宝／天猫商家为了提高销量，获得更多平台流量，从而委托呆萌价平台面向萌友们发放的内部优惠券，优惠券信息在店铺是隐藏的，只有通过呆萌价平台领取并使用才能获得相应的优惠。</view>
      <view class="stage content">举个例子：萌萌在淘宝看中了一件售价199元的连衣裙，在淘宝购买的话就是原价199元，而在呆萌价可以先领取60元优惠券，在去淘宝下单抵扣，最终成交只要139元，足足省下60元。</view>
    </scroll-view>
    <scroll-view
        scroll-y="true"
        class="scroll-view"
        v-if="type === '3'">
      <view class="stage">代理模式介绍</view>
      <view class="stage">
        <lazy-img class="content-image" src="http://n.sinaimg.cn/photo/transform/601/w550h851/20190828/1ef0-icuacsa4858838.jpg"></lazy-img>
      </view>
      <view class="stage">
        <text class="title">普通用户：</text>
        <text>消费者可以通过平台升级为会员</text>
      </view>
      <view class="stage title">会员分润模式：</view>
      <view class="stage">1、自身/粉丝购买或推广都可以获得会员基础提成100%的佣金</view>
      <view class="stage">2、享有会员销售提成20%的团队奖励</view>
      <view class="stage title">店主：</view>
      <view class="stage">1、一级会员≥30人；</view>
      <view class="stage">2、二级会员≥60人；</view>
      <view class="stage">3、累计收益≥300元；</view>
    </scroll-view>
    <scroll-view
        scroll-y="true"
        class="scroll-view"
        v-if="type === '4'">
      <view class="stage">名词解释</view>
      <view class="stage">
        <text class="title">提现金额：</text>
        <text>已结算的推广订单会自动计算到提现金额；</text>
      </view>
      <view class="stage">
        <text class="title">累计收益：</text>
        <text>到目前为止所有已结算金额的总和；</text>
      </view>
      <view class="stage">
        <text class="title">今日预估：</text>
        <text>今日推广的所有订单产生的佣金总和；</text>
      </view>
      <view class="stage">
        <text class="title">本月预估：</text>
        <text>本月推广的所有订单产生的佣金总和；</text>
      </view>
      <view class="stage">
        <text class="title">本月结算：</text>
        <text>本月已结算的所有订单产生的佣金总和；</text>
      </view>
      <view class="stage">
        <text class="title">我的推广：</text>
        <text>自身购买以及自身推广的订单；</text>
      </view>
      <view class="stage">
        <text class="title">团队推广：</text>
        <text>下级代理以及下级代理团队推广的订单；</text>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import lazyImg from '@/components/custom/LazyImg'
  export default {
    name: "detail",
    data(){
      return {
        type: '1'
      }
    },
    onLoad: function (option) {
      this.type = option.type;
    },
    components: {
      lazyImg
    }
  }
</script>

<style lang="scss">
  .detail-pop{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
    font-size: 32rpx;
    color: #525252;
    .stage{
      margin-bottom: 30rpx;
      .content-image{
        width: 100%;
        height: auto;
      }
    }
    .title{
      font-weight: bold;
    }
    .content{
      text-indent: 2em;
    }
    .scroll-view{
      height: 100vh;
      padding: 30rpx 20rpx;
      box-sizing: border-box;
    }
  }
</style>
