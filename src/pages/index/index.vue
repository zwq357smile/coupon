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
