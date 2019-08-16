<template>
  <view class="cate-container" :class="{shadow: shadow}">
    <template v-if="list.length > 6">
        <scroll-view
            @tap="fixToLeft"
            scroll-x="true"
            :scroll-left="scrollLeft"
            show-scrollbar="false"
            class="scroll-wrap"
            scroll-with-animation
        >
          <view class="hide-scrollbar">
            <view
                class="item"
                data-target="true"
                v-for="(item, index) in list"
                :key="item.id"
                :data-value="item.id"
                :class="{active: selectVal == item.id}"
                :style="selectVal == item.id? `color: ${color};border-color: ${color}; border-width: ${line}` : ''"
            >
              {{item.name}}
            </view>
          </view>
        </scroll-view>
        <view class="icon-more-cate iconfont" :style="{color: color}" @tap="popToggle">&#xe603;</view>
      </template>
    <template v-else>
        <view class="hide-scrollbar type2" @tap="fixToLeft">
          <view class="item"
                data-target="true"
                v-for="(item, index) in list"
                :key="item.id"
                :data-value="item.id"
                :class="{active: item.id == selectVal}"
                :style="selectVal == item.id? `color: ${color};border-color: ${color}; border: ${line}` : ''"
          >
            {{item.name}}
          </view>
        </view>
      </template>
    <view class="pop-wrap" :class="{'pop-show': pop}">
      <view class="pop-title">全部分类</view>
      <view class="iconfont close" @tap="popToggle" id="aa">&#xe601;</view>
      <view class="pop-content" @tap="fixToLeft" :class="{'slide-up': pop}">
        <view
            class="pop-item"
            v-for="item in list"
            :key="item.id"
            :data-value="item.id"
        >
          {{item.name}}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "CateList",
    props: {
      list: {
        type: Array,
        required: true,
      },
      shadow: {
        default: false
      },
      color: {
        type: String,
        default: '#ff4c2c'
      },
      line: {
        type: String,
        default: '4rpx'
      }
    },
    data(){
      return {
        selectVal: this.list[0].id,
        scrollLeft: 0,
        lastVal: this.list[0].id,
        pop: false,
        aniPop: ''
      }
    },
    mounted() {

    },
    methods: {
      fixToLeft(e) {
        if(e.target.dataset.value) {
          this.popToggle(false);
          this.selectVal = e.target.dataset.value;
          this.change(e.target.dataset.value);
        }
      },
      change(val) {
        if(this.lastVal === val) return;
        this.lastVal = val;
        this.$emit('change', val);
        let query = uni.createSelectorQuery().in(this);
        this.$nextTick(() => {
          let scrollLeft;
          query.select('.scroll-wrap').fields({scrollOffset: true}, res => {
            scrollLeft = res.scrollLeft;
          });
          query.select('.active').fields({rect:true}, res => {
            this.scrollLeft = res.left + scrollLeft - uni.upx2px(268);
          }).exec();
        })
      },
      popToggle(flag) {
        if(this.pop || !flag) {
          this.pop = false;
        }
        else{
          this.pop = true;
        }
      }
    }
  }
</script>

<style lang="scss">
  .cate-container{
    position: relative;
    width: 750rpx;
    height: 80rpx;
    font-size: 28rpx;
    display: flex;
    align-items: center;
    padding: 0 10rpx;
    box-sizing: border-box;
    background-color: #fff;
    .icon-more-cate{
    text-align: center;
    flex: 1;
    color: #ff4c2c;
    font-size: 36rpx;
  }
    .scroll-wrap{
    width: 680rpx;
    box-sizing: border-box;
    padding: 0 10rpx 0 0;
  }
    .hide-scrollbar{
    height: 80rpx;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    .item{
      flex: 1 0;
      white-space: nowrap;
      margin: 0 30rpx;
    }
    .active{
      color: #ff4c2c;
      line-height: 76rpx;
      border-bottom: 4rpx solid #ff4c2c
    }
  }
    .type2{
    width: 750rpx;
    justify-content: space-around;
  }
    .pop-wrap{
      position: absolute;
      top: 0;
      background-color: #fff;
      z-index: 99;
      line-height: 80rpx;
      left: 0;
      opacity: 0;
      transition: all .2s ease-in-out;
      visibility: hidden;
    }
    .pop-show{
      visibility: visible;
      opacity: 1;
    }
    .pop-title{
      width: 750rpx;
      text-align: center;
    }
    .close{
      position: absolute;
      right: 20rpx;
      top: 0;
    }
    .pop-content{
      width: 750rpx;
      position: absolute;
      top: 80rpx;
      left: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: space-around;
      visibility: hidden;
      transform: translate3d(0, 10%, 0);
      transition: all .3s ease-in-out;
      background-color: rgba(0, 0, 0, 0.74);
      color: #fff;
      .pop-item{
        width: 187.5rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
      }
    }
    .slide-up{
      visibility: visible;
      transform: translate3d(0, 0, 0);
    };
  }
  .shadow{
    box-shadow: 0 6rpx 6rpx rgba(0, 0, 0, 0.12);
  }
</style>
