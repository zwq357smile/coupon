<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 1347499 */
    src: url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.eot');
    src: url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.woff') format('woff'),
    url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1347499_mt9sxjnmbsq.svg#iconfont') format('svg');
  }
  /*@font-face {
    font-family: 'iconfont';  !* project id 1347499 *!
    src: url('./static/font/iconfont.eot');
    src: url('./static/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./static/font/iconfont.woff2') format('woff2'),
    url('./static/font/iconfont.woff') format('woff'),
    url('./static/font/iconfont.ttf') format('truetype'),
    url('./static/font/iconfont.svg#iconfont') format('svg');
  }*/
  .iconfont {
    font-family: iconfont;
  }
 .uni-scroll-view::-webkit-scrollbar{
   height: 0;
 }
 body{
   background-color: #f8f8f8;
 }
 ::-webkit-scrollbar{
   width: 0;
   height: 0;
   color: transparent;
 }
  .price-explane{
    font-size: 24rpx;
    color: #999;
    padding: 0 6px;
  }
  .through{
    text-decoration: line-through;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translate3d(0, -15%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  } @keyframes slideUp {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -15%, 0);
    }
  }
</style>
