<template>
	<view class="content">
    <view class="fix-area">
      <IndexSearch></IndexSearch>
      <CateList></CateList>
    </view>
	</view>
</template>

<script>
  import IndexSearch from '@/components/search'
  import CateList from '@/components/CateList'
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		},
    components: {
      IndexSearch,
      CateList
    }
  }
</script>

<style>
  .fix-area{
    position: fixed;
    top: 0;
    left: 0;
    width: 750upx;
    height: 168upx;
    z-index: 55555;

  }
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
