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
    src: url('//at.alicdn.com/t/font_1347499_uxtgyabngme.eot');
    src: url('//at.alicdn.com/t/font_1347499_uxtgyabngme.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1347499_uxtgyabngme.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1347499_uxtgyabngme.woff') format('woff'),
    url('//at.alicdn.com/t/font_1347499_uxtgyabngme.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1347499_uxtgyabngme.svg#iconfont') format('svg');
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
</style>
